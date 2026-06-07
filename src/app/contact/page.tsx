'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HOURS = [
  { day: 'Monday – Friday', time: '12:00 — 22:30' },
  { day: 'Saturday',        time: '12:00 — 23:30' },
  { day: 'Sunday',          time: 'Closed (Private Events Only)' },
];

const INFO = [
  { icon: '📍', label: 'Address',  value: 'Via Partenope 24, Naples, Italy 80121' },
  { icon: '📞', label: 'Phone',    value: '+39 081 764 0001' },
  { icon: '✉️', label: 'Email',    value: 'reservations@napolinero.com' },
  { icon: '🅿️', label: 'Parking',  value: 'Valet parking available on request' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3.5 rounded-lg text-sm font-body text-white placeholder:text-[var(--text-muted)] outline-none focus:ring-1 focus:ring-ember-500/50 transition-all`;
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24">

        {/* Header */}
        <div className="relative py-20 overflow-hidden border-b border-white/[0.06]"
          style={{ background: 'linear-gradient(180deg, #0D0D14 0%, var(--bg-primary) 100%)' }}
        >
          <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-ember-500/[0.05] blur-[120px] pointer-events-none" />
          <div className="container-site relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-ember-500" />
                <span className="text-ember-400 text-[0.7rem] font-medium tracking-[0.25em] uppercase font-body">Your Table Awaits</span>
                <div className="w-8 h-[1.5px] bg-ember-500" />
              </div>
              <h1 className="heading-section text-white mb-4">
                Reserve a <span className="text-ember-500 italic">Table</span>
              </h1>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto leading-relaxed">
                We welcome up to 8 guests per reservation. For larger groups or private events,
                please contact us directly.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container-site py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Reservation form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="heading-section text-white text-2xl mb-8">
                Make a <span className="text-ember-500 italic">Reservation</span>
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Email *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="your@email.com" className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (000) 000-0000" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Guests *</label>
                      <select name="guests" required value={form.guests} onChange={handleChange}
                        className={inputClass} style={{ ...inputStyle, cursor: 'pointer' }}>
                        {[1,2,3,4,5,6,7,8].map((n) => (
                          <option key={n} value={n} style={{ background: '#141414' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Date *</label>
                      <input type="date" name="date" required value={form.date} onChange={handleChange}
                        className={inputClass} style={{ ...inputStyle, colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Preferred Time *</label>
                      <select name="time" required value={form.time} onChange={handleChange}
                        className={inputClass} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="" style={{ background: '#141414' }}>Select a time</option>
                        {['12:00','12:30','13:00','13:30','14:00','19:00','19:30','20:00','20:30','21:00','21:30'].map((t) => (
                          <option key={t} value={t} style={{ background: '#141414' }}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Occasion</label>
                    <select name="occasion" value={form.occasion} onChange={handleChange}
                      className={inputClass} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="" style={{ background: '#141414' }}>Select an occasion (optional)</option>
                      {['Birthday','Anniversary','Business Dinner','Date Night','Special Celebration','Other'].map((o) => (
                        <option key={o} value={o} style={{ background: '#141414' }}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-2 block">Special Requests</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange}
                      placeholder="Dietary requirements, allergies, or any special requests..."
                      rows={4} className={inputClass} style={{ ...inputStyle, resize: 'none' }} />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(224,123,58,0.40)' }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary w-full py-4 text-sm mt-2"
                  >
                    Confirm Reservation
                  </motion.button>

                  <p className="text-[var(--text-muted)] text-[0.65rem] text-center tracking-wide">
                    We will confirm your booking within 2 hours. No credit card required.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-8 rounded-2xl border border-ember-500/20 bg-ember-500/5"
                >
                  <div className="text-6xl mb-6">🍕</div>
                  <h3 className="font-display font-semibold text-white text-2xl mb-4">
                    Your Table is Reserved
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-2">
                    Thank you, {form.name}. We have received your reservation for {form.guests} guests
                    on {form.date} at {form.time}.
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm">
                    A confirmation will be sent to <span className="text-ember-400">{form.email}</span>
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col gap-8"
            >
              {/* Contact info */}
              <div className="p-8 rounded-2xl border border-white/[0.07] bg-[var(--bg-card)]">
                <h3 className="text-white font-display font-semibold text-xl mb-6">
                  Find <span className="text-ember-500 italic">Us</span>
                </h3>
                <div className="flex flex-col gap-5">
                  {INFO.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-[var(--text-muted)] text-[0.65rem] tracking-widest uppercase mb-0.5">{item.label}</div>
                        <div className="text-white text-sm">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="p-8 rounded-2xl border border-white/[0.07] bg-[var(--bg-card)]">
                <h3 className="text-white font-display font-semibold text-xl mb-6">
                  Opening <span className="text-ember-500 italic">Hours</span>
                </h3>
                <div className="flex flex-col gap-4">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between items-center border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
                      <span className="text-[var(--text-secondary)] text-sm">{h.day}</span>
                      <span className="text-white text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Private events */}
              <div
                className="p-8 rounded-2xl border border-ember-500/15"
                style={{ background: 'linear-gradient(135deg, rgba(224,123,58,0.06) 0%, transparent 100%)' }}
              >
                <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-white font-display font-semibold text-lg mb-2">Private Events</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                  For groups of 9+ or private dining experiences, please contact us directly.
                  We offer full restaurant buyouts every Sunday.
                </p>
                <a href="mailto:private@napolinero.com" className="btn btn-outline text-xs px-5 py-2.5">
                  private@napolinero.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
