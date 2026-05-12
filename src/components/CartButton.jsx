import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function CartButton() {
  const { totalItems, totalPrice, drawerOpen, setDrawerOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <motion.button
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setDrawerOpen(true)}
      style={{
        position: 'fixed',
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        backgroundColor: '#4F5D4A',
        color: '#F7F3EE',
        border: 'none',
        borderRadius: '100px',
        padding: '13px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        boxShadow: '0 6px 28px rgba(79,93,74,0.35)',
        fontFamily: 'Poppins, sans-serif',
        /* Use max-content width but cap so it never overflows viewport */
        width: 'max-content',
        maxWidth: 'calc(100vw - 2rem)',
        minWidth: '220px',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Left: icon + count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ position: 'relative' }}>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zm0 0h12M16 10a4 4 0 01-8 0"/>
          </svg>
          <AnimatePresence>
            <motion.span
              key={totalItems}
              initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
              style={{
                position: 'absolute', top: '-7px', right: '-9px',
                backgroundColor: '#E6C9A8', color: '#4F5D4A',
                fontSize: '0.62rem', fontWeight: 700,
                width: '16px', height: '16px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {totalItems}
            </motion.span>
          </AnimatePresence>
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>
          {totalItems} item{totalItems !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Divider */}
      <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(247,243,238,0.25)' }} />

      {/* Right: price + view */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700 }}>₹{totalPrice}</span>
        <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>View →</span>
      </div>
    </motion.button>
  );
}
