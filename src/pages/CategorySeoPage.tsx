import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useEffect } from "react";

export default function CategorySeoPage() {
  const { type } = useParams();

  const titleMap: any = {
    "school-bags": "Best School Bags for Students",
    "college-bags": "Best College Backpacks",
    "waterproof-bags": "Best Waterproof Backpacks",
    "travel-bags": "Best Travel Backpacks",
  };

  useEffect(() => {
    document.title = `${titleMap[type]} | ZOXO`;
  }, [type]);

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        <h1 className="text-3xl font-extrabold">
          {titleMap[type]}
        </h1>

        <p className="mt-2 text-muted-foreground">
          Discover top-rated {titleMap[type]?.toLowerCase()} with premium quality and affordable pricing.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}