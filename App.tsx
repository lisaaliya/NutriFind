
import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { FilterBar } from './components/FilterBar';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { INITIAL_RECIPES, INGREDIENT_OPTIONS } from './constants';
import { Recipe, FilterState } from './types';
import { Sparkles, ChefHat, ArrowDownCircle } from 'lucide-react';
import { generateRecipeWithAI } from './services/geminiService';

const ITEMS_PER_PAGE = 9;

// Helper interface for scoring
interface ScoredRecipe extends Recipe {
    matchScore: number;
    matchReasons: string[];
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    hewan: '',
    nabati: '',
    sayur: '',
    karbo: ''
  });

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showAiError, setShowAiError] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setVisibleCount(ITEMS_PER_PAGE); // Reset pagination on filter change
  };

  const resetFilters = () => {
    setFilters({hewan: '', nabati: '', sayur: '', karbo: ''});
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // Fungsi khusus untuk tombol Beranda di Navbar
  const handleHomeClick = () => {
    resetFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Improved Logic: Scoring & Sorting System
  const filteredRecipes = useMemo(() => {
    const { hewan, nabati, sayur, karbo } = filters;
    const hasSelection = hewan || nabati || sayur || karbo;

    if (!hasSelection) return recipes;

    // Calculate score for each recipe
    const scoredRecipes: ScoredRecipe[] = recipes.map(recipe => {
        let score = 0;
        let reasons: string[] = [];

        // Check each category. 
        // Logic: If filter is selected AND matches recipe category, +10 points.
        // We use strict category matching from the database fields for precision.
        
        if (hewan && recipe.hewan === hewan) {
            score += 10;
            reasons.push('Protein Hewani Cocok');
        }
        if (nabati && recipe.nabati === nabati) {
            score += 10;
            reasons.push('Protein Nabati Cocok');
        }
        if (sayur && recipe.sayur === sayur) {
            score += 10;
            reasons.push('Sayur Cocok');
        }
        if (karbo && recipe.karbo === karbo) {
            score += 10;
            reasons.push('Karbo Cocok');
        }

        // Optional: Partial matching (if implemented in future) could give smaller points
        
        return { ...recipe, matchScore: score, matchReasons: reasons };
    });

    // Filter out recipes with 0 score (no match at all)
    // Then sort by highest score first
    return scoredRecipes
        .filter(r => r.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore);

  }, [filters, recipes]);

  const displayedRecipes = filteredRecipes.slice(0, visibleCount);
  const hasMore = visibleCount < filteredRecipes.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleAskAI = async () => {
    setIsAiLoading(true);
    setShowAiError(false);
    
    const ingredients = [
        filters.hewan ? INGREDIENT_OPTIONS.hewan.find(i => i.value === filters.hewan)?.label : '',
        filters.nabati ? INGREDIENT_OPTIONS.nabati.find(i => i.value === filters.nabati)?.label : '',
        filters.sayur ? INGREDIENT_OPTIONS.sayur.find(i => i.value === filters.sayur)?.label : '',
        filters.karbo ? INGREDIENT_OPTIONS.karbo.find(i => i.value === filters.karbo)?.label : '',
    ].filter(Boolean) as string[];

    if (ingredients.length === 0) {
        alert("Pilih minimal satu bahan untuk bertanya pada Chef Lisa.");
        setIsAiLoading(false);
        return;
    }

    const newRecipe = await generateRecipeWithAI(ingredients);

    if (newRecipe) {
        setRecipes(prev => [newRecipe, ...prev]);
        setSelectedRecipe(newRecipe);
    } else {
        setShowAiError(true);
    }
    setIsAiLoading(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-sage-200 selection:text-sage-900">
      <Navbar onHomeClick={handleHomeClick} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-20 relative z-10">
        
        <FilterBar 
            filters={filters} 
            onFilterChange={handleFilterChange} 
            onReset={resetFilters}
            resultCount={filteredRecipes.length}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-sage-100 rounded-lg text-sage-600">
                    <ChefHat size={24} />
                </div>
                <h2 className="text-2xl font-bold text-stone-800 tracking-tight">
                    {Object.values(filters).some(Boolean) ? 'Hasil Pencarian' : 'Rekomendasi Menu'}
                </h2>
            </div>
            
            <button 
                onClick={handleAskAI}
                disabled={isAiLoading}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-0.5 active:scale-95 text-sm ${
                    isAiLoading 
                    ? 'bg-purple-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                }`}
            >
                {isAiLoading ? (
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Meracik Resep...
                    </>
                ) : (
                    <>
                        <Sparkles size={16} />
                        Tanya Chef Lisa (AI)
                    </>
                )}
            </button>
        </div>

        {showAiError && (
            <div className="mb-8 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 text-center font-medium animate-in fade-in slide-in-from-top-2">
                Gagal terhubung dengan Chef AI. Mohon cek koneksi atau coba lagi nanti.
            </div>
        )}

        {displayedRecipes.length > 0 ? (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedRecipes.map(recipe => (
                        <RecipeCard 
                            key={recipe.id} 
                            recipe={recipe} 
                            onClick={setSelectedRecipe} 
                        />
                    ))}
                </div>
                
                {hasMore && (
                    <div className="text-center">
                        <button 
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-600 font-bold rounded-full border border-stone-200 hover:border-sage-400 hover:text-sage-600 hover:shadow-md transition-all group"
                        >
                            Tampilkan Lebih Banyak
                            <ArrowDownCircle size={18} className="group-hover:translate-y-0.5 transition-transform"/>
                        </button>
                    </div>
                )}
            </>
        ) : (
            <EmptyState onAskAI={handleAskAI} />
        )}

      </main>

      <Footer />

      <RecipeModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />

    </div>
  );
};

export default App;
