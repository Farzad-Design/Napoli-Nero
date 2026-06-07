'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.newsletter-content',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 75%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
    >
      {/* Background video loop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        >
          <source src="/videos/creation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-transparent to-[var(--bg-primary)]" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-ember-500/[0.06] blur-[100px] pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="newsletter-content max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-ember-500" />
            <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">
              Exclusive Access
            </span>
            <div className="w-8 h-[1.5px] bg-ember-500" />
          </div>

          <h2 className="heading-section text-white mb-3">
            Get a Promo Code<br />
            <span className="text-ember-500 italic">by Subscribing</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-10">
            Be the first to know about exclusive events, seasonal menus, and receive
            a welcome discount for your first reservation at Napoli Nero.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-md text-sm font-body text-white placeholder:text-[var(--text-muted)] outline-none focus:ring-1 focus:ring-ember-500/60 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(224,123,58,0.40)' }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary px-8 shrink-0"
              >
                Subscribe
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto p-5 rounded-xl border border-ember-500/30 bg-ember-500/10 text-ember-400 text-sm font-medium"
            >
              Welcome to the family. Your promo code has been sent.
            </motion.div>
          )}

          <p className="text-[var(--text-muted)] text-[0.65rem] mt-5 tracking-wide">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
