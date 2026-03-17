import HeroBanner from '@/components/home/HeroBanner';
import CategorySection from '@/components/home/CategorySection';
import ProductGrid from '@/components/home/ProductGrid';
import BrandBenefits from '@/components/home/BrandBenefits';
import CustomerReviews from '@/components/home/CustomerReviews';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <HeroBanner />
      
      <ProductGrid
        title="Featured Backpacks"
        subtitle="Our most popular bags loved by thousands"
      />

      <CategorySection />

      <ProductGrid
        title="Kids Collection"
        subtitle="Fun & colorful bags for little ones"
        filter={p => p.category.includes('kids-backpacks')}
      />

      <ProductGrid
        title="Best Under ₹500"
        subtitle="Premium quality at unbeatable prices"
        filter={p => p.price < 500}
      />

      <BrandBenefits />

      <ProductGrid
        title="College & Laptop Bags"
        subtitle="Built for students, designed for professionals"
        filter={p => p.category.includes('laptop-backpacks')}
      />

      <CustomerReviews />

      {/* CTA Banner */}
      <section className="zoxo-section bg-foreground">
        <div className="zoxo-container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-background">
            Ready to Find Your Perfect Bag?
          </h2>
          <p className="mt-3 text-background/60 max-w-md mx-auto">
  Find your perfect everyday backpack — crafted for comfort, style, and performance.
</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-sm mt-8 hover:opacity-90 transition-opacity"
          >
            Shop All Bags <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
