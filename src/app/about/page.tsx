'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const TEAM = [
  {
    name: 'Marco Esposito',
    role: 'Executive Chef',
    bio: 'Trained in Naples, refined in Paris and London. 25 years of wood-fired mastery.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
  },
  {
    name: 'Sofia Ricci',
    role: 'Head Sommelier',
    bio: 'WSET Level 4 qualified. Curates every wine pairing with Italian regional expertise.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Luca Ferrara',
    role: 'Pastry & Desserts',
    bio: 'A master of Italian dolci, elevating every meal with a perfect sweet finale.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
];

const VALUES = [
  { icon: '🔥', title: 'Fire & Craft',    text: 'Every pizza is baked in our authentic Neapolitan wood-fired oven at 485°C for 90 seconds of perfection.' },
  { icon: '🌿', title: 'Premium Sourcing', text: 'We source exclusively from small Italian producers — San Marzano DOP tomatoes, Fior di Latte from Campania, 00 flour from Naples.' },
  { icon: '⏳', title: 'Slow Fermentation', text: 'Our dough ferments for 72 hours. This patience creates a crust with depth, lightness, and digestibility you can taste.' },
  { icon: '🎯', title: 'Precision',        text: 'Every detail matters — from the exact weight of each dough ball to the temperature of the serving plates. Excellence is our standard.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24">

        {/* Hero */}
        <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80"
            alt="Napoli Nero interior"
            fill className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir-950/50 via-noir-950/40 to-[var(--bg-primary)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
              className="text-center px-6"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Our Heritage</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h1 className="heading-section text-white mb-4">
                About <span className="text-ember-500 italic">Napoli Nero</span>
              </h1>
              <p className="text-white/70 text-sm max-w-lg mx-auto leading-relaxed">
                An elevated Italian pizza experience where Naples tradition meets modern luxury.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-site py-20">

          {/* Story section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] max-w-[480px] rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.6)' }}
              >
                <Image src="/images/pizza2.jpg" alt="Our story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 glass rounded-xl p-5">
                  <div className="font-display font-bold text-ember-400 text-3xl mb-1">2009</div>
                  <div className="text-white text-xs tracking-wide">Founded in Naples, Italy</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Our Story</span>
              </div>
              <h2 className="heading-section text-white">
                Born in the<br /><span className="text-ember-500 italic">Heart of Naples</span>
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Napoli Nero was born from a simple obsession: creating the most honest, most precise,
                most extraordinary Neapolitan pizza experience in the world — outside of Naples.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Founded in 2009 by Chef Marco Esposito, our restaurant has grown from a passionate
                project into an internationally recognized dining destination. Every element —
                from the 72-hour fermented dough to the hand-selected San Marzano tomatoes —
                reflects our unwavering commitment to Italian culinary excellence.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Today, Napoli Nero is more than a restaurant. It is a philosophy. A belief that
                extraordinary food, thoughtfully sourced and carefully prepared, has the power
                to transport you to a specific place and moment in time.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-28"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Our Philosophy</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h2 className="heading-section text-white">What Drives <span className="text-ember-500 italic">Us</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v) => (
                <motion.div
                  key={v.title}
                  variants={itemVariants}
                  className="p-6 rounded-2xl border border-white/[0.07] bg-[var(--bg-card)] hover:border-ember-500/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-white font-display font-semibold text-lg mb-3">{v.title}</h3>
                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">The People</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h2 className="heading-section text-white">Meet the <span className="text-ember-500 italic">Team</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="group flex flex-col items-center text-center gap-4"
                >
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/[0.08] group-hover:border-ember-500/25 transition-all duration-300">
                    <Image src={member.image} alt={member.name} fill sizes="192px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-950/50 to-transparent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-xl">{member.name}</h3>
                    <p className="text-ember-400 text-xs tracking-widest uppercase font-body mt-1">{member.role}</p>
                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed mt-3 max-w-[220px] mx-auto">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-16 border-t border-white/[0.06]">
            <h3 className="heading-section text-white text-3xl mb-4">
              Come <span className="text-ember-500 italic">Experience</span> Us
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-8 max-w-md mx-auto">
              Reserve your table and let us take you on a journey through the flavors of Naples.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/menu"    className="btn btn-outline">View Menu</Link>
              <Link href="/contact" className="btn btn-primary">Book a Table</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
