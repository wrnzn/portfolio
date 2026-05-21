import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'framer-motion';
import { cvData } from '../data/cvData';

export function AdventurerLog() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: false });

  useEffect(() => {
    if (isInView) {
      anime({
        targets: '.anime-stagger',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(150)
      });
      
      anime({
        targets: '.anime-line',
        width: ['0%', '100%'],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 500
      });
    }
  }, [isInView]);

  return (
    <div className="w-full flex flex-col items-center justify-center text-white/95 font-serif pb-40">
      
      {/* Title Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 w-full">
        {/* Adjusted Background Text for Better Contrast against Sunset */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-20 overflow-hidden">
          <h1 
            className="text-[15vw] font-black tracking-tighter whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: '2px rgba(255,200,100,0.8)' }}
          >
            ADVENTURER
          </h1>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-widest mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)] relative z-10 text-white">
          {cvData.profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-[#ffd700] tracking-[0.3em] uppercase mb-8 font-sans font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {cvData.profile.class}
        </h2>
        <div className="w-24 h-[2px] bg-[#ffd700] mb-8 shadow-[0_0_10px_rgba(0,0,0,1)]" />
        <p className="max-w-2xl text-lg leading-relaxed text-white/90 font-sans bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-[#ffd700]/20 shadow-2xl">
          {cvData.profile.summary}
        </p>
      </section>

      {/* Improved Guild Quests Layout (Masonry) */}
      <section ref={containerRef} className="min-h-screen w-full max-w-6xl px-8 flex flex-col justify-center relative z-20">
        <h3 className="text-4xl md:text-5xl text-[#ffd700] mb-2 tracking-widest anime-stagger opacity-0 font-bold uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Guild Quests
        </h3>
        <div className="h-[2px] bg-gradient-to-r from-[#ffd700] to-transparent w-full mb-12 anime-line opacity-80" />
        
        {/* CSS Columns Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-8">
          {cvData.quests.map((quest) => (
            <div 
              key={quest.id} 
              className="anime-stagger opacity-0 break-inside-avoid mb-8 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-[#ffd700]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] group magnetic relative overflow-hidden inline-block w-full"
            >
              {/* Decorative magic glow behind the card */}
              <div className="absolute -inset-20 bg-gradient-to-br from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <span className="text-xs text-[#ffd700] font-sans font-bold tracking-widest uppercase mb-3 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {quest.period}
                  </span>
                  <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {quest.title}
                  </h4>
                  <h5 className="text-lg text-[#ffd700]/80 mb-6 font-sans border-l-2 border-[#ffd700] pl-4 italic">
                    {quest.role}
                  </h5>
                </div>
                <ul className="space-y-4 font-sans text-white/85 text-sm leading-relaxed">
                  {quest.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#ffd700] mt-1 text-lg leading-none">♦</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgraded Grimoire Affinities */}
      <section className="min-h-screen w-full max-w-6xl px-8 flex flex-col justify-center mt-32 relative z-20">
        <h3 className="text-4xl md:text-5xl text-[#ffd700] mb-2 tracking-widest anime-stagger opacity-0 font-bold uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Grimoire Affinities
        </h3>
        <div className="h-[2px] bg-gradient-to-r from-[#ffd700] to-transparent w-full mb-12 anime-line opacity-80" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cvData.grimoire.map((category, i) => (
            <div 
              key={i} 
              className="grimoire-card anime-stagger opacity-0 bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-[#ffd700]/20 hover:border-[#ffd700] transition-all duration-500 magnetic relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd700]/5 rounded-full blur-3xl group-hover:bg-[#ffd700]/20 transition-colors duration-500" />
              
              <h4 className="text-2xl text-white drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] mb-6 font-bold flex items-center gap-3">
                <span className="text-[#ffd700] text-3xl">✦</span>
                {category.category}
              </h4>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl text-sm font-sans font-medium hover:border-[#ffd700] hover:text-[#ffd700] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
