import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Settings, 
  Users, 
  CheckCircle,
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Shield,
  Zap,
  HeartHandshake
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Développement Web",
      subtitle: "Applications web modernes et performantes",
      description: "Création d'applications web sur mesure avec Laravel, React, Next.js. Solutions responsive, sécurisées et optimisées pour le référencement naturel.",
      features: [
        "Applications web Laravel/PHP",
        "Interfaces React/TypeScript",
        "API REST et GraphQL",
        "Optimisation SEO",
        "Design responsive",
        "Intégrations tierces"
      ],
      price: "À partir de 3 000€",
      duration: "4-12 semaines",
      keywords: "développement web Laravel, application web sur mesure, React TypeScript, API REST"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      subtitle: "iOS et Android avec Flutter",
      description: "Développement d'applications mobiles natives avec Flutter. Une seule base de code pour iOS et Android, performances natives garanties.",
      features: [
        "Applications Flutter/Dart",
        "iOS et Android",
        "Performances natives",
        "Intégration API",
        "Notifications push",
        "Publication stores"
      ],
      price: "À partir de 5 000€",
      duration: "6-16 semaines",
      keywords: "application mobile Flutter, développement iOS Android, app native"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      subtitle: "Évolutivité et sécurité continue",
      description: "Maintenance technique, mises à jour sécuritaires, optimisations de performance et support continu pour vos applications.",
      features: [
        "Mises à jour sécuritaires",
        "Optimisations performance",
        "Monitoring & alertes",
        "Backup automatisé",
        "Support technique",
        "Évolutions fonctionnelles"
      ],
      price: "À partir de 300€/mois",
      duration: "Contrat annuel",
      keywords: "maintenance web, support technique, mise à jour sécurité, monitoring"
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      subtitle: "Expertise technique et stratégique",
      description: "Audit technique, conseil en architecture, formation d'équipes et accompagnement dans vos projets de transformation digitale.",
      features: [
        "Audit technique",
        "Conseil architecture",
        "Formation équipes",
        "Code review",
        "Stratégie technique",
        "Accompagnement projet"
      ],
      price: "À partir de 800€/jour",
      duration: "Mission ponctuelle",
      keywords: "conseil développement, audit technique, formation développeur, code review"
    }
  ];

  const techStack = [
    {
      icon: Code2,
      title: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      icon: Database,
      title: "Backend",
      technologies: ["Laravel", "Node.js", "PHP", "Python", "API REST"]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      technologies: ["Flutter", "Dart", "React Native", "iOS", "Android"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "CI/CD", "Nginx", "Redis"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analyse & Devis",
      description: "Étude de vos besoins, définition du cahier des charges et devis détaillé gratuit."
    },
    {
      step: "02", 
      title: "Conception & Design",
      description: "Maquettes, wireframes et validation de l'architecture technique."
    },
    {
      step: "03",
      title: "Développement",
      description: "Développement agile avec livraisons fréquentes et tests continus."
    },
    {
      step: "04",
      title: "Tests & Livraison",
      description: "Tests complets, formation utilisateur et mise en production."
    }
  ];

  return (
    <Layout 
      title="Services Développement | Web, Mobile, Maintenance | Devis Gratuit"
      description="Services complets de développement : applications web Laravel/React, mobiles Flutter, maintenance technique. Devis gratuit. Expertise freelance pour PME et start-ups."
      keywords="services développement web, application mobile Flutter, maintenance web, conseil technique, Laravel React, développeur freelance tarifs"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Services de <span className="text-primary">Développement</span> Complets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Solutions digitales sur mesure pour transformer vos idées en applications performantes. 
              De la conception à la maintenance, un accompagnement complet pour votre réussite.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="font-semibold text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                      </div>
                      <Button asChild>
                        <Link to="/contact">
                          Devis gratuit
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground">{service.keywords}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies <span className="text-primary">Maîtrisées</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stack technique moderne et éprouvé pour des applications performantes et évolutives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <tech.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{tech.title}</h3>
                  <div className="space-y-2">
                    {tech.technologies.map((technology, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">{technology}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Processus de <span className="text-primary">Développement</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Méthodologie éprouvée pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mes <span className="text-primary">Engagements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Zap className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Livraison dans les délais</h3>
                <p className="text-muted-foreground">Respect des échéances avec des livraisons régulières pour validation</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Shield className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Code de qualité</h3>
                <p className="text-muted-foreground">Bonnes pratiques, tests automatisés et code maintenable</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <HeartHandshake className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Support continu</h3>
                <p className="text-muted-foreground">Accompagnement après livraison et maintenance préventive</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Démarrons Votre Projet
            </h2>
            <p className="text-xl opacity-90">
              Discutons de vos besoins et recevez un devis personnalisé gratuit sous 24h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 border-white"
                asChild
              >
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                asChild
              >
                <Link to="/portfolio">
                  Voir mes réalisations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;