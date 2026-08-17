// src/components/Esquecimento/Esquecimento.tsx
'use client';

import React from 'react';
import { esquecimentoContent } from '@/content/esquecimento';

export default function Esquecimento() {
  return (
    <section className="w-full py-24 px-4 bg-[#0a0a0a] border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#111] border border-[#333] text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            {esquecimentoContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FDFBF7] mb-6">
            {esquecimentoContent.title}
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            {esquecimentoContent.subtitle}
          </p>
        </div>

        {/* Cards de Dores e Conscientização */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {esquecimentoContent.cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#050505] border border-zinc-800/80 p-8 rounded-2xl hover:border-[#B87333]/50 transition-all duration-300 group"
            >
              <span className="text-3xl font-black text-[#B87333] block mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}