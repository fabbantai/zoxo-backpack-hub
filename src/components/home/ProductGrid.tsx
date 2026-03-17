import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  filter?: (p: typeof products[0]) => boolean;
  maxItems?: number;
}

export default function ProductGrid({ title, subtitle, filter, maxItems = 4 }: Props) {
  const filtered = filter ? products.filter(filter) : products;
  const display = filtered.slice(0, maxItems);

  return (
    <section className="zoxo-section">
      <div className="zoxo-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {display.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
