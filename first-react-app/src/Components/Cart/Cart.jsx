import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <div className="container py-5 text-center"><h3>Your Cart is Empty</h3></div>
  }

  return (
    <div className="container py-4">
      <h2>Your Cart ({cart.length})</h2>
      {cart.map((item, index) => (
        <div key={index} className="d-flex justify-content-between border-bottom py-2">
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeFromCart(index)} className="btn btn-sm btn-danger">Remove</button>
        </div>
      ))}
      <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
    </div>
  );
}