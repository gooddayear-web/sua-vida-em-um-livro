// src/components/Metodo/Metodo.tsx
'use client';

import React from 'react';
import { metodoContent } from '@/content/metodo';

export default function Metodo() {
  return (
    <section className="w-full py-24 px-4 bg-[#050505] border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#111] border border-[#333] text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            {metodoContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FDFBF7] mb-6">
            {metodoContent.title}
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            {metodoContent.subtitle}
          </p>
        </div>

        {/* Linha do Tempo / Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metodoContent.etapas.map((etapa, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-2xl relative flex flex-col justify-between hover:border-[#B87333]/40 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold text-[#B87333] uppercase tracking-widest block mb-2">
                  Passo {etapa.passo}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {etapa.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {etapa.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}