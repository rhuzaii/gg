import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import CartButton from './components/CartButton';

// Lazy-load pages so each page only loads its own assets
const Home    = lazy(() => import('./pages/Home'));
const Menu    = lazy(() => import('./pages/Menu'));
const About   = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Routes>
              <Route path="/"        element={<Home />} />
              <Route path="/menu"    element={<Menu />} />
              <Route path="/about"   element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <CartButton />
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}
