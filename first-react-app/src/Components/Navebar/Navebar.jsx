import { Link } from "react-router-dom";
import { useCart } from "../Cart/Cart.jsx";

export default function Navebar() {
  const { cartCount } = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">StyleHub</Link>
        <div className="d-flex gap-3">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/cart">Cart ({cartCount})</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}