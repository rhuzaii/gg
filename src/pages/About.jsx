import { motion } from 'framer-motion';
import cafeInterior3 from '../assets/cafe-interior-3.png';
import cafeEspressoMachine from '../assets/cafe-espresso-machine.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

const values = [
  { emoji: '🌿', title: 'Fresh First', desc: 'Ingredients sourced daily — salads, juices, and every dish made fresh, never frozen.' },
  { emoji: '🫶', title: 'Made with Love', desc: 'Every dish leaves our kitchen with care. No shortcuts, no compromises — honest food always.' },
  { emoji: '⚖️', title: 'Balanced', desc: 'Healthy eating that\'s practical and affordable, not extreme or restrictive.' },
  { emoji: '✨', title: 'For Everyone', desc: 'Veg, non-veg, custom portions — there\'s something here for every lifestyle.' },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ backgroundColor: '#4F5D4A', padding: '4rem 1.5rem 3.5rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'rgba(230,201,168,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E6C9A8', marginBottom: '0.75rem' }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: 700, color: '#F7F3EE', lineHeight: 1.1, marginBottom: '1rem' }}
          >
            A small dream<br /><em style={{ color: '#E6C9A8' }}>turned real</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: 'rgba(247,243,238,0.72)', lineHeight: 1.8 }}
          >
            Started with no expectations, grown by passion — this is Greens & Giggles.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="two-col-grid" style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '0.75rem' }}>How We Started</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#4F5D4A', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              From a home kitchen<br />to <em>your table</em>
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#7A8B75', lineHeight: 1.9, marginBottom: '1rem' }}>
              Greens & Giggles started with no expectations — just a small cloud kitchen at home and a genuine love for good food. One step led to another, expanding into a girls' PG, and now stepping into a full commercial outlet.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#7A8B75', lineHeight: 1.9, marginBottom: '1rem' }}>
              We wanted to create a space where healthy eating feels practical, affordable, and enjoyable — not extreme or restrictive. Our menu focuses on fresh salads, continental comfort dishes, and Mexican favorites, all made with balanced ingredients.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#7A8B75', lineHeight: 1.9, marginBottom: '2rem' }}>
              We pay attention to quality, portion, and flavor so every meal feels satisfying and worth it. Grateful for the journey, and grateful for you.
            </p>
            <a
              href="https://www.instagram.com/greens_and_giggles"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                borderBottom: '1.5px solid #8B6B4A',
                fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600,
                color: '#8B6B4A', textDecoration: 'none', paddingBottom: '2px',
              }}
            >
              Follow our journey @greens_and_giggles →
            </a>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(79,93,74,0.15)' }}>
              <img src={cafeInterior3} alt="Mirror & Light at Greens & Giggles" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(79,93,74,0.1)' }}>
              <img src={cafeEspressoMachine} alt="The Machine at Greens & Giggles" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#4F5D4A', padding: '4rem 1.5rem' }}>
        <div className="stats-grid" style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' }}>
          {[
            { number: '2022', label: 'Founded' },
            { number: '900+', label: 'Instagram followers' },
            { number: '70+', label: 'Menu items' },
            { number: '100%', label: 'Made fresh daily' },
          ].map(({ number, label }) => (
            <motion.div
              key={label}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              style={{ textAlign: 'center', padding: '1.5rem 1rem', borderRadius: '16px', backgroundColor: 'rgba(247,243,238,0.07)' }}
            >
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#E6C9A8', lineHeight: 1 }}>{number}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', color: 'rgba(247,243,238,0.65)', marginTop: '0.5rem' }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '0.75rem' }}>What We Stand For</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#4F5D4A' }}>Our values, on a plate</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="menu-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title} variants={fadeUp} custom={i}
                whileHover={{ y: -4 }}
                style={{ border: '1px solid #E6C9A8', borderRadius: '16px', padding: '2rem 1.5rem', backgroundColor: '#F7F3EE' }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{v.emoji}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#4F5D4A', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', color: '#7A8B75', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Quote */}
      <section style={{ backgroundColor: '#E6C9A8', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          style={{ maxWidth: '680px', margin: '0 auto' }}
        >
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '1.5rem' }}>Our Promise</p>
          <blockquote style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontStyle: 'italic', color: '#4F5D4A', lineHeight: 1.55, marginBottom: '1.75rem',
          }}>
            "We're simply passionate about serving honest food that fits into real, everyday lifestyles."
          </blockquote>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.83rem', color: '#8B6B4A', fontWeight: 500 }}>
            — The Greens &amp; Giggles Team
          </p>
        </motion.div>
      </section>
    </div>
  );
}
