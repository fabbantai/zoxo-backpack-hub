import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="zoxo-section text-center">
        <h1 className="text-2xl font-bold text-foreground">Your cart is empty</h1>
        <Link to="/shop" className="text-accent mt-4 inline-block hover:underline">Continue Shopping</Link>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="zoxo-section text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-extrabold tracking-tighter text-foreground">Order Confirmed!</h1>
          <p className="mt-3 text-muted-foreground">Thank you for your order. You'll receive a confirmation shortly.</p>
          <Link
            to="/"
            className="inline-block mt-8 bg-foreground text-background px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep('success');
  };

  const shipping = totalPrice >= 499 ? 0 : 49;
  const total = totalPrice + shipping;

  return (
    <div className="zoxo-section">
      <div className="zoxo-container">
        <h1 className="text-3xl font-extrabold tracking-tighter text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-muted">
              <h2 className="font-bold text-foreground mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Full Name</label>
                  <input required maxLength={100} className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Phone</label>
                  <input required type="tel" maxLength={15} className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-muted-foreground">Address</label>
                  <textarea required maxLength={300} rows={2} className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">City</label>
                  <input required maxLength={50} className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Pincode</label>
                  <input required maxLength={6} pattern="[0-9]{6}" className="mt-1 w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-muted">
              <h2 className="font-bold text-foreground mb-4">Payment Method</h2>
              <div className="space-y-3">
                {['UPI (GPay / PhonePe / Paytm)', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map(method => (
                  <label key={method} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border cursor-pointer hover:border-accent transition-colors">
                    <input type="radio" name="payment" value={method} defaultChecked={method.includes('UPI')} className="accent-accent" />
                    <span className="text-sm text-foreground">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <CreditCard size={18} /> Place Order – ₹{total}
            </button>
          </form>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-6 rounded-2xl bg-muted">
              <h2 className="font-bold text-foreground mb-4">Order Summary</h2>
              <div className="space-y-3">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-3">
                    <img src={item.product.images[0]} alt={item.product.shortTitle} className="w-14 h-14 rounded-lg object-cover bg-background" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">{item.product.shortTitle}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-bold text-foreground">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">₹{total}</span>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-[11px] text-muted-foreground">
                <p className="flex items-center gap-1"><Truck size={12} /> Free delivery on orders ₹499+</p>
                <p className="flex items-center gap-1"><Shield size={12} /> Secure & encrypted payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
