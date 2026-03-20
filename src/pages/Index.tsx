import HeroBanner from '@/components/home/HeroBanner';
import CategorySection from '@/components/home/CategorySection';
import ProductGrid from '@/components/home/ProductGrid';
import BrandBenefits from '@/components/home/BrandBenefits';
import CustomerReviews from '@/components/home/CustomerReviews';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Best Backpacks Under ₹500 | School, College Bags India | ZOXO</title>

        <meta 
          name="description" 
          content="Shop the best backpacks under ₹500 for school, college and travel. Stylish, durable and affordable bags available at ZOXO." 
        />

        <meta name="keywords" content="backpacks under 500, school bags india, college bags, kids backpacks" />

        <meta property="og:title" content="Best Backpacks Under ₹500 | ZOXO" />
        <meta property="og:description" content="Affordable backpacks for school, college & travel." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <HeroBanner />

      {/* 🔥 INTERNAL SEO LINKS (VERY IMPORTANT) */}
      <section className="zoxo-section pt-8">
        <div className="zoxo-container text-center">
          <h2 className="text-xl font-bold mb-4">Popular Searches</h2>

          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/best-backpacks-under-500" className="text-xs bg-muted px-3 py-1 rounded">Under ₹500</Link>
            <Link to="/best-backpacks-under-300" className="text-xs bg-muted px-3 py-1 rounded">Under ₹300</Link>
            <Link to="/best-backpacks-in-mumbai" className="text-xs bg-muted px-3 py-1 rounded">Mumbai</Link>
            <Link to="/best-backpacks-in-delhi" className="text-xs bg-muted px-3 py-1 rounded">Delhi</Link>
            <Link to="/best-backpacks-in-bangalore" className="text-xs bg-muted px-3 py-1 rounded">Bangalore</Link>
            <Link to="/blog" className="text-xs bg-muted px-3 py-1 rounded">Guides</Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
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

      {/* CTA */}
      <section className="zoxo-section bg-foreground">
        <div className="zoxo-container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-background">
            Ready to Find Your Perfect Bag?
          </h2>

          <p className="mt-3 text-background/60 max-w-md mx-auto">
            Find your perfect everyday backpack — crafted for comfort, style, and performance.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-sm mt-8"
          >
            Shop All Bags <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 🔥 EXTRA SEO TEXT (VERY IMPORTANT FOR GOOGLE) */}
      <section className="zoxo-section">
        <div className="zoxo-container max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Affordable Backpacks for Every Need
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            ZOXO offers a wide range of backpacks for school, college and travel. 
            Whether you're looking for lightweight school bags, stylish college backpacks 
            or durable travel bags, we have the perfect option for you. 
            Explore our collection of backpacks under ₹500 designed for comfort, durability and everyday use.
          </p>
        </div>
      </section>

    </>
  );
};

export default Index;