/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Scissors, MapPin, Phone, Instagram, Clock, CheckCircle2, ChevronRight, Menu, X, Star } from 'lucide-react';
import { useState, useRef } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-600/20 rotate-3">
              <Scissors className="text-black" size={24} />
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter text-white uppercase block leading-none">Shekinah</span>
              <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-[0.2em]">Barbearia</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
            <a href="#home" className="hover:text-yellow-500 transition-colors">Início</a>
            <a href="#services" className="hover:text-yellow-500 transition-colors">Serviços</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors">Galeria</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contato</a>
            <a 
              href="https://wa.me/558198356583" 
              target="_blank" 
              rel="no-referrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 active:scale-95 font-black shadow-lg shadow-yellow-600/20"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-yellow-600/20 py-8 px-4 flex flex-col gap-6 text-center shadow-2xl"
        >
          <a href="#home" className="text-slate-300 text-lg font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#services" className="text-slate-300 text-lg font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#about" className="text-slate-300 text-lg font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Galeria</a>
          <a href="#contact" className="text-slate-300 text-lg font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Contato</a>
          <a 
            href="https://wa.me/558198356583"
            target="_blank"
            rel="no-referrer"
            className="bg-yellow-600 text-black py-4 rounded-xl font-black uppercase tracking-widest mt-2"
          >
            Agendar Agora
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
          alt="Barbearia Profissional"
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="text-yellow-600 fill-yellow-600" size={16} />
            <span className="text-yellow-500 uppercase tracking-[0.5em] font-black text-xs">Exclusividade • Cordeiro</span>
            <Star className="text-yellow-600 fill-yellow-600" size={16} />
          </div>
          
          <h1 className="text-7xl md:text-[160px] font-black text-white uppercase tracking-tighter leading-[0.75] mb-8 italic">
            Shekinah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800">Master</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-3xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-tight">
            Elevando o padrão da barbearia clássica em Recife. Onde a tradição encontra a perfeição.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/558198356583" 
              target="_blank" 
              rel="no-referrer"
              className="group bg-yellow-600 hover:bg-yellow-500 text-black px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-yellow-600/40 uppercase tracking-tighter flex items-center gap-3 active:scale-95"
            >
              Marcar Horário <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="text-white hover:text-yellow-500 px-8 py-5 font-black text-lg transition-all uppercase tracking-widest border-b-4 border-yellow-600/20 hover:border-yellow-600"
            >
              Consultar Preços
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500 to-transparent rounded-full shadow-lg shadow-yellow-500/20" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  const serviceList = [
    { 
      title: "Corte Elite", 
      price: "R$ 20", 
      desc: "Visagismo completo aplicando as melhores técnicas mundiais em seu rosto.",
      tags: ["Moderno", "Tendência"],
      image: "https://images.unsplash.com/photo-1621605815841-aa88c824c44c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Barba Terapia", 
      price: "R$ 20", 
      desc: "Protocolo clássico com toalha quente, óleos essenciais e navalha blindada.",
      tags: ["Clássico", "Relaxamento"],
      image: "https://images.unsplash.com/photo-1599351431247-f13b283253b7?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Combo Royal", 
      price: "R$ 40", 
      desc: "A transformação definitiva. Cabelo, barba e a sobrancelha por nossa conta.",
      tags: ["VIP", "Completo"],
      image: "https://images.unsplash.com/photo-1512690196252-850ef2f80ce0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#080808] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-yellow-600 font-black uppercase tracking-[0.4em] text-xs mb-6 flex items-center gap-3">
              <div className="w-12 h-[2px] bg-yellow-600" /> Nossos Serviços
            </h2>
            <p className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Dominando a <br /> <span className="text-yellow-600 italic">Arte</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {serviceList.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#121212] border border-white/5 rounded-[48px] group hover:border-yellow-600/30 transition-all duration-700 relative overflow-hidden shadow-2xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={service.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={service.title} />
                <div className="absolute top-6 left-6 flex gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-black bg-yellow-600 py-1.5 px-4 rounded-full shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-12">
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-10 font-light text-lg leading-relaxed">{service.desc}</p>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">A partir de</span>
                    <span className="text-4xl font-display font-black text-white">{service.price}</span>
                  </div>
                  <a href="https://wa.me/558198356583" className="w-16 h-16 bg-yellow-600 text-black rounded-2xl flex items-center justify-center hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-600/20">
                    <ChevronRight size={32} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhotoGrid = () => {
  const images = [
    { url: "input_file_2.png", size: "col-span-2 row-span-2", title: "Nossa Identidade", fallback: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800" },
    { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", size: "col-span-2 row-span-1", title: "Estilo Clássico", fallback: "" },
    { url: "input_file_0.png", size: "col-span-1 row-span-1", title: "Espaço Interno", fallback: "https://images.unsplash.com/photo-1593702295094-ada75541299e?auto=format&fit=crop&q=80&w=600" },
    { url: "input_file_3.png", size: "col-span-1 row-span-1", title: "Equipe Shekinah", fallback: "https://images.unsplash.com/photo-1621605815841-aa88c824c44c?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-yellow-600 font-black uppercase tracking-[0.4em] text-xs mb-4">Galeria Master</h2>
           <p className="text-4xl font-black text-white uppercase tracking-tighter">Excelência em cada detalhe</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 h-[600px] md:h-[900px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.97 }}
              className={`${img.size} rounded-[48px] overflow-hidden relative group shadow-2xl border border-white/5`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent z-10 transition-colors duration-500" />
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (img.fallback) {
                    (e.target as HTMLImageElement).src = img.fallback;
                  }
                }}
              />
              <div className="absolute bottom-10 left-10 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-black bg-yellow-600 px-6 py-2 rounded-full font-black uppercase text-sm shadow-2xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111] border border-white/5 rounded-[60px] p-12 md:p-24 overflow-hidden relative flex flex-col md:flex-row gap-20 items-center shadow-3xl">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden select-none">
             <span className="text-[300px] font-black uppercase rotate-12 whitespace-nowrap">SHEKINAH</span>
          </div>

          <div className="relative z-10 md:w-1/2">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-10 tracking-tighter">
              Aberto no <br /> <span className="text-yellow-600">Cordeiro</span>
            </h2>
            
            <div className="space-y-10 mb-16">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-yellow-600/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-yellow-600" size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Endereço</p>
                  <p className="text-xl text-white font-bold leading-tight">Rua Tamboril, 11 - Loja 11 <br /> Cordeiro, Recife - PE</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-yellow-600/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-yellow-600" size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Horários</p>
                  <p className="text-xl text-white font-bold leading-tight">Segunda a Sábado <br /> 08:00h às 20:00h</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-yellow-600/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-yellow-600" size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Contato</p>
                  <p className="text-xl text-white font-bold leading-tight">(81) 9835-6583</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/558198356583" 
                target="_blank"
                rel="no-referrer"
                className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3 shadow-xl"
              >
                AGENDAR AGORA
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full h-[500px] relative">
            <div className="absolute inset-0 bg-yellow-600/10 rounded-[40px] -rotate-3" />
            <a 
              href="https://maps.app.goo.gl/EGEisHc5y7pQTMku5" 
              target="_blank"
              rel="no-referrer"
              className="absolute inset-0 bg-[#222] rounded-[40px] overflow-hidden group shadow-2xl transition-transform hover:-translate-y-2 duration-500"
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-700" 
                alt="Mapa da Barbearia Shekinah"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8 bg-black/60">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <MapPin size={40} className="text-black" />
                </div>
                <p className="text-white font-black text-3xl uppercase italic tracking-tighter mb-2">Clique para Ver o Mapa</p>
                <p className="text-yellow-500 font-bold text-sm tracking-[0.2em] uppercase">Abrir no Google Maps</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 bg-yellow-600 rounded-xl flex items-center justify-center rotate-6">
            <Scissors className="text-black" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Shekinah</span>
        </div>
        <div className="flex justify-center gap-8 mb-10">
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram /></a>
          <a href="https://wa.me/558198356583" className="text-slate-500 hover:text-white transition-colors"><Phone /></a>
        </div>
        <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">
          © 2026 Barbearia Shekinah • Do clássico ao moderno <br />
          Rua Tamboril, 11 - Cordeiro, Recife - PE.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-yellow-600 selection:text-black antialiased">
      <Navbar />
      <Hero />
      <Services />
      <PhotoGrid />
      <Contact />
      <Footer />
    </div>
  );
}
