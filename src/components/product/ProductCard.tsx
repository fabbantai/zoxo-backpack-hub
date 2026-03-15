import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col gap-3 zoxo-card p-2">
      <Link to={`/p/${product.slug}`} className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.price < 500 && (
          <span className="absolute left-2 top-2 zoxo-badge bg-green-600 text-accent-foreground">
            BEST VALUE
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute right-2 top-2 zoxo-badge bg-accent text-accent-foreground">
            BESTSELLER
          </span>
        )}
        {product.tags.includes('free-bottle') && (
          <span className="absolute left-2 bottom-2 zoxo-badge bg-foreground text-background">
            FREE BOTTLE 🍶
          </span>
        )}
      </Link>
      <div className="flex flex-col px-1 pb-2">
        <Link to={`/p/${product.slug}`}>
          <h3 className="text-sm font-semibold text-foreground line-clamp-1">{product.shortTitle}</h3>
        </Link>
        <p className="text-[11px] text-muted-foreground mt-0.5">{product.capacity} · {product.color}</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="zoxo-price">₹{product.price}</span>
          <span className="zoxo-price-old">₹{product.mrp}</span>
          <span className="zoxo-price-discount">{product.discount}% OFF</span>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={11} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">{product.reviews.toLocaleString()} reviews</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 flex items-center justify-center gap-2 w-full bg-foreground text-background rounded-lg py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          <ShoppingBag size={14} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
