import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';


const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

// Veg/non-veg dot (FSSAI standard square with dot)
function VegDot({ veg }) {
  const color = veg ? '#2d7a2d' : '#c0392b';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 14, height: 14, flexShrink: 0,
      border: `1.5px solid ${color}`, borderRadius: '3px',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: color }} />
    </span>
  );
}

function MenuCard({ item }) {
  const { addItem, increment, decrement, quantityOf } = useCart();
  const qty   = quantityOf(item.id);
  const price = item.price !== null ? `₹${item.price}` : 'Ask us';

  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      whileHover={{ y: -2 }}
      style={{
        backgroundColor: '#fff',
        borderRadius: '14px',
        padding: '1.1rem 1.25rem',
        border: `1px solid ${qty > 0 ? 'rgba(79,93,74,0.35)' : 'rgba(230,201,168,0.45)'}`,
        boxShadow: qty > 0 ? '0 2px 14px rgba(79,93,74,0.12)' : '0 1px 10px rgba(79,93,74,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Name row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
          <VegDot veg={item.veg} />
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.97rem', color: '#4F5D4A', margin: 0, lineHeight: 1.3 }}>
            {item.name}
          </h4>
        </div>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#8B6B4A', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>
          {price}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: '#7A8B75', lineHeight: 1.7, margin: 0, flex: 1 }}>
        {item.description}
      </p>

      {/* Add to cart / Qty controls */}
      <div style={{ marginTop: '0.4rem' }}>
        {qty === 0 ? (
          /* Add button */
          <button
            onClick={() => addItem(item)}
            style={{
              width: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              backgroundColor: '#4F5D4A', color: '#F7F3EE',
              fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', fontWeight: 500,
              padding: '8px 0', borderRadius: '100px', border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', transition: 'background-color 0.2s',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>+</span> Add to Cart
          </button>
        ) : (
          /* Qty stepper */
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#4F5D4A', borderRadius: '100px', overflow: 'hidden' }}>
            <button
              onClick={() => decrement(item.id)}
              style={{ background: 'none', border: 'none', color: '#F7F3EE', cursor: 'pointer', padding: '8px 16px', fontSize: '1.1rem', lineHeight: 1, fontWeight: 300 }}
            >−</button>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#F7F3EE' }}>{qty}</span>
            <button
              onClick={() => increment(item.id)}
              style={{ background: 'none', border: 'none', color: '#F7F3EE', cursor: 'pointer', padding: '8px 16px', fontSize: '1.1rem', lineHeight: 1, fontWeight: 300 }}
            >+</button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Subcategory section header — like menu book section divider
function SubcategoryHeader({ label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      margin: '2.5rem 0 1.25rem',
    }}>
      <div style={{ flex: 1, height: '1px', backgroundColor: '#E6C9A8' }} />
      <span style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#8B6B4A',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', backgroundColor: '#E6C9A8' }} />
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch]         = useState('');
  const [vegOnly, setVegOnly]       = useState(false);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat    = activeCategory === 'All' || item.category === activeCategory;
      const q           = search.toLowerCase();
      const matchSearch = !search
        || item.name.toLowerCase().includes(q)
        || item.description.toLowerCase().includes(q)
        || item.category.toLowerCase().includes(q)
        || item.subcategory.toLowerCase().includes(q);
      const matchVeg    = !vegOnly || item.veg;
      return matchCat && matchSearch && matchVeg;
    });
  }, [activeCategory, search, vegOnly]);

  // Group filtered items by subcategory (preserving order)
  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((item) => {
      if (!map.has(item.subcategory)) map.set(item.subcategory, []);
      map.get(item.subcategory).push(item);
    });
    return map;
  }, [filtered]);

  // When "All" is selected and no search — group by category for overview
  const showCategoryGroups = activeCategory === 'All' && !search && !vegOnly;

  const byCategory = useMemo(() => {
    if (!showCategoryGroups) return null;
    const map = new Map();
    filtered.forEach((item) => {
      if (!map.has(item.category)) map.set(item.category, new Map());
      const catMap = map.get(item.category);
      if (!catMap.has(item.subcategory)) catMap.set(item.subcategory, []);
      catMap.get(item.subcategory).push(item);
    });
    return map;
  }, [filtered, showCategoryGroups]);

  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', paddingTop: '72px' }}>

      {/* ── Header ── */}
      <section style={{ backgroundColor: '#4F5D4A', padding: '4rem 1.5rem 3.5rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', backgroundColor: 'rgba(230,201,168,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E6C9A8', marginBottom: '0.75rem' }}>
            Our Menu
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', color: '#F7F3EE', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Good food,<br /><em style={{ color: '#E6C9A8' }}>great vibes</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: 'rgba(247,243,238,0.7)', lineHeight: 1.7 }}>
            74 items · fresh, seasonal, made with love · order via WhatsApp
          </motion.p>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #E6C9A8', position: 'sticky', top: '72px', zIndex: 40 }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '1rem 1.5rem' }}>
          {/* Category pills */}
          <div className="filter-scroll" style={{ overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '6px', width: 'max-content' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', fontWeight: 500,
                    padding: '6px 14px', borderRadius: '100px', border: '1.5px solid',
                    borderColor: activeCategory === cat ? '#4F5D4A' : '#E6C9A8',
                    backgroundColor: activeCategory === cat ? '#4F5D4A' : 'transparent',
                    color: activeCategory === cat ? '#F7F3EE' : '#7A8B75',
                    cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search + veg toggle + count */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1 1 140px', minWidth: 0, maxWidth: '260px' }}>
              <input
                type="text" placeholder="Search dishes..."
                value={search} onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem',
                  padding: '7px 12px 7px 32px', borderRadius: '100px',
                  border: '1.5px solid #E6C9A8', backgroundColor: '#F7F3EE',
                  color: '#4F5D4A', outline: 'none',
                }}
              />
              <span style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: '#7A8B75' }}>🔍</span>
            </div>
            <button
              onClick={() => setVegOnly(!vegOnly)}
              style={{
                fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', fontWeight: 500,
                padding: '6px 14px', borderRadius: '100px', border: '1.5px solid',
                borderColor: vegOnly ? '#2d7a2d' : '#E6C9A8',
                backgroundColor: vegOnly ? '#2d7a2d' : 'transparent',
                color: vegOnly ? '#fff' : '#7A8B75',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s',
              }}
            >
              <span style={{ width: 9, height: 9, borderRadius: '2px', border: '1.5px solid currentColor', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                {vegOnly && <span style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: 'currentColor' }} />}
              </span>
              Veg Only
            </button>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.73rem', color: '#7A8B75', marginLeft: 'auto' }}>
              {filtered.length} item{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* ── Menu Items ── */}
      <section style={{ padding: '1rem 1.5rem 6rem', maxWidth: '1152px', margin: '0 auto' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#4F5D4A', marginBottom: '0.5rem' }}>No dishes found</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', color: '#7A8B75', fontSize: '0.85rem' }}>Try a different search or category</p>
          </div>
        ) : showCategoryGroups ? (
          /* ── All view: group by category then subcategory ── */
          <AnimatePresence>
            {[...byCategory.entries()].map(([cat, subcatMap]) => (
              <div key={cat}>
                {/* Category heading */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '3rem 0 0' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#4F5D4A', margin: 0 }}>{cat}</h2>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#E6C9A8', marginLeft: '0.5rem' }} />
                </motion.div>

                {/* Subcategories */}
                {[...subcatMap.entries()].map(([subcat, items]) => (
                  <div key={subcat}>
                    {/* Only show subcategory header if it differs from category */}
                    {subcat !== cat && (
                      <SubcategoryHeader label={subcat} />
                    )}
                    <motion.div layout className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                      <AnimatePresence>
                        {items.map((item) => <MenuCard key={item.id} item={item} />)}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                ))}
              </div>
            ))}
          </AnimatePresence>
        ) : (
          /* ── Filtered/category view: group by subcategory ── */
          <AnimatePresence>
            {[...grouped.entries()].map(([subcat, items], i) => (
              <div key={subcat}>
                {/* Show subcategory header if there are multiple subcats OR it's a meaningful label */}
                {(grouped.size > 1 || subcat !== activeCategory) && (
                  <SubcategoryHeader label={subcat} />
                )}
                {i === 0 && grouped.size === 1 && (
                  <div style={{ height: '1.5rem' }} />
                )}
                <motion.div layout className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                  <AnimatePresence>
                    {items.map((item) => <MenuCard key={item.id} item={item} />)}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        )}
      </section>
    </div>
  );
}
