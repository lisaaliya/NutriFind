import React from 'react';
import { Recipe } from '../types';
import { X, ChefHat, Heart, Flame, Info, CheckCircle2 } from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl animate-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* Header Image */}
          <div className="h-72 w-full relative group">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
               <div className="flex items-center gap-2 mb-3">
                 {recipe.tags.map(tag => (
                   <span key={tag} className="text-xs font-bold bg-sage-500/90 backdrop-blur-md text-white px-2.5 py-1 rounded shadow-lg">
                     {tag}
                   </span>
                 ))}
               </div>
               <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight shadow-sm">{recipe.title}</h2>
               <p className="text-stone-300 text-sm sm:text-base line-clamp-2 max-w-2xl">{recipe.desc}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white">
            {/* Nutritional Label Style */}
            <div className="mb-8 border-2 border-stone-800 rounded-lg p-4">
                <div className="flex justify-between items-end border-b-4 border-stone-800 pb-2 mb-2">
                    <h3 className="font-black text-2xl text-stone-800">Informasi Nilai Gizi</h3>
                    <span className="text-sm font-bold text-stone-600">Per Porsi</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-b border-stone-300 py-1">
                    <span>Kalori</span>
                    <span className="text-xl">{recipe.calories} kkal</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
                    <div className="flex flex-col">
                        <span className="font-bold text-stone-800">Protein</span>
                        <span className="text-stone-600">{recipe.protein_val}g</span>
                    </div>
                    <div className="flex flex-col border-l border-stone-300 pl-4">
                        <span className="font-bold text-stone-800">Lemak</span>
                        <span className="text-stone-600">{recipe.fat_val}g</span>
                    </div>
                    <div className="flex flex-col border-l border-stone-300 pl-4">
                        <span className="font-bold text-stone-800">Karbohidrat</span>
                        <span className="text-stone-600">{recipe.carbs_val}g</span>
                    </div>
                </div>
            </div>

            {/* Content Split */}
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                     {/* Benefits */}
                    <div className="bg-sage-50 rounded-xl p-5 border border-sage-100">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-sage-800 mb-3">
                            <Info size={20} className="text-sage-600"/> Manfaat Sehat
                        </h3>
                        <p className="text-sage-700 text-sm leading-relaxed">
                            {recipe.benefit}
                        </p>
                    </div>

                    {/* Ingredients List */}
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-stone-800 mb-4 pb-2 border-b border-stone-100">
                            <ChefHat size={20} className="text-orange-accent"/> Bahan-bahan
                        </h3>
                        <ul className="space-y-3">
                           {recipe.ingredients.map((item, idx) => (
                             <li key={idx} className="flex items-start gap-3 group">
                                <div className="mt-1 min-w-[1.25rem]">
                                  <CheckCircle2 size={16} className="text-sage-500 group-hover:text-sage-700" />
                                </div>
                                <span className="text-stone-700 text-sm font-medium group-hover:text-stone-900 transition-colors">{item}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                </div>

                {/* Instructions */}
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-stone-800 mb-4 pb-2 border-b border-stone-100">
                        <Flame size={20} className="text-orange-accent"/> Cara Membuat
                    </h3>
                    <div className="space-y-6">
                        {recipe.cara.map((step, idx) => (
                            <div key={idx} className="relative pl-8 group">
                                <span className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-600 font-bold text-xs border border-stone-200 group-hover:bg-sage-500 group-hover:text-white group-hover:border-sage-500 transition-colors">
                                    {idx + 1}
                                </span>
                                <p className="text-stone-700 text-sm leading-relaxed group-hover:text-stone-900 transition-colors">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 pt-6 border-t border-stone-100 flex justify-between items-center bg-stone-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-2xl">
                 <div className="flex flex-col">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Estimasi Harga</span>
                    <span className="text-orange-accent font-bold text-2xl">{recipe.price}</span>
                 </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-xl hover:bg-sage-700 transition-all shadow-lg shadow-sage-200 font-bold text-sm transform active:scale-95">
                    <Heart size={18} /> Simpan Resep
                 </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
