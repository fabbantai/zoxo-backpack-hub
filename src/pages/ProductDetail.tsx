import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, products } from '@/data/products';
import { Star, ExternalLink, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <div className="zoxo-section text-center">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <Link to="/shop" className="text-accent mt-4 inline-block hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <>
      <div className="zoxo-container px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.shortTitle}</span>
        </nav>
      </div>

      <div className="zoxo-container px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-square rounded-2xl overflow-hidden bg-muted">
            <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-2">
              {product.bestSeller && <span className="zoxo-badge bg-accent text-accent-foreground">BESTSELLER</span>}
              {product.tags.includes('free-bottle') && <span className="zoxo-badge bg-foreground text-background">FREE BOTTLE</span>}
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground leading-tight">{product.title}</h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-extrabold text-foreground">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">₹{product.mrp}</span>
              <span className="zoxo-badge bg-green-600 text-accent-foreground text-xs">{product.discount}% OFF</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</p>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: 'Capacity', value: product.capacity },
                { label: 'Material', value: product.material },
                { label: 'Weight', value: product.weight },
                { label: 'Color', value: product.color },
              ].map(spec => (
                <div key={spec.label} className="p-3 rounded-xl bg-muted">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{spec.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={product.meeshoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={18} /> Shop Now on Meesho
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Truck size={14} /> Free Delivery ₹499+</span>
              <span className="flex items-center gap-1"><Shield size={14} /> Secure Payment</span>
              <span className="flex items-center gap-1"><RotateCcw size={14} /> 7-Day Returns</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Specifications</h2>
            <div className="rounded-2xl overflow-hidden border border-border">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={key} className={`flex justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-muted' : 'bg-background'}`}>
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold tracking-tighter text-foreground mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      {/* Sticky mobile buy bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border p-3 z-40 flex items-center gap-3">
        <div className="flex-1">
          <span className="text-lg font-extrabold text-foreground">₹{product.price}</span>
          <span className="text-xs text-muted-foreground line-through ml-2">₹{product.mrp}</span>
        </div>
        <a
          href={product.meeshoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <ExternalLink size={14} /> Shop on Meesho
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.title,
            description: product.description,
            image: product.images[0],
            brand: { '@type': 'Brand', name: 'ZOXO' },
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'INR',
              availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
              url: product.meeshoUrl,
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviews,
            },
          }),
        }}
      />
    </>
  );
}
