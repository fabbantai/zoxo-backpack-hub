import { useParams, Link } from 'react-router-dom';
import { products, cities } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function CityPage() {
  const { city } = useParams();
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">Best Bags in {cityName}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
          Best Backpacks in {cityName}
        </h1>
        <p className="mt-2 text-muted-foreground mb-4 max-w-2xl">
          Looking for durable backpacks in {cityName}? ZOXO delivers premium school and college bags to {cityName} within 3-5 days. Shop our collection starting at just ₹399.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Other cities */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-foreground mb-4">Also delivering to</h2>
          <div className="flex flex-wrap gap-2">
            {cities.filter(c => c !== city).map(c => (
              <Link
                key={c}
                to={`/best-bags-in-${c}`}
                className="text-xs text-accent hover:underline bg-muted px-3 py-1.5 rounded-full"
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
