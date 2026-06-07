'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const EVENTS = [
  {
    id: '1',
    date: 'July 12, 2026',
    day: '12',
    month: 'JUL',
    title: 'La Serata dei Truffle',
    subtitle: 'An evening dedicated to the black truffle',
    description: 'Join us for a six-course tasting menu celebrating the seasonal black truffle harvest. Chef Marco presents exclusive preparations pairing Périgord truffles with our signature slow-fermented doughs, rare Italian wines, and artisanal accompaniments.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    capacity: '24 guests',
    price: '€195 per person',
    badge: 'Sold Out',
  },
  {
    id: '2',
    date: 'August 3, 2026',
    day: '03',
    month: 'AUG',
    title: 'Pizza Masterclass',
    subtitle: 'Learn from Chef Marco Esposito',
    description: 'An intimate masterclass with our Executive Chef. Learn the art of Neapolitan dough preparation, wood-fired technique, and ingredient selection. Includes a full lunch with wine pairing and a signed recipe booklet.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    capacity: '12 guests',
    price: '€145 per person',
    badge: 'Available',
  },
  {
    id: '3',
    date: 'August 22, 2026',
    day: '22',
    month: 'AUG',
    title: 'Napoli Nights',
    subtitle: 'Live music & summer tasting menu',
    description: 'An evening of live Neapolitan music, flowing Barolo, and a curated summer tasting menu. Hosted on our private terrace with views of the city. Dress code: smart casual. Limited seating available.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    capacity: '40 guests',
    price: '€85 per person',
    badge: 'Available',
  },
  {
    id: '4',
    date: 'September 15, 2026',
    day: '15',
    month: 'SEP',
    title: 'Harvest Dinner',
    subtitle: 'Celebrating the Italian autumn harvest',
    description: 'A special autumn dinner celebrating the Italian harvest season. Wild mushrooms, aged cheeses, late-harvest wines, and the very first truffle shavings of the season. An unmissable culinary event.',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80',
    capacity: '30 guests',
    price: '€165 per person',
    badge: 'Upcoming',
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24">

        {/* Page hero */}
        <div className="relative py-20 overflow-hidden border-b border-white/[0.06]"
          style={{ background: 'linear-gradient(180deg, #0D0D14 0%, var(--bg-primary) 100%)' }}
        >
          <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-ember-500/[0.05] blur-[120px] pointer-events-none" />
          <div className="container-site relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Curated Experiences</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h1 className="heading-section text-white mb-4">Events & <span className="text-ember-500 italic">Experiences</span></h1>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
                Exclusive dining events, masterclasses, and private evenings curated
                for guests who seek more than a meal — an unforgettable experience.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-site py-16">
          <div className="flex flex-col gap-12">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.07] hover:border-ember-500/20 transition-all duration-400"
                style={{ background: 'var(--bg-card)' }}
              >
                {/* Image */}
                <div className={`relative aspect-[16/9] md:aspect-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-noir-900/40 to-transparent" />

                  {/* Date badge */}
                  <div className="absolute top-6 left-6 glass rounded-xl p-3 text-center min-w-[56px]">
                    <div className="font-display font-bold text-white text-2xl leading-none">{event.day}</div>
                    <div className="text-ember-400 text-[0.6rem] tracking-widest font-medium mt-0.5">{event.month}</div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`badge ${event.badge === 'Sold Out' ? 'badge-seller' : 'badge-chef'}`}>
                      {event.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center gap-5 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    <p className="text-ember-400 text-[0.7rem] tracking-[0.2em] uppercase font-body font-medium mb-2">{event.subtitle}</p>
                    <h2 className="heading-section text-white text-2xl lg:text-3xl mb-4">{event.title}</h2>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{event.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs border-t border-white/[0.06] pt-5">
                    <div>
                      <span className="text-[var(--text-muted)] tracking-wide">Date</span>
                      <div className="text-white font-medium mt-0.5">{event.date}</div>
                    </div>
                    <div>
                      <span className="text-[var(--text-muted)] tracking-wide">Capacity</span>
                      <div className="text-white font-medium mt-0.5">{event.capacity}</div>
                    </div>
                    <div>
                      <span className="text-[var(--text-muted)] tracking-wide">Price</span>
                      <div className="text-ember-400 font-display font-bold text-base mt-0.5">{event.price}</div>
                    </div>
                  </div>

                  <div>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                      className="inline-block"
                    >
                      <Link
                        href="/contact"
                        className={`btn ${event.badge === 'Sold Out' ? 'btn-outline opacity-50 pointer-events-none' : 'btn-primary'}`}
                      >
                        {event.badge === 'Sold Out' ? 'Fully Booked' : 'Reserve a Seat'}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Private events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 p-10 rounded-2xl border border-ember-500/15 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(224,123,58,0.05) 0%, rgba(8,8,8,0) 100%)' }}
          >
            <div className="text-3xl mb-4">🎉</div>
            <h3 className="heading-section text-white text-2xl mb-3">Private Events</h3>
            <p className="text-[var(--text-secondary)] text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Host your private celebration, corporate dinner, or special occasion at Napoli Nero.
              Our team will craft a bespoke experience exclusively for your group.
            </p>
            <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
