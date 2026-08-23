import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// ==========================================
// CONFIGURAÇÕES E METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Sua História em um Livro | Sua Vida em um Livro™",
  description:
    "Transformamos histórias de vida, memórias e trajetórias familiares em livros personalizados. Conte sua história. Nós ajudamos a transformá-la em uma obra que permanece.",
  alternates: {
    canonical: "https://suavidaemumlivro.com.br/sua-historia",
  },
  openGraph: {
    title: "Sua História em um Livro | Sua Vida em um Livro™",
    description: "Transformamos histórias de vida, memórias e trajetórias familiares em livros personalizados.",
    url: "https://suavidaemumlivro.com.br/sua-historia",
    siteName: "Sua Vida em um Livro™",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://suavidaemumlivro.com.br/images/opengraph-image.png",
        width: 1080,
        height: 1080,
        alt: "Sua Vida em um Livro™",
      },
    ],
  },
};

const WHATSAPP_NUMBER = "5547991305597";

function getWhatsAppUrl(message: string, source: string = "general") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ==========================================
// COMPONENTE PRINCIPAL (SERVER COMPONENT)
// ==========================================

export default function SuaHistoriaLandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#FDFBF7] selection:bg-[#B87333]/30 selection:text-white font-sans overflow-x-hidden pb-16 md:pb-0">
      
      {/* 1. HEADER SIMPLIFICADO */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/sua-historia" className="font-serif text-xl tracking-wide text-white">
            Sua Vida em um Livro<span className="text-[#B87333] text-sm align-super">™</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/60">
            <a href="#como-funciona" className="hover:text-[#B87333] transition-colors">Como Funciona</a>
            <a href="#formatos" className="hover:text-[#B87333] transition-colors">Projetos</a>
            <a href="#faq" className="hover:text-[#B87333] transition-colors">Dúvidas</a>
          </nav>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de saber como transformar minha história em um livro.", "header")}
            data-event="header_whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-[#B87333] hover:bg-[#9a5f2a] text-white px-6 py-2.5 text-xs uppercase tracking-widest transition-all"
          >
            Começar Minha História
          </a>
        </div>
      </header>

      <main className="pt-20">
        
        {/* 2. HERO MAIS VENDEDOR */}
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 py-20">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] absolute inset-0 z-10"></div>
            <div className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 mt-6">
            <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              Sua história merece ser preservada
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              E se a sua história <br className="hidden md:block" />
              <span className="italic text-white/90">virasse um livro?</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-6">
              Você viveu momentos que ninguém mais viveu. Nós transformamos suas memórias, experiências e acontecimentos em um livro feito para preservar quem você é e aquilo que não pode ser esquecido.
            </p>
            <p className="text-[#B87333] text-sm md:text-base font-serif italic mb-10">
              Você não precisa saber escrever. Você só precisa ter uma história para contar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl("Olá! Conheci o Sua Vida em um Livro e quero transformar minha história em livro.", "hero")}
                data-event="hero_whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#B87333] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#9a5f2a] transition-all text-center shadow-lg"
              >
                Quero transformar minha história em livro
              </a>
              <a
                href="#como-funciona"
                data-event="how_it_works_click"
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center"
              >
                Como funciona
              </a>
            </div>
          </div>
        </section>

        {/* 3. LIVRO FÍSICO EM DESTAQUE */}
        <section className="py-20 px-6 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[400px] border border-white/10 rounded-lg overflow-hidden bg-neutral-950 flex items-center justify-center">
              {/* Imagem de demonstração do livro físico */}
              <div className="text-center p-6">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">[ Obra Editorial Premium ]</p>
                <p className="font-serif text-2xl text-[#B87333]">Sua Vida em um Livro™</p>
                <p className="text-white/60 text-sm mt-2">Capa dura • Papel polén • Projeto exclusivo</p>
              </div>
            </div>
            <div>
              <span className="text-[#B87333] uppercase tracking-widest text-xs mb-4 block">Materialização da Memória</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Uma história real transformada em uma obra para permanecer.
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Mais do que páginas impressas, entregamos um objeto de afeto e alta qualidade estética que atravessa gerações na sua família.
              </p>
              <a
                href={getWhatsAppUrl("Olá! Quero conversar sobre como transformar minha história em livro.", "book_highlight")}
                data-event="book_whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-[#B87333] text-[#B87333] hover:text-white hover:border-white text-xs uppercase tracking-widest pb-1 transition-colors"
              >
                Quero conversar sobre minha história →
              </a>
            </div>
          </div>
        </section>

        {/* 4. PROVA SOCIAL ANTECIPADA (MARLEI) */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-[#B87333] text-xs uppercase tracking-[0.2em]">Histórias Reais</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-3">Vidas reais. Livros reais.</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-[#B87333]/20 p-8 md:p-14 text-center">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#B87333] mb-6">
              <Image 
                src="/images/marlei-foto.png" 
                alt="Marlei da Rosa" 
                width={80} 
                height={80} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#FDFBF7]/90 text-lg md:text-xl leading-relaxed italic font-serif mb-6">
              "Esse projeto é sensacional porque ele não apenas relata acontecimentos, mas acompanha a transformação de uma pessoa ao longo da vida... O livro deixa de ser apenas uma autobiografia e passa a ser uma obra sobre sobrevivência, traumas, recomeço e, acima de tudo, sobre reconhecer o que nos faltou na infância para oferecermos algo diferente à geração seguinte."
            </p>
            <h3 className="text-white font-serif text-lg font-medium">Marlei da Rosa</h3>
            <p className="text-[#B87333] text-xs tracking-wider uppercase mt-1">Autora</p>
          </div>
        </section>

        {/* 5. IDENTIFICAÇÃO EMOCIONAL */}
        <section className="py-20 px-6 bg-neutral-900/20 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Talvez você tenha mais história do que imagina.
            </h2>
            <div className="text-white/70 text-lg leading-loose space-y-4 font-light">
              <p>Você lembra de coisas que ninguém mais lembra.</p>
              <p>Da casa onde cresceu. Das pessoas que passaram pela sua vida.</p>
              <p>Dos momentos difíceis. Das escolhas. Das perdas.</p>
              <p>Das conquistas. Dos recomeços.</p>
              <p className="text-white/40 italic pt-2">Mas memória também pode desaparecer.</p>
            </div>
            <p className="text-[#B87333] text-xl md:text-2xl font-serif mt-10 mb-8">
              E se tudo isso pudesse permanecer em um livro?
            </p>
          </div>
        </section>

        {/* 6. POR QUE FAZER AGORA? */}
        <section className="py-24 px-6 border-t border-white/5 bg-neutral-950">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#B87333] uppercase tracking-widest text-xs mb-4 block">Urgência Emocional</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-10">Por que registrar sua história agora?</h2>
            
            <div className="text-white/70 text-lg leading-relaxed font-light space-y-4 mb-10 text-left md:text-center">
              <p>Porque a memória muda. Detalhes desaparecem. Pessoas envelhecem.</p>
              <p>Algumas histórias nunca são escritas.</p>
              <p className="text-white font-medium">E aquilo que parece impossível esquecer hoje pode ser justamente o que seus filhos e netos mais desejarão conhecer amanhã.</p>
            </div>

            <p className="text-[#B87333] font-serif text-xl italic mb-10">
              "Você ainda pode contar sua história com a sua própria voz."
            </p>

            <a
              href={getWhatsAppUrl("Olá! Quero começar agora a registrar minha história.", "why_now")}
              data-event="why_now_click"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B87333] hover:bg-[#9a5f2a] text-white px-8 py-4 text-xs uppercase tracking-widest transition-all"
            >
              Quero começar agora
            </a>
          </div>
        </section>

        {/* 7. NÃO É APENAS UMA AUTOBIOGRAFIA */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Não é simplesmente escrever uma autobiografia.</h2>
              <p className="text-white/60 font-light max-w-xl mx-auto">Uma autobiografia pode registrar acontecimentos. Nós queremos registrar a pessoa por trás deles.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900/30 border border-white/5 p-8">
                <span className="text-white/30 text-xs uppercase tracking-widest block mb-4">Autobiografia Tradicional</span>
                <ul className="space-y-3 text-white/50 font-light text-sm">
                  <li>• "Nasci em..."</li>
                  <li>• "Estudei em..."</li>
                  <li>• "Trabalhei na empresa..."</li>
                  <li>• "Casei-me em..."</li>
                </ul>
              </div>

              <div className="bg-[#B87333]/10 border border-[#B87333]/40 p-8">
                <span className="text-[#B87333] text-xs uppercase tracking-widest block mb-4 font-semibold">Sua Vida em um Livro™</span>
                <ul className="space-y-3 text-white/90 font-light text-sm">
                  <li>• O que você sentiu diante do desafio?</li>
                  <li>• O que realmente mudou sua trajetória?</li>
                  <li>• Quem marcou sua vida para sempre?</li>
                  <li>• Qual memória você quer que sua família conheça?</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-white/60 font-serif italic mt-12 text-lg">
              Não queremos apenas saber o que aconteceu. Queremos entender o que aquilo significou para você.
            </p>
          </div>
        </section>

        {/* 8. COMO FUNCIONA */}
        <section id="como-funciona" className="py-24 px-6 bg-neutral-900/20 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-center mb-20">
              Tudo começa com uma conversa.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Conversa", desc: "Começamos ouvindo você e entendendo seu objetivo." },
                { step: "02", title: "Entrevista", desc: "Exploramos os momentos importantes da sua trajetória." },
                { step: "03", title: "Escrita", desc: "Transformamos suas memórias em uma narrativa literária." },
                { step: "04", title: "Revisão", desc: "Você acompanha, ajusta e aprova todo o conteúdo." },
                { step: "05", title: "Livro", desc: "Sua história ganha forma e permanece impressa." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <span className="text-[#B87333]/20 text-6xl font-serif absolute -top-8 -left-4 z-0">{item.step}</span>
                  <div className="relative z-10 pt-4 border-t border-white/10 mt-6">
                    <h3 className="text-white text-lg font-serif mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. PARA QUEM É (3 BLOCOS COMERCIAIS) */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-16">
              Qual história você quer preservar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-white/10 p-10 flex flex-col justify-between hover:border-[#B87333]/50 transition-colors">
                <div>
                  <h3 className="text-xl font-serif text-[#B87333] mb-4">Sua Própria História</h3>
                  <p className="text-white/60 font-light mb-8">"Quero registrar minha trajetória, meus aprendizados e o caminho que percorri."</p>
                </div>
                <a
                  href={getWhatsAppUrl("Olá! Conheci o Sua Vida em um Livro e quero transformar minha própria história em livro.", "my_story")}
                  data-event="my_story_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-white/20 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Quero Conhecer
                </a>
              </div>

              <div className="border border-[#B87333]/40 bg-[#B87333]/5 p-10 flex flex-col justify-between transform md:-translate-y-4">
                <div>
                  <h3 className="text-xl font-serif text-[#B87333] mb-4">História dos Meus Pais</h3>
                  <p className="text-white/80 font-light mb-8">"Quero preservar a trajetória de quem veio antes de mim e me deu a base de tudo."</p>
                </div>
                <a
                  href={getWhatsAppUrl("Olá! Quero saber como transformar a história dos meus pais em um livro.", "parents_story")}
                  data-event="parents_whatsapp_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#B87333] text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#9a5f2a] transition-all"
                >
                  História dos Meus Pais
                </a>
              </div>

              <div className="border border-white/10 p-10 flex flex-col justify-between hover:border-[#B87333]/50 transition-colors">
                <div>
                  <h3 className="text-xl font-serif text-[#B87333] mb-4">História da Família</h3>
                  <p className="text-white/60 font-light mb-8">"Quero reunir memórias e conectar gerações em uma única obra monumental."</p>
                </div>
                <a
                  href={getWhatsAppUrl("Olá! Quero saber como criar um livro com a história da minha família.", "family_story")}
                  data-event="family_story_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-white/20 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  História da Família
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 10. FORMATOS DE PROJETO & PREÇO ÂNCORA */}
        <section id="formatos" className="py-24 px-6 border-t border-white/5 bg-neutral-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#B87333] text-xs uppercase tracking-[0.2em]">Obras Exclusivas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-4">Formatos de Projeto</h2>
              <p className="text-white/60 mt-4 text-lg">Projetos personalizados a partir de <strong className="text-white">R$ 1.990</strong></p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Registro", desc: "Para preservar a história de forma mais direta e objetiva.", msg: "Registro" },
                { title: "Memórias", desc: "Para uma narrativa biográfica mais profunda e detalhada.", msg: "Memórias", highlight: true },
                { title: "Legado", desc: "Para uma experiência completa de preservação com alto requinte.", msg: "Legado" },
                { title: "Obra da Família", desc: "Para unir diferentes gerações em um único volume.", msg: "a Obra da Família" },
                { title: "Colecionador", desc: "Para projetos com acabamentos físicos e editoriais premium.", msg: "Colecionador" },
                { title: "Empresarial", desc: "Para empresas, fundadores e memória institucional.", msg: "Empresarial" },
              ].map((fmt, i) => (
                <div key={i} className={`p-8 border ${fmt.highlight ? 'border-[#B87333]/50 bg-[#B87333]/5' : 'border-white/10 hover:border-white/30'} transition-all flex flex-col justify-between`}>
                  <div>
                    <h3 className={`font-serif text-2xl mb-3 ${fmt.highlight ? 'text-[#B87333]' : 'text-white'}`}>{fmt.title}</h3>
                    <p className="text-white/60 font-light text-sm mb-8">{fmt.desc}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-white/40 uppercase tracking-widest">Sob Consulta</span>
                    <a
                      href={getWhatsAppUrl(`Olá! Quero conhecer o projeto ${fmt.msg}.`, "projects")}
                      data-event="pricing_whatsapp_click"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B87333] text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      Quero Conhecer <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. CONFIDENCIALIDADE */}
        <section className="py-20 px-6 border-t border-white/5 bg-neutral-900/20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-light mb-6">Sua história continua sendo sua.</h2>
            <div className="text-white/60 font-light space-y-2 text-lg">
              <p>Você decide o que será contado.</p>
              <p>Você decide o que será publicado.</p>
              <p>Você decide quem poderá ler.</p>
              <p className="text-white/90 font-medium mt-4 pt-4 border-t border-white/10">Nada é publicado sem sua aprovação final e sigilo absoluto.</p>
            </div>
          </div>
        </section>

        {/* 12. FAQ ORIENTADO A OBJEÇÕES */}
        <section id="faq" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-16">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Eu não sei escrever. Posso fazer?", a: "Sim! Você não precisa saber escrever. Nós conduzimos entrevistas com você, gravamos as conversas e nossa equipe editorial transforma seus relatos em um texto literário, estruturado e envolvente." },
                { q: "Minha história é interessante o suficiente?", a: "Toda vida tem valor, aprendizados e momentos únicos que merecem ser guardados para as próximas gerações. O livro é sobre o seu legado." },
                { q: "Vocês fazem as entrevistas?", a: "Sim, realizamos entrevistas guiadas, humanizadas e pacientes para extrair suas memórias da forma mais natural possível." },
                { q: "Eu posso revisar o conteúdo?", a: "Sim. Nenhuma obra é encaminhada para a gráfica sem a sua leitura, revisão rigorosa e aprovação formal de cada capítulo." },
                { q: "Quem decide o que será publicado?", a: "Exclusivamente você. Você tem total controle sobre o conteúdo da obra." },
                { q: "A história fica em sigilo?", a: "Totalmente. Trabalhamos com cláusulas de confidencialidade estritas. A história é sua e só será lida por quem você permitir." },
                { q: "Posso fazer para meus pais ou avós?", a: "Sim! É um dos projetos mais procurados e emocionantes. Conduzimos as entrevistas com eles com todo o cuidado." },
                { q: "Quanto custa e como começo?", a: "Temos projetos a partir de R$ 1.990, variando conforme o escopo. Comece falando conosco pelo WhatsApp para encontrarmos o formato ideal." }
              ].map((faq, i) => (
                <details key={i} className="group bg-neutral-900/30 border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer" data-event="faq_open">
                  <summary className="flex items-center justify-between text-lg font-serif text-white/90 font-light">
                    {faq.q}
                    <span className="text-[#B87333] group-open:rotate-45 transition-transform text-2xl font-sans leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-white/60 font-light leading-relaxed pl-2 border-l border-[#B87333]/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href={getWhatsAppUrl("Olá! Tenho algumas dúvidas e gostaria de conversar.", "faq")}
                className="text-white/40 text-xs uppercase tracking-widest hover:text-[#B87333] transition-colors"
              >
                Ainda tem dúvidas? Fale conosco →
              </a>
            </div>
          </div>
        </section>

        {/* 13. CTA FINAL */}
        <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-neutral-900 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Algumas histórias não deveriam desaparecer.</h2>
            <p className="text-white/60 text-lg font-light mb-12 max-w-2xl mx-auto">Você pode continuar carregando essa história apenas na memória. Ou pode deixá-la registrada para quem vier depois.</p>
            
            <a
              href={getWhatsAppUrl("Olá! Quero conversar sobre como transformar minha história em livro.", "final_cta")}
              data-event="final_cta_click"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B87333] hover:bg-[#9a5f2a] text-white px-10 py-5 text-sm uppercase tracking-widest transition-all mb-4 shadow-[0_0_40px_rgba(184,115,51,0.2)]"
            >
              Quero Transformar Minha História em Livro
            </a>
            <p className="text-white/30 text-xs uppercase tracking-widest mt-4">Fale conosco pelo WhatsApp. Comece com uma conversa.</p>
          </div>
        </section>
      </main>

      {/* 14. FOOTER SIMPLIFICADO */}
      <footer className="py-10 px-6 border-t border-white/10 bg-[#0a0a0a] text-center pb-24 md:pb-10">
        <p className="font-serif text-lg text-white mb-2">Sua Vida em um Livro™</p>
        <p className="text-white/40 text-xs">Todos os direitos reservados © {new Date().getFullYear()}</p>
      </footer>

      {/* 15. FLOATING WHATSAPP (DESKTOP) */}
      <a
        href={getWhatsAppUrl("Olá! Estava navegando na página e gostaria de falar sobre minha história.", "floating")}
        data-event="floating_whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-lg hover:scale-105 transition-transform items-center gap-3 z-50 font-medium"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        Falar sobre minha história
      </a>

      {/* 16. CTA FIXO MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#111] border-t border-white/10 p-4 z-50 flex items-center justify-between">
        <span className="text-white/80 text-xs font-medium">Sua história merece permanecer.</span>
        <a
          href={getWhatsAppUrl("Olá! Quero saber como transformar minha história em um livro.", "mobile_bar")}
          data-event="mobile_cta_click"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#B87333] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-semibold"
        >
          Começar
        </a>
      </div>

    </div>
  );
}