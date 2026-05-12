import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import cafeInterior2 from '../assets/cafe-interior-2.png';
import cafeInterior3 from '../assets/cafe-interior-3.png';
import cafeInterior4 from '../assets/cafe-interior-4.png';
import cafeBoohs from '../assets/cafe-booths.jpg';
import cafeEntranceReal from '../assets/cafe-entrance-real.jpg';
import cafeWavyCeiling from '../assets/cafe-wavy-ceiling.jpg';
import cafeBarArea from '../assets/cafe-bar-area.jpg';
import cafeBarStation from '../assets/cafe-bar-station.jpg';
import cafeDoorView from '../assets/cafe-door-view.jpg';
import cafeEspressoMachine from '../assets/cafe-espresso-machine.jpg';
import cafeColdBrew from '../assets/cafe-cold-brew.jpg';

import dishBurritoBowl from '../assets/dish-burrito-bowl.jpg';
import dishToast       from '../assets/dish-toast.jpg';
import dishSmoothie    from '../assets/dish-smoothie.jpg';
import dishSoup        from '../assets/dish-soup.jpg';

const galleryItems = [
  { id: 1,  src: cafeBoohs,           label: 'Botanical Arches',    category: 'Interiors'  },
  { id: 2,  src: cafeWavyCeiling,     label: 'Wave & Mirror',       category: 'Interiors'  },
  { id: 3,  src: cafeBarArea,         label: 'The Bar Nook',        category: 'Interiors'  },
  { id: 4,  src: cafeBarStation,      label: 'The Bar Station',     category: 'Interiors'  },
  { id: 5,  src: cafeDoorView,        label: 'Through the Door',    category: 'Entrance'   },
  { id: 6,  src: cafeEntranceReal,    label: 'Our Doorstep',        category: 'Entrance'   },
  { id: 7,  src: cafeInterior2,       label: 'Warm Evenings',       category: 'Interiors'  },
  { id: 8,  src: cafeInterior3,       label: 'Mirror & Light',      category: 'Interiors'  },
  { id: 9,  src: cafeInterior4,       label: 'Cozy Corner',         category: 'Interiors'  },
  { id: 10, src: dishBurritoBowl,     label: 'Signature Burrito Bowl', category: 'Food'    },
  { id: 11, src: cafeEspressoMachine, label: 'The Machine',         category: 'Beverages'  },
  { id: 12, src: cafeColdBrew,        label: 'Cold Brew Pour',      category: 'Beverages'  },
  { id: 13, src: dishToast,           label: 'Signature Toast',     category: 'Food'       },
  { id: 14, src: dishSmoothie,        label: 'Fresh Smoothie',      category: 'Food'       },
  { id: 15, src: dishSoup,            label: 'Broccoli Almond Soup',category: 'Food'       },
];

const galleryCategories = ['All', 'Food', 'Interiors', 'Entrance', 'Beverages'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = galleryItems.filter((item) =>
    activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ backgroundColor: '#4F5D4A', padding: '4rem 1.5rem 3.5rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'rgba(230,201,168,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E6C9A8', marginBottom: '0.75rem' }}
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: 700, color: '#F7F3EE', lineHeight: 1.1, marginBottom: '0.75rem' }}
          >
            Inside Greens<br /><em style={{ color: '#E6C9A8' }}>&amp; Giggles</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: 'rgba(247,243,238,0.72)', lineHeight: 1.7 }}
          >
            Warm lights, leafy arches, and a space built with love — welcome in.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #E6C9A8', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', fontWeight: 500,
                padding: '7px 20px', borderRadius: '100px', border: '1.5px solid',
                borderColor: activeFilter === cat ? '#4F5D4A' : '#E6C9A8',
                backgroundColor: activeFilter === cat ? '#4F5D4A' : 'transparent',
                color: activeFilter === cat ? '#F7F3EE' : '#7A8B75',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <section style={{ padding: '2.5rem 1.5rem 6rem', maxWidth: '1152px', margin: '0 auto' }}>
        <motion.div layout className="gallery-masonry" style={{ columns: '2 280px', columnGap: '16px' }}>
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id} layout
                variants={fadeUp} initial="hidden" animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setLightbox(item)}
                whileHover={{ scale: 1.015 }}
                style={{
                  breakInside: 'avoid', marginBottom: '16px',
                  borderRadius: '16px', overflow: 'hidden',
                  cursor: 'pointer', position: 'relative',
                  boxShadow: '0 4px 24px rgba(79,93,74,0.12)',
                }}
              >
                <img
                  src={item.src} alt={item.label}
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(20,26,20,0.7) 0%, transparent 100%)',
                  padding: '2rem 1.25rem 1rem',
                }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#F7F3EE', margin: 0 }}>{item.label}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', color: 'rgba(247,243,238,0.7)', marginTop: '3px' }}>{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem', padding: '3rem 1.5rem', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #E6C9A8' }}
        >
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '0.75rem' }}>Follow us for more</p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#4F5D4A', marginBottom: '0.75rem' }}>
            See it on Instagram
          </h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#7A8B75', marginBottom: '1.5rem' }}>
            Daily specials, behind-the-scenes moments, and lots of food porn.
          </p>
          <a
            href="https://www.instagram.com/greens_and_giggles"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#4F5D4A', color: '#F7F3EE',
              fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', fontWeight: 500,
              padding: '12px 28px', borderRadius: '100px', textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @greens_and_giggles
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(10,14,10,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 200, padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '760px', width: '100%', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}
            >
              <img src={lightbox.src} alt={lightbox.label} style={{ width: '100%', display: 'block', maxHeight: '80dvh', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(10,14,10,0.8), transparent)',
                padding: '2rem 1.5rem 1.25rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              }}>
                <div>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#F7F3EE' }}>{lightbox.label}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: 'rgba(247,243,238,0.65)', marginTop: '3px' }}>{lightbox.category}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    border: '1.5px solid rgba(247,243,238,0.3)',
                    backgroundColor: 'rgba(247,243,238,0.1)',
                    cursor: 'pointer', color: '#F7F3EE', fontSize: '1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >✕</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
