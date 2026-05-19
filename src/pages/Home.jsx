import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import cafeInterior4 from '../assets/cafe-interior-4.png';
import cafeEspresso from '../assets/cafe-espresso-machine.jpg';
import cafeBarArea from '../assets/cafe-bar-area.jpg';
import herobg from '../assets/desktophero.png';
import mobileHeroBg from '../assets/mobileherobg.png';

import burritoBowl     from '../assets/burrito-bowl.jpg';
import dishSmoothie    from '../assets/dish-smoothie.jpg';
import dishSoup        from '../assets/dish-soup.jpg';
import dishBurritoBowl from '../assets/dish-burrito-bowl.jpg';
import dishToast       from '../assets/dish-toast.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

/* ── Large botanical leaf cluster — reference image style ── */
function BotanicalLeaf({ style = {} }) {
  return (
    <svg viewBox="0 0 260 380" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', ...style }}>
      {/* Main stem */}
      <path d="M130 372 C122 308 106 254 90 196 C78 152 62 112 48 72 C40 50 36 30 40 10"
        stroke="#6B8A68" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
      {/* Sub-stem L1 */}
      <path d="M90 196 C68 182 46 178 32 166"
        stroke="#6B8A68" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
      {/* Leaf L1 */}
      <path d="M32 166 C10 148 2 122 14 100 C28 122 34 148 32 166Z" fill="#7A9A78"/>
      <path d="M32 166 C12 146 5 120 16 100" stroke="#6B8A68" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      {/* Leaf R1 — opposite side */}
      <path d="M90 196 C112 178 120 152 108 128 C94 150 86 176 90 196Z" fill="#7A9A78" opacity="0.85"/>
      <path d="M90 196 C110 177 116 150 106 127" stroke="#6B8A68" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      {/* Sub-stem L2 */}
      <path d="M62 112 C42 96 22 94 10 84"
        stroke="#6B8A68" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Leaf L2 */}
      <path d="M10 84 C-10 66 -14 40 0 22 C14 44 16 68 10 84Z" fill="#7A9A78" opacity="0.9"/>
      <path d="M10 84 C-8 64 -10 38 2 22" stroke="#6B8A68" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      {/* Leaf R2 */}
      <path d="M62 112 C82 94 90 68 76 48 C62 68 56 94 62 112Z" fill="#7A9A78" opacity="0.8"/>
      <path d="M62 112 C80 93 86 66 74 47" stroke="#6B8A68" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      {/* Top cluster — main left */}
      <path d="M40 10 C16 -6 -4 -28 6 -50 C24 -24 36 4 40 10Z" fill="#7A9A78" opacity="0.88"/>
      <path d="M40 10 C18 -8 0 -28 8 -50" stroke="#6B8A68" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Top cluster — main right */}
      <path d="M40 10 C62 -10 78 -34 64 -54 C50 -28 40 -2 40 10Z" fill="#7A9A78" opacity="0.78"/>
      <path d="M40 10 C60 -12 74 -34 62 -54" stroke="#6B8A68" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Extra mid leaf */}
      <path d="M48 72 C26 56 10 54 0 44"
        stroke="#6B8A68" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M0 44 C-18 28 -18 6 -4 -8 C8 10 6 32 0 44Z" fill="#7A9A78" opacity="0.72"/>
      <path d="M0 44 C-16 26 -15 5 -2 -8" stroke="#6B8A68" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* Keep small leaf for any remaining uses */
function HeroLeaf({ width = 40, style = {} }) {
  const h = Math.round(width * 1.45);
  return (
    <svg width={width} height={h} viewBox="0 0 40 58" fill="none" style={{ display: 'block', ...style }}>
      <path d="M20 56 Q3 44 4 26 Q5 8 20 2 Q35 8 36 26 Q37 44 20 56Z" fill="#A8C89A"/>
      <path d="M20 56 L20 3" stroke="#72A060" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M20 42 Q10 36 5 28" stroke="#72A060" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      <path d="M20 32 Q30 26 35 20" stroke="#72A060" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Caesar salad bowl — white ceramic, 5 grilled strips, romaine, round croutons, parmesan ── */
function CaesarBowlSVG() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <radialGradient id="cb_bowl" cx="33%" cy="16%" r="74%">
          <stop offset="0%"   stopColor="#FFFFFF"/>
          <stop offset="46%"  stopColor="#F7F2EA"/>
          <stop offset="100%" stopColor="#DED9CE"/>
        </radialGradient>
        <radialGradient id="cb_rim" cx="30%" cy="18%" r="72%">
          <stop offset="0%"   stopColor="#F5EEE4"/>
          <stop offset="100%" stopColor="#DDD4C2"/>
        </radialGradient>
        <linearGradient id="cb_sMain" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#DCA060"/>
          <stop offset="38%"  stopColor="#C07C38"/>
          <stop offset="100%" stopColor="#985C18"/>
        </linearGradient>
        <radialGradient id="cb_crou" cx="32%" cy="22%" r="70%">
          <stop offset="0%"   stopColor="#F2CC70"/>
          <stop offset="100%" stopColor="#C89830"/>
        </radialGradient>
        <radialGradient id="cb_gnd" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#0C1408" stopOpacity="0.28"/>
          <stop offset="100%" stopColor="#0C1408" stopOpacity="0"/>
        </radialGradient>
        <clipPath id="cb_clip">
          <ellipse cx="250" cy="248" rx="176" ry="53"/>
        </clipPath>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="250" cy="484" rx="168" ry="13" fill="url(#cb_gnd)"/>

      {/* Bowl curved body */}
      <path d="M42 252 Q34 418 250 446 Q466 418 458 252 Z" fill="url(#cb_bowl)"/>
      <path d="M458 252 Q466 418 250 446 Q392 404 428 314 Z" fill="rgba(0,0,0,0.034)"/>
      <path d="M42 252 Q34 390 156 436 Q82 380 58 302 Z" fill="rgba(255,255,255,0.12)"/>

      {/* Rim */}
      <ellipse cx="250" cy="246" rx="210" ry="70" fill="url(#cb_rim)"/>
      <path d="M46 234 Q148 192 250 188 Q352 192 454 234"
        stroke="rgba(255,255,255,0.96)" strokeWidth="5.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="250" cy="252" rx="197" ry="61" fill="#E6DDD0"/>
      <ellipse cx="250" cy="254" rx="188" ry="55" fill="none"
        stroke="rgba(255,255,255,0.46)" strokeWidth="2.5"/>

      {/* Interior base */}
      <ellipse cx="250" cy="250" rx="186" ry="53" fill="#D6CDB8"/>

      {/* All food content clipped to bowl opening */}
      <g clipPath="url(#cb_clip)">

        {/* Lettuce base */}
        <ellipse cx="250" cy="244" rx="176" ry="49" fill="#5CAA3E"/>

        {/* Back romaine leaves */}
        <path d="M79 234 Q65 175 112 162 Q147 159 141 205 Q136 232 107 235Z" fill="#6EC04A"/>
        <path d="M73 238 Q59 180 103 167 Q138 164 132 210 Q127 237 98 239Z" fill="#98D87A" opacity="0.40"/>
        <path d="M149 223 Q141 168 181 165 Q211 163 206 208 Q202 231 176 229Z" fill="#64BA46"/>
        <path d="M214 220 Q219 164 254 169 Q280 178 272 217 Q265 237 239 232Z" fill="#6ABE4A"/>
        <path d="M310 224 Q324 167 360 185 Q382 203 365 234 Q348 253 324 243Z" fill="#68B846"/>
        <path d="M318 227 Q332 171 368 189 Q390 209 373 239 Q356 260 332 249Z" fill="#92D46E" opacity="0.38"/>

        {/* Interior lettuce pieces */}
        <path d="M158 236 Q139 219 164 210 Q187 207 189 227 Q187 243 165 243Z" fill="#7CCA5C"/>
        <path d="M328 231 Q349 215 367 226 Q380 241 358 255 Q337 263 324 251Z" fill="#74C252"/>
        <path d="M210 234 Q197 218 225 213 Q250 211 252 232 Q250 249 228 249Z" fill="#88CE66"/>
        <path d="M270 232 Q260 215 290 213 Q316 215 312 236 Q308 253 285 252Z" fill="#80CA5E"/>

        {/* Parmesan shavings — back layer */}
        <path d="M294 220 Q315 208 339 216 Q348 228 330 237 Q310 243 294 232Z" fill="rgba(255,254,240,0.90)"/>
        <path d="M174 226 Q194 214 215 221 Q223 233 205 241 Q186 245 174 235Z" fill="rgba(255,254,240,0.84)"/>
        <path d="M345 210 Q366 200 384 210 Q389 220 373 228 Q355 232 345 221Z" fill="rgba(255,254,240,0.74)"/>
        <path d="M133 232 Q149 222 170 229 Q176 240 160 246 Q145 248 133 241Z" fill="rgba(255,254,240,0.80)"/>

        {/* 5 protein strips rotated as a group — matches reference image */}
        <g transform="rotate(-30, 250, 232)">
          {/* Strip 1 — top */}
          <rect x="138" y="172" width="218" height="26" rx="10" fill="#D49248"/>
          <rect x="138" y="172" width="218" height="10" rx="8" fill="rgba(232,190,110,0.28)"/>
          <line x1="158" y1="178" x2="185" y2="167" stroke="#5C2806" strokeWidth="3"   opacity="0.38" strokeLinecap="round"/>
          <line x1="197" y1="185" x2="224" y2="174" stroke="#5C2806" strokeWidth="3"   opacity="0.34" strokeLinecap="round"/>
          <line x1="237" y1="192" x2="263" y2="181" stroke="#5C2806" strokeWidth="2.5" opacity="0.28" strokeLinecap="round"/>
          <line x1="271" y1="198" x2="295" y2="188" stroke="#5C2806" strokeWidth="2.5" opacity="0.22" strokeLinecap="round"/>
          {/* Strip 2 */}
          <rect x="136" y="200" width="222" height="27" rx="10" fill="#C88040"/>
          <rect x="136" y="200" width="222" height="10" rx="8" fill="rgba(226,178,96,0.30)"/>
          <line x1="157" y1="206" x2="184" y2="195" stroke="#5C2806" strokeWidth="3"   opacity="0.43" strokeLinecap="round"/>
          <line x1="197" y1="213" x2="224" y2="202" stroke="#5C2806" strokeWidth="3"   opacity="0.39" strokeLinecap="round"/>
          <line x1="237" y1="220" x2="263" y2="209" stroke="#5C2806" strokeWidth="2.5" opacity="0.33" strokeLinecap="round"/>
          <line x1="271" y1="226" x2="295" y2="216" stroke="#5C2806" strokeWidth="2.5" opacity="0.27" strokeLinecap="round"/>
          {/* Strip 3 — hero center strip */}
          <rect x="132" y="229" width="228" height="29" rx="10" fill="url(#cb_sMain)"/>
          <rect x="132" y="229" width="228" height="12" rx="8" fill="rgba(234,192,114,0.32)"/>
          <line x1="152" y1="236" x2="181" y2="224" stroke="#5C2806" strokeWidth="3"   opacity="0.46" strokeLinecap="round"/>
          <line x1="195" y1="243" x2="224" y2="231" stroke="#5C2806" strokeWidth="3"   opacity="0.42" strokeLinecap="round"/>
          <line x1="237" y1="250" x2="264" y2="238" stroke="#5C2806" strokeWidth="2.5" opacity="0.36" strokeLinecap="round"/>
          <line x1="275" y1="256" x2="301" y2="245" stroke="#5C2806" strokeWidth="2.5" opacity="0.30" strokeLinecap="round"/>
          {/* Strip 4 */}
          <rect x="133" y="260" width="225" height="26" rx="10" fill="#BC7A34"/>
          <rect x="133" y="260" width="225" height="10" rx="8" fill="rgba(222,174,90,0.26)"/>
          <line x1="153" y1="266" x2="182" y2="254" stroke="#5C2806" strokeWidth="3"   opacity="0.41" strokeLinecap="round"/>
          <line x1="195" y1="273" x2="224" y2="261" stroke="#5C2806" strokeWidth="3"   opacity="0.37" strokeLinecap="round"/>
          <line x1="237" y1="280" x2="263" y2="268" stroke="#5C2806" strokeWidth="2.5" opacity="0.31" strokeLinecap="round"/>
          <line x1="274" y1="286" x2="298" y2="275" stroke="#5C2806" strokeWidth="2.5" opacity="0.25" strokeLinecap="round"/>
          {/* Strip 5 — bottom */}
          <rect x="135" y="288" width="220" height="24" rx="10" fill="#9E6020"/>
          <rect x="135" y="288" width="220" height="9"  rx="7" fill="rgba(216,167,80,0.22)"/>
          <line x1="154" y1="294" x2="182" y2="283" stroke="#5C2806" strokeWidth="2.8" opacity="0.37" strokeLinecap="round"/>
          <line x1="195" y1="301" x2="222" y2="290" stroke="#5C2806" strokeWidth="2.5" opacity="0.31" strokeLinecap="round"/>
          <line x1="233" y1="307" x2="258" y2="297" stroke="#5C2806" strokeWidth="2.2" opacity="0.25" strokeLinecap="round"/>
        </g>

        {/* Round crouton balls — like reference image */}
        <circle cx="322" cy="183" r="22" fill="url(#cb_crou)"/>
        <circle cx="322" cy="183" r="17" fill="#D4A840" opacity="0.34"/>
        <ellipse cx="315" cy="177" rx="7" ry="5" fill="rgba(255,248,186,0.52)" transform="rotate(-14 315 177)"/>
        <circle cx="360" cy="199" r="18" fill="url(#cb_crou)"/>
        <ellipse cx="354" cy="193" rx="5.5" ry="4" fill="rgba(255,244,180,0.46)" transform="rotate(-10 354 193)"/>
        <circle cx="160" cy="190" r="20" fill="#DEBA4E"/>
        <circle cx="160" cy="190" r="16" fill="#C8A036" opacity="0.44"/>
        <ellipse cx="154" cy="184" rx="6" ry="4.5" fill="rgba(255,242,178,0.50)" transform="rotate(-12 154 184)"/>
        <circle cx="133" cy="219" r="16" fill="url(#cb_crou)"/>
        <circle cx="386" cy="211" r="15" fill="#D6AC44"/>
        <circle cx="349" cy="223" r="14" fill="#E0B84C"/>
        <circle cx="146" cy="244" r="12" fill="#D4A840" opacity="0.84"/>

        {/* Large parmesan shavings — top layer */}
        <path d="M253 214 Q275 202 299 211 Q308 224 288 233 Q266 238 253 225Z" fill="rgba(255,254,242,0.96)"/>
        <path d="M309 230 Q333 219 357 229 Q364 241 344 250 Q322 256 309 243Z" fill="rgba(255,254,242,0.91)"/>
        <path d="M191 223 Q214 212 236 220 Q243 232 222 240 Q201 245 191 233Z" fill="rgba(255,254,242,0.88)"/>
        <path d="M153 239 Q173 229 194 237 Q200 249 181 255 Q163 257 153 247Z" fill="rgba(255,254,242,0.80)"/>
        <path d="M368 224 Q389 214 408 224 Q413 235 396 241 Q377 246 368 235Z" fill="rgba(255,254,242,0.76)"/>

        {/* Visible lettuce between strips */}
        <path d="M200 244 Q192 228 218 225 Q240 224 238 246 Q235 263 214 261Z" fill="#86CC66" opacity="0.74"/>
        <path d="M260 243 Q254 226 280 224 Q304 226 300 248 Q296 265 274 262Z" fill="#80C860" opacity="0.68"/>
      </g>

      {/* Front romaine leaves — NOT clipped, drape over rim */}
      <path d="M156 276 Q127 252 167 238 Q200 234 198 268 Q190 296 170 292Z" fill="#80CC5E" opacity="0.97"/>
      <path d="M336 273 Q372 250 396 266 Q410 284 384 304 Q359 318 337 300Z" fill="#78C856" opacity="0.93"/>
      <path d="M214 275 Q208 252 236 250 Q261 250 259 276 Q254 296 233 294Z" fill="#8ED46E" opacity="0.81"/>
      <path d="M274 273 Q268 250 296 250 Q322 252 318 278 Q313 298 292 295Z" fill="rgba(128,200,94,0.74)"/>

      {/* Rim border — drawn last, always on top */}
      <ellipse cx="250" cy="246" rx="210" ry="70" fill="none" stroke="#C8BCAA" strokeWidth="4.5"/>
      <ellipse cx="250" cy="244" rx="208" ry="68" fill="none" stroke="rgba(255,255,255,0.58)" strokeWidth="2"/>
    </svg>
  );
}



const featuredDishes = [
  { id: 'f1', name: 'Signature Burrito Bowl', description: 'A hearty bowl loaded with crispy potatoes, fresh veggies, sour cream, and bold flavours.',         price: 219, veg: true, category: 'Burrito Bowls', image: burritoBowl, imgHeight: 240, imgPosition: 'center 30%' },
  { id: 'f2', name: 'Signature Toast',        description: 'Golden avocado toast crowned with a sunny-side egg, fresh herbs, and a drizzle of hot sauce.',     price: 149, veg: true, category: 'Breakfast',     image: dishToast,    imgHeight: 240 },
  { id: 'f3', name: 'Fresh Smoothies',        description: 'Vibrant blends of seasonal fruits — refreshing, nourishing, and absolutely delicious.',            price: 169, veg: true, category: 'Beverages',     image: dishSmoothie, imgHeight: 240 },
  { id: 'f4', name: 'Broccoli Almond Soup',   description: 'Velvety broccoli soup with a subtle nutty touch of almonds — warm, light, and satisfying.',       price: 169, veg: true, category: 'Soups',         image: dishSoup,     imgHeight: 240 },
];

const MenuCard = ({ item }) => {
  const msg = `Hi! I'd like to order ${item.name} (₹${item.price}) from Greens & Giggles 🌿`;
  const orderNum = '919591430770';
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      style={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(79,93,74,0.08)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Dish photo */}
      <div style={{ height: `${item.imgHeight || 200}px`, overflow: 'hidden', flexShrink: 0 }}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.imgPosition || 'center center', display: 'block', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        ) : (
          <div style={{ background: 'linear-gradient(135deg, #F0EDE8 0%, #E8E3D8 100%)', height: '100%' }} />
        )}
      </div>
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.veg ? '#4F5D4A' : '#c0392b', border: `2px solid ${item.veg ? '#4F5D4A' : '#c0392b'}`, display: 'inline-block', flexShrink: 0 }} />
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#4F5D4A', margin: 0 }}>{item.name}</h4>
        </div>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: '#7A8B75', lineHeight: 1.6, flex: 1 }}>{item.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#8B6B4A', fontWeight: 600 }}>₹{item.price}</span>
          <a
            href={`https://wa.me/${orderNum}?text=${encodeURIComponent(msg)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#4F5D4A',
              color: '#F7F3EE',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const featured = featuredDishes;

  return (
    <div>
      {/* ── Hero — Minimal editorial, typography-led ── */}
      <section className="hero-section-mobile" style={{ '--mobile-hero-url': `url(${mobileHeroBg})`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', minHeight: '100vh', backgroundColor: '#4f5c46', boxSizing: 'border-box', width: '100%' }}>

        {/* Full-bleed hero background image */}
        <img
          src={herobg}
          alt=""
          aria-hidden="true"
          className="hero-bg-img"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* ── Single-column editorial layout ── */}
        <div className="hero-text-wrapper" style={{
          width: '100%',
          boxSizing: 'border-box',
          paddingLeft: 'clamp(1rem, 6vw, 7rem)',
          paddingRight: 'clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
        }}>

          {/* Text content */}
          <div style={{ flexShrink: 0, paddingTop: '80px', paddingBottom: '80px', maxWidth: '100%', boxSizing: 'border-box' }}>

            {/* Eyebrow */}
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }}
            >
              <span style={{ display: 'block', width: '26px', height: '1px', background: 'rgba(205,182,128,0.55)' }} />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.67rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(210,188,138,0.72)' }}>
                New BEL Road · Bengaluru
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="hero-h1"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 6.5vw, 96px)',
                fontWeight: 600,
                letterSpacing: '-2px',
                lineHeight: 0.95,
                color: '#f5f1ea',
                marginBottom: '1.5rem',
              }}
            >
              Where healthy<br />
              <em style={{ color: '#d7b68a', fontWeight: 500, fontStyle: 'italic', display: 'block', marginTop: '-12px' }}>feels happy</em>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.65 }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: 'rgba(232,222,202,0.55)', lineHeight: 1.9, marginBottom: '2.6rem', maxWidth: '420px' }}
            >
              A warm, cozy café in Bengaluru where every plate is crafted with love, every sip tells a story.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.6 }}
              style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.2rem' }}
            >
              <Link to="/menu" style={{
                background: '#d9b98f', color: '#2f3a2f',
                fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600,
                padding: '14px 32px', borderRadius: '999px', textDecoration: 'none', letterSpacing: '0.01em',
              }}>
                Explore Menu
              </Link>
              <a href="https://wa.me/919591430770" target="_blank" rel="noopener noreferrer"
                style={{
                  border: '1px solid rgba(255,255,255,0.22)', backgroundColor: 'transparent',
                  backdropFilter: 'blur(4px)', color: '#d5cdc0',
                  fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 400,
                  padding: '14px 32px', borderRadius: '999px', textDecoration: 'none',
                }}>
                Order on WhatsApp
              </a>
            </motion.div>

            {/* Open badge */}
            <motion.div className="hero-status-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#6ee7a0', display: 'inline-block', boxShadow: '0 0 0 3px rgba(110,231,160,0.18)', flexShrink: 0 }} />
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.73rem', color: 'rgba(218,208,186,0.46)', margin: 0, letterSpacing: '0.03em' }}>
                Open today · 10:00 AM – 11:30 PM
              </p>
            </motion.div>

          </div>


        </div>
      </section>

      {/* About Preview */}
      <section style={{ backgroundColor: '#F7F3EE', padding: '6rem 1.5rem' }}>
        <div className="two-col-grid" style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '1rem' }}>Our Story</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#4F5D4A', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Where wholesome<br />meets <em>wonderful</em>
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#7A8B75', lineHeight: 1.9, marginBottom: '1rem' }}>
              Greens & Giggles started with a genuine love for good food and the desire to build something of our own — a space where healthy eating feels practical, affordable, and enjoyable.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#7A8B75', lineHeight: 1.9, marginBottom: '2rem' }}>
              Our menu focuses on fresh salads, continental comfort dishes, and Mexican favorites made with balanced ingredients. Quality, portion, and flavor — every meal feels satisfying and worth it.
            </p>
            <Link
              to="/about"
              style={{
                display: 'inline-block',
                borderBottom: '1.5px solid #8B6B4A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#8B6B4A',
                textDecoration: 'none',
                paddingBottom: '2px',
                letterSpacing: '0.05em',
              }}
            >
              Read our story →
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(79,93,74,0.12)' }}>
              <img src={cafeInterior4} alt="Cozy Corner at Greens & Giggles" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(79,93,74,0.1)' }}>
              <img src={cafeBarArea} alt="Bar Nook at Greens & Giggles" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/7' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu */}
      <section style={{ backgroundColor: '#ffffff', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '0.75rem' }}>Chef's Picks</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#4F5D4A' }}>Featured dishes</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="menu-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}
          >
            {featured.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <Link
              to="/menu"
              style={{
                display: 'inline-block',
                border: '1.5px solid #4F5D4A',
                color: '#4F5D4A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 600,
                padding: '14px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews */}
      <section style={{ backgroundColor: '#4F5D4A', padding: '5rem 0 5.5rem', overflow: 'hidden' }}>
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 1.5rem' }}
        >
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E6C9A8', marginBottom: '0.75rem' }}>
            What our guests say
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#F7F3EE', marginBottom: '1rem' }}>
            Loved by Bengaluru 🌿
          </h2>
          {/* Star rating badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(247,243,238,0.1)', border: '1px solid rgba(230,201,168,0.35)', borderRadius: '100px', padding: '10px 22px' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F5C842"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#F7F3EE' }}>5.0</span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: 'rgba(247,243,238,0.6)' }}>· 130 Google reviews</span>
          </div>
        </motion.div>

        {/* Scrolling reviews */}
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="reviews-track">
            {[
              { name: 'Krishna Krishna', text: 'OMG😱 this café and had an amazing experience. The owner Advik extremely friendly and welcoming which made the visit even better. I tried three items from the menu and honestly I was speechless.', tag: 'Dine in · Lunch' },
              { name: 'Palak Ojha', text: 'The vibe is calm and aesthetic, making it a perfect place to unwind. Every dish we ordered was flavorful and well-prepared. You can truly see the passion and effort put into every dish.', tag: 'Dine in · Brunch' },
              { name: 'Pradeep Shetty', text: 'Everything tasted fresh and the presentation was great. What I liked the most was the attention to detail in both the food and the service. The staff were very friendly and polite.', tag: 'Verified review' },
              { name: 'Vinith nagaraj', text: 'The ambience was absolutely lovely — warm lighting, cozy seating, and soft background music created the perfect relaxing atmosphere. It\'s a great place to unwind and catch up.', tag: 'Dine in · Dinner' },
              { name: 'Monish A.S', text: 'Absolutely loved my time at Greens and Giggles! The atmosphere is so refreshing and upbeat — it\'s impossible not to leave with a smile. The staff is incredibly friendly and you can tell they put a lot of heart into the place.', tag: 'Dine in · Lunch' },
              { name: 'Keerthan D P', text: 'Amazing café with a super relaxing ambience. The coffee was perfectly brewed and the staff were really friendly. A perfect place to chill or work for a few hours.', tag: 'Verified review' },
              { name: 'Chinmay K', text: 'Loved the vibe of this place! The cappuccino was rich and smooth, and the desserts were delicious. Definitely one of my favorite cafés in Bangalore.', tag: 'Verified review' },
              { name: 'Diya Surendran', text: 'I tried their creamy mushroom toast — the toast felt so comforting and it makes you want to keep going for another bite. The staff at Greens and Giggles are very humble and down to earth.', tag: 'Dine in · Brunch' },
              { name: 'Sneha gm', text: '5 stars are less for describing Greens & Giggles! Best food, cooperative service — they customize our needs on the plate. Even with my allergy to bell peppers, they crafted something perfect.', tag: 'Dine in · Brunch' },
              { name: 'Anusha K', text: 'Such a beautiful and cozy cafe! The ambiance is very pleasant and the food tastes amazing. Loved the service too. Highly recommended!', tag: 'Verified review' },
            // duplicate for seamless loop
              { name: 'Krishna Krishna', text: 'OMG😱 this café and had an amazing experience. The owner Advik extremely friendly and welcoming which made the visit even better. I tried three items from the menu and honestly I was speechless.', tag: 'Dine in · Lunch' },
              { name: 'Palak Ojha', text: 'The vibe is calm and aesthetic, making it a perfect place to unwind. Every dish we ordered was flavorful and well-prepared. You can truly see the passion and effort put into every dish.', tag: 'Dine in · Brunch' },
              { name: 'Pradeep Shetty', text: 'Everything tasted fresh and the presentation was great. What I liked the most was the attention to detail in both the food and the service. The staff were very friendly and polite.', tag: 'Verified review' },
              { name: 'Vinith nagaraj', text: 'The ambience was absolutely lovely — warm lighting, cozy seating, and soft background music created the perfect relaxing atmosphere. It\'s a great place to unwind and catch up.', tag: 'Dine in · Dinner' },
              { name: 'Monish A.S', text: 'Absolutely loved my time at Greens and Giggles! The atmosphere is so refreshing and upbeat — it\'s impossible not to leave with a smile. The staff is incredibly friendly and you can tell they put a lot of heart into the place.', tag: 'Dine in · Lunch' },
              { name: 'Keerthan D P', text: 'Amazing café with a super relaxing ambience. The coffee was perfectly brewed and the staff were really friendly. A perfect place to chill or work for a few hours.', tag: 'Verified review' },
              { name: 'Chinmay K', text: 'Loved the vibe of this place! The cappuccino was rich and smooth, and the desserts were delicious. Definitely one of my favorite cafés in Bangalore.', tag: 'Verified review' },
              { name: 'Diya Surendran', text: 'I tried their creamy mushroom toast — the toast felt so comforting and it makes you want to keep going for another bite. The staff at Greens and Giggles are very humble and down to earth.', tag: 'Dine in · Brunch' },
              { name: 'Sneha gm', text: '5 stars are less for describing Greens & Giggles! Best food, cooperative service — they customize our needs on the plate. Even with my allergy to bell peppers, they crafted something perfect.', tag: 'Dine in · Brunch' },
              { name: 'Anusha K', text: 'Such a beautiful and cozy cafe! The ambiance is very pleasant and the food tastes amazing. Loved the service too. Highly recommended!', tag: 'Verified review' },
            ].map((r, i) => (
              <div key={i} style={{
                flexShrink: 0, width: '320px',
                backgroundColor: 'rgba(247,243,238,0.07)',
                border: '1px solid rgba(230,201,168,0.2)',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F5C842"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                {/* Review text */}
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.83rem', color: 'rgba(247,243,238,0.85)', lineHeight: 1.7, flexGrow: 1 }}>
                  "{r.text}"
                </p>
                {/* Reviewer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '0.5rem', borderTop: '1px solid rgba(230,201,168,0.15)' }}>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    backgroundColor: '#4F5D4A',
                    border: '1.5px solid #E6C9A8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#E6C9A8',
                    flexShrink: 0,
                  }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#F7F3EE', margin: 0 }}>{r.name}</p>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', color: 'rgba(247,243,238,0.45)', margin: 0 }}>{r.tag} · Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1.5rem' }}
        >
          <a
            href="https://www.google.com/search?sca_esv=a3d84300357be008&sxsrf=ANbL-n5Av05vgCtBtAnIzqEkvmD5io5XSA:1776680458892&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZfm3C-6aPpcWkLjildA3lw7dYHRN4LqK37_9WLY8i-SO_H1ulJWscfksDqM0hFF7R1ieuKfMJDPWscLHE4X4-f6AxCI_Q_Qrp-sHEXFru57derW_w%3D%3D&q=Greens+and+Giggles+Reviews&sa=X&ved=2ahUKEwjrwYa9mvyTAxX1GbkGHfbsA8kQ0bkNegQILRAF&biw=1680&bih=828&dpr=2"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1.5px solid rgba(247,243,238,0.35)',
              color: '#F7F3EE', backgroundColor: 'transparent',
              fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 500,
              padding: '13px 30px', borderRadius: '100px', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            Read all 130 reviews on Google
          </a>
        </motion.div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: '#fff', padding: '6rem 1.5rem' }}>
        <div className="two-col-grid" style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: '1rem' }}>Come Visit Us</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#4F5D4A', marginBottom: '1.5rem' }}>Find us in Bengaluru</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '📍', label: 'Address', value: 'New BEL Rd, Near HP Petrol Bunk, M S R Nagar, R.M.V. 2nd Stage, Bengaluru 560054' },
                { icon: '📞', label: 'Phone', value: '+91 97311 19458', href: 'tel:9731119458' },
                { icon: '⏰', label: 'Hours', value: 'Mon–Sun: 10:00 AM – 11:30 PM' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7A8B75', marginBottom: '2px' }}>{label}</p>
                    {href ? (
                      <a href={href} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#4F5D4A', textDecoration: 'none', fontWeight: 500 }}>{value}</a>
                    ) : (
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#4F5D4A', fontWeight: 500 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919591430770"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '2rem',
                backgroundColor: '#4F5D4A',
                color: '#F7F3EE',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 500,
                padding: '14px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Get Directions on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              height: 'clamp(240px, 40vw, 350px)',
              border: '1px solid #E6C9A8',
            }}
          >
            <iframe
              title="Greens and Giggles Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.26!2d77.5711!3d13.0358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a2e0ac9413%3A0x8c7ae6c84ef87b0a!2sNew%20BEL%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#E6C9A8', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#4F5D4A', marginBottom: '1rem', lineHeight: 1.2 }}>
            Hungry? We're<br />just a message away.
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#8B6B4A', lineHeight: 1.8, marginBottom: '2rem' }}>
            Order directly via WhatsApp — it's fast, easy, and you'll hear from us right away.
          </p>
          <a
            href="https://wa.me/919591430770"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#4F5D4A',
              color: '#F7F3EE',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.92rem',
              fontWeight: 600,
              padding: '16px 36px',
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}
