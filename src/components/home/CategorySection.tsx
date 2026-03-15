import { Link } from 'react-router-dom';
import categoryKids from '@/assets/category-kids.jpg';
import categoryCollege from '@/assets/category-college.jpg';
import categoryTravel from '@/assets/category-travel.jpg';
import { motion } from 'framer-motion';

const categoriesData = [
  { name: 'Kids Bags', slug: 'kids-backpacks', image: categoryKids, count: 2 },
  { name: 'College Bags', slug: 'college-backpacks', image: categoryCollege, count: 2 },
  { name: 'Travel & Laptop', slug: 'laptop-backpacks', image: categoryTravel, count: 2 },
];

export default function CategorySection() {
  return (
    <section className="zoxo-section">
      <div className="zoxo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">Shop by Category</h2>
          <p className="mt-2 text-muted-foreground">Find the perfect bag for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesData.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/c/${cat.slug}`}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-background">{cat.name}</h3>
                  <p className="text-sm text-background/70 mt-1">{cat.count} Products</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
