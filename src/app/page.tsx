'use client';'use client';

import React, { useState, useEffect } from 'react';
import Esquecimento from "@/components/esquecimento/Esquecimento";
import Metodo from "@/components/Metodo/Metodo";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrologueActive, setIsPrologueActive] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({ 
    name: '', 
    whatsapp: '', 
    email: '', 
    target: 'Para mim',
    origin: '',
    story: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (planName = 'Projeto Personalizado') => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const NUMERO_WHATSAPP = "5547991305597";
    
    // Nova formatação da mensagem conforme a exigência 15
    const textoMensagem = `Olá!\n\nMeu nome é *${formData.name}*.\n\nAcabei de conhecer a Sua Vida em um Livro™ e gostaria de iniciar meu projeto.\n\n📖 Projeto escolhido:\n${selectedPlan}\n\n🎯 Destinado para:\n${formData.target}\n\n📖 Resumo da história:\n${formData.story}\n\n📍 Conheci vocês através de:\n${formData.origin}\n\n📧 E-mail:\n${formData.email}\n\n📱 WhatsApp:\n${formData.whatsapp}\n\nGostaria de receber mais informações sobre como preservar minha história.`;
    
    const urlWhatsApp = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(textoMensagem);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      setIsPrologueActive(true);
      window.open(urlWhatsApp, '_blank');
    }, 1000);
  };

  if (isPrologueActive) {
    return (
      <main className="bg-[#050505] text-[#FDFBF7] min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src="/images/mockup-apresentacao.png" alt="Preservação de Histórias" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/80 z-10" />

        <div className="relative z-20 max-w-2xl mx-auto space-y-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto rounded-full border border-[#B87333] flex items-center justify-center shadow-2xl bg-neutral-950">
            <span className="font-serif text-[#B87333] text-3xl">Ω</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            Obrigado.<br />Sua história acaba de dar o primeiro passo para permanecer.
          </h1>
          <p className="font-light text-[#FDFBF7]/80 text-lg md:text-xl leading-relaxed">
            Em instantes nossa equipe continuará esse atendimento pelo WhatsApp.<br /><br />
            <strong className="text-white font-normal">Porque algumas histórias jamais deveriam desaparecer com o tempo.</strong>
          </p>
          <div className="pt-8">
            <button
              onClick={() => setIsPrologueActive(false)}
              className="text-xs uppercase tracking-[0.3em] text-[#B87333] border-b border-[#B87333]/40 pb-1 hover:text-white transition-colors cursor-pointer"
            >
              Voltar ao site
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#050505] text-[#FDFBF7] min-h-screen selection:bg-[#B87333] selection:text-white font-sans relative overflow-x-hidden">
      
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center transition-opacity duration-1000">
          <div className="text-center space-y-4">
            <span className="font-serif text-4xl text-[#B87333] block animate-pulse">Ω</span>
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">Sua Vida em um Livro™</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-background.png" alt="Hero Principal" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505]/80 to-[#050505] z-10" />
        
        <div className="relative z-20 max-w-5xl text-center flex flex-col items-center mt-12">
          <span className="text-[#B87333] uppercase tracking-[0.35em] text-xs md:text-sm mb-6 font-medium">
            Sua Vida em um Livro™
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#FDFBF7] leading-[1.12] mb-6">
            Toda vida merece permanecer.
          </h1>

          <div className="font-light text-[#FDFBF7]/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 space-y-5">
            <p className="font-serif italic text-white text-2xl">
              Preservamos histórias reais.<br />
              Transformamos memórias em legado eterno.
            </p>
            
            <div className="flex flex-col items-center justify-center text-sm md:text-base space-y-2 mt-4 text-[#FDFBF7]/90 bg-neutral-950/30 p-6 border border-white/5 rounded-sm">
              <span className="flex items-center gap-2">✔ Atendimento em todo o Brasil</span>
              <span className="flex items-center gap-2">✔ Projetos personalizados</span>
              <span className="flex items-center gap-2">✔ Atendimento presencial, online e híbrido</span>
            </div>
          </div>

          <button
            onClick={() => handleOpenModal('Contato pelo Hero')}
            className="hidden md:inline-block bg-[#B87333] text-white text-sm md:text-base tracking-[0.2em] uppercase px-12 py-5 transition-all duration-700 hover:bg-[#B87333]/90 shadow-2xl cursor-pointer font-light"
          >
            Quero Preservar Minha História
          </button>
        </div>
      </section>

      {/* Seção "O Esquecimento" */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">O Esquecimento</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight">
            Toda trajetória merece ser ouvida antes de ser esquecida.
          </h2>
          <div className="font-light text-[#FDFBF7]/80 text-lg leading-relaxed space-y-3 mb-8">
            <p>Existem histórias que transformaram uma família.</p>
            <p>Outras mudaram uma empresa.</p>
            <p>Algumas marcaram uma comunidade inteira.</p>
            <p>E existem aquelas que mudaram apenas uma única vida.</p>
            <p className="text-white font-normal pt-2">Todas possuem o mesmo valor para quem as viveu.</p>
          </div>
        </div>
        
        <div className="border border-[#B87333]/30 p-2 bg-neutral-950 aspect-[4/5] overflow-hidden shadow-2xl relative group">
          <img src="/images/epifania-foto.png" alt="Memórias e Legado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </section>

      {/* Seção "Muito além de um livro" */}
      <section className="bg-[#FDFBF7] text-[#1A1A1A] py-44 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/images/textura-papel.png" alt="Textura de papel de luxo" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-[#B87333] uppercase tracking-[0.35em] text-xs block font-medium">Muito além de um livro</span>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            O verdadeiro valor está em ser ouvido.
          </h2>
          <div className="font-light text-[#1A1A1A]/80 text-xl leading-relaxed max-w-2xl mx-auto space-y-2 pt-4">
            <p>Existem pessoas que passaram uma vida inteira sendo interrompidas.</p>
            <p>Aqui elas finalmente encontram alguém disposto apenas a ouvir.</p>
            <p className="pt-4">O resultado pode se tornar um livro.</p>
            <p>Pode permanecer em formato digital.</p>
            <p>Pode transformar-se em um presente.</p>
            <p>Pode preservar a história de uma pessoa.</p>
            <p>Pode registrar a trajetória de uma empresa.</p>
            <p>Pode eternizar uma instituição.</p>
            <p className="font-medium text-[#1A1A1A] pt-4">
              O formato muda.<br />
              O legado permanece.
            </p>
          </div>
        </div>
      </section>

      {/* Seção "Tudo começa com uma conversa" */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="border border-[#B87333]/30 p-2 bg-neutral-950 aspect-[3/4] overflow-hidden shadow-2xl relative group">
          <img src="/images/encontro-conversacao.png" alt="O Encontro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div>
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">O Encontro</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight">
            Tudo começa com uma conversa.
          </h2>
          <div className="font-light text-[#FDFBF7]/80 text-lg leading-relaxed space-y-4">
            <p>Sem pressa.</p>
            <p>Sem roteiros engessados.</p>
            <p>Sem julgamentos.</p>
            <p>Apenas alguém disposto a ouvir aquilo que talvez nunca tenha sido contado por completo.</p>
            <p>Nosso trabalho é transformar lembranças em uma narrativa que permanecerá para sempre.</p>
            <div className="pt-6 space-y-2 text-white font-medium border-l border-[#B87333] pl-6 ml-2">
              <p>Cada memória recebe contexto.</p>
              <p>Cada fotografia ganha significado.</p>
              <p>Cada silêncio também conta uma história.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Método Linha do Legado™ */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">Processo Exclusivo</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Como transformamos sua história em legado.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Passo 1 */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">01</span>
              <h3 className="font-serif text-2xl font-light mb-2">Escuta profunda</h3>
            </div>
          </div>
          {/* Passo 2 */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">02</span>
              <h3 className="font-serif text-2xl font-light mb-2">Organização cronológica</h3>
            </div>
          </div>
          {/* Passo 3 */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">03</span>
              <h3 className="font-serif text-2xl font-light mb-2">Construção da narrativa</h3>
            </div>
          </div>
          {/* Passo 4 */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">04</span>
              <h3 className="font-serif text-2xl font-light mb-2">Escrita personalizada</h3>
            </div>
          </div>
          {/* Passo 5 */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">05</span>
              <h3 className="font-serif text-2xl font-light mb-2">Revisão editorial</h3>
            </div>
          </div>
          {/* Passo 6 */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">06</span>
              <h3 className="font-serif text-2xl font-light mb-2">Aprovação do cliente</h3>
            </div>
          </div>
          {/* Passo 7 (Centralizado na última linha em Telas Grandes) */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between md:col-span-2 lg:col-start-2 lg:col-span-1">
            <div>
              <span className="text-xs text-[#B87333] uppercase tracking-widest block mb-3 font-medium">07</span>
              <h3 className="font-serif text-2xl font-light mb-2">Entrega da obra</h3>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 border border-[#B87333]/20 bg-neutral-900/40 p-6 max-w-2xl mx-auto">
          <p className="font-light text-[#FDFBF7] text-lg">
            Cada etapa acontece em conjunto com você.<br />
            Nada é publicado sem sua aprovação.
          </p>
        </div>
      </section>

      {/* Nova Seção de Confidencialidade */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-white/10">
        <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">Confidencialidade</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-8">
          Sua história permanece protegida.
        </h2>
        <div className="font-light text-[#FDFBF7]/80 text-lg leading-relaxed space-y-2">
          <p>Todo projeto é desenvolvido sob absoluto sigilo.</p>
          <p>Seguimos rigorosos padrões de confidencialidade.</p>
          <p>Você decide o que será publicado.</p>
          <p>Você decide quem poderá ler.</p>
          <p className="text-white font-medium pt-4 text-xl italic font-serif">Sua história continua sendo sua.<br/>Sempre.</p>
        </div>
      </section>

      {/* Seção PLANOS (Projetos Personalizados) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">Projetos Personalizados</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Escolha a experiência ideal para preservar seu legado.
          </h2>
          <p className="font-light text-[#FDFBF7]/70 text-lg space-y-2">
            Cada história possui uma profundidade diferente.<br />
            Por isso cada projeto é desenvolvido sob medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Plano Registro */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between hover:border-[#B87333] transition-all">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">Projeto Personalizado</span>
              <h3 className="font-serif text-2xl font-light mb-1">Plano Registro</h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Sob Consulta</p>
              <p className="font-light text-[#FDFBF7]/70 text-sm leading-relaxed mb-6 h-12">
                Ideal para preservar sua história de forma objetiva.
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80 mb-8 border-t border-white/10 pt-4">
                <li>✓ Método Linha do Legado™</li>
                <li>✓ Escrita personalizada</li>
                <li>✓ Revisão editorial</li>
                <li>✓ Entrega digital</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal('Plano Registro')}
              className="w-full border border-[#B87333] text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#B87333] transition-colors cursor-pointer"
            >
              Quero este projeto
            </button>
          </div>

          {/* Plano Memórias */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between hover:border-[#B87333] transition-all">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">Projeto Personalizado</span>
              <h3 className="font-serif text-2xl font-light mb-1">Plano Memórias</h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Sob Consulta</p>
              <p className="font-light text-[#FDFBF7]/70 text-sm leading-relaxed mb-6 h-12">
                Maior profundidade narrativa.
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80 mb-8 border-t border-white/10 pt-4">
                <li>✓ Tudo do Registro</li>
                <li>✓ Desenvolvimento emocional</li>
                <li>✓ Organização detalhada</li>
                <li>✓ Integração de fotografias</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal('Plano Memórias')}
              className="w-full border border-[#B87333] text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#B87333] transition-colors cursor-pointer"
            >
              Quero este projeto
            </button>
          </div>

          {/* Plano Legado */}
          <div className="border border-[#B87333] bg-neutral-900/80 p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B87333] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
              Experiência Completa
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">Projeto Personalizado</span>
              <h3 className="font-serif text-2xl font-light mb-1">Plano Legado</h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Sob Consulta</p>
              <p className="font-light text-[#FDFBF7]/80 text-sm leading-relaxed mb-6 h-12">
                Projeto completo. A experiência definitiva em preservação.
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/90 mb-8 border-t border-white/10 pt-4">
                <li>✓ Imersão biográfica</li>
                <li>✓ Curadoria narrativa</li>
                <li>✓ Linha da vida</li>
                <li>✓ Preparação editorial premium</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal('Plano Legado')}
              className="w-full bg-[#B87333] text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#B87333]/90 transition-colors cursor-pointer font-medium"
            >
              Quero este projeto
            </button>
          </div>

          {/* Obra da Família */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between hover:border-[#B87333] transition-all">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">Genealogia & Afeto</span>
              <h3 className="font-serif text-2xl font-light mb-1">Obra da Família</h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Sob Consulta</p>
              <p className="font-light text-[#FDFBF7]/70 text-sm leading-relaxed mb-6 h-12">
                Projetos que unem diferentes gerações em uma única obra.
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80 mb-8 border-t border-white/10 pt-4">
                <li>✓ Entrevistas com múltiplos membros</li>
                <li>✓ Pesquisa Genealógica</li>
                <li>✓ Integração de acervo completo</li>
                <li>✓ Obra de união e legado</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal('Plano Obra da Família')}
              className="w-full border border-[#B87333] text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#B87333] transition-colors cursor-pointer"
            >
              Quero este projeto
            </button>
          </div>

          {/* Edição de Colecionador */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between hover:border-[#B87333] transition-all">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">Exclusivo & Premium</span>
              <h3 className="font-serif text-2xl font-light mb-1">Colecionador</h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Sob Consulta</p>
              <p className="font-light text-[#FDFBF7]/70 text-sm leading-relaxed mb-6 h-12">
                Projeto exclusivo. Acabamentos físicos de alto padrão.
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80 mb-8 border-t border-white/10 pt-4">
                <li>✓ Curadoria completa</li>
                <li>✓ Projeto gráfico diferenciado</li>
                <li>✓ Acabamentos premium</li>
                <li>✓ Experiência estética impecável</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal('Plano Colecionador')}
              className="w-full border border-[#B87333] text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#B87333] transition-colors cursor-pointer"
            >
              Quero este projeto
            </button>
          </div>

          {/* Linha Empresarial */}
          <div className="border border-[#B87333]/30 bg-neutral-950 p-8 flex flex-col justify-between hover:border-[#B87333] transition-all">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87333] block mb-2 font-medium">Corporativo</span>
              <h3 className="font-serif text-2xl font-light mb-1">Empresarial</h3>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Sob Consulta</p>
              <p className="font-light text-[#FDFBF7]/70 text-sm leading-relaxed mb-6 h-12">
                Ideal para Empresas, Fundadores, Instituições e Marcas.
              </p>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80 mb-8 border-t border-white/10 pt-4">
                <li>✓ Entrevistas Institucionais</li>
                <li>✓ Linha do Tempo Corporativa</li>
                <li>✓ Narrativa de Cultura e Valores</li>
                <li>✓ Projeto Editorial Organizacional</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal('Plano Empresarial')}
              className="w-full border border-[#B87333] text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#B87333] transition-colors cursor-pointer"
            >
              Solicitar proposta
            </button>
          </div>

        </div>
      </section>

      {/* Depoimentos - Em desenvolvimento */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">Depoimentos</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Quem confiou sua história a nós</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-white/10 bg-neutral-900/30 p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              <span className="bg-[#B87333]/20 text-[#B87333] px-3 py-1 text-[10px] uppercase tracking-widest mb-4">Em desenvolvimento</span>
              <h3 className="text-white/50 font-serif text-xl">Projeto Alessandra</h3>
              <p className="text-white/30 text-sm mt-2">Espaço reservado para foto, vídeo e depoimento</p>
          </div>
          <div className="border border-white/10 bg-neutral-900/30 p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              <span className="bg-[#B87333]/20 text-[#B87333] px-3 py-1 text-[10px] uppercase tracking-widest mb-4">Em desenvolvimento</span>
              <h3 className="text-white/50 font-serif text-xl">Projeto Marlei</h3>
              <p className="text-white/30 text-sm mt-2">Espaço reservado para foto, vídeo e depoimento</p>
          </div>
        </div>
      </section>

      {/* Estatísticas e Funcionalidades Futuras Preparadas */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 border-b">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-40 grayscale">
          <div>
            <span className="block font-serif text-4xl text-white mb-2">-</span>
            <span className="text-xs uppercase tracking-widest text-white/70">Projetos realizados</span>
          </div>
          <div>
            <span className="block font-serif text-4xl text-white mb-2">-</span>
            <span className="text-xs uppercase tracking-widest text-white/70">Histórias preservadas</span>
          </div>
          <div>
            <span className="block font-serif text-4xl text-white mb-2">-</span>
            <span className="text-xs uppercase tracking-widest text-white/70">Horas de entrevistas</span>
          </div>
          <div>
            <span className="block font-serif text-4xl text-white mb-2">-</span>
            <span className="text-xs uppercase tracking-widest text-white/70">Pessoas impactadas</span>
          </div>
        </div>
        
        {/* Futuras Implementações Placeholder - Mantido oculto no DOM para os devs */}
        <div className="mt-16 text-center text-[10px] text-white/20 uppercase tracking-widest hidden">
            Futuras Áreas: Depoimentos em vídeo | Casos de sucesso | Projetos executados | Mapa de atendimento nacional | FAQ | Selos de confidencialidade/LGPD | Tempo médio de desenvolvimento | Galeria de livros.
        </div>
      </section>

      {/* Nova Seção de Atendimento Nacional */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block mb-4">Atendimento Nacional</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-8">
          Atendemos todo o Brasil
        </h2>
        <div className="font-light text-[#FDFBF7]/80 text-lg leading-relaxed space-y-2">
          <p>Onde sua história estiver, nós estaremos prontos para ouvi-la.</p>
          <p>Realizamos projetos presenciais, online e híbridos.</p>
          <p>Levamos o Método Linha do Legado™ para qualquer lugar do país.</p>
        </div>
      </section>

      {/* CTA Final e Rodapé Institucional */}
      <section className="py-44 px-6 text-center bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/images/mockup-apresentacao.png" alt="Mockup Final" className="w-full h-full object-cover filter blur-sm" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs block font-medium">Sua história merece permanecer</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            Uma vida não deve ser apenas lembrada.<br />
            Ela merece ser registrada.<br />
            Transformamos histórias reais em legados.<br />
            Porque ninguém deveria desaparecer apenas com a passagem do tempo.
          </h2>
          
          <div className="pt-4 pb-12">
            <button
              onClick={() => handleOpenModal('CTA Final')}
              className="bg-[#B87333] text-white text-sm md:text-base tracking-[0.2em] uppercase px-14 py-5 transition-all duration-700 hover:bg-[#B87333]/90 shadow-2xl cursor-pointer font-light"
            >
              Iniciar Meu Projeto
            </button>
          </div>

          <footer className="pt-16 border-t border-white/10 space-y-4">
            <h3 className="font-serif text-2xl text-white tracking-wide">Sua Vida em um Livro™</h3>
            <p className="font-light text-[#FDFBF7]/70 text-sm uppercase tracking-[0.2em] mb-8">
              Preservamos histórias reais.<br />
              Transformamos memórias em legado eterno.
            </p>
            <div className="flex flex-col items-center gap-2 text-xs text-white/50 tracking-wider">
              <span className="flex items-center gap-2">📍 Atendimento em todo o Brasil</span>
              <span className="flex items-center gap-2">📱 WhatsApp: (47) 99130-5597</span>
              <span className="flex items-center gap-2">📧 contato@suavidaemumlivro.com.br</span>
            </div>
          </footer>
        </div>
      </section>

      {/* CTA Fixo Inferior Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[80px] bg-[#050505]/95 border-t border-[#B87333]/30 z-40 flex items-center px-6 backdrop-blur-md">
        <button
          onClick={() => handleOpenModal('CTA Mobile')}
          className="w-full bg-[#B87333] text-white text-xs uppercase tracking-[0.2em] py-4 shadow-xl cursor-pointer font-medium"
        >
          Iniciar Meu Projeto
        </button>
      </div>

      {/* Modal de Conversão Premium */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,5,5,0.95)] backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#050505] border border-[#B87333]/40 p-6 md:p-12 text-[#FDFBF7] shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-xl cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <span className="text-[#B87333] uppercase tracking-[0.25em] text-xs block mb-3">Vamos conhecer sua história</span>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-3">Conte-nos quem você deseja eternizar.</h3>
              <p className="font-light text-white/70 text-sm leading-relaxed">
                Preencha seus dados.<br />
                Nossa equipe entrará em contato para compreender sua trajetória.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Exibição do Plano Escolhido */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-sm text-center mb-4">
                <span className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Plano Escolhido:</span>
                <span className="text-[#B87333] font-serif text-lg">{selectedPlan}</span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#B87333] outline-none text-base"
                  placeholder="Ex: Arthur Pendelton"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#B87333] outline-none text-base"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#B87333] outline-none text-base"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-3 font-medium">Para quem é esta homenagem?</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Para mim', 'Para outra pessoa', 'Para minha empresa', 'Para minha família'].map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setFormData({ ...formData, target: option })}
                      className={`py-3 px-2 border text-xs tracking-wide transition-all cursor-pointer ${
                        formData.target === option
                          ? 'border-[#B87333] bg-[#B87333]/10 text-white font-medium'
                          : 'border-white/10 text-white/60 hover:border-white/40'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Como conheceu a Sua Vida em um Livro?</label>
                <select 
                  required
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full bg-[#050505] border-b border-white/20 py-3 text-white focus:border-[#B87333] outline-none text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Google">Google</option>
                  <option value="Indicação">Indicação</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium">Conte brevemente a história (Opcional)</label>
                <textarea
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#B87333] outline-none text-sm resize-none h-20 custom-scrollbar"
                  placeholder="Um breve resumo do que deseja preservar..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B87333] text-white tracking-[0.2em] uppercase py-5 transition-all hover:bg-[#B87333]/90 shadow-xl cursor-pointer font-medium text-xs md:text-sm"
                >
                  {isSubmitting ? 'Processando...' : 'Quero Preservar Minha História'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}