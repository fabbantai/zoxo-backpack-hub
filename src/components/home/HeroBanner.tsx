import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="zoxo-container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
              New Collection 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
              Backpacks Built
              <br />
              for Every Journey
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">

              Modern, durable backpacks designed for everyday use — from classrooms to travel. Built for comfort, style, and performance.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/c/kids-backpacks"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-semibold text-sm border border-border hover:bg-secondary transition-colors"
              >
                Kids Collection
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
  <span>✔ Premium Quality Materials</span>
  <span>✔ Designed for Daily Comfort</span>
  <span>✔ Built for School, College & Travel</span>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroBanner}
              alt="Student wearing ZOXO backpack in urban setting"
              className="w-full rounded-2xl object-cover aspect-[4/3] lg:aspect-[3/4]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
