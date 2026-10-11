import { useCart } from "../Cart/Cart.jsx";
import fallback1 from "../Images/fallback1.jpg";
import fallback2 from "../Images/fallback2.jpg";
import fallback3 from "../Images/fallback3.jpg";

const fallbacks = [fallback1, fallback2, fallback3];

const products = [
  { id: 1, name: "Blue Frock", price: 29.99, img: "https://images.unsplash.com/photo-1515372039744-b8f02a3c67ae?w=400" },
  { id: 2, name: "Girl Summer Dress", price: 19.99, img: "https://images.unsplash.com/photo-1572804013309-59a88b7e?w=400" },
  { id: 3, name: "Gray Dress", price: 34.99, img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400" },
  { id: 4, name: "Red Elegant Dress", price: 45.99, img: "https://images.unsplash.com/photo-1595777457583-95e059d5?w=400" },
  { id: 5, name: "White Summer", price: 39.99, img: "https://images.unsplash.com/photo-1529903384028-49b6d1a8c5f9?w=400" },
  { id: 6, name: "Black Evening", price: 59.99, img: "https://images.unsplash.com/photo-1596783046904-8d6bb8a5c6d2?w=400" },
  { id: 7, name: "Floral Dress", price: 32.99, img: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400" },
  { id: 8, name: "Casual Pink", price: 27.99, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400" },
  { id: 9, name: "Denim Dress", price: 36.99, img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400" },
  { id: 10, name: "Green Boho", price: 41.99, img: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400" },
  { id: 11, name: "Silk Dress", price: 62.99, img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400" },
  { id: 12, name: "Beach Dress", price: 24.99, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400" },
];

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Shop Dresses</h2>
      <div className="row g-4">
        {products.map((p, index) => (
          <div key={p.id} className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 p-2 text-center">
              <img
                src={p.img ? p.img : fallbacks[index % 3]}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbacks[index % 3];
                }}
                alt={p.name}
                style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "10px" }}
              />
              <div className="card-body">
                <h6>{p.name}</h6>
                <p className="text-muted">${p.price}</p>
                <button onClick={() => addToCart(p)} className="btn btn-dark w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}