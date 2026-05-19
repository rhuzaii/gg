import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import cafeInterior2 from '../assets/cafe-interior-2.png';
import cafeInterior3 from '../assets/cafe-interior-3.png';
import cafeInterior4 from '../assets/cafe-interior-4.png';
import cafeBooths from '../assets/cafe-booths.jpg';
import cafeEntranceReal from '../assets/cafe-entrance-real.jpg';
import cafeWavyCeiling from '../assets/cafe-wavy-ceiling.jpg';
import cafeBarArea from '../assets/cafe-bar-area.jpg';
import cafeBarStation from '../assets/cafe-bar-station.jpg';
import cafeDoorView from '../assets/cafe-door-view.jpg';
import cafeEspressoMachine from '../assets/cafe-espresso-machine.jpg';
import cafeColdBrew from '../assets/cafe-cold-brew.jpg';

import dishBurritoBowl from '../assets/dish-burrito-bowl.jpg';
import dishToast from '../assets/dish-toast.jpg';
import dishSmoothie from '../assets/dish-smoothie.jpg';
import dishSoup from '../assets/dish-soup.jpg';

import cafeSpecial1 from '../assets/food1.jpg';
import cafeSpecial2 from '../assets/food2.jpg';
import cafeSpecial3 from '../assets/food3.jpg';
import cafeSpecial4 from '../assets/food4.jpg';

const galleryItems = [
  { id: 1,  src: cafeBooths,         label: 'Botanical Arches',       category: 'Interiors'  },
  { id: 2,  src: cafeBarArea,        label: 'The Bar Nook',           category: 'Interiors'  },
  { id: 3,  src: cafeWavyCeiling,    label: 'Wave & Mirror',          category: 'Interiors'  },
  { id: 4,  src: cafeBarStation,     label: 'The Bar Station',        category: 'Interiors'  },
  { id: 5,  src: cafeDoorView,       label: 'Through the Door',       category: 'Entrance'   },
  { id: 6,  src: cafeEntranceReal,   label: 'Our Doorstep',           category: 'Entrance'   },
  { id: 7,  src: cafeInterior2,      label: 'Warm Evenings',          category: 'Interiors'  },
  { id: 8,  src: cafeInterior3,      label: 'Mirror & Light',         category: 'Interiors'  },
  { id: 9,  src: cafeInterior4,      label: 'Cozy Corner',            category: 'Interiors'  },
  { id: 10, src: dishBurritoBowl,    label: 'Signature Burrito Bowl', category: 'Food'       },
  { id: 11, src: cafeEspressoMachine,label: 'The Machine',            category: 'Beverages'  },
  { id: 12, src: cafeColdBrew,       label: 'Cold Brew Pour',         category: 'Beverages'  },
  { id: 13, src: dishToast,          label: 'Signature Toast',        category: 'Food'       },
  { id: 14, src: dishSmoothie,       label: 'Fresh Smoothie',         category: 'Food'       },
  { id: 15, src: dishSoup,           label: 'Broccoli Almond Soup',   category: 'Food'       },
  { id: 16, src: cafeSpecial1,       label: 'Kitchen Favourites',     category: 'Food'       },
  { id: 17, src: cafeSpecial2,       label: 'Chef\'s Special',        category: 'Food'       },
  { id: 18, src: cafeSpecial3,       label: 'Fresh from the Kitchen', category: 'Food'       },
  { id: 19, src: cafeSpecial4,       label: 'Daily Specials',         category: 'Food'       },
];

const categories = ['All', 'Food', 'Interiors', 'Entrance', 'Beverages'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function GalleryCard({ item, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.04 }}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: hovered
          ? '0 16px 48px rgba(79,93,74,0.22)'
          : '0 2px 16px rgba(79,93,74,0.10)',
        transition: 'box-shadow 0.35s ease',
        backgroundColor: '#E6DDD0',
      }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(15,22,15,0.78) 0%, rgba(15,22,15,0.12) 55%, transparent 100%)',
        opacity: hovered ? 1 : 0.65,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Labels */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.1rem 1rem 0.85rem',
        transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        transition: 'transform 0.35s ease',
      }}>
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#F7F3EE',
          margin: 0,
          lineHeight: 1.3,
        }}>
          {item.label}
        </p>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(230,201,168,0.82)',
          marginTop: '3px',
          opacity: hovered ? 1 : 0.7,
          transition: 'opacity 0.3s ease',
        }}>
          {item.category}
        </p>
      </div>

      {/* Expand icon on hover */}
      <div style={{
        position: 'absolute',
        top: '0.75rem',
        right: '0.75rem',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'rgba(247,243,238,0.15)',
        border: '1px solid rgba(247,243,238,0.3)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'scale(1)' : 'scale(0.7)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F7F3EE" strokeWidth="2.5" strokeLinecap="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = galleryItems.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  const lightboxIndex = lightbox ? filtered.findIndex((i) => i.id === lightbox.id) : -1;

  const prev = useCallback(() => {
    if (lightboxIndex > 0) setLightbox(filtered[lightboxIndex - 1]);
  }, [lightboxIndex, filtered]);

  const next = useCallback(() => {
    if (lightboxIndex < filtered.length - 1) setLightbox(filtered[lightboxIndex + 1]);
  }, [lightboxIndex, filtered]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next]);

  const countFor = (cat) =>
    cat === 'All' ? galleryItems.length : galleryItems.filter((i) => i.category === cat).length;

  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', paddingTop: '72px' }}>

      {/* Header */}
      <section style={{
        backgroundColor: '#4F5D4A',
        padding: '4rem 1.5rem 3.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', backgroundColor: 'rgba(230,201,168,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(230,201,168,0.06)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E6C9A8', marginBottom: '0.75rem' }}
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: 700, color: '#F7F3EE', lineHeight: 1.1, marginBottom: '0.75rem' }}
          >
            Inside Greens<br /><em style={{ color: '#E6C9A8' }}>&amp; Giggles</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: 'rgba(247,243,238,0.68)', lineHeight: 1.7 }}
          >
            Warm lights, leafy arches, and a space built with love — welcome in.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid rgba(230,201,168,0.5)',
        padding: '1rem 1.5rem',
        position: 'sticky',
        top: '72px',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                padding: '7px 18px',
                borderRadius: '100px',
                border: '1.5px solid',
                borderColor: activeFilter === cat ? '#4F5D4A' : '#E6C9A8',
                backgroundColor: activeFilter === cat ? '#4F5D4A' : 'transparent',
                color: activeFilter === cat ? '#F7F3EE' : '#7A8B75',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {cat}
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                backgroundColor: activeFilter === cat ? 'rgba(247,243,238,0.2)' : 'rgba(79,93,74,0.1)',
                color: activeFilter === cat ? '#F7F3EE' : '#8B6B4A',
                borderRadius: '100px',
                padding: '1px 7px',
                transition: 'all 0.22s ease',
              }}>
                {countFor(cat)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: '2.5rem 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {filtered.map((item, index) => (
              <GalleryCard key={item.id} item={item} onClick={setLightbox} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#7A8B75', fontFamily: 'Poppins, sans-serif' }}>
            No items found.
          </div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '3.5rem',
            padding: '3rem 2rem',
            backgroundColor: '#fff',
            borderRadius: '20px',
            border: '1px solid rgba(230,201,168,0.6)',
          }}
        >
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '0.75rem' }}>
            Follow us for more
          </p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#4F5D4A', marginBottom: '0.6rem' }}>
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
              transition: 'background-color 0.2s ease',
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
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(8,12,8,0.94)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 200, padding: '1.5rem',
            }}
          >
            {/* Prev button */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                style={{
                  position: 'fixed', left: '1.25rem', top: '50%', transform: 'translateY(-50%)',
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: '1.5px solid rgba(247,243,238,0.25)',
                  backgroundColor: 'rgba(247,243,238,0.1)',
                  backdropFilter: 'blur(6px)',
                  cursor: 'pointer', color: '#F7F3EE', fontSize: '1.1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background-color 0.2s',
                  zIndex: 201,
                }}
              >
                ‹
              </button>
            )}

            {/* Next button */}
            {lightboxIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                style={{
                  position: 'fixed', right: '1.25rem', top: '50%', transform: 'translateY(-50%)',
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: '1.5px solid rgba(247,243,238,0.25)',
                  backgroundColor: 'rgba(247,243,238,0.1)',
                  backdropFilter: 'blur(6px)',
                  cursor: 'pointer', color: '#F7F3EE', fontSize: '1.1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background-color 0.2s',
                  zIndex: 201,
                }}
              >
                ›
              </button>
            )}

            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '820px', width: '100%',
                borderRadius: '18px', overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                style={{ width: '100%', display: 'block', maxHeight: '80dvh', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(8,12,8,0.85), transparent)',
                padding: '2.5rem 1.5rem 1.5rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              }}>
                <div>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#F7F3EE', margin: 0 }}>{lightbox.label}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', color: 'rgba(230,201,168,0.8)', marginTop: '4px' }}>
                    {lightbox.category} &nbsp;·&nbsp; {lightboxIndex + 1} / {filtered.length}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    border: '1.5px solid rgba(247,243,238,0.3)',
                    backgroundColor: 'rgba(247,243,238,0.1)',
                    cursor: 'pointer', color: '#F7F3EE', fontSize: '1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(4px)',
                    flexShrink: 0,
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
