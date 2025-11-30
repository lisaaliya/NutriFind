export interface Recipe {
  id: number | string;
  title: string;
  hewan: string;
  nabati: string;
  sayur: string;
  karbo: string;
  image: string;
  tags: string[];
  calories: number;
  protein_val: number;
  fat_val: number;
  carbs_val: number;
  price: string;
  desc: string;
  benefit: string;
  ingredients: string[]; // Changed from 'bahan' string to string array for structured list
  cara: string[]; // Steps
  isAiGenerated?: boolean;
}

export interface FilterState {
  hewan: string;
  nabati: string;
  sayur: string;
  karbo: string;
}

export enum IngredientType {
  HEWANI = 'hewan',
  NABATI = 'nabati',
  SAYUR = 'sayur',
  KARBO = 'karbo'
}
