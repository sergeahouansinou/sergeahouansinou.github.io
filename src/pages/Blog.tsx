import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Laravel vs Symfony : Quel Framework PHP Choisir en 2024 ?",
      excerpt: "Comparaison détaillée entre Laravel et Symfony pour choisir le meilleur framework PHP selon votre projet. Performance, écosystème, courbe d'apprentissage.",
      content: "Guide complet pour choisir entre Laravel et Symfony selon vos besoins...",
      category: "Développement Web",
      tags: ["Laravel", "Symfony", "PHP", "Framework"],
      date: "2024-01-15",
      readTime: "8 min",
      author: "DevFreelance.pro"
    },
    {
      id: 2,
      title: "Flutter vs React Native : Développement Mobile Cross-Platform",
      excerpt: "Analyse comparative Flutter/React Native : performances, écosystème, coûts de développement. Quel framework choisir pour votre application mobile ?",
      content: "Le développement mobile cross-platform est devenu incontournable...",
      category: "Mobile",
      tags: ["Flutter", "React Native", "Mobile", "Cross-Platform"],
      date: "2024-01-10",
      readTime: "10 min",
      author: "DevFreelance.pro"
    },
    {
      id: 3,
      title: "Optimisation SEO pour Applications Web : Guide du Développeur",
      excerpt: "Techniques d'optimisation SEO pour applications web modernes. Server-side rendering, méta tags dynamiques, performance et structure de données.",
      content: "L'optimisation SEO d'une application web va au-delà du contenu...",
      category: "SEO & Performance",
      tags: ["SEO", "Performance", "React", "Next.js"],
      date: "2024-01-05",
      readTime: "12 min",
      author: "DevFreelance.pro"
    },
    {
      id: 4,
      title: "Pourquoi Choisir un Développeur Freelance ? Avantages et Bonnes Pratiques",
      excerpt: "Les avantages de travailler avec un développeur freelance : flexibilité, coûts, expertise. Comment bien choisir et collaborer avec un freelance.",
      content: "Faire appel à un développeur freelance présente de nombreux avantages...",
      category: "Business",
      tags: ["Freelance", "Business", "Conseil", "Collaboration"],
      date: "2024-01-01",
      readTime: "6 min",
      author: "DevFreelance.pro"
    },
    {
      id: 5,
      title: "API REST avec Laravel : Bonnes Pratiques et Sécurité",
      excerpt: "Guide complet pour créer des APIs REST robustes avec Laravel. Authentification, validation, documentation, gestion d'erreurs et sécurité.",
      content: "La création d'APIs REST robustes nécessite de respecter certaines bonnes pratiques...",
      category: "Développement Web",
      tags: ["Laravel", "API", "REST", "Sécurité"],
      date: "2023-12-20",
      readTime: "15 min",
      author: "DevFreelance.pro"
    },
    {
      id: 6,
      title: "State Management dans Flutter : Provider, Riverpod ou Bloc ?",
      excerpt: "Comparaison des solutions de gestion d'état Flutter : Provider, Riverpod, Bloc. Avantages, inconvénients et cas d'usage pour chaque approche.",
      content: "La gestion d'état est cruciale dans le développement Flutter...",
      category: "Mobile",
      tags: ["Flutter", "State Management", "Provider", "Riverpod"],
      date: "2023-12-15",
      readTime: "11 min",
      author: "DevFreelance.pro"
    }
  ];

  const categories = ["Tous", "Développement Web", "Mobile", "SEO & Performance", "Business"];

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <Layout 
      title="Blog Développement | Laravel, Flutter, React | Conseils & Tutoriels"
      description="Blog de développement web et mobile : tutoriels Laravel, guides Flutter, optimisation React, conseils freelance. Expertise technique et bonnes pratiques."
      keywords="blog développement web, tutoriels Laravel, guides Flutter React, conseils développeur freelance, bonnes pratiques programmation"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog <span className="text-primary">Développement</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tutoriels, conseils et bonnes pratiques en développement web et mobile. 
              Partagez mon expertise Laravel, Flutter, React et découvrez les secrets du freelancing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Article à la Une</h2>
            <Card className="overflow-hidden hover:shadow-card transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <Badge className="bg-primary text-white">{featuredArticle.category}</Badge>
                    <div className="text-6xl font-bold text-primary/20">PHP</div>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold">{featuredArticle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{featuredArticle.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredArticle.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    
                    <Button asChild className="w-fit">
                      <Link to={`/blog/${featuredArticle.id}`}>
                        Lire l'article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Derniers Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-primary/5 flex items-center justify-center border-b">
                    <div className="text-center space-y-2 p-4">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="text-2xl font-bold text-primary/40">
                        {article.category === "Mobile" ? "📱" : 
                         article.category === "Développement Web" ? "💻" : 
                         article.category === "SEO & Performance" ? "🚀" : "💼"}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link to={`/blog/${article.id}`}>
                        Lire l'article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Restez Informé des <span className="text-primary">Nouveautés</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Recevez mes derniers articles, tutoriels et conseils directement dans votre boîte mail. 
              Pas de spam, juste du contenu de qualité pour développeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background"
              />
              <Button className="bg-gradient-primary">
                S'abonner
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Vous pouvez vous désabonner à tout moment. Vos données sont protégées.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Sujets <span className="text-primary">Abordés</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="text-4xl">💻</div>
                  <h3 className="font-semibold">Développement Web</h3>
                  <p className="text-sm text-muted-foreground">Laravel, React, Next.js, APIs REST</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="text-4xl">📱</div>
                  <h3 className="font-semibold">Mobile</h3>
                  <p className="text-sm text-muted-foreground">Flutter, React Native, iOS, Android</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="text-4xl">🚀</div>
                  <h3 className="font-semibold">Performance</h3>
                  <p className="text-sm text-muted-foreground">Optimisation, SEO, bonnes pratiques</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="text-4xl">💼</div>
                  <h3 className="font-semibold">Freelancing</h3>
                  <p className="text-sm text-muted-foreground">Conseils business, gestion de projets</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;