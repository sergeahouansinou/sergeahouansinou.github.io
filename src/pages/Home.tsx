import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Globe, 
  Settings, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Code2,
  Rocket,
  Shield
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Développement Web",
      description: "Applications web modernes avec Laravel, React et Next.js. Solutions responsive et performantes.",
      keywords: "développement web, Laravel, React, Next.js"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Applications mobiles natives avec Flutter. iOS et Android avec une seule base de code.",
      keywords: "application mobile, Flutter, iOS, Android"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Maintenance technique, mises à jour sécuritaires et support continu pour vos applications.",
      keywords: "maintenance web, support technique, mise à jour"
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      description: "Audit technique, conseil en architecture et accompagnement dans vos projets digitaux.",
      keywords: "conseil développement, audit technique, architecture"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Livraison Rapide",
      description: "Développement agile avec des livraisons fréquentes pour valider chaque étape."
    },
    {
      icon: Shield,
      title: "Code de Qualité",
      description: "Respect des bonnes pratiques, tests automatisés et code maintenable."
    },
    {
      icon: Code2,
      title: "Technologies Modernes",
      description: "Utilisation des dernières technologies web et mobile pour des performances optimales."
    }
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "30+", label: "Clients satisfaits" },
    { number: "5+", label: "Années d'expérience" },
    { number: "99%", label: "Taux de satisfaction" }
  ];

  return (
    <Layout 
      title="Développeur Freelance | Applications Web & Mobile | Laravel, Flutter, React"
      description="Développeur freelance spécialisé en applications web et mobile. Laravel, Flutter, React. Devis gratuit pour votre projet sur mesure. PME, start-ups, indépendants."
      keywords="développeur freelance, application mobile, développement web, Laravel, Flutter, React, application sur mesure, développeur indépendant"
    >
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Services de <span className="text-primary">Développement</span> sur Mesure
            </h2>
            <p className="text-lg text-muted-foreground">
              Solutions complètes pour transformer vos idées en applications performantes et évolutives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-xs text-primary/60 font-medium">{service.keywords}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi Choisir un <span className="text-primary">Développeur Freelance</span> ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexibilité, expertise technique et relation directe pour des projets réussis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions <span className="text-primary">Fréquentes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Combien coûte une application mobile ?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Le coût varie selon la complexité (5k€ à 50k€). Devis personnalisé gratuit après analyse de vos besoins.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Quels sont les délais de développement ?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Entre 4 et 16 semaines selon le projet. Livraisons régulières toutes les 2 semaines pour validation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Pourquoi choisir un développeur freelance ?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Relation directe, flexibilité, expertise spécialisée et coûts optimisés par rapport aux agences.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Quelles technologies utilisez-vous ?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Laravel/PHP, Flutter/Dart, React/TypeScript, Node.js. Technologies modernes et éprouvées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Assurez-vous la maintenance ?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Oui, contrats de maintenance disponibles incluant mises à jour, sécurité et support technique.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Travaillez-vous avec les PME ?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Absolument ! Solutions adaptées aux budgets PME, start-ups et entrepreneurs indépendants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à Lancer Votre Projet ?
            </h2>
            <p className="text-xl opacity-90">
              Discutons de votre application web ou mobile. Devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 border-white"
                asChild
              >
                <Link to="/contact">
                  Parlons de votre projet
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

export default Home;