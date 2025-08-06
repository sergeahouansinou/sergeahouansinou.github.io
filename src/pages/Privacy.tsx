import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout 
      title="Politique de Confidentialité | DevFreelance.pro - Protection des Données"
      description="Politique de confidentialité et protection des données personnelles de DevFreelance.pro. Conformité RGPD pour nos applications eGuardImmo et Ma Consolation."
      keywords="politique confidentialité, RGPD, protection données, eGuardImmo, Ma Consolation, développeur freelance"
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Politique de Confidentialité</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
            <p>
              DevFreelance.pro s'engage à protéger votre vie privée et vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
              vos informations personnelles sur notre site web et dans nos applications.
            </p>
            <div className="bg-card p-6 rounded-lg border mt-4">
              <p><strong>Responsable du traitement :</strong> DevFreelance.pro</p>
              <p><strong>Contact :</strong> contact@devfreelance.pro</p>
              <p><strong>Date d'entrée en vigueur :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Données collectées</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Sur le site DevFreelance.pro</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Nom et prénom (formulaire de contact)</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Message et détails du projet</li>
              <li>Données de navigation (cookies analytiques)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Applications développées</h3>
            
            <div className="bg-card p-6 rounded-lg border mb-4">
              <h4 className="font-semibold mb-2">eGuardImmo</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Informations de compte utilisateur</li>
                <li>Données immobilières saisies</li>
                <li>Documents uploadés</li>
                <li>Historique des actions</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Ma Consolation</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Informations personnelles de l'utilisateur</li>
                <li>Préférences de services</li>
                <li>Historique des demandes</li>
                <li>Communications échangées</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Finalités du traitement</h2>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Gestion des demandes de contact</h4>
                <p className="text-sm">Répondre à vos questions et propositions de projets</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Fourniture des services</h4>
                <p className="text-sm">Fonctionnement optimal des applications développées</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Amélioration des services</h4>
                <p className="text-sm">Analyse d'usage pour optimiser l'expérience utilisateur</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Obligations légales</h4>
                <p className="text-sm">Respect des obligations comptables et fiscales</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Base légale du traitement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentement :</strong> Pour l'envoi de newsletters et communications marketing</li>
              <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité</li>
              <li><strong>Exécution contractuelle :</strong> Pour la fourniture des services demandés</li>
              <li><strong>Obligation légale :</strong> Pour le respect des obligations comptables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Durée de conservation</h2>
            <div className="bg-card p-6 rounded-lg border">
              <ul className="space-y-2">
                <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Données contractuelles :</strong> 10 ans (obligations comptables)</li>
                <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
                <li><strong>Données des applications :</strong> Selon les conditions spécifiques de chaque app</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Partage des données</h2>
            <p>Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement dans les cas suivants :</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Prestataires techniques (hébergement, maintenance) sous contrat de confidentialité</li>
              <li>Autorités compétentes en cas d'obligation légale</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Sécurité des données</h2>
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Chiffrement des données en transit (HTTPS)</li>
              <li>Sauvegardes régulières sécurisées</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Mise à jour régulière des systèmes de sécurité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Droit d'accès</h4>
                <p className="text-sm">Obtenir une copie de vos données</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Droit de rectification</h4>
                <p className="text-sm">Corriger des données inexactes</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Droit à l'effacement</h4>
                <p className="text-sm">Demander la suppression de vos données</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Droit à la portabilité</h4>
                <p className="text-sm">Récupérer vos données dans un format lisible</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Droit d'opposition</h4>
                <p className="text-sm">Vous opposer au traitement</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold">Droit à la limitation</h4>
                <p className="text-sm">Limiter le traitement de vos données</p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mt-6">
              <p className="font-semibold">Pour exercer vos droits :</p>
              <p>Contactez-nous à <a href="mailto:contact@devfreelance.pro" className="text-primary hover:underline">contact@devfreelance.pro</a></p>
              <p className="text-sm mt-2">Nous vous répondrons dans un délai maximum de 30 jours.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Cookies</h2>
            <p>Notre site utilise des cookies pour :</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Assurer le bon fonctionnement du site</li>
              <li>Analyser l'audience (Google Analytics)</li>
              <li>Améliorer l'expérience utilisateur</li>
            </ul>
            <p className="mt-4">Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti de leur dépôt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">10. Contact</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p>Pour toute question concernant cette politique de confidentialité :</p>
              <ul className="mt-4 space-y-2">
                <li><strong>Email :</strong> contact@devfreelance.pro</li>
                <li><strong>Téléphone :</strong> +33 6 12 34 56 78</li>
                <li><strong>Autorité de contrôle :</strong> CNIL (www.cnil.fr)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">11. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être modifiée à tout moment. 
              Les modifications seront publiées sur cette page avec une nouvelle date d'entrée en vigueur.
            </p>
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

export default Privacy;