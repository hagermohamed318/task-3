import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navebar from "./Navebar/Navebar.jsx";
import Shop from './Shop/Shop.jsx'
import Cart, { CartProvider } from './Cart/Cart.jsx'

function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center text-center" style={{height: '80vh'}}>
      <div className="container">
        <h1 className="display-3 fw-bold">StyleHub 2026</h1>
        <p className="text-muted fs-4 mb-4">Elegance is an Attitude - New Summer Collection</p>
        <Link to="/shop" className="btn btn-dark btn-lg rounded-pill px-5">Shop Collection</Link>
      </div>
    </div>
  )
}
function About() {
  return (
    <div className="container py-5 text-center">
      <h2>About StyleHub</h2>
      <p className="text-muted">We create modern and elegant fashion</p>
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}