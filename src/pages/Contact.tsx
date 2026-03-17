import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="zoxo-section">
      <div className="zoxo-container max-w-3xl">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground text-center">
          Contact Us
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          Have questions? Reach out to us anytime.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-6">

          {/* Email */}
          <a
            href="mailto:zoxoenterprises@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-muted hover:bg-secondary transition-colors"
          >
            <div className="p-3 bg-background rounded-xl">
              <Mail size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-semibold text-foreground">
                zoxoenterprises@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919372448193"
            className="flex items-center gap-4 p-5 rounded-2xl bg-muted hover:bg-secondary transition-colors"
          >
            <div className="p-3 bg-background rounded-xl">
              <Phone size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-semibold text-foreground">
                +91 93724 48193
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919372448193"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-muted hover:bg-secondary transition-colors"
          >
            <div className="p-3 bg-background rounded-xl">
              <MessageCircle size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-semibold text-foreground">
                Chat on WhatsApp
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted">
            <div className="p-3 bg-background rounded-xl">
              <MapPin size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-semibold text-foreground">
                India
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}