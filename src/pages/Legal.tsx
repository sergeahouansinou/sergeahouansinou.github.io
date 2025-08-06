import Layout from "@/components/Layout";

const Legal = () => {
  return (
    <Layout 
      title="Mentions Légales | DevFreelance.pro - Développeur Freelance"
      description="Mentions légales de DevFreelance.pro, développeur freelance spécialisé en applications web et mobile (Laravel, Flutter, React)."
      keywords="mentions légales, développeur freelance, DevFreelance.pro, RGPD, conditions générales"
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Mentions Légales</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Informations générales</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p><strong>Nom commercial :</strong> DevFreelance.pro</p>
              <p><strong>Statut juridique :</strong> Entreprise Individuelle / Auto-entrepreneur</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>Adresse :</strong> [À compléter]</p>
              <p><strong>Email :</strong> contact@devfreelance.pro</p>
              <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Directeur de la publication</h2>
            <p>Le directeur de la publication du site DevFreelance.pro est le propriétaire de l'entreprise.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Hébergement</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p><strong>Hébergeur :</strong> Lovable</p>
              <p><strong>Adresse :</strong> [Adresse de Lovable]</p>
              <p>Le site est hébergé sur la plateforme Lovable.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Propriété intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
            <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Réalisations mentionnées</h2>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Applications développées :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>eGuardImmo :</strong> Application de gestion immobilière</li>
                <li><strong>Ma Consolation :</strong> Application de services de consolation</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Ces applications sont des créations originales développées par DevFreelance.pro. 
                Toute reproduction ou utilisation sans autorisation est interdite.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Données personnelles</h2>
            <p>Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée en 2004, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent.</p>
            <p>Pour plus d'informations sur la collecte et le traitement de vos données personnelles, consultez notre <a href="/privacy" className="text-primary hover:underline">Politique de Confidentialité</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Cookies</h2>
            <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Responsabilité</h2>
            <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
            <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@devfreelance.pro, en décrivant le problème de la façon la plus précise possible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Litiges</h2>
            <p>Les présentes conditions du site DevFreelance.pro et votre utilisation de ce site sont régies par le droit français. Tout litige portant sur l'utilisation du site est soumis au droit français.</p>
          </section>

          <div className="mt-12 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;