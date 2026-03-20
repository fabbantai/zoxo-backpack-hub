import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CityPage from "./pages/CityPage";
import PricePage from "./pages/PricePage";
import CategorySeoPage from "./pages/CategorySeoPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>

            <Route path="/admin" element={<AdminDashboard />} />

            <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
            <Route path="/shop" element={<PublicLayout><Shop /></PublicLayout>} />
            <Route path="/p/:slug" element={<PublicLayout><ProductDetail /></PublicLayout>} />
            <Route path="/c/:category" element={<PublicLayout><CategoryPage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

            {/* SEO */}
            <Route path="/best-backpacks-in-:city" element={<PublicLayout><CityPage /></PublicLayout>} />
            <Route path="/best-backpacks-under-:price" element={<PublicLayout><PricePage /></PublicLayout>} />
            <Route path="/seo/:type" element={<PublicLayout><CategorySeoPage /></PublicLayout>} />

            <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />

            <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
<Route path="/blog/:slug" element={<PublicLayout><BlogDetail /></PublicLayout>} />

          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;