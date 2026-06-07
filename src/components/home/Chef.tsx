'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Chef() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Parallax on chef image */
    gsap.fromTo(imageRef.current, { y: 40 }, {
      y: -40, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 },
    });

    /* Stagger content items */
    const items = contentRef.current?.querySelectorAll('.reveal-item');
    if (items?.length) {
      gsap.fromTo(items, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power2.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      });
    }

    gsap.fromTo('.chef-image-wrap', { scale: 0.9, opacity: 0, x: 60 }, {
      scale: 1, opacity: 1, x: 0, duration: 1.1, ease: 'power2.out',
      scrollTrigger: { trigger: section, start: 'top 68%', toggleActions: 'play none none reverse' },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="chef"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' }}
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ember-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ember-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div ref={contentRef} className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="reveal-item flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-ember-500" />
              <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">The Craft</span>
            </div>

            <h2 className="reveal-item heading-section text-white">
              Our Expert<br />
              <span className="text-ember-500 italic">Chef</span>
            </h2>

            <p className="reveal-item text-[var(--text-secondary)] leading-relaxed">
              Our expert chef brings decades of experience and passion, crafting authentic
              Italian flavors with precision, artistry, and true culinary mastery.
            </p>

            <p className="reveal-item text-[var(--text-secondary)] leading-relaxed text-sm">
              Trained in Naples and refined across Europe's finest kitchens, Chef Marco
              has dedicated 25 years to preserving the soul of Neapolitan pizza while
              pushing its boundaries into the realm of modern fine dining.
            </p>

            <div className="reveal-item grid grid-cols-2 gap-3">
              {[
                { icon: '🏆', label: 'Michelin Trained'    },
                { icon: '🔥', label: 'Wood-Fired Master'   },
                { icon: '🍕', label: '25 Years Experience' },
                { icon: '🌿', label: 'Farm-to-Table Focus' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[var(--text-secondary)] text-xs tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal-item flex flex-wrap gap-3 pt-2">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/menu" className="btn btn-outline">View Menu</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href="/contact" className="btn btn-primary">Book a Table</Link>
              </motion.div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="chef-image-wrap relative order-1 lg:order-2" ref={imageRef}>
            <div
              className="relative w-full max-w-[480px] ml-auto rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
                border: '2px solid rgba(192,192,192,0.45)',
              }}
            >
              <Image
                src="/images/chef.png"
                alt="Napoli Nero Head Chef"
                width={480}
                height={600}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-8 top-1/3 glass rounded-xl p-3 flex items-center gap-2.5"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <div className="text-white text-xs font-semibold">Best Chef</div>
                <div className="text-[var(--text-muted)] text-[0.6rem]">Italy Awards 2024</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
