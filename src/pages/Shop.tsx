import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useState } from 'react';

export default function Shop() {
  const [sort, setSort] = useState<'price-asc' | 'price-desc' | 'rating'>('rating');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filtered = categoryFilter === 'all'
    ? products
    : products.filter(p => p.category.includes(categoryFilter));

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return b.rating - a.rating;
  });

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">All Backpacks</h1>
          <p className="mt-2 text-muted-foreground">Browse our complete collection</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground">Category:</label>
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground"
            >
              <option value="all">All</option>
              <option value="school-bags">School Bags</option>
              <option value="kids-backpacks">Kids Backpacks</option>
              <option value="college-backpacks">College Backpacks</option>
              <option value="laptop-backpacks">Laptop Backpacks</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground">Sort:</label>
            <select
              value={sort}
              onChange={e => setSort(e.target.value as typeof sort)}
              className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground"
            >
              <option value="rating">Top Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sorted.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No products found.</p>
        )}
      </div>
    </div>
  );
}
