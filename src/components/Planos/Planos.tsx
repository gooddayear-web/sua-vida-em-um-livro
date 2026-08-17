// src/components/Planos/Planos.tsx
'use client';

import React from 'react';
import { planosContent } from '@/content/src/content/planos';

interface PlanosProps {
  onSelectPlan: (planName: string) => void;
}

export default function Planos({ onSelectPlan }: PlanosProps) {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">
          {planosContent.badge}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-[#FDFBF7]">
          {planosContent.title}
        </h2>
        <p className="font-light text-[#FDFBF7]/70 text-lg leading-relaxed">
          {planosContent.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {planosContent.cards.map((plano, index) => (
          <div
            key={index}
            className={`p-8 flex flex-col justify-between transition-all relative ${
              plano.highlight
                ? 'border border-[#B87333] bg-neutral-900/80 shadow-2xl'
                : 'border border-[#B87333]/30 bg-neutral-950 hover:border-[#B87333]'
            }`}
          >
            {plano.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B87333] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
                {plano.badge}
              </div>
            )}

            <div>
              {!plano.highlight && (
                <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">
                  {plano.badge}
                </span>
              )}
              <h3 className="font-serif text-2xl font-light mb-1 text-white">
                {plano.title}
              </h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">
                {plano.price}
              </p>
              <p className="font-light text-[#FDFBF7]/70 text-sm leading-relaxed mb-6 h-12">
                {plano.description}
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80 mb-8 border-t border-white/10 pt-4">
                {plano.features.map((feature, fIndex) => (
                  <li key={fIndex}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan(plano.title)}
              className={`w-full py-3 text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                plano.highlight
                  ? 'bg-[#B87333] text-white hover:bg-[#B87333]/90 font-medium'
                  : 'border border-[#B87333] text-white hover:bg-[#B87333]'
              }`}
            >
              Quero este projeto
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}