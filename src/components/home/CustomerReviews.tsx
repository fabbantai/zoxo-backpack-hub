import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Priya S.', city: 'Mumbai', rating: 5, text: 'Impressive quality and design at this price point. My daughter loves her pink princess bag. The free bottle was a nice touch.', product: 'Pink Princess Kids' },
  { name: 'Rahul M.', city: 'Delhi', rating: 4, text: 'Great laptop bag for college. Waterproof material saved my laptop during rain. Highly recommended!', product: 'Teal Laptop Bag' },
  { name: 'Sneha K.', city: 'Bangalore', rating: 5, text: 'The unicorn bag is so cute! My 6-year-old refuses to use any other bag. Very spacious with 4 compartments.', product: 'Unicorn Print Girls' },
  { name: 'Amit P.', city: 'Pune', rating: 4, text: 'Professional looking grey bag. Perfect for office and college. Good padding for laptop protection.', product: 'Grey Executive' },
];

export default function CustomerReviews() {
  return (
    <section className="zoxo-section">
      <div className="zoxo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">What Customers Say</h2>
          <p className="mt-2 text-muted-foreground">Trusted by students across India</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-background"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex text-yellow-400 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <p className="text-[11px] text-muted-foreground">{review.city} · {review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
