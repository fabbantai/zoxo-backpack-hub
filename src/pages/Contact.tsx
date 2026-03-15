import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="zoxo-section">
      <div className="zoxo-container max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground text-center">Contact Us</h1>
        <p className="mt-2 text-center text-muted-foreground">We'd love to hear from you</p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground">Get in Touch</h2>
            {[
              { icon: Mail, label: 'Email', value: 'hello@zoxo.in', href: 'mailto:hello@zoxo.in' },
              { icon: Phone, label: 'Phone', value: '+91 99999 99999', href: 'tel:+919999999999' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919999999999' },
              { icon: MapPin, label: 'Location', value: 'India', href: null },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="p-8 rounded-2xl bg-muted text-center">
                <p className="text-lg font-bold text-foreground">Thank you! 🎉</p>
                <p className="text-sm text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    maxLength={150}
                    className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
