import React from 'react';
import { SlidersHorizontal, RotateCcw, Search } from 'lucide-react';
import { FilterState } from '../types';
import { INGREDIENT_OPTIONS } from '../constants';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onReset: () => void;
  resultCount: number;
}

const FilterSelect: React.FC<{
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
}> = ({ label, value, options, onChange }) => (
  <div className="relative group">
    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1.5 ml-1">{label}</label>
    <div className="relative">
        <select 
            className="w-full appearance-none bg-stone-50 border border-stone-200 text-stone-700 py-3 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all hover:border-sage-300 cursor-pointer font-medium text-sm shadow-sm"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="">Pilih {label}...</option>
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-400 group-hover:text-sage-600 transition-colors">
            <SlidersHorizontal size={16} />
        </div>
    </div>
  </div>
);

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange, onReset, resultCount }) => {
  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 p-6 sm:p-8 mb-10 border border-stone-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 relative z-10">
            <div>
                <h2 className="text-2xl font-bold text-stone-800 tracking-tight">Isi Kulkas Kamu</h2>
                <p className="text-stone-500 mt-1 text-sm">Pilih bahan yang tersedia di dapurmu sekarang.</p>
            </div>
            {hasActiveFilters && (
                <button 
                    onClick={onReset}
                    className="flex items-center gap-1.5 text-xs font-bold text-orange-accent hover:text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg transition-colors mt-3 md:mt-0"
                >
                    <RotateCcw size={14} /> Reset Filter
                </button>
            )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            <FilterSelect 
                label="Protein Hewani" 
                value={filters.hewan} 
                options={INGREDIENT_OPTIONS.hewan} 
                onChange={(v) => onFilterChange('hewan', v)}
            />
            <FilterSelect 
                label="Protein Nabati" 
                value={filters.nabati} 
                options={INGREDIENT_OPTIONS.nabati} 
                onChange={(v) => onFilterChange('nabati', v)}
            />
            <FilterSelect 
                label="Sayuran" 
                value={filters.sayur} 
                options={INGREDIENT_OPTIONS.sayur} 
                onChange={(v) => onFilterChange('sayur', v)}
            />
            <FilterSelect 
                label="Karbohidrat" 
                value={filters.karbo} 
                options={INGREDIENT_OPTIONS.karbo} 
                onChange={(v) => onFilterChange('karbo', v)}
            />
        </div>
        
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-400">
             <div className="flex items-center gap-2">
                <div className="p-1 bg-sage-100 rounded-md">
                     <Search size={14} className="text-sage-600"/> 
                </div>
                <span>Ditemukan <strong className="text-stone-800 text-sm">{resultCount}</strong> resep cocok</span>
             </div>
             <span className="hidden sm:inline">Tips: Kombinasikan bahan untuk hasil lebih spesifik</span>
        </div>
    </div>
  );
};
