
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Healthy Food Flatlay" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sage-500/20 border border-sage-500/30 backdrop-blur-sm">
                <span className="text-sage-100 font-semibold text-xs sm:text-sm tracking-wide uppercase">Karya Lisa Aliya • Solusi Anak Kost</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Cook Smarter,<br />
            <span className="text-sage-500">Live Healthier.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-stone-300 max-w-lg leading-relaxed">
            Bingung mau masak apa dengan bahan sisa di kulkas? Masukkan bahan yang kamu punya, dan temukan inspirasi menu harian yang hemat, sehat, dan praktis.
            </p>
        </div>
      </div>
    </div>
  );
};
