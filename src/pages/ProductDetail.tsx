import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import cities from "@/data/cities";
import ProductCard from "@/components/product/ProductCard";
import { useEffect } from "react";

export default function PricePage() {
  const { price } = useParams();

  const maxPrice = Number(price);

  const filteredProducts = products.filter(
    (p) => p.price <= maxPrice
  );

  useEffect(() => {
    document.title = `Best Backpacks Under ₹${price} | ZOXO`;
  }, [price]);

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Best Backpacks Under ₹{price}
        </h1>

        <p className="mt-2 text-muted-foreground max-w-2xl">
          Explore the best backpacks under ₹{price} for school, college and travel. 
          Affordable, stylish and durable bags at the best price.
        </p>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-4">
            Explore Other Price Ranges
          </h2>

          <div className="flex flex-wrap gap-2">
            {[300, 400, 500, 700, 1000].map((p) => (
              <Link
                key={p}
                to={`/best-backpacks-under-${p}`}
                className="text-xs px-3 py-1 bg-muted rounded-full"
              >
                Under ₹{p}
              </Link>
            ))}
          </div>
        </div>

        {/* City links */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">
            Browse by City
          </h2>

          <div className="flex flex-wrap gap-2">
            {cities.slice(0, 15).map((c) => (
              <Link
                key={c}
                to={`/best-backpacks-in-${c}`}
                className="text-xs px-3 py-1 bg-muted rounded-full"
              >
                {c.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}