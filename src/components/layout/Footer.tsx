import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="zoxo-container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tighter mb-4">ZOXO</h3>
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              Stylish, affordable & durable backpacks for school, college and everyday travel. Built for the journey ahead.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'YouTube'].map(s => (
                <span key={s} className="text-xs opacity-50 hover:opacity-100 cursor-pointer transition-opacity">{s}</span>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'All Bags', to: '/shop' },
                { label: 'School Bags', to: '/c/school-bags' },
                { label: 'Kids Backpacks', to: '/c/kids-backpacks' },
                { label: 'College Backpacks', to: '/c/college-backpacks' },
                { label: 'Laptop Bags', to: '/c/laptop-backpacks' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Shipping Policy', to: '#' },
                { label: 'Return Policy', to: '#' },
                { label: 'Privacy Policy', to: '#' },
              ].map(link => (
                <Link key={link.label} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@zoxo.in" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
                <Mail size={14} /> hello@zoxo.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
                <Phone size={14} /> +91 99999 99999
              </a>
              <span className="flex items-center gap-2 text-sm opacity-70">
                <MapPin size={14} /> India
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">© 2026 ZOXO Backpacks. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs opacity-50">
            <span>🔒 Secure Payments</span>
            <span>📦 Free Shipping ₹499+</span>
            <span>↩️ Easy Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
