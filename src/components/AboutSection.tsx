import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Award, Users, Clock, Star } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Professional Equipment",
      description: "State-of-the-art cameras and lighting equipment for stunning results"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passionate Approach",
      description: "We capture emotions and moments that tell your unique story"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Quality",
      description: "Recognized for excellence in wedding and event photography"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experienced Team",
      description: "Professional photographers with years of expertise"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "100% satisfaction guarantee with personalized service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are passionate photographers dedicated to capturing the most precious moments 
                of your life with artistry, creativity, and professional excellence.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                With over 5 years of experience in wedding and event photography, we specialize 
                in creating timeless memories that you'll cherish forever. Our approach combines 
                traditional photography techniques with modern artistic vision to deliver 
                exceptional results.
              </p>
              
              <p className="text-foreground leading-relaxed">
                From intimate pre-wedding shoots to grand traditional ceremonies, we capture 
                every emotion, every smile, and every tear of joy. Our comprehensive packages 
                are designed to meet diverse needs and budgets while maintaining the highest 
                quality standards.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Work Together
              </Button>
              <Button 
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-gradient-hero text-primary-foreground w-fit group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-muted-foreground">Weddings Captured</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-muted-foreground">Happy Couples</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;