import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navItems = document.querySelectorAll('[data-nav-item]');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });

      navItems.forEach(item => {
        item.classList.remove('text-secondary');
        if (item.getAttribute('data-nav-item') === current) {
          item.classList.add('text-secondary');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-primary" data-testid="logo">
              LUXE RUN
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-secondary transition-colors duration-300"
                data-nav-item="hero"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('collection')}
                className="text-foreground hover:text-secondary transition-colors duration-300"
                data-nav-item="collection"
                data-testid="nav-collection"
              >
                Collection
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className="text-foreground hover:text-secondary transition-colors duration-300"
                data-nav-item="story"
                data-testid="nav-story"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('craft')}
                className="text-foreground hover:text-secondary transition-colors duration-300"
                data-nav-item="craft"
                data-testid="nav-craft"
              >
                Craftsmanship
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-secondary transition-colors duration-300"
                data-nav-item="contact"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-secondary transition-colors duration-300 text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('collection')}
                className="text-foreground hover:text-secondary transition-colors duration-300 text-left"
                data-testid="mobile-nav-collection"
              >
                Collection
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className="text-foreground hover:text-secondary transition-colors duration-300 text-left"
                data-testid="mobile-nav-story"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('craft')}
                className="text-foreground hover:text-secondary transition-colors duration-300 text-left"
                data-testid="mobile-nav-craft"
              >
                Craftsmanship
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-secondary transition-colors duration-300 text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
