import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Kids', to: '/c/kids-backpacks' },
  { label: 'College', to: '/c/college-backpacks' },
  { label: 'Laptop Bags', to: '/c/laptop-backpacks' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="bg-primary text-primary-foreground text-center py-1.5 text-xs font-medium tracking-wide">
<<<<<<< HEAD
        Smart Backpacks for Modern Students & Professionals
=======
        India's Most Loved Backpack Brand — Trusted by 50,000+ Students Nationwide
>>>>>>> a18db7b4e9a5177807892220325b9b9d84ba529f
      </div>

      <div className="zoxo-container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tighter text-foreground">ZOXO</span>
          <span className="hidden sm:inline text-[10px] font-medium text-muted-foreground uppercase tracking-widest">Backpacks</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.to ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/shop" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search size={20} />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
