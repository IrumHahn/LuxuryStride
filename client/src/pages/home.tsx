import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductGallery from "@/components/ProductGallery";
import BrandStory from "@/components/BrandStory";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navigation />
      <HeroSection />
      <ProductGallery />
      <BrandStory />
      <CraftsmanshipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
