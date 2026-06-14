'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { dishes } from '@/data/dishes';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

const CATEGORIES = ['All', 'Classiche', 'Speciali'];

const EXTRAS = [
  { name: 'Burrata Fresca',    description: 'Creamy burrata di bufala from Puglia', price: 8,  icon: '🧀' },
  { name: 'Prosciutto Crudo',  description: '24-month aged Prosciutto di Parma',   price: 7,  icon: '🥩' },
  { name: 'Rucola & Parmesan', description: 'Wild arugula, shaved parmigiano',     price: 4,  icon: '🌿' },
  { name: 'Truffle Oil',       description: 'Cold-pressed Périgord truffle oil',    price: 6,  icon: '🍄' },
];

const DRINKS = [
  { name: 'Barolo DOCG 2019',  description: 'Piedmont, full-bodied, structured',  price: 16, icon: '🍷' },
  { name: 'Limoncello Spritz', description: 'Amalfi lemons, prosecco, ice',        price: 12, icon: '🍋' },
  { name: 'San Pellegrino',    description: 'Italian sparkling mineral water',      price: 5,  icon: '💧' },
  { name: 'Espresso Romano',   description: 'Double shot with lemon peel',          price: 4,  icon: '☕' },
];

function ItemCard({ item }: { item: { name: string; description: string; price: number; image?: string; icon?: string; badges?: string[] } }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative h-full rounded-2xl overflow-hidden border border-white/[0.07] bg-[var(--bg-card)] transition-all duration-300 hover:border-ember-500/25 flex flex-col"
    >
      {item.image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-900/60 to-transparent" />
          {item.badges && item.badges.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-1.5">
              {item.badges.map((b) => (
                <span key={b} className={b === 'Chef Choice' ? 'badge badge-chef' : 'badge badge-seller'}>
                  {b === 'Chef Choice' ? '👨‍🍳' : '⭐'} {b}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      <div className={`p-5 flex items-start justify-between gap-4 flex-1 ${!item.image ? 'flex-row items-center' : ''}`}>
        <div className="flex-1 min-w-0">
          {item.icon && <span className="text-2xl mb-2 block">{item.icon}</span>}
          <h3 className="heading-card text-white mb-1">{item.name}</h3>
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed line-clamp-2">{item.description}</p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="font-display font-bold text-ember-400 text-xl whitespace-nowrap">{formatPrice(item.price)}</span>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="btn btn-primary text-[0.65rem] px-3 py-1.5"
          >
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? dishes : dishes.filter((d) => d.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24">

        {/* Page hero */}
        <div className="relative py-20 overflow-hidden border-b border-white/[0.06]"
          style={{ background: 'linear-gradient(180deg, #0D0D14 0%, var(--bg-primary) 100%)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-ember-500/[0.05] blur-[120px] pointer-events-none" />
          <div className="container-site relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Napoli Nero</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h1 className="heading-section text-white mb-4">Our Menu</h1>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
                Handcrafted pizzas made with premium ingredients, wood-fired perfection,
                and authentic Italian flavors carefully curated for a luxury dining experience.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-site py-16">

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase font-body transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-ember-500 text-white border-ember-500'
                    : 'bg-transparent text-[var(--text-secondary)] border-white/[0.12] hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Pizzas grid */}
          <h2 className="heading-section text-white text-2xl mb-8">
            Pizze <span className="text-ember-500 italic">{activeCategory === 'All' ? 'Signature' : activeCategory}</span>
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {filtered.map((dish, i) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <ItemCard item={dish} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Extras */}
          <div className="mb-16">
            <h2 className="heading-section text-white text-2xl mb-2">
              Aggiunte <span className="text-ember-500 italic">& Extras</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm mb-8">Elevate your pizza with our premium additions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {EXTRAS.map((item, i) => (
                <motion.div key={item.name} className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <ItemCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div className="mb-16">
            <h2 className="heading-section text-white text-2xl mb-2">
              Bevande <span className="text-ember-500 italic">& Drinks</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm mb-8">Curated beverages to complement your dining experience.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {DRINKS.map((item, i) => (
                <motion.div key={item.name} className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <ItemCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reserve CTA */}
          <div className="text-center py-16 border-t border-white/[0.06]">
            <h3 className="heading-section text-white text-3xl mb-4">
              Ready to <span className="text-ember-500 italic">Dine?</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-8">Reserve your table and experience Napoli Nero in person.</p>
            <Link href="/contact" className="btn btn-primary">Reserve a Table</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
