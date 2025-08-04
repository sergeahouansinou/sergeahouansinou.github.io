import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import mobileProject from "@/assets/mobile-project.jpg";
import webProject from "@/assets/web-project.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "Application Mobile",
      description: "Application mobile e-commerce complète développée avec Flutter. Interface intuitive, paiement sécurisé, gestion des commandes et notifications push. Plus de 10,000 téléchargements en 6 mois.",
      image: mobileProject,
      technologies: ["Flutter", "Dart", "Firebase", "Stripe", "Push Notifications"],
      features: [
        "Catalogue produits dynamique",
        "Panier et commandes",
        "Paiement Stripe intégré", 
        "Notifications push",
        "Interface admin",
        "Analytics avancées"
      ],
      results: [
        "10,000+ téléchargements",
        "4.8/5 étoiles sur les stores",
        "Conversion +35%",
        "Temps de chargement < 2s"
      ],
      client: "Start-up E-commerce",
      duration: "3 mois",
      year: "2024",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Plateforme SaaS de Gestion",
      category: "Application Web",
      description: "Plateforme SaaS complète pour la gestion d'entreprise développée avec Laravel et React. Tableau de bord analytics, gestion multi-utilisateurs, API REST robuste et intégrations tierces.",
      image: webProject,
      technologies: ["Laravel", "React", "TypeScript", "MySQL", "Redis", "Docker"],
      features: [
        "Dashboard analytics en temps réel",
        "Gestion multi-tenant",
        "API REST complète",
        "Système de rôles avancé",
        "Intégrations tierces",
        "Export de données"
      ],
      results: [
        "500+ utilisateurs actifs",
        "99.9% de disponibilité", 
        "Gain de temps de 40%",
        "ROI de 250% en 1 an"
      ],
      client: "PME Services",
      duration: "4 mois",
      year: "2024",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Application de Réservation",
      category: "Application Mobile",
      description: "Application mobile de réservation pour professionnels du bien-être. Système de rendez-vous intelligent, paiement en ligne, rappels automatiques et gestion de planning.",
      image: mobileProject,
      technologies: ["Flutter", "Laravel API", "MySQL", "Stripe", "Calendars"],
      features: [
        "Système de réservation intelligent",
        "Calendrier synchronisé",
        "Paiement en ligne sécurisé",
        "Rappels automatiques SMS/Email",
        "Interface praticien",
        "Statistiques de fréquentation"
      ],
      results: [
        "3,000+ réservations/mois",
        "Taux d'annulation -60%",
        "Satisfaction client 95%",
        "Temps de gestion -50%"
      ],
      client: "Réseau de Spas",
      duration: "6 semaines",
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Site E-learning Interactif",
      category: "Application Web",
      description: "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs, suivi de progression et certificats. Interface moderne et responsive développée avec Next.js.",
      image: webProject,
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Video.js"],
      features: [
        "Cours vidéo HD streamés",
        "Quiz interactifs",
        "Suivi de progression",
        "Certificats automatiques",
        "Forum communautaire",
        "Paiement par abonnement"
      ],
      results: [
        "1,200+ étudiants inscrits",
        "Taux de complétion 85%",
        "Revenus récurrents +200%",
        "Note moyenne 4.9/5"
      ],
      client: "Organisme de Formation",
      duration: "8 semaines",
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "App IoT Domotique",
      category: "Application Mobile",
      description: "Application de contrôle domotique connectée. Pilotage à distance des équipements, scénarios automatisés, consommation énergétique et sécurité renforcée.",
      image: mobileProject,
      technologies: ["Flutter", "Node.js", "MQTT", "InfluxDB", "WebSockets"],
      features: [
        "Contrôle équipements en temps réel",
        "Scénarios automatisés",
        "Monitoring énergétique",
        "Alertes sécurité",
        "Interface vocale",
        "Dashboard statistiques"
      ],
      results: [
        "50+ équipements gérés",
        "Économies énergétiques 30%",
        "Temps de réponse < 100ms",
        "Disponibilité 99.8%"
      ],
      client: "Start-up IoT",
      duration: "10 semaines",
      year: "2023",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Marketplace B2B",
      category: "Application Web",
      description: "Marketplace B2B pour mise en relation fournisseurs-distributeurs. Système de matching intelligent, gestion des commandes et facturation automatisée.",
      image: webProject,
      technologies: ["Laravel", "Vue.js", "Elasticsearch", "PostgreSQL", "Redis"],
      features: [
        "Algorithme de matching IA",
        "Gestion commandes complexes",
        "Facturation automatisée",
        "Chat en temps réel",
        "Système d'avis",
        "Analytics avancées"
      ],
      results: [
        "200+ entreprises inscrites",
        "5M€ de transactions",
        "Temps de matching -70%",
        "Satisfaction 92%"
      ],
      client: "Plateforme B2B",
      duration: "5 mois",
      year: "2022",
      link: "#",
      github: "#"
    }
  ];

  const categories = ["Tous", "Application Web", "Application Mobile"];

  return (
    <Layout 
      title="Portfolio | Réalisations Développeur Freelance | Applications Web & Mobile"
      description="Découvrez mes réalisations : applications web Laravel/React, mobiles Flutter, plateformes SaaS. Projets réussis pour PME, start-ups. Résultats concrets et ROI démontrés."
      keywords="portfolio développeur freelance, réalisations Laravel Flutter React, applications web mobile, projets SaaS, références client"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-primary">Réalisations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez une sélection de projets web et mobile que j'ai développés. 
              Solutions sur mesure qui ont transformé les activités de mes clients avec des résultats concrets.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projets livrés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">5M€</div>
              <div className="text-sm text-muted-foreground">Chiffre d'affaires généré</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Fonctionnalités clés :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Résultats obtenus :</h4>
                      <ul className="text-sm text-primary space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-center font-medium">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{project.client}</span> • {project.duration}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Voir
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi Mes Projets <span className="text-primary">Réussissent</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Analyse Approfondie</h3>
                <p className="text-muted-foreground">
                  Étude détaillée de vos besoins, de votre marché et de vos utilisateurs pour définir la solution optimale.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Développement Agile</h3>
                <p className="text-muted-foreground">
                  Livraisons fréquentes, feedback continu et ajustements pour garantir que le produit final répond parfaitement à vos attentes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Accompagnement Continu</h3>
                <p className="text-muted-foreground">
                  Formation, documentation complète et support technique pour assurer le succès à long terme de votre application.
                </p>
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
              Votre Projet Sera le Prochain !
            </h2>
            <p className="text-xl opacity-90">
              Transformons ensemble votre idée en application performante. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 border-white"
                asChild
              >
                <Link to="/contact">
                  Démarrer mon projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                asChild
              >
                <Link to="/services">
                  Découvrir mes services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;