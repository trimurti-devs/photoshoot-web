import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, Sparkles, Baby, MapPin, Plane, Crown, Users, Calendar, Home } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Pre-Wedding Photography",
      icon: <Heart className="h-6 w-6" />,
      packages: [
        { name: "Within City Pre-Wedding", price: "₹4,000", icon: <MapPin className="h-4 w-4" /> },
        { name: "Out of City Pre-Wedding", price: "₹8,000", icon: <Plane className="h-4 w-4" /> },
        { name: "Premium Pre-Wedding Shoot", price: "₹17,000", popular: true, icon: <Crown className="h-4 w-4" /> },
      ]
    },
    {
      category: "Wedding Coverage",
      icon: <Camera className="h-6 w-6" />,
      packages: [
        { name: "Traditional Shoot + Digital Premium Album (2 Copies)", price: "₹74,000", icon: <Camera className="h-4 w-4" /> },
        { name: "Traditional Shoot + Canvera Album (2 Copies)", price: "₹78,500", popular: true, icon: <Crown className="h-4 w-4" /> },
        { name: "Local Wedding Shoot", price: "₹18,000 - ₹25,000", icon: <Home className="h-4 w-4" /> },
      ]
    },
    {
      category: "Event Coverage",
      icon: <Sparkles className="h-6 w-6" />,
      packages: [
        { name: "Engagement Coverage", price: "₹7,500", icon: <Heart className="h-4 w-4" /> },
        { name: "Mehendi & Sangeet Day Coverage", price: "₹3,000", icon: <Sparkles className="h-4 w-4" /> },
        { name: "Any Other Day Shoot", price: "₹3,000", icon: <Calendar className="h-4 w-4" /> },
      ]
    },
    {
      category: "Specialized Services",
      icon: <Users className="h-6 w-6" />,
      packages: [
        { name: "Drone Photography", price: "₹9,000", icon: <Plane className="h-4 w-4" /> },
        { name: "Candid 1 Day", price: "₹5,000", icon: <Camera className="h-4 w-4" /> },
        { name: "Candid 2 Days", price: "₹9,000", icon: <Camera className="h-4 w-4" /> },
        { name: "Candid 3 Days", price: "₹12,000", popular: true, icon: <Camera className="h-4 w-4" /> },
        { name: "Post Wedding Shoot", price: "₹12,000", icon: <Heart className="h-4 w-4" /> },
      ]
    },
    {
      category: "Traditional & Cultural Shoots",
      icon: <Crown className="h-6 w-6" />,
      packages: [
        { name: "Kumortuli Shoot", price: "₹4,000 - ₹6,000", icon: <Sparkles className="h-4 w-4" /> },
        { name: "Kasbon Shoot", price: "₹3,000 - ₹5,000", icon: <Sparkles className="h-4 w-4" /> },
        { name: "Astomi Shoot", price: "₹3,000 - ₹5,000", icon: <Sparkles className="h-4 w-4" /> },
      ]
    },
    {
      category: "Family Events",
      icon: <Baby className="h-6 w-6" />,
      packages: [
        { name: "Baby Shower", price: "₹8,000 - ₹12,000", icon: <Baby className="h-4 w-4" /> },
        { name: "Rice Ceremony", price: "₹15,000 - ₹20,000", popular: true, icon: <Baby className="h-4 w-4" /> },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional photography packages tailored for every special moment in your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-hero text-primary-foreground">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border/50">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-primary">
                        {pkg.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-foreground">{pkg.name}</span>
                          {pkg.popular && (
                            <Badge className="bg-gradient-hero text-primary-foreground text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-primary text-lg">{pkg.price}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;