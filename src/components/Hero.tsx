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
        <Brain className="text-primary w-10 h-10 opacity-50" />
      </div>
      <div className="absolute top-1/4 right-16 animate-float" style={{ animationDelay: '0.5s' }}>
        <Cpu className="text-accent w-8 h-8 opacity-50" />
      </div>
      <div className="absolute top-1/3 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <Network className="text-secondary w-6 h-6 opacity-40" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="text-primary w-7 h-7 opacity-50" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="text-accent w-9 h-9 opacity-45" />
      </div>
      <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '2.5s' }}>
        <Bot className="text-secondary w-8 h-8 opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in">
          {/* Developer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Mobile Developer & Web Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Expert</span>{" "}
            <span className="bg-gradient-ai bg-clip-text text-transparent bg-[length:200%_200%]">
              Mobile & Web
            </span>
            <br />
            <span className="text-foreground">Developer</span>{" "}
            <span className="text-primary">Freelance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional <strong>mobile developer</strong> and <strong>web developer</strong> specialized in building high-performance applications. 
            Expert in <span className="text-accent font-semibold">Flutter</span> for{" "}
            <span className="text-secondary font-semibold">iOS & Android</span>, and{" "}
            <span className="text-primary font-semibold">React & Laravel</span> for web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/40 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <Link to="/portfolio">
                View My Work
              </Link>
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Tech Stack Expertise</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">Flutter</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">iOS</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-medium">Android</span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-medium">React</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">Laravel</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-medium">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-medium">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;