import { useParams, Link } from 'react-router-dom';
import { getProductsByPrice } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function PricePage() {
  const { price } = useParams();
  const maxPrice = parseInt(price || '0');
  const filtered = getProductsByPrice(maxPrice);

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">Best Bags Under ₹{maxPrice}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
          Best Backpacks Under ₹{maxPrice}
        </h1>
        <p className="mt-2 text-muted-foreground mb-8">
          {filtered.length} bags available under ₹{maxPrice}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
