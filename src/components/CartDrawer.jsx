import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

function VegDot({ veg }) {
  const c = veg ? '#2d7a2d' : '#c0392b';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 12, height: 12, flexShrink: 0, border: `1.5px solid ${c}`, borderRadius: '2px' }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: c }} />
    </span>
  );
}

export default function CartDrawer() {
  const { cartItems, increment, decrement, removeItem, clearCart, totalItems, totalPrice, drawerOpen, setDrawerOpen } = useCart();

  const buildWhatsAppMessage = () => {
    const lines = cartItems.map((i) => {
      const lineTotal = i.price !== null ? ` — ₹${i.price * i.quantity}` : '';
      return `• ${i.quantity}x ${i.name}${lineTotal}`;
    });
    const total = totalPrice > 0 ? `\n\nTotal: ₹${totalPrice}` : '';
    return `Hi! I'd like to order from Greens & Giggles 🌿\n\nMy order:\n${lines.join('\n')}${total}\n\nPlease confirm! 🙏`;
  };

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(20,28,20,0.5)', zIndex: 100, backdropFilter: 'blur(2px)' }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              /* Full-width on mobile, capped at 400px on larger screens */
              width: '100vw', maxWidth: '400px',
              backgroundColor: '#F7F3EE',
              zIndex: 101,
              display: 'flex', flexDirection: 'column',
              boxShadow: '-8px 0 40px rgba(79,93,74,0.15)',
              /* iOS safe area at bottom */
              paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            }}
          >
            {/* Header */}
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E6C9A8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🛒</span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#4F5D4A', margin: 0 }}>Your Order</h2>
                {totalItems > 0 && (
                  <span style={{ backgroundColor: '#4F5D4A', color: '#F7F3EE', fontFamily: 'Poppins, sans-serif', fontSize: '0.68rem', fontWeight: 600, padding: '2px 8px', borderRadius: '100px' }}>
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #E6C9A8', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7A8B75', fontSize: '1rem' }}
              >✕</button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem', WebkitOverflowScrolling: 'touch' }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                  <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</p>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#4F5D4A', marginBottom: '0.5rem' }}>Cart is empty</h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', color: '#7A8B75' }}>Add items from the menu to get started.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 40 }}
                        style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '0.9rem 1rem', border: '1px solid rgba(230,201,168,0.5)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                      >
                        {/* Veg dot */}
                        <VegDot veg={item.veg} />

                        {/* Name + price */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9rem', color: '#4F5D4A', margin: 0, lineHeight: 1.3 }}>{item.name}</p>
                          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.73rem', color: '#8B6B4A', margin: '2px 0 0', fontWeight: 600 }}>
                            {item.price !== null ? `₹${item.price * item.quantity}` : 'Ask us'}
                            {item.quantity > 1 && item.price !== null && (
                              <span style={{ color: '#7A8B75', fontWeight: 400 }}> (₹{item.price} × {item.quantity})</span>
                            )}
                          </p>
                        </div>

                        {/* Qty controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                          <button
                            onClick={() => decrement(item.id)}
                            style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #E6C9A8', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F5D4A', fontSize: '1rem', lineHeight: 1 }}
                          >−</button>
                          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#4F5D4A', minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                          <button
                            onClick={() => increment(item.id)}
                            style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #4F5D4A', backgroundColor: '#4F5D4A', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1rem', lineHeight: 1 }}
                          >+</button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0392b', fontSize: '0.75rem', padding: '2px', flexShrink: 0, opacity: 0.7 }}
                          title="Remove"
                        >✕</button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Clear cart */}
                  {cartItems.length > 0 && (
                    <button
                      onClick={clearCart}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: '#7A8B75', textDecoration: 'underline', textUnderlineOffset: '3px', padding: '0.5rem 0', textAlign: 'left' }}
                    >
                      Clear all items
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer: Total + WhatsApp */}
            {cartItems.length > 0 && (
              <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #E6C9A8', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Bill summary */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: '#7A8B75' }}>{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: '#7A8B75' }}>Subtotal</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#4F5D4A', fontWeight: 700 }}>₹{totalPrice}</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', color: '#7A8B75' }}>incl. all taxes</span>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/919731119458?text=${encodeURIComponent(buildWhatsAppMessage())}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    backgroundColor: '#25D366', color: '#fff',
                    fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', fontWeight: 600,
                    padding: '15px 24px', borderRadius: '14px', textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                  }}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
