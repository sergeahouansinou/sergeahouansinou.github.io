import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  GraduationCap, 
  Award, 
  Users, 
  Coffee,
  ArrowRight,
  Target,
  Heart,
  Lightbulb
} from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.jpg";

const About = () => {
  const skills = [
    { name: "Laravel / PHP", level: 95, category: "Backend" },
    { name: "Flutter / Dart", level: 90, category: "Mobile" },
    { name: "React / TypeScript", level: 92, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "MySQL / PostgreSQL", level: 90, category: "Database" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence Technique",
      description: "Code propre, architectures solides et respect des bonnes pratiques pour des applications durables."
    },
    {
      icon: Heart,
      title: "Relation Client",
      description: "Communication transparente, écoute active et accompagnement personnalisé tout au long du projet."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Veille technologique constante et adoption des meilleures solutions pour chaque contexte."
    }
  ];

  const experience = [
    {
      year: "2024",
      title: "Développeur Freelance Full-Stack",
      company: "Indépendant",
      description: "Spécialisation en applications web et mobile pour PME et start-ups. Laravel, Flutter, React."
    },
    {
      year: "2020-2023",
      title: "Lead Developer",
      company: "Tech Agency",
      description: "Direction technique d'équipes, architecture d'applications complexes et formation des développeurs juniors."
    },
    {
      year: "2018-2020",
      title: "Développeur Full-Stack",
      company: "StartUp Innovante",
      description: "Développement d'applications SaaS, mise en place de l'architecture DevOps et optimisation des performances."
    }
  ];

  return (
    <Layout 
      title="À Propos | Développeur Freelance Expérimenté | Parcours & Compétences"
      description="Découvrez le parcours d'un développeur freelance expert en Laravel, Flutter et React. 5+ années d'expérience, 50+ projets réalisés. Passion pour l'excellence technique."
      keywords="développeur freelance expérience, parcours développeur, compétences Laravel Flutter React, développeur full-stack, expertise technique"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 shadow-glow">
              <img 
                src={developerAvatar} 
                alt="Développeur freelance professionnel" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Développeur <span className="text-primary">Passionné</span> & <span className="text-primary">Expérimenté</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plus de 5 années d'expertise en développement d'applications web et mobile. 
              Spécialisé dans la création de solutions digitales innovantes pour accompagner 
              la croissance des entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Mon Parcours</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diplômé d'un Master en Informatique, j'ai commencé ma carrière dans une start-up innovante 
                  où j'ai découvert ma passion pour le développement full-stack. Cette expérience m'a permis 
                  de maîtriser l'ensemble de la chaîne de création d'applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Après plusieurs années en entreprise comme Lead Developer, j'ai décidé de me lancer en freelance 
                  pour offrir mes compétences directement aux PME, start-ups et entrepreneurs qui souhaitent 
                  digitaliser leur activité avec des solutions sur mesure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aujourd'hui, je mets mon expertise technique et ma compréhension des enjeux business au service 
                  de projets qui ont du sens, en privilégiant la qualité, la performance et l'accompagnement client.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">Expertise Technique</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Maîtrise complète des technologies modernes : Laravel, Flutter, React, Node.js, 
                    avec une attention particulière à la qualité du code et aux performances.
                  </p>
                </Card>
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">Accompagnement Client</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Approche collaborative et pédagogique pour vous accompagner à chaque étape, 
                    de la conception à la mise en production.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Expérience Professionnelle</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {exp.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card p-6 rounded-lg shadow-card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-primary font-medium">{exp.company}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Compétences Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.category}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-primary font-medium">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Mes Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Travaillons Ensemble
            </h2>
            <p className="text-xl opacity-90">
              Vous avez un projet d'application web ou mobile ? Discutons-en autour d'un café (virtuel ou réel) !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 border-white"
                asChild
              >
                <Link to="/contact">
                  <Coffee className="mr-2 w-5 h-5" />
                  Prenons rendez-vous
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
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;