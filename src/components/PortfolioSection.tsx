import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, Sparkles, Baby, Users, Crown } from "lucide-react";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: <Camera className="h-4 w-4" /> },
    { id: "pre-wedding", label: "Pre-Wedding", icon: <Heart className="h-4 w-4" /> },
    { id: "wedding", label: "Wedding", icon: <Crown className="h-4 w-4" /> },
    { id: "events", label: "Events", icon: <Sparkles className="h-4 w-4" /> },
    { id: "family", label: "Family", icon: <Baby className="h-4 w-4" /> },
  ];

  // Placeholder for portfolio images - in a real app, these would be actual photos
  const portfolioItems = [
    { id: 1, category: "pre-wedding", title: "Romantic Pre-Wedding", description: "Beautiful couple shoot at sunset" },
    { id: 2, category: "wedding", title: "Traditional Wedding", description: "Grand traditional ceremony" },
    { id: 3, category: "events", title: "Engagement Ceremony", description: "Elegant engagement celebration" },
    { id: 4, category: "family", title: "Rice Ceremony", description: "Joyful family celebration" },
    { id: 5, category: "pre-wedding", title: "Garden Shoot", description: "Dreamy outdoor pre-wedding" },
    { id: 6, category: "wedding", title: "Candid Moments", description: "Natural wedding photography" },
    { id: 7, category: "events", title: "Mehendi Function", description: "Colorful mehendi celebration" },
    { id: 8, category: "family", title: "Baby Shower", description: "Sweet family moments" },
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful moments captured with passion and artistry
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-hero text-primary-foreground shadow-glow"
                  : "border-primary/30 text-primary hover:bg-primary/10"
              }`}
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-card shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-16 w-16 text-primary/30" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-2 bg-gradient-hero text-primary-foreground">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about portfolio */}
        <div className="text-center mt-12 p-8 rounded-lg bg-gradient-card shadow-soft">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-foreground">
            See More of Our Work
          </h3>
          <p className="text-muted-foreground mb-4">
            This is just a glimpse of our portfolio. Contact us to see our complete collection 
            and discuss how we can capture your special moments.
          </p>
          <Button 
            className="bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;