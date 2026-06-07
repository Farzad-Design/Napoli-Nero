'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/menu',    label: 'Menu'    },
  { href: '/events',  label: 'Events'  },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px] cursor-pointer">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        className="block h-[1.5px] w-full bg-white rounded-full origin-center"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        className="block h-[1.5px] w-full bg-white rounded-full"
        transition={{ duration: 0.2 }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        className="block h-[1.5px] w-full bg-white rounded-full origin-center"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'backdrop-blur-2xl bg-[rgba(7,7,9,0.88)] border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent',
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="shrink-0 group">
              <Image
                src="/logo/Logo.svg"
                alt="Napoli Nero"
                width={120}
                height={48}
                className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-[0.78rem] font-body font-medium tracking-[0.07em] uppercase transition-colors duration-300',
                      active ? 'text-white' : 'text-[var(--text-secondary)] hover:text-white',
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-ember-500 rounded-full"
                      />
                    )}
                    {i < NAV_LINKS.length - 1 && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 bg-white/10" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="hidden md:flex btn btn-primary text-[0.72rem] px-5 py-2.5">
                  Book a Table
                </Link>
              </motion.div>

              <button
                className="lg:hidden p-1"
                aria-label="Toggle mobile menu"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <MenuIcon open={mobileOpen} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[72px] left-0 right-0 z-40 backdrop-blur-2xl bg-[rgba(7,7,9,0.95)] border-b border-white/[0.06] lg:hidden"
          >
            <div className="container-site py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-2 py-3 text-[0.88rem] font-medium tracking-widest uppercase text-[var(--text-secondary)] hover:text-white border-b border-white/[0.04] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-4 btn btn-primary w-full text-center text-sm justify-center">
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
