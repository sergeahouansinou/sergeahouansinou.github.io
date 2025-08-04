import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="text-primary w-8 h-8 opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Smartphone className="text-primary w-6 h-6 opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Globe className="text-primary w-10 h-10 opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Développeur</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Freelance
            </span>
            <br />
            <span className="text-foreground">d'Applications</span>{" "}
            <span className="text-primary">Sur Mesure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Création d'<strong>applications web et mobile</strong> performantes avec{" "}
            <span className="text-primary font-semibold">Laravel</span>,{" "}
            <span className="text-primary font-semibold">Flutter</span> et{" "}
            <span className="text-primary font-semibold">React</span>.
            Solutions digitales innovantes pour PME, start-ups et indépendants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 animate-glow"
              asChild
            >
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary"
              asChild
            >
              <Link to="/portfolio">
                Voir mes réalisations
              </Link>
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Technologies maîtrisées</p>
            <div className="flex flex-wrap justify-center gap-6 text-primary/80">
              <span className="text-sm font-medium">Laravel</span>
              <span className="text-sm font-medium">Flutter</span>
              <span className="text-sm font-medium">React</span>
              <span className="text-sm font-medium">Next.js</span>
              <span className="text-sm font-medium">Node.js</span>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;