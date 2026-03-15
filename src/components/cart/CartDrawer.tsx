import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 flex flex-col"
            style={{ boxShadow: '-4px 0 24px rgba(0,0,0,.1)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <ShoppingBag size={20} /> Cart ({totalItems})
              </h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground text-sm">Your cart is empty</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 text-sm font-medium text-accent hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-3 p-3 rounded-xl bg-secondary/50">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.shortTitle}
                        className="w-20 h-20 object-cover rounded-lg bg-muted"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground line-clamp-1">{item.product.shortTitle}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.product.color}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-background rounded-lg border border-border">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-secondary rounded-l-lg"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-semibold w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-secondary rounded-r-lg"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-bold">₹{item.product.price * item.quantity}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 text-muted-foreground hover:text-destructive self-start"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold text-lg">₹{totalPrice}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">Shipping calculated at checkout</p>
                <Link
                  to="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-accent text-accent-foreground text-center py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Checkout – ₹{totalPrice}
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
