import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const projects = [
    {
      title: "Pastelarica Delivery",
      description: language === 'pt' ? "Plataforma de delivery moderna e focada em performance para a Pastelarica, com cardápio online inteligente, carrinho dinâmico e fluxo ágil para pedidos via WhatsApp." : "Modern and performance-focused delivery platform for Pastelarica with a smart online menu, dynamic cart, and streamlined order flow via WhatsApp.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubLink: "https://github.com/Klebsuchan/delivery",
      liveLink: "https://pastelarica-delivery.vercel.app/",
      accent: "from-orange-500 to-red-600",
      offset: ["50px", "-100px"]
    },
    {
      title: "StellarCare",
      description: language === 'pt' ? "Sistema avançado de Assistência de Enfermagem (SAE) e Prontuário Eletrônico (PEP) desenvolvido para monitoramento clínico em tempo real e evoluções estruturadas." : "Advanced Nursing Assistance System (SAE) and Electronic Health Record (EHR) built for real-time clinical monitoring and structured patient evolutions.",
      techStack: ["React", "TypeScript", "TailwindCSS", "HTML/CSS"],
      githubLink: "https://github.com/Klebsuchan/StellarCare",
      liveLink: "https://stellar-care.vercel.app",
      accent: "from-cyan-500 to-blue-600",
      offset: ["250px", "-400px"]
    },
    {
      title: "FinanceKleber",
      description: language === 'pt' ? "Plataforma de gestão financeira inteligente. Ferramenta simplificada para acompanhar despesas, receitas corporativas e gerar dashboards em tempo real." : "Smart financial management platform. Ideal for tracking expenses, corporate income, and rendering real-time dashboards.",
      techStack: ["TypeScript", "React", "Node.js", "HTML/CSS"],
      githubLink: "https://github.com/Klebsuchan/KleberFinance",
      liveLink: "https://nexus-fc-seven.vercel.app",
      accent: "from-purple-500 to-fuchsia-600",
      offset: ["100px", "-150px"]
    },
    {
      title: "Wonder SNES Cloud",
      description: language === 'pt' ? "Aplicação moderna em nuvem para rodar clássicos do Super Nintendo e PS1, projetada para performance contínua e renderização Web sem downloads." : "Modern cloud web emulation for Super Nintendo and PS1 classics. Engineered for seamless rendering with no downloads required.",
      techStack: ["TypeScript", "Next.js", "Web Emulation", "JavaScript"],
      githubLink: "https://github.com/Klebsuchan/atualiza-o-sness",
      liveLink: "https://wondersnes-cloud.vercel.app",
      accent: "from-orange-400 to-red-600",
      offset: ["200px", "-300px"]
    },
    {
      title: "Naturalmix Restaurant",
      description: language === 'pt' ? "Plataforma web para restaurantes focados em alimentação saudável. Sistema focado em presença digital, apresentação de cardápio e conversão de vendas." : "Web platform for healthy food restaurants. Focused on modern digital presence, menu presentations, and sales conversion optimization.",
      techStack: ["TypeScript", "React", "Next.js", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/Naturalmix-Restaurant",
      liveLink: "https://naturalmix-restaurant.vercel.app",
      accent: "from-green-500 to-emerald-700",
      offset: ["300px", "-450px"]
    },
    {
      title: "Animed Veterinária",
      description: language === 'pt' ? "Landing page e ecossistema web para petshops e clínicas veterinárias, focado em UX otimizada para capturar leads e demonstrar serviços profissionais." : "Web ecosystem and landing page for animal clinics and pet shops. Specifically tuned for lead capture via an optimized user experience.",
      techStack: ["TypeScript", "React", "Node.js", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/animed-v2.0",
      liveLink: "https://animed-v2-0.vercel.app",
      accent: "from-teal-400 to-cyan-600",
      offset: ["50px", "-100px"]
    },
    {
      title: "Escola Coração de Mãe",
      description: language === 'pt' ? "Site institucional altamente otimizado para o setor educacional. Estruturado para fortalecer a imagem da escola e facilitar a comunicação com os pais." : "Highly optimized institutional website for the education sector. Structured to bolster school credibility and streamline parent communication.",
      techStack: ["TypeScript", "React", "TailwindCSS", "Framer Motion"],
      githubLink: "https://github.com/Klebsuchan/site-escola-cora-o-de-m-e",
      liveLink: "https://escolacoracaodemae.vercel.app/",
      accent: "from-pink-500 to-rose-600",
      offset: ["150px", "-250px"],
      disableIframe: true
    },
    {
      title: "E-book Bolo de Pote",
      description: language === 'pt' ? "Landing page de alta conversão estruturada para venda de infoprodutos e e-books focados em confeitaria e empreendedorismo." : "High-conversion landing page designed for selling infoproducts and e-books targeted towards bakery entrepreneurship.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubLink: "https://github.com/Klebsuchan/E-book-Bolo-de-pote",
      liveLink: "https://lucro-no-pote.vercel.app/",
      accent: "from-amber-400 to-yellow-600",
      offset: ["250px", "-400px"]
    },
    {
      title: "Landing Page: E-book Arquitetura",
      description: language === 'pt' ? "Página de vendas dedicada a infoproduto no nicho de arquitetura, apresentando design refinado e foco direto em conversão de leads." : "Sales page for a niche architecture infoproduct, delivering refined aesthetic design paired with a direct approach to lead conversion.",
      techStack: ["React", "TypeScript", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/ebook-arquitetura",
      liveLink: "https://ebook-arquitetura.vercel.app",
      accent: "from-slate-400 to-gray-600",
      offset: ["100px", "-150px"]
    },
    {
      title: "Projetos de Histórias de Amor",
      description: language === 'pt' ? "Série de landing pages interativas construídas para casais (Harrisson & Kali, Léo & Vanessa, Maiara & Marcelo). Focadas em memorabilidade, animações fluidas e storytelling interativo." : "A series of customized digital experiences designed specifically for couples. Focused on emotional memorability, fluid animations, and storytelling.",
      techStack: ["Frontend", "Animações Web", "UI/UX", "Vercel"],
      githubLink: "https://github.com/Klebsuchan/Uma-hist-ria-de-amor-Maiara-e-Marcelo-",
      liveLink: "https://nossa-hist-ria-de-amor-5wyz.vercel.app/",
      accent: "from-red-400 to-pink-600",
      offset: ["200px", "-300px"]
    }
  ];

  return (
    <section id="portfolio" ref={ref} className="py-16 md:py-32 bg-black relative overflow-hidden z-20">
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">
              <Code2 className="w-4 h-4" />
              {t('portfolio.badge')}
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 font-display uppercase tracking-tight"
            >
              {t('portfolio.title')}
            </motion.h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-6">
              {t('portfolio.desc')}
            </p>
          </div>
          <a 
            href="https://github.com/Klebsuchan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex w-full md:w-auto justify-center items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/20 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-xl"
          >
            <Github className="w-5 h-5" />
            {language === 'pt' ? 'Acessar Github' : 'Access Github'}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const parallaxY = useTransform(scrollYProgress, [0, 1], project.offset);
            return (
              <motion.div
                style={{ y: parallaxY }}
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white/[0.02] rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-500 will-change-transform flex flex-col h-full backdrop-blur-sm"
              >
                <div className={`h-64 w-full bg-gradient-to-br ${project.accent} group-hover:brightness-110 transition-all flex items-center justify-center relative overflow-hidden`}>
                  {project.liveLink && project.liveLink !== '#' && !(project as any).disableIframe ? (
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{ background: '#000' }}>
                       <iframe src={project.liveLink} className="absolute left-1/2 top-0 origin-top border-none w-[1280px] h-[800px]" style={{ transform: 'translateX(-50%) scale(0.32)' }} title={project.title} loading="lazy" />
                    </div>
                  ) : (
                    <>
                      <motion.div 
                        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" 
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-30 mix-blend-overlay" />
                    </>
                  )}
                  <div className="absolute bottom-6 left-6 pr-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 z-10 transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <h3 className="text-2xl font-black text-white leading-tight font-display tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 text-cyan-300 text-xs font-bold tracking-widest uppercase rounded border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white hover:text-black text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all border border-white/20"
                    >
                      <Github className="w-4 h-4" />
                      {t('portfolio.sourceCode')}
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 inline-flex items-center justify-center bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 rounded-xl transition-colors border border-cyan-500/30"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
