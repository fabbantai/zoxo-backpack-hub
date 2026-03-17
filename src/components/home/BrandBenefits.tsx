import { Shield, Truck, RotateCcw, Award, Droplets, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
<<<<<<< HEAD
  { icon: Truck, title: 'Smart Design', desc: 'Built for better organization & daily use' },
  { icon: Shield, title: 'Premium Build', desc: 'High-quality materials for long durability' },
  { icon: RotateCcw, title: 'Comfort First', desc: 'Ergonomic design for all-day comfort' },
  { icon: Award, title: 'Modern Style', desc: 'Clean & minimal look for every occasion' },
  { icon: Droplets, title: 'Water Resistant', desc: 'Protects your essentials from rain' },
  { icon: HeadphonesIcon, title: 'Everyday Use', desc: 'Perfect for school, college & travel' },
=======
  { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₹499' },
  { icon: Shield, title: 'Secure Payment', desc: 'UPI, Cards, Net Banking' },
  { icon: RotateCcw, title: 'Easy Returns', desc: '7-day return policy' },
  { icon: Award, title: 'Premium Quality', desc: 'Durable materials used' },
  { icon: Droplets, title: 'Waterproof', desc: 'Water resistant bags' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'WhatsApp support' },
>>>>>>> a18db7b4e9a5177807892220325b9b9d84ba529f
];

export default function BrandBenefits() {
  return (
    <section className="zoxo-section bg-muted">
      <div className="zoxo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">Why ZOXO?</h2>
          <p className="mt-2 text-muted-foreground">Engineered for Everyday Performance.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <b.icon size={28} className="text-accent mb-3" />
              <h3 className="text-sm font-bold text-foreground">{b.title}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
