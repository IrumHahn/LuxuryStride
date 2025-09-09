export default function BrandStory() {
  return (
    <section id="story" className="py-20 bg-muted" data-testid="brand-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8" data-testid="story-title">
              Our Legacy
            </h2>
            <div className="space-y-6 text-lg font-lora leading-relaxed text-muted-foreground">
              <p data-testid="story-paragraph-1">
                Founded in the heart of Seoul's fashion district, LUXE RUN emerged from a singular vision: 
                to create running gear that performs at the highest level while embodying timeless elegance.
              </p>
              <p data-testid="story-paragraph-2">
                Our journey began when our founder, a former Olympic marathon runner, recognized the gap 
                between performance and luxury in athletic wear. Every piece we create reflects our commitment 
                to excellence, innovation, and the belief that athletic performance should never compromise style.
              </p>
              <p data-testid="story-paragraph-3">
                Today, LUXE RUN stands as a testament to Korean craftsmanship and innovation, serving athletes 
                and style enthusiasts who refuse to choose between performance and prestige.
              </p>
            </div>
            <div className="flex items-center mt-8 space-x-8" data-testid="brand-stats">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary" data-testid="stat-years">12</div>
                <div className="text-sm text-muted-foreground font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary" data-testid="stat-customers">50K+</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfied Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary" data-testid="stat-countries">25</div>
                <div className="text-sm text-muted-foreground font-medium">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Brand heritage and craftsmanship" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
              data-testid="heritage-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
