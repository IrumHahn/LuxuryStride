import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/20 to-charcoal/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight" data-testid="hero-title">
          Performance<br/>
          <span className="text-secondary">Redefined</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Experience the pinnacle of luxury running with our meticulously crafted collection
        </p>
        <button 
          onClick={scrollToCollection}
          className="bg-secondary text-charcoal px-8 py-4 text-lg font-medium hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
          data-testid="hero-cta-button"
        >
          Explore Collection
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" data-testid="scroll-indicator" />
      </div>
    </section>
  );
}
