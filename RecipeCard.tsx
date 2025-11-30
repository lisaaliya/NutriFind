import React from 'react';
import { Recipe } from '../types';
import { Flame, Activity, Wheat, Sparkles } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      onClick={() => onClick(recipe)}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sage-200/50 border border-stone-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden bg-stone-200">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap max-w-[80%]">
          {recipe.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="bg-white/95 backdrop-blur-md text-sage-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wide">
              {tag}
            </span>
          ))}
          {recipe.isAiGenerated && (
             <span className="bg-purple-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-wide">
                <Sparkles size={10} /> AI Chef
             </span>
          )}
        </div>
        
        <div className="absolute bottom-3 right-3">
             <span className="bg-orange-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-white/20">
              {recipe.price}
            </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-stone-800 mb-2 leading-tight group-hover:text-sage-700 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-stone-500 text-sm mb-5 line-clamp-2 flex-1">
          {recipe.desc}
        </p>

        <div className="bg-stone-50/80 rounded-xl p-3 flex justify-between items-center text-xs font-semibold text-stone-600 mt-auto border border-stone-100">
          <div className="flex flex-col items-center gap-1">
            <Flame size={16} className="text-orange-accent" />
            <span>{recipe.calories} kkal</span>
          </div>
          <div className="w-px h-8 bg-stone-200/80"></div>
          <div className="flex flex-col items-center gap-1">
            <Activity size={16} className="text-blue-500" />
            <span>{recipe.protein_val}g Prot</span>
          </div>
          <div className="w-px h-8 bg-stone-200/80"></div>
          <div className="flex flex-col items-center gap-1">
            <Wheat size={16} className="text-amber-500" />
            <span>{recipe.carbs_val}g Karb</span>
          </div>
        </div>
      </div>
    </div>
  );
};
