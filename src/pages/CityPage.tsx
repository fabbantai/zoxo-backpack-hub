import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import cities from '@/data/cities';
import ProductCard from '@/components/product/ProductCard';
import { Helmet } from "react-helmet-async";

export default function CityPage() {
  const { city } = useParams();

  const cityName = city
    ? city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")
    : '';

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        {/* SEO */}
        <Helmet>
          <title>Best Backpacks in {cityName} | ZOXO</title>
          <meta 
            name="description" 
            content={`Find the best backpacks in ${cityName} for school, college and travel. Affordable stylish bags under ₹500.`} 
          />
        </Helmet>

        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Best Backpacks in {cityName}</span>
        </nav>

        <h1 className="text-3xl font-extrabold">
          Best Backpacks in {cityName}
        </h1>

        <p className="mt-2 text-muted-foreground mb-6 max-w-2xl">
          Discover affordable and stylish backpacks in {cityName}. Perfect for school, college and travel.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* SEO links */}
        <div className="mt-16">
          <h2 className="text-lg font-bold mb-4">Other Cities</h2>
          <div className="flex flex-wrap gap-2">
            {cities.map(c => (
              <Link key={c} to={`/best-backpacks-in-${c}`} className="text-xs bg-muted px-3 py-1 rounded">
                {c}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}