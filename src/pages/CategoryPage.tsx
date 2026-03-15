import { useParams } from 'react-router-dom';
import { getProductsByCategory, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';

export default function CategoryPage() {
  const { category } = useParams();
  const cat = categories.find(c => c.slug === category);
  const filtered = getProductsByCategory(category || '');

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">{cat?.name || category}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
          {cat?.name || 'Category'}
        </h1>
        <p className="mt-2 text-muted-foreground mb-8">
          {filtered.length} products found
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No products in this category yet.</p>
        )}
      </div>
    </div>
  );
}
