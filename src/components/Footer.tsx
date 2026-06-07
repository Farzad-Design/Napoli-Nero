'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SOCIALS = [
  { label: 'LinkedIn',    href: '#', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Instagram',   href: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'X / Twitter', href: '#', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'TikTok',      href: '#', path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
];

const NAV = ['Menu', 'Events', 'Gallery', 'About', 'Contact', 'Reserve a Table'];
const SIGNATURES = ['Margherita Classica', 'Pepperoni Nero', 'Diavola Piccante', 'Quattro Formaggi', 'Tartufo Nero', 'Napoli Nero Speciale'];

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 border-t border-white/[0.06]"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, #050508 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-ember-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="w-fit group">
              <Image
                src="/logo/Logo.svg"
                alt="Napoli Nero"
                width={120}
                height={48}
                className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>

            <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
              An elevated Italian pizza experience where Naples tradition meets modern luxury.
              Every pizza is a crafted expression, baked in fire, refined with precision.
            </p>

            {/* Opening hours */}
            <div className="flex flex-col gap-2">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ember-500 font-medium">Opening Hours</span>
              {[
                ['Mon – Fri', '12:00 — 22:30'],
                ['Saturday',  '12:00 — 23:30'],
                ['Sunday',    'Closed (Private Events)'],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between text-[0.72rem] text-[var(--text-secondary)]">
                  <span>{day}</span>
                  <span className="text-white/70">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ember-500 font-medium font-body">Navigation</span>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((item) => {
                const href = item === 'Reserve a Table' ? '/contact' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="text-[var(--text-secondary)] hover:text-white text-[0.78rem] tracking-wide transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Signature Creations */}
          <div className="flex flex-col gap-4">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ember-500 font-medium font-body">Signature Creations</span>
            <ul className="flex flex-col gap-2.5">
              {SIGNATURES.map((item) => (
                <li key={item}>
                  <Link
                    href="/menu"
                    className="text-[var(--text-secondary)] hover:text-white text-[0.78rem] tracking-wide transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow + Social */}
          <div className="flex flex-col gap-4">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ember-500 font-medium font-body">Follow The House</span>
            <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
              A curated glimpse into our world of fire, flavor, and design.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] hover:border-ember-500/50 hover:bg-ember-500/10 transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-[0.68rem] tracking-wide text-center md:text-left">
            © 2026 Napoli Nero. All rights reserved. A conceptual UI/UX project by Farzad Shahidi.
          </p>
          <p className="text-[var(--text-muted)] text-[0.68rem] italic">
            Crafted in Naples. Designed for modern taste.
          </p>
          <div className="flex gap-5">
            {['Terms of Service', 'Privacy Policy'].map((item) => (
              <Link key={item} href="#" className="text-[var(--text-muted)] hover:text-white text-[0.68rem] tracking-wide transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
