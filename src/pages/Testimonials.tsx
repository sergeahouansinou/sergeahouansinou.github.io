import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Building, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      position: "Directrice Marketing",
      company: "TechStart Solutions",
      industry: "Start-up",
      rating: 5,
      text: "Collaboration exceptionnelle ! L'application mobile développée par DevFreelance.pro a dépassé nos attentes. Interface intuitive, performances excellentes et livraison dans les délais. Notre taux de conversion a augmenté de 35% en 6 mois.",
      project: "Application mobile e-commerce",
      results: ["35% conversion", "10K+ téléchargements", "4.8/5 étoiles stores"],
      date: "Janvier 2024"
    },
    {
      id: 2,
      name: "Thomas Leroux",
      position: "CEO",
      company: "PME Industrie Plus",
      industry: "PME",
      rating: 5,
      text: "Enfin un développeur qui comprend les enjeux business ! La plateforme SaaS créée nous a permis de digitaliser complètement notre processus de gestion. ROI de 250% dès la première année et gain de temps considérable pour nos équipes.",
      project: "Plateforme SaaS de gestion",
      results: ["ROI 250%", "40% gain temps", "500+ utilisateurs"],
      date: "Novembre 2023"
    },
    {
      id: 3,
      name: "Sophie Martin",
      position: "Fondatrice",
      company: "Wellness App",
      industry: "Bien-être",
      rating: 5,
      text: "Approche très professionnelle et écoute client remarquable. L'application de réservation a transformé notre activité. Nos clients adorent la simplicité d'utilisation et nous avons divisé par 2 les annulations de dernière minute.",
      project: "Application de réservation wellness",
      results: ["-60% annulations", "95% satisfaction", "3K réservations/mois"],
      date: "Septembre 2023"
    },
    {
      id: 4,
      name: "Jean-Pierre Moreau",
      position: "Directeur Technique",
      company: "Formation Digital",
      industry: "Éducation",
      rating: 5,
      text: "Code de qualité exceptionnelle et architecture robuste. La plateforme e-learning développée supporte parfaitement la charge de nos 1200+ étudiants. Documentation complète et formation de notre équipe très appréciée.",
      project: "Plateforme e-learning interactive",
      results: ["1200+ étudiants", "85% complétion", "4.9/5 satisfaction"],
      date: "Août 2023"
    },
    {
      id: 5,
      name: "Amélie Rousseau",
      position: "Product Manager",
      company: "IoT Innovations",
      industry: "IoT",
      rating: 5,
      text: "Maîtrise technique impressionnante sur des sujets complexes IoT. L'application domotique fonctionne parfaitement avec nos capteurs et offre une expérience utilisateur fluide. Temps de réponse excellent et fiabilité au rendez-vous.",
      project: "Application IoT domotique",
      results: ["99.8% disponibilité", "30% économies", "<100ms réponse"],
      date: "Juin 2023"
    },
    {
      id: 6,
      name: "David Chen",
      position: "Co-fondateur",
      company: "MarketPlace B2B",
      industry: "E-commerce B2B",
      rating: 5,
      text: "Développement de marketplace complexe mené avec brio. Algorithme de matching intelligent, gestion multi-vendors, facturation automatisée... Tout fonctionne parfaitement. 5M€ de transactions en 18 mois !",
      project: "Marketplace B2B complexe",
      results: ["5M€ transactions", "200+ entreprises", "92% satisfaction"],
      date: "Mars 2022"
    }
  ];

  const stats = [
    { number: "98%", label: "Clients satisfaits" },
    { number: "100%", label: "Projets livrés à temps" },
    { number: "4.9/5", label: "Note moyenne" },
    { number: "85%", label: "Clients récurrents" }
  ];

  const industries = [
    { name: "Start-ups", count: "15+", icon: "🚀" },
    { name: "PME", count: "20+", icon: "🏢" },
    { name: "E-commerce", count: "12+", icon: "🛒" },
    { name: "SaaS", count: "8+", icon: "☁️" },
    { name: "Santé/Bien-être", count: "6+", icon: "🏥" },
    { name: "Éducation", count: "5+", icon: "🎓" }
  ];

  return (
    <Layout 
      title="Témoignages Clients | Avis Développeur Freelance | Projets Réussis"
      description="Découvrez les témoignages de mes clients : PME, start-ups satisfaites. Projets Laravel, Flutter, React réussis. 98% de satisfaction, ROI démontrés."
      keywords="témoignages développeur freelance, avis clients satisfaits, projets réussis Laravel Flutter, références développeur, satisfaction client"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Témoignages <span className="text-primary">Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez ce que disent mes clients sur nos collaborations. 
              Projets réussis, résultats concrets et satisfaction garantie.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ce Que Disent Mes <span className="text-primary">Clients</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Retours authentiques de clients qui ont fait confiance à mon expertise 
                pour leurs projets d'applications web et mobile.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                      <blockquote className="text-muted-foreground leading-relaxed italic pl-6">
                        "{testimonial.text}"
                      </blockquote>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Projet : {testimonial.project}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Résultats obtenus :</h4>
                        <div className="flex flex-wrap gap-2">
                          {testimonial.results.map((result, idx) => (
                            <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                      <span className="text-xs text-primary font-medium">{testimonial.industry}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secteurs d'<span className="text-primary">Activité</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                J'accompagne des entreprises de tous secteurs dans leur transformation digitale
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <h3 className="font-semibold">{industry.name}</h3>
                    <div className="text-2xl font-bold text-primary">{industry.count}</div>
                    <div className="text-sm text-muted-foreground">clients</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Quality */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Garanties <span className="text-primary">Qualité</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Mon engagement pour assurer la réussite de votre projet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold">Objectifs Atteints</h3>
                  <p className="text-muted-foreground">
                    Respect du cahier des charges et des objectifs business définis ensemble
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-semibold">Délais Respectés</h3>
                  <p className="text-muted-foreground">
                    Livraison dans les temps avec des points d'étape réguliers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold">Support Continu</h3>
                  <p className="text-muted-foreground">
                    Accompagnement après livraison et maintenance préventive
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Rejoignez Mes Clients Satisfaits
            </h2>
            <p className="text-xl opacity-90">
              Transformons ensemble votre idée en succès. Devis gratuit et accompagnement personnalisé.
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

export default Testimonials;