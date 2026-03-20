import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import cities from '@/data/cities';
import ProductCard from '@/components/product/ProductCard';
import { Helmet } from "react-helmet-async";

export default function CityPage() {
  const { city } = useParams();

  const cityName = city
    ? city
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : '';

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        {/* 🔥 SEO */}
        <Helmet>
          <title>Best Backpacks in {cityName} | ZOXO</title>

          <meta 
            name="description" 
            content={`Shop the best backpacks in ${cityName} for school, college and travel. Affordable, stylish and durable bags under ₹500 with fast delivery.`} 
          />

          <meta property="og:title" content={`Best Backpacks in ${cityName} | ZOXO`} />
          <meta property="og:description" content={`Top backpacks available in ${cityName} at best prices.`} />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">Backpacks in {cityName}</span>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Best Backpacks in {cityName}
        </h1>

        <p className="mt-2 text-muted-foreground mb-6 max-w-2xl">
          Looking for stylish and affordable backpacks in {cityName}? 
          Explore ZOXO's latest collection of school, college and travel bags under ₹500.
        </p>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* 🔥 Price Links (extra SEO boost) */}
        <div className="mt-16">
          <h2 className="text-lg font-bold mb-4">
            Browse by Price
          </h2>

          <div className="flex flex-wrap gap-2">
            {[300, 400, 500, 700, 1000].map(p => (
              <Link
                key={p}
                to={`/best-backpacks-under-${p}`}
                className="text-xs px-3 py-1 bg-muted rounded hover:bg-secondary"
              >
                Under ₹{p}
              </Link>
            ))}
          </div>
        </div>

        {/* 🔥 Other Cities */}
        <div className="mt-16">
          <h2 className="text-lg font-bold mb-4">
            Explore Other Cities
          </h2>

          <div className="flex flex-wrap gap-2">
            {cities.map(c => (
              <Link
                key={c}
                to={`/best-backpacks-in-${c}`}
                className="text-xs px-3 py-1 bg-muted rounded hover:bg-secondary"
              >
                {c
                  .split("-")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
                }
              </Link>
            ))}
          </div>
        </div>

        {/* 🔥 SEO Content Section (VERY IMPORTANT) */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-xl font-bold mb-3">
            Buy Backpacks Online in {cityName}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            ZOXO offers a wide range of backpacks in {cityName} designed for students, professionals and travelers. 
            Whether you need a school bag, college backpack or a durable travel bag, we have options that combine style, comfort and affordability. 
            Our backpacks are lightweight, spacious and built for everyday use.
          </p>
        </div>

      </div>
    </div>
  );
}