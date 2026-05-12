import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, veg: item.veg, quantity: 1 }];
    });
  }, []);

  const increment = useCallback((id) => {
    setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  }, []);

  const decrement = useCallback((id) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item?.quantity === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
    });
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cartItems.reduce((s, i) => s + (i.price ?? 0) * i.quantity, 0);

  const quantityOf = (id) => cartItems.find((i) => i.id === id)?.quantity ?? 0;

  return (
    <CartContext.Provider value={{
      cartItems, addItem, increment, decrement, removeItem, clearCart,
      totalItems, totalPrice, quantityOf,
      drawerOpen, setDrawerOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
