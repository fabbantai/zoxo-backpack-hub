import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="zoxo-section">
      <div className="zoxo-container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground text-center">About ZOXO</h1>
        <p className="mt-4 text-center text-muted-foreground">Our story, our mission</p>

        <div className="mt-12 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">ZOXO</strong> is a backpack brand focused on stylish, affordable and durable bags for school, college and everyday travel. We believe that everyone deserves a quality bag that doesn't break the bank.
          </p>
          <p>
            Founded with a simple mission — to create backpacks that combine durability, style, and affordability — ZOXO has quickly become a trusted choice for students and young professionals across India.
          </p>
          <p>
            Every ZOXO bag is designed with attention to detail: reinforced stitching, waterproof materials, ergonomic straps, and thoughtful compartments. We include a free water bottle with every purchase because we care about the little things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Award, title: 'Quality First', desc: 'Premium materials and construction at honest prices' },
            { icon: Heart, title: 'Customer Love', desc: '10,000+ happy customers and counting' },
            { icon: Users, title: 'For Everyone', desc: 'Kids, students, professionals — bags for all' },
          ].map(item => (
            <div key={item.title} className="text-center p-6 rounded-2xl bg-muted">
              <item.icon size={32} className="mx-auto text-accent mb-3" />
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
