'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { dishes, type Dish } from '@/data/dishes';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex-shrink-0 w-full md:w-[300px] rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image} alt={dish.name} fill sizes="300px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-noir-900/0 group-hover:bg-noir-900/20 transition-colors duration-500" />

        {dish.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {dish.badges.map((badge) => (
              <span key={badge} className={badge === 'Chef Choice' ? 'badge badge-chef' : 'badge badge-seller'}>
                {badge === 'Chef Choice' ? '👨‍🍳' : '⭐'} {badge}
              </span>
            ))}
          </div>
        )}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 -40px 60px rgba(224,123,58,0.15)' }} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="heading-card text-white mb-1.5">{dish.name}</h3>
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed line-clamp-3">{dish.description}</p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-display font-bold text-ember-400 text-xl">{formatPrice(dish.price)}</span>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="btn btn-primary text-[0.7rem] px-4 py-2"
          >
            Order Now
          </motion.button>
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: '0 0 0 1px rgba(224,123,58,0.25), 0 8px 40px rgba(224,123,58,0.12)' }}
      />
    </motion.article>
  );
}

export default function SpecialDishes() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    /* Header reveal */
    gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8,
      scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none reverse' },
    });

    /* Horizontal scroll pin — desktop only */
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 96);

    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const tween = gsap.to(track, { x: getScrollAmount, ease: 'none' });
      ScrollTrigger.create({
        trigger: section, pin: true, scrub: 1.2,
        start: 'top top', end: () => `+=${Math.abs(getScrollAmount())}`,
        animation: tween, invalidateOnRefresh: true, anticipatePin: 1,
      });
      return () => tween.kill();
    });
    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg-secondary)]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ember-500/[0.04] blur-[100px] pointer-events-none" />

      {/* Section header */}
      <div ref={headerRef} className="container-site py-16 pb-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-ember-500" />
            <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Signature Creations</span>
            <div className="w-8 h-[1.5px] bg-ember-500" />
          </div>
          <h2 className="heading-section text-white mb-4">Our Special Dishes</h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Handcrafted pizzas made with premium ingredients, wood-fired perfection,
            and authentic Italian flavors carefully curated for a luxury dining experience.
          </p>
        </div>
      </div>

      {/* Scrollable track (desktop) */}
      <div className="relative w-full overflow-hidden hidden md:block">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, var(--bg-secondary) 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, var(--bg-secondary) 0%, transparent 100%)' }} />
        <div ref={trackRef} className="dishes-track px-12 md:px-24 pb-12 pt-4">
          {dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)}
        </div>
      </div>

      {/* Mobile grid */}
      <div className="md:hidden container-site pb-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)}
      </div>

      {/* Scroll hint (desktop) */}
      <div className="hidden md:flex justify-center pb-8 gap-2 items-center opacity-35">
        <div className="w-6 h-[1px] bg-white" />
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white font-body">Scroll to explore</span>
        <div className="w-6 h-[1px] bg-white" />
      </div>

      {/* CTA */}
      <div className="container-site pb-14 flex justify-center gap-3 flex-wrap">
        <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link href="/menu" className="btn btn-primary">View Full Menu</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link href="/contact" className="btn btn-outline">Book a Table</Link>
        </motion.div>
      </div>
    </section>
  );
}
