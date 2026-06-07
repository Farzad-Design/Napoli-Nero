'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PHOTOS = [
  { id: '1', src: '/images/pizza1.jpg', alt: 'Margherita Classica', category: 'Food', span: 'col-span-1 row-span-2' },
  { id: '2', src: '/images/pizza2.jpg', alt: 'Tartufo Nero', category: 'Food', span: 'col-span-1' },
  { id: '3', src: '/images/pizza3.jpg', alt: 'Pepperoni Nero', category: 'Food', span: 'col-span-1' },
  { id: '4', src: '/images/pizza4.jpg', alt: 'Quattro Formaggi', category: 'Food', span: 'col-span-2' },
  { id: '5', src: '/images/pizza5.jpg', alt: 'Diavola Piccante', category: 'Food', span: 'col-span-1 row-span-2' },
  { id: '6', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Restaurant interior', category: 'Ambience', span: 'col-span-1' },
  { id: '7', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Fine dining table', category: 'Ambience', span: 'col-span-1' },
  { id: '8', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80', alt: 'Chef at work', category: 'Behind the Scenes', span: 'col-span-2' },
  { id: '9', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', alt: 'Dough preparation', category: 'Behind the Scenes', span: 'col-span-1' },
  { id: '10', src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80', alt: 'Wood-fired oven', category: 'Behind the Scenes', span: 'col-span-1' },
  { id: '11', src: '/images/pizza1.jpg', alt: 'Pizza detail', category: 'Food', span: 'col-span-1' },
  { id: '12', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', alt: 'Evening atmosphere', category: 'Ambience', span: 'col-span-2' },
];

const CATEGORIES = ['All', 'Food', 'Ambience', 'Behind the Scenes'];

export default function GalleryPage() {
  const [active,   setActive]   = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24">

        {/* Header */}
        <div className="relative py-20 overflow-hidden border-b border-white/[0.06]"
          style={{ background: 'linear-gradient(180deg, #0D0D14 0%, var(--bg-primary) 100%)' }}
        >
          <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-ember-500/[0.04] blur-[120px] pointer-events-none" />
          <div className="container-site relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Visual Story</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h1 className="heading-section text-white mb-4">Gallery</h1>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
                A curated glimpse into our world of fire, flavor, and design.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-site py-12">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase font-body transition-all duration-300 border ${
                  active === cat
                    ? 'bg-ember-500 text-white border-ember-500'
                    : 'bg-transparent text-[var(--text-secondary)] border-white/[0.12] hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[240px]"
          >
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer ${photo.span}`}
                  onClick={() => setLightbox(photo.src)}
                >
                  <Image
                    src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white text-xs font-medium tracking-wide">{photo.alt}</p>
                    <p className="text-ember-400 text-[0.6rem] tracking-widest uppercase mt-0.5">{photo.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-noir-950/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Gallery photo" fill className="object-cover" sizes="100vw" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:text-ember-400 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
