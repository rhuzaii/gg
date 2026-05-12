import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '../assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;
  const lightHero = false; // full-olive hero — brand shows in navbar, not on panel

  return (
    <nav
      style={{
        backgroundColor: transparent ? 'transparent' : 'rgba(247,243,238,0.96)',
        backdropFilter: transparent ? 'none' : 'blur(12px)',
        boxShadow: transparent ? 'none' : '0 1px 20px rgba(79,93,74,0.08)',
        transition: 'all 0.3s ease',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: '0 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo — hidden on desktop homepage (hero shows brand on strip instead) */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', opacity: lightHero ? 0 : 1, pointerEvents: lightHero ? 'none' : 'auto', transition: 'opacity 0.35s ease' }}>
          <img
            src={logoLight}
            alt="Greens & Giggles"
            style={{ width: '38px', height: '38px', objectFit: 'contain', filter: lightHero ? 'none' : transparent ? 'brightness(10)' : 'none', transition: 'filter 0.3s' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, whiteSpace: 'nowrap' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', color: lightHero ? '#2F3A2E' : transparent ? '#F7F3EE' : '#4F5D4A', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.2px', transition: 'color 0.3s' }}>
              Greens &amp; Giggles
            </span>
            <span style={{ fontFamily: 'Poppins, sans-serif', color: lightHero ? '#8B6B4A' : transparent ? 'rgba(247,243,238,0.6)' : '#8B6B4A', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
              Cafe &amp; Kitchen
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.6rem' }} className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.84rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: location.pathname === link.path
                  ? (lightHero ? '#7A5C38' : transparent ? '#E6C9A8' : '#7A5C38')
                  : (lightHero ? '#4F5D4A' : transparent ? 'rgba(247,243,238,0.78)' : '#4F5D4A'),
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '5px',
                transition: 'color 0.25s',
              }}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '-4px',
                    right: '-4px',
                    height: '1px',
                    borderRadius: '2px',
                    background: lightHero ? '#9A7755' : transparent ? '#E6C9A8' : '#9A7755',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/menu"
            style={{
              backgroundColor: lightHero ? '#3A4836' : transparent ? 'rgba(58,72,54,0.88)' : '#3A4836',
              color: '#F0E8D8',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              padding: '10px 22px',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'background-color 0.25s, box-shadow 0.25s',
              boxShadow: '0 4px 16px rgba(47,58,46,0.18)',
            }}
          >
            Order Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 24, height: 1.5,
                backgroundColor: lightHero ? '#4F5D4A' : transparent ? '#F7F3EE' : '#4F5D4A',
                display: 'block',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)' : i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{ backgroundColor: '#F7F3EE', borderTop: '1px solid #E6C9A8', padding: '1rem 0 1.5rem' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '11px 1.5rem',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: location.pathname === link.path ? 600 : 400,
                  color: location.pathname === link.path ? '#8B6B4A' : '#4F5D4A',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ padding: '0.75rem 1.5rem 0' }}>
              <a
                href="https://wa.me/919731119458"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  backgroundColor: '#4F5D4A',
                  color: '#F7F3EE',
                  textAlign: 'center',
                  padding: '12px',
                  borderRadius: '100px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
