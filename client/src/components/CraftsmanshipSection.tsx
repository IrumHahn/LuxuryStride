import { Lightbulb, Leaf, Star } from "lucide-react";

export default function CraftsmanshipSection() {
  return (
    <section id="craft" className="py-20 bg-background" data-testid="craftsmanship-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6" data-testid="craft-title">
            Craftsmanship Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lora" data-testid="craft-subtitle">
            Every LUXE RUN product is born from meticulous attention to detail and uncompromising quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center" data-testid="innovation-feature">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Innovation</h3>
            <p className="text-muted-foreground font-lora">
              Cutting-edge materials and technologies developed in partnership with leading textile innovators
            </p>
          </div>

          <div className="text-center" data-testid="sustainability-feature">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Sustainability</h3>
            <p className="text-muted-foreground font-lora">
              Ethically sourced materials and carbon-neutral manufacturing processes for a better tomorrow
            </p>
          </div>

          <div className="text-center" data-testid="precision-feature">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Precision</h3>
            <p className="text-muted-foreground font-lora">
              Hand-finished details and quality control that ensures every product meets our exacting standards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Manufacturing process and quality control" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
              data-testid="manufacturing-image"
            />
          </div>
          <div>
            <h3 className="text-3xl font-playfair font-bold text-primary mb-6" data-testid="manufacturing-title">
              Manufacturing Excellence
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4" data-testid="material-selection">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Material Selection</h4>
                  <p className="text-muted-foreground font-lora">Premium fabrics sourced from certified suppliers in Italy and Japan, ensuring optimal performance and luxury feel.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="precision-crafting">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Precision Crafting</h4>
                  <p className="text-muted-foreground font-lora">Each piece undergoes 47 quality checkpoints, with master craftsmen overseeing every detail from cut to finish.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="performance-testing">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Performance Testing</h4>
                  <p className="text-muted-foreground font-lora">Rigorous field testing with professional athletes ensures every product delivers exceptional performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
