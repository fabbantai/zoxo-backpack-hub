import { useParams, Link } from 'react-router-dom';
import { getProductsByPrice } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Helmet } from "react-helmet-async";

export default function PricePage() {
  const { price } = useParams();
  const maxPrice = parseInt(price || '0');
  const filtered = getProductsByPrice(maxPrice);

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        {/* SEO */}
        <Helmet>
          <title>Best Backpacks Under ₹{maxPrice} | ZOXO</title>
          <meta 
            name="description" 
            content={`Shop the best backpacks under ₹${maxPrice}. Affordable school, college and travel bags with great quality.`} 
          />
        </Helmet>

        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Under ₹{maxPrice}</span>
        </nav>

        <h1 className="text-3xl font-extrabold">
          Best Backpacks Under ₹{maxPrice}
        </h1>

        <p className="mt-2 text-muted-foreground mb-6">
          {filtered.length} backpacks available under ₹{maxPrice}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Price linking */}
        <div className="mt-16 flex gap-2 flex-wrap">
          {[300, 400, 500, 700, 1000].map(p => (
            <Link key={p} to={`/best-backpacks-under-${p}`} className="text-xs bg-muted px-3 py-1 rounded">
              Under ₹{p}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}