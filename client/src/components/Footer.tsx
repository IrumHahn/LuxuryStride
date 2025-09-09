import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4" data-testid="footer-logo">LUXE RUN</h3>
            <p className="text-gray-300 mb-4 font-lora max-w-md" data-testid="footer-description">
              Redefining the intersection of performance and luxury in running apparel. 
              Experience the difference of true craftsmanship.
            </p>
            <div className="flex space-x-4" data-testid="social-links">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300" data-testid="twitter-link">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300" data-testid="instagram-link">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300" data-testid="facebook-link">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div data-testid="shop-links">
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-mens">Men's Collection</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-womens">Women's Collection</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-accessories">Accessories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-new-arrivals">New Arrivals</a></li>
            </ul>
          </div>
          
          <div data-testid="support-links">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-size-guide">Size Guide</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-shipping">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-care">Care Instructions</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300" data-testid="link-contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300" data-testid="copyright">
          <p>&copy; 2024 LUXE RUN. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
