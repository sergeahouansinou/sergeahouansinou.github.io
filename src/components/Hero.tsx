import { ArrowRight, Brain, Cpu, Sparkles, Zap, Network, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute inset-0 bg-gradient-ai opacity-30 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-ai rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-ai rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating AI Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Brain className="text-primary w-10 h-10 opacity-40 drop-shadow-glow" />
      </div>
      <div className="absolute top-1/4 right-16 animate-float" style={{ animationDelay: '0.5s' }}>
        <Cpu className="text-accent w-8 h-8 opacity-50 drop-shadow-glow" />
      </div>
      <div className="absolute top-1/3 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <Network className="text-secondary w-6 h-6 opacity-30" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="text-primary w-7 h-7 opacity-40" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="text-accent w-9 h-9 opacity-35 drop-shadow-glow" />
      </div>
      <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '2.5s' }}>
        <Bot className="text-secondary w-8 h-8 opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-neural-pulse">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Passionné d'Intelligence Artificielle</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Développeur</span>{" "}
            <span className="bg-gradient-ai bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              IA & Full-Stack
            </span>
            <br />
            <span className="text-foreground">Applications</span>{" "}
            <span className="text-primary drop-shadow-glow">Intelligentes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Création d'<strong>applications web et mobile</strong> performantes intégrant l'<span className="text-primary font-semibold">Intelligence Artificielle</span>. 
            Expert en <span className="text-accent font-semibold">Laravel</span>,{" "}
            <span className="text-secondary font-semibold">Flutter</span> et{" "}
            <span className="text-primary font-semibold">React</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-ai hover:shadow-neural text-lg px-8 py-6 animate-neural-pulse border-0"
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
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
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
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium backdrop-blur-sm">IA & ML</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium backdrop-blur-sm">Laravel</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium backdrop-blur-sm">Flutter</span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium backdrop-blur-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium backdrop-blur-sm">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium backdrop-blur-sm">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium backdrop-blur-sm">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;