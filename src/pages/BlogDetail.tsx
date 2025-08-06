import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import blogData from "@/data/blog.json";

const BlogDetail = () => {
  const { id } = useParams();
  const articleId = parseInt(id || "1");
  const article = blogData.find(a => a.id === articleId);

  if (!article) {
    return (
      <Layout 
        title="Article non trouvé | Blog DevFreelance.pro"
        description="L'article de blog que vous recherchez n'existe pas ou a été supprimé."
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-lg text-muted-foreground mb-8">
            L'article que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={article.seo.title}
      description={article.seo.description}
      keywords={article.seo.keywords}
    >
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-card rounded-lg border">
          <div className="flex items-start gap-4">
            <img 
              src="/developer-avatar.jpg" 
              alt="Serge AHOUANSINOU"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Serge AHOUANSINOU</h3>
              <p className="text-muted-foreground mb-4">
                Développeur freelance spécialisé en applications web et mobile. 
                Expert Laravel, Flutter et React avec 5+ ans d'expérience.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  Contactez-moi pour votre projet
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Articles similaires</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogData
              .filter(a => a.id !== articleId)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className="block group"
                >
                  <div className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{new Date(relatedArticle.date).toLocaleDateString('fr-FR')}</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;