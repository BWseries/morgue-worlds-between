'use client';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Verrin',
    role: 'Ruler within Underworld',
    image: '/images/verrin_NEW_nobg.png',
  },
  {
    name: 'Dr. Elara Voss',
    role: 'Forensic Pathologist, Chief M.E.',
    image: '/images/elara tnsprtnt bkgrnd.png',
  },
  {
    name: 'Detective Rayne',
    role: 'Homicide Detective',
    image: 'Det Rayne_dirty_blonde_hair.png',
  },
];

export default function DarkFantasyHomepage() {
  return (
    <main className="min-h-screen bg-[#050506] text-[#d8d1c5] relative overflow-hidden font-serif">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(122,17,22,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(212,106,58,0.08),transparent_25%)]" />
      <div className="absolute inset-0 opacity-20 blur-3xl animate-pulse bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_20%)]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="border-r border-[#7a1116]/20 p-8 flex flex-col justify-between bg-black/40 backdrop-blur-md">
          <div>
            <div className="text-4xl text-[#7a1116] mb-8">◈</div>
            <nav className="space-y-5 text-sm tracking-[0.2em] uppercase text-[#d8d1c5]/80">
              {['Home', 'Characters', 'Case Files', 'Infernal Archive', 'Lore', 'Gallery', 'About'].map((item) => (
                <div
                  key={item}
                  className="hover:text-[#d46a3a] cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>
          <p className="text-xs text-[#9ea0a6] italic leading-relaxed">
            Between the last breath and the first judgment lies a truth most fear to uncover.
          </p>
        </aside>

        {/* Main Content */}
        <section>
          {/* Hero */}
          <section className="relative min-h-[70vh] px-10 py-20 flex flex-col justify-center border-b border-[#7a1116]/20 overflow-hidden">
            {/* Faded atmospheric hero artwork */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-20"
              style={{ backgroundImage: "url('/images/hero-throne.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.92))]" />

            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl tracking-wide mb-4"
              >
                MORGUE:
                <br />
                WORLDS BETWEEN
              </motion.h1>

              <p className="text-xl text-[#d8d1c5]/70 max-w-xl mb-8">
                Death is not the end. It is only the doorway.
              </p>

              <button className="self-start px-8 py-3 border border-[#7a1116] text-[#d8d1c5] hover:bg-[#7a1116]/20 rounded-xl transition-all">
                Enter the Archive
              </button>
            </div>
          </section>

          {/* Character Codex */}
          <section className="px-10 py-16 border-b border-[#7a1116]/20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl">Character Codex</h2>
              <span className="text-sm text-[#d46a3a] cursor-pointer">View All</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {characters.map((char) => (
                <motion.div
                  key={char.name}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={char.image}
                    alt={char.name}
                   className="w-full h-80 object-contain bg-black"
                  />
                  <div className="p-4">
                    <h3 className="text-xl">{char.name}</h3>
                    <p className="text-[#d46a3a] text-sm uppercase tracking-wider">
                      {char.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Archive Panels */}
          <section className="grid md:grid-cols-2 gap-8 px-10 py-16">
            <div className="border border-white/10 rounded-xl p-8 bg-white/5">
              <h2 className="text-2xl mb-4">Case Files</h2>
              <ul className="space-y-3 text-[#d8d1c5]/70">
                <li>Case 24-7719 — Pattern Burns</li>
                <li>Case 17-4421 — Ritual Mutilation</li>
                <li>Case 09-2310 — Infernal Marks</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-xl p-8 bg-white/5">
              <h2 className="text-2xl mb-4">Infernal Archive</h2>
              <ul className="space-y-3 text-[#d8d1c5]/70">
                <li>The Nine Circles</li>
                <li>Infernal Hierarchy</li>
                <li>Forbidden Rituals</li>
                <li>Ancient Sigils</li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
