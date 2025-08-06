import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

// Données détaillées des articles de blog
const blogArticles = {
  1: {
    id: 1,
    title: "Comment choisir la technologie parfaite pour votre application mobile en 2024",
    excerpt: "Guide complet pour sélectionner la stack technique idéale selon vos besoins business.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>Le choix de la technologie pour développer votre application mobile est crucial pour le succès de votre projet. En tant que développeur freelance spécialisé dans le développement d'applications, je vais vous guider à travers les principales options disponibles en 2024.</p>

        <h2>1. Flutter : La solution cross-platform de Google</h2>
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Une seule base de code pour iOS et Android</li>
          <li>Performance native excellente</li>
          <li>Interface utilisateur moderne et personnalisable</li>
          <li>Temps de développement réduit de 30-50%</li>
        </ul>
        
        <p><strong>Idéal pour :</strong> Startups, PME, applications business avec budget optimisé</p>

        <h2>2. Développement natif (Swift/Kotlin)</h2>
        <p>Pour des applications nécessitant les performances maximales ou l'accès à des fonctionnalités très spécifiques de l'OS.</p>
        
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Performance optimale</li>
          <li>Accès complet aux APIs natives</li>
          <li>Interface utilisateur parfaitement intégrée</li>
        </ul>

        <h2>3. React Native : La solution Facebook</h2>
        <p>Excellent compromis pour les équipes déjà familières avec React.js.</p>

        <h2>Comment faire le bon choix ?</h2>
        <ol>
          <li><strong>Analysez votre budget :</strong> Flutter et React Native sont plus économiques</li>
          <li><strong>Évaluez vos besoins techniques :</strong> Applications complexes = natif</li>
          <li><strong>Considérez votre timeline :</strong> Cross-platform pour un lancement rapide</li>
          <li><strong>Pensez maintenance :</strong> Une base de code = maintenance simplifiée</li>
        </ol>

        <h2>Mon approche en tant que développeur freelance</h2>
        <p>Chez DevFreelance.pro, je recommande généralement Flutter pour 80% des projets. Cette technologie offre le meilleur rapport qualité/prix/délai pour la plupart des applications business.</p>

        <p>Pour mes projets comme <strong>eGuardImmo</strong> (gestion immobilière) et <strong>Ma Consolation</strong> (services de consolation), j'ai choisi Flutter pour sa rapidité de développement et sa capacité à créer des interfaces utilisateur attractives.</p>

        <h2>Conclusion</h2>
        <p>Le choix de la technologie dépend de vos objectifs business, votre budget et vos contraintes techniques. N'hésitez pas à me contacter pour un audit gratuit de votre projet et des recommandations personnalisées.</p>
      </div>
    `,
    author: "Serge AHOUANSINOU",
    date: "2024-01-15",
    readTime: "8 min",
    image: "/web-project.jpg",
    tags: ["Flutter", "React Native", "Mobile", "Technologie"],
    seo: {
      title: "Comment choisir la technologie parfaite pour votre app mobile 2024",
      description: "Guide expert pour choisir entre Flutter, React Native et développement natif. Conseils d'un développeur freelance spécialisé en applications mobile.",
      keywords: "technologie application mobile, Flutter vs React Native, développement mobile, choix technologique, développeur mobile freelance"
    }
  },
  2: {
    id: 2,
    title: "Laravel vs WordPress : Quel CMS choisir pour votre site web professionnel ?",
    excerpt: "Comparaison détaillée entre Laravel et WordPress pour vos projets web d'entreprise.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>En tant que développeur freelance spécialisé en Laravel, je vois souvent mes clients hésiter entre WordPress et une solution sur-mesure Laravel. Voici mon analyse complète pour vous aider à faire le bon choix.</p>

        <h2>WordPress : La solution rapide et économique</h2>
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Installation rapide (1-2 jours)</li>
          <li>Coût initial réduit</li>
          <li>Large choix de thèmes et plugins</li>
          <li>Interface d'administration intuitive</li>
          <li>SEO optimisé avec des plugins comme Yoast</li>
        </ul>

        <p><strong>Inconvénients :</strong></p>
        <ul>
          <li>Sécurité parfois fragile</li>
          <li>Performance limitée sur de gros volumes</li>
          <li>Personnalisation limitée sans développement</li>
          <li>Dépendance aux plugins tiers</li>
        </ul>

        <h2>Laravel : La solution sur-mesure et évolutive</h2>
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Sécurité renforcée (protection CSRF, validation...)</li>
          <li>Performance optimale</li>
          <li>Fonctionnalités 100% personnalisées</li>
          <li>Architecture MVC claire et maintenable</li>
          <li>Évolutivité illimitée</li>
        </ul>

        <h2>Mes recommandations par type de projet</h2>

        <h3>Choisissez WordPress si :</h3>
        <ul>
          <li>Vous avez un budget limité (&lt; 3 000€)</li>
          <li>Vous voulez un lancement rapide</li>
          <li>Votre site est principalement informatif</li>
          <li>Vous gérez le contenu régulièrement</li>
        </ul>

        <h3>Choisissez Laravel si :</h3>
        <ul>
          <li>Vous avez des besoins métier spécifiques</li>
          <li>La sécurité est critique</li>
          <li>Vous prévoyez une forte croissance</li>
          <li>Vous voulez une solution unique</li>
        </ul>

        <h2>Exemples concrets de mes réalisations</h2>
        <p>Pour <strong>eGuardImmo</strong>, j'ai choisi Laravel car l'application nécessitait :</p>
        <ul>
          <li>Gestion complexe des droits utilisateurs</li>
          <li>Traitement de données immobilières sensibles</li>
          <li>Intégrations API multiples</li>
          <li>Performance pour de gros volumes de données</li>
        </ul>

        <h2>Le coût réel sur 3 ans</h2>
        <table class="min-w-full border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border p-2">Critère</th>
              <th class="border p-2">WordPress</th>
              <th class="border p-2">Laravel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">Développement initial</td>
              <td class="border p-2">1 500€ - 5 000€</td>
              <td class="border p-2">5 000€ - 15 000€</td>
            </tr>
            <tr>
              <td class="border p-2">Maintenance annuelle</td>
              <td class="border p-2">800€ - 2 000€</td>
              <td class="border p-2">500€ - 1 200€</td>
            </tr>
            <tr>
              <td class="border p-2">Évolutions</td>
              <td class="border p-2">Limitées/coûteuses</td>
              <td class="border p-2">Flexibles</td>
            </tr>
          </tbody>
        </table>

        <h2>Ma méthode de conseil</h2>
        <p>Lors de notre premier échange, j'analyse avec vous :</p>
        <ol>
          <li>Vos objectifs business à 3 ans</li>
          <li>Votre budget global (développement + maintenance)</li>
          <li>Vos contraintes techniques</li>
          <li>Votre équipe interne</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Il n'y a pas de "meilleure" solution universelle. WordPress excelle pour des sites vitrine et blogs, Laravel brille pour des applications métier complexes. L'important est de choisir en fonction de vos vrais besoins, pas des tendances.</p>
        
        <p>Besoin d'un audit de votre projet ? Contactez-moi pour un diagnostic gratuit et personnalisé.</p>
      </div>
    `,
    author: "Serge AHOUANSINOU",
    date: "2024-01-10",
    readTime: "12 min",
    image: "/mobile-project.jpg",
    tags: ["Laravel", "WordPress", "CMS", "Développement Web"],
    seo: {
      title: "Laravel vs WordPress : Quel CMS choisir pour votre site pro ?",
      description: "Comparaison complète Laravel vs WordPress par un expert. Avantages, inconvénients, coûts et recommandations pour votre projet web professionnel.",
      keywords: "Laravel vs WordPress, CMS professionnel, développement web sur mesure, Laravel développeur freelance, choix CMS entreprise"
    }
  },
  3: {
    id: 3,
    title: "Les 7 erreurs fatales à éviter lors du développement de votre première application",
    excerpt: "Guide pratique pour éviter les pièges les plus courants en développement d'applications.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>Après 5 ans d'expérience en développement d'applications et plus de 50 projets livrés, j'ai identifié les erreurs les plus coûteuses que font les entrepreneurs lors de leur premier projet. Voici comment les éviter.</p>

        <h2>Erreur #1 : Vouloir tout faire dès la V1</h2>
        <p><strong>Le problème :</strong> Beaucoup d'entrepreneurs veulent intégrer toutes leurs idées dans la première version.</p>
        
        <p><strong>Pourquoi c'est fatal :</strong></p>
        <ul>
          <li>Budget multiplié par 3-5</li>
          <li>Délais de développement interminables</li>
          <li>Application complexe et bugguée</li>
          <li>Lancement retardé = opportunité manquée</li>
        </ul>

        <p><strong>Ma solution :</strong> Méthode MVP (Minimum Viable Product)</p>
        <ol>
          <li>Identifiez les 3 fonctionnalités ESSENTIELLES</li>
          <li>Développez et lancez rapidement</li>
          <li>Récoltez les retours utilisateurs</li>
          <li>Itérez selon les vrais besoins</li>
        </ol>

        <h2>Erreur #2 : Négliger l'UX/UI Design</h2>
        <p>"Ça marche, c'est le principal" - Cette phrase a tué plus d'applications que les bugs.</p>

        <p><strong>Impact réel :</strong></p>
        <ul>
          <li>Taux d'abandon de 90% dans les premières minutes</li>
          <li>Avis négatifs sur les stores</li>
          <li>Bouche-à-oreille négatif</li>
        </ul>

        <p><strong>Mon approche :</strong> Design thinking dès le début</p>
        <p>Pour <strong>eGuardImmo</strong>, j'ai passé 2 semaines sur les wireframes avant de coder une ligne. Résultat : 95% d'adoption utilisateur dès le premier mois.</p>

        <h2>Erreur #3 : Sous-estimer les coûts cachés</h2>
        <p>Le développement n'est que 60% du budget total.</p>

        <p><strong>Coûts souvent oubliés :</strong></p>
        <ul>
          <li>Hébergement et serveurs (200-500€/mois)</li>
          <li>Comptes développeur Apple/Google (100€/an chacun)</li>
          <li>Licences et API tierces (50-200€/mois)</li>
          <li>Maintenance et mises à jour (15-20% du coût initial/an)</li>
          <li>Marketing et promotion</li>
        </ul>

        <p><strong>Mon conseil :</strong> Prévoyez 40% de budget supplémentaire pour les "extras".</p>

        <h2>Erreur #4 : Choisir le mauvais développeur</h2>
        <p>Prix le plus bas ≠ Meilleure affaire</p>

        <p><strong>Red flags à éviter :</strong></p>
        <ul>
          <li>Pas de portfolio vérifiable</li>
          <li>Communication uniquement par email</li>
          <li>Devis sans analyse de vos besoins</li>
          <li>Promesses irréalistes sur les délais</li>
          <li>Pas de contrat détaillé</li>
        </ul>

        <p><strong>Ma méthodologie :</strong></p>
        <ol>
          <li>Appel de découverte (30 min gratuit)</li>
          <li>Audit de faisabilité</li>
          <li>Devis détaillé avec planning</li>
          <li>Contrat avec jalons et livrables</li>
          <li>Suivi hebdomadaire pendant le projet</li>
        </ol>

        <h2>Erreur #5 : Ignorer la sécurité et le RGPD</h2>
        <p>Une faille de sécurité peut coûter plus cher que tout le développement.</p>

        <p><strong>Risques :</strong></p>
        <ul>
          <li>Amendes RGPD jusqu'à 4% du CA</li>
          <li>Perte de confiance clients</li>
          <li>Coûts de remédiation énormes</li>
        </ul>

        <p><strong>Mes standards sécurité :</strong></p>
        <ul>
          <li>Chiffrement des données sensibles</li>
          <li>Authentification à deux facteurs</li>
          <li>Logs d'audit complets</li>
          <li>Sauvegardes automatiques</li>
          <li>Tests de pénétration</li>
        </ul>

        <h2>Erreur #6 : Pas de stratégie de lancement</h2>
        <p>"Si tu le construis, ils viendront" - Faux en 2024.</p>

        <p><strong>Plan de lancement minimum :</strong></p>
        <ul>
          <li>Beta testing avec 10-20 utilisateurs</li>
          <li>Page de pré-inscription</li>
          <li>Stratégie réseaux sociaux</li>
          <li>Partenariats et influenceurs</li>
          <li>SEO et référencement</li>
        </ul>

        <h2>Erreur #7 : Négliger la formation équipe</h2>
        <p>La meilleure app est inutile si votre équipe ne sait pas l'utiliser.</p>

        <p><strong>Ce que j'inclus toujours :</strong></p>
        <ul>
          <li>Formation utilisateurs (2h minimum)</li>
          <li>Documentation complète</li>
          <li>Vidéos tutoriels</li>
          <li>Support post-lancement (1 mois)</li>
        </ul>

        <h2>Cas d'étude : Ma Consolation</h2>
        <p>Pour ce projet, le client avait initialement prévu :</p>
        <ul>
          <li>15 fonctionnalités complexes</li>
          <li>Budget de 8 000€</li>
          <li>Délai de 2 mois</li>
        </ul>

        <p><strong>Ma recommandation :</strong></p>
        <ul>
          <li>MVP avec 4 fonctionnalités core</li>
          <li>Budget initial de 5 000€</li>
          <li>Lancement en 6 semaines</li>
          <li>Roadmap évolution sur 6 mois</li>
        </ul>

        <p><strong>Résultat :</strong> Application lancée à temps, budget respecté, 200 utilisateurs actifs dès le premier mois.</p>

        <h2>Checklist avant de commencer votre projet</h2>
        <div class="bg-gray-100 p-6 rounded-lg">
          <h3>☑️ Analyse et planning</h3>
          <ul>
            <li>□ Définition du MVP</li>
            <li>□ Personas utilisateurs</li>
            <li>□ Wireframes validés</li>
            <li>□ Budget total calculé (avec marges)</li>
          </ul>

          <h3>☑️ Équipe et prestataires</h3>
          <ul>
            <li>□ Développeur sélectionné et vérifié</li>
            <li>□ Contrat détaillé signé</li>
            <li>□ Planning avec jalons</li>
          </ul>

          <h3>☑️ Technique et légal</h3>
          <ul>
            <li>□ Cahier des charges sécurité</li>
            <li>□ Conformité RGPD</li>
            <li>□ Stratégie hébergement</li>
          </ul>

          <h3>☑️ Lancement</h3>
          <ul>
            <li>□ Plan de test utilisateurs</li>
            <li>□ Stratégie marketing</li>
            <li>□ Formation équipe prévue</li>
          </ul>
        </div>

        <h2>Votre projet mérite de réussir</h2>
        <p>Ces erreurs ne sont pas une fatalité. Avec la bonne méthode et les bons conseils, votre application peut devenir un succès.</p>

        <p>Vous avez un projet en tête ? Parlons-en lors d'un appel découverte gratuit. Je vous aiderai à éviter ces pièges et à construire une stratégie gagnante.</p>
      </div>
    `,
    author: "Serge AHOUANSINOU",
    date: "2024-01-05",
    readTime: "15 min",
    image: "/developer-avatar.jpg",
    tags: ["Développement", "Conseils", "Entrepreneuriat", "MVP"],
    seo: {
      title: "7 erreurs fatales à éviter en développement d'application mobile",
      description: "Guide expert des pièges les plus coûteux en développement d'app. Conseils d'un développeur freelance expérimenté pour réussir votre premier projet.",
      keywords: "erreurs développement application, MVP, développeur freelance conseils, projet application mobile, éviter échec développement"
    }
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const articleId = parseInt(id || "1");
  const article = blogArticles[articleId as keyof typeof blogArticles];

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

        {/* Featured Image */}
        {article.image && (
          <div className="mb-12">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

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
                Créateur d'eGuardImmo et Ma Consolation.
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
            {Object.values(blogArticles)
              .filter(a => a.id !== articleId)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className="block group"
                >
                  <div className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-primary rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Prêt à lancer votre projet ?</h3>
          <p className="mb-6 opacity-90">
            Discutons de votre application web ou mobile lors d'un appel découverte gratuit.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;