import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";

export default function ProductGallery() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products']
  });

  if (isLoading) {
    return (
      <section id="collection" className="py-20 bg-background" data-testid="product-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">Our Collection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-80 bg-muted"></div>
                <div className="p-4">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="collection" className="py-20 bg-background" data-testid="product-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">Our Collection</h2>
            <p className="text-destructive" data-testid="error-message">
              Failed to load products. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collection" className="py-20 bg-background" data-testid="product-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6" data-testid="collection-title">
            Our Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lora" data-testid="collection-subtitle">
            Each piece in our collection represents the perfect fusion of performance innovation and timeless elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products?.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              data-testid={`product-card-${product.id}`}
            >
              <div className="relative overflow-hidden bg-card rounded-lg shadow-lg">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  data-testid={`product-image-${product.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-playfair font-semibold mb-2" data-testid={`product-name-${product.id}`}>
                    {product.name}
                  </h3>
                  <p className="text-secondary font-medium" data-testid={`product-price-${product.id}`}>
                    ₩{parseInt(product.price).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all duration-300"
            data-testid="view-all-products-button"
          >
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
