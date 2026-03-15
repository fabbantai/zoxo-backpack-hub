import { useState } from 'react';
import { products as allProducts, type Product } from '@/data/products';
import { BarChart3, Package, ShoppingCart, TrendingUp, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockOrders = [
  { id: 'ORD-001', customer: 'Priya Sharma', product: 'ZOXO Teal Laptop Bag', total: 649, status: 'Delivered', date: '2026-03-12' },
  { id: 'ORD-002', customer: 'Rahul Mehta', product: 'Pink Princess Kids', total: 399, status: 'Shipped', date: '2026-03-13' },
  { id: 'ORD-003', customer: 'Sneha K.', product: 'Unicorn Print Girls', total: 449, status: 'Processing', date: '2026-03-14' },
  { id: 'ORD-004', customer: 'Amit Patel', product: 'ZOXO Grey Executive', total: 699, status: 'Processing', date: '2026-03-15' },
];

type Tab = 'dashboard' | 'products' | 'orders' | 'analytics';

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('dashboard');
  const [productList, setProductList] = useState(allProducts);

  const tabs: { id: Tab; label: string; icon: typeof BarChart3 }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  ];

  const toggleStock = (id: string) => {
    setProductList(prev => prev.map(p => p.id === id ? { ...p, inStock: !p.inStock } : p));
  };

  const totalRevenue = mockOrders.reduce((s, o) => s + o.total, 0);

  return (
    <div className="min-h-screen bg-muted">
      {/* Admin Header */}
      <div className="bg-foreground text-background">
        <div className="zoxo-container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold tracking-tighter">ZOXO</span>
            <span className="text-xs opacity-50">Admin Panel</span>
          </div>
          <Link to="/" className="text-xs opacity-70 hover:opacity-100">← Back to Store</Link>
        </div>
      </div>

      <div className="zoxo-container px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                tab === t.id
                  ? 'bg-foreground text-background'
                  : 'bg-background text-muted-foreground hover:bg-secondary'
              }`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>

        {/* Dashboard */}
        {tab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Revenue Today', value: `₹${totalRevenue}`, change: '+12%' },
                { label: 'Orders', value: mockOrders.length.toString(), change: '+3' },
                { label: 'Products', value: productList.length.toString(), change: '' },
                { label: 'Avg Order', value: `₹${Math.round(totalRevenue / mockOrders.length)}`, change: '' },
              ].map(stat => (
                <div key={stat.label} className="p-6 rounded-2xl bg-background" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-extrabold text-foreground mt-1">{stat.value}</p>
                  {stat.change && <p className="text-xs text-green-600 mt-1">{stat.change}</p>}
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-background" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-bold text-foreground mb-4">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Order</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Customer</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Product</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Total</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map(order => (
                      <tr key={order.id} className="border-b border-border last:border-0">
                        <td className="py-3 font-medium text-foreground">{order.id}</td>
                        <td className="py-3 text-foreground">{order.customer}</td>
                        <td className="py-3 text-muted-foreground">{order.product}</td>
                        <td className="py-3 text-right font-medium text-foreground">₹{order.total}</td>
                        <td className="py-3 text-right">
                          <span className={`zoxo-badge ${
                            order.status === 'Delivered' ? 'bg-green-600 text-accent-foreground' :
                            order.status === 'Shipped' ? 'bg-accent text-accent-foreground' :
                            'bg-secondary text-secondary-foreground'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {tab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Products ({productList.length})</h2>
              <button className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                <Plus size={16} /> Add Product
              </button>
            </div>
            <div className="space-y-3">
              {productList.map(product => (
                <div key={product.id} className="flex items-center gap-4 p-4 rounded-2xl bg-background" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <img src={product.images[0]} alt={product.shortTitle} className="w-16 h-16 rounded-xl object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-1">{product.shortTitle}</h3>
                    <p className="text-xs text-muted-foreground">{product.capacity} · {product.color} · ₹{product.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleStock(product.id)}
                      className={`p-2 rounded-lg transition-colors ${product.inStock ? 'text-green-600 bg-green-600/10' : 'text-muted-foreground bg-muted'}`}
                      title={product.inStock ? 'In Stock' : 'Out of Stock'}
                    >
                      {product.inStock ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                    <button className="p-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders */}
        {tab === 'orders' && (
          <div className="p-6 rounded-2xl bg-background" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h2 className="text-xl font-bold text-foreground mb-6">All Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-muted-foreground font-medium">Order ID</th>
                    <th className="text-left py-3 text-muted-foreground font-medium">Date</th>
                    <th className="text-left py-3 text-muted-foreground font-medium">Customer</th>
                    <th className="text-left py-3 text-muted-foreground font-medium">Product</th>
                    <th className="text-right py-3 text-muted-foreground font-medium">Amount</th>
                    <th className="text-right py-3 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map(order => (
                    <tr key={order.id} className="border-b border-border last:border-0">
                      <td className="py-3 font-medium text-foreground">{order.id}</td>
                      <td className="py-3 text-muted-foreground">{order.date}</td>
                      <td className="py-3 text-foreground">{order.customer}</td>
                      <td className="py-3 text-muted-foreground">{order.product}</td>
                      <td className="py-3 text-right font-medium text-foreground">₹{order.total}</td>
                      <td className="py-3 text-right">
                        <select className="text-xs border border-border rounded-lg px-2 py-1 bg-background text-foreground">
                          <option selected={order.status === 'Processing'}>Processing</option>
                          <option selected={order.status === 'Shipped'}>Shipped</option>
                          <option selected={order.status === 'Delivered'}>Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics */}
        {tab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-background" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-bold text-foreground mb-4">Revenue Overview</h3>
              <div className="space-y-3">
                {['Today', 'This Week', 'This Month'].map((period, i) => (
                  <div key={period} className="flex justify-between items-center p-3 rounded-xl bg-muted">
                    <span className="text-sm text-muted-foreground">{period}</span>
                    <span className="text-sm font-bold text-foreground">₹{[totalRevenue, totalRevenue * 5, totalRevenue * 20][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-background" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-bold text-foreground mb-4">Top Products</h3>
              <div className="space-y-3">
                {productList.slice(0, 4).map((p, i) => (
                  <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <span className="text-xs font-bold text-muted-foreground w-6">#{i + 1}</span>
                    <img src={p.images[0]} alt={p.shortTitle} className="w-8 h-8 rounded-lg object-cover" />
                    <span className="text-sm text-foreground flex-1">{p.shortTitle}</span>
                    <span className="text-sm font-bold text-foreground">₹{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
