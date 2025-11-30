import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">NutriFind by Lisa Aliya</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Membantu anak kost dan pejuang dapur hemat menciptakan hidangan lezat dan bergizi dari apa saja yang tersisa di kulkas.
            </p>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4">Akses Cepat</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Cari Resep</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Langganan Premium</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tentang Lisa Aliya</a></li>
             </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
             </ul>
          </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs">
          <p>© 2024 NutriFind Inc. Dibuat dengan <Heart size={12} className="inline text-red-500 fill-current mx-1"/> oleh Lisa Aliya.</p>
      </div>
    </footer>
  );
};
