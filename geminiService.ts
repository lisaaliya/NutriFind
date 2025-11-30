import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from '../types';

// NOTE: Use a safe fallback if the API key is missing to prevent crashes during demo
const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateRecipeWithAI = async (
  ingredients: string[]
): Promise<Recipe | null> => {
  if (!API_KEY) {
    console.error("No API Key found");
    return null;
  }

  const ingredientList = ingredients.filter(i => i).join(", ");
  const prompt = `
    You are a professional chef specializing in cheap, healthy meals for college students (Anak Kost) in Indonesia.
    Create a single creative recipe using these ingredients: ${ingredientList}.
    You can assume they have basic seasonings (salt, sugar, oil, garlic, soy sauce).
    Return the response in Indonesian (Bahasa Indonesia).
    IMPORTANT: Provide the ingredients as a list of strings, not a single paragraph.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            desc: { type: Type.STRING, description: "Short appetizing description (max 150 chars)" },
            tags: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
            },
            calories: { type: Type.NUMBER },
            protein_val: { type: Type.NUMBER },
            fat_val: { type: Type.NUMBER },
            carbs_val: { type: Type.NUMBER },
            price: { type: Type.STRING, description: "Estimated price in IDR format e.g. Rp 15.000" },
            benefit: { type: Type.STRING, description: "Health benefit explanation" },
            ingredients: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "List of ingredients with quantities e.g. '2 butir telur'"
            },
            cara: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Step by step cooking instructions"
            },
          },
          required: ["title", "desc", "calories", "protein_val", "fat_val", "carbs_val", "price", "ingredients", "cara"]
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      
      // Map to our Recipe interface
      return {
        id: `ai-${Date.now()}`,
        hewan: "", // AI general
        nabati: "", // AI general
        sayur: "", // AI general
        karbo: "", // AI general
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80", // AI Placeholder
        isAiGenerated: true,
        ...data
      } as Recipe;
    }
    return null;

  } catch (error) {
    console.error("Gemini AI Error:", error);
    return null;
  }
};
