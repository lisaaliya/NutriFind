import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface EmptyStateProps {
  onAskAI: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onAskAI }) => {
  return (
    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-stone-200 hover:border-sage-200 transition-colors group">
        <div className="bg-stone-50 p-6 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
            <Search size={48} className="text-stone-300 group-hover:text-sage-400 transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">Belum ada resep yang pas</h3>
        <p className="text-stone-500 max-w-md mx-auto mb-8 leading-relaxed">
            Database resep manual kami belum memiliki kombinasi persis ini. Tapi jangan khawatir, Chef AI Lisa siap membantu!
        </p>
        <button 
            onClick={onAskAI}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-purple-200 text-purple-700 font-bold rounded-xl hover:bg-purple-50 hover:border-purple-300 hover:shadow-lg transition-all shadow-sm"
        >
            <Sparkles size={18} /> Minta Buatkan Resep Baru (AI)
        </button>
    </div>
  );
};
