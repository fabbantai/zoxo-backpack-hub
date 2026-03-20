import { useParams } from "react-router-dom";
import { products } from "@/data/products";

export default function CityPage() {
  const { city } = useParams();

  const formattedCity =
    city?.charAt(0).toUpperCase() + city?.slice(1);

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        {/* SEO Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Best Backpacks in {formattedCity} (2026)
        </h1>

        <p className="mt-3 text-muted-foreground max-w-2xl">
          Discover the best backpacks in {formattedCity} for school, college, and travel. Affordable, stylish, and durable bags starting under ₹500.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <div key={product.id} className="bg-background p-4 rounded-xl border border-border">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-sm font-semibold mt-3">{product.name}</h3>
              <p className="text-sm text-muted-foreground">₹{product.price}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}