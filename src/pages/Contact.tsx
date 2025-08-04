import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous recontacterai dans les 24 heures. Merci pour votre confiance !",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout 
      title="Contact | Devis Gratuit | Développeur Freelance Applications Web & Mobile"
      description="Contactez-moi pour votre projet d'application web ou mobile. Devis gratuit sous 24h. Laravel, Flutter, React. Développeur freelance disponible pour PME et start-ups."
      keywords="contact développeur freelance, devis gratuit application, projet web mobile, Laravel Flutter React, développement sur mesure"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parlons de Votre <span className="text-primary">Projet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Prêt à transformer votre idée en application performante ? 
              Contactez-moi pour un devis gratuit et personnalisé sous 24 heures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Demande de Devis Gratuit</h2>
                    <p className="text-muted-foreground">
                      Remplissez ce formulaire pour recevoir un devis personnalisé. 
                      Plus vous êtes précis, plus mon estimation sera juste !
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Votre nom et prénom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Type de projet *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type de projet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Application Web (Laravel/React)</SelectItem>
                          <SelectItem value="mobile-app">Application Mobile (Flutter)</SelectItem>
                          <SelectItem value="web-mobile">Application Web + Mobile</SelectItem>
                          <SelectItem value="maintenance">Maintenance/Amélioration</SelectItem>
                          <SelectItem value="consulting">Conseil/Audit technique</SelectItem>
                          <SelectItem value="other">Autre (précisez dans le message)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget approximatif</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Moins de 5 000€</SelectItem>
                            <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                            <SelectItem value="15k-30k">15 000€ - 30 000€</SelectItem>
                            <SelectItem value="30k-50k">30 000€ - 50 000€</SelectItem>
                            <SelectItem value="over-50k">Plus de 50 000€</SelectItem>
                            <SelectItem value="discuss">À discuter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Délai souhaité</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Quand souhaitez-vous livrer ?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">Le plus tôt possible</SelectItem>
                            <SelectItem value="1-2-months">1-2 mois</SelectItem>
                            <SelectItem value="3-4-months">3-4 mois</SelectItem>
                            <SelectItem value="6-months">6 mois</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Description du projet *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Décrivez votre projet : objectifs, fonctionnalités souhaitées, public cible, contraintes techniques..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                      <Send className="mr-2 w-5 h-5" />
                      Envoyer ma demande de devis
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par email ou téléphone 
                      concernant votre projet. Vos données sont traitées de manière confidentielle.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <h3 className="text-xl font-semibold">Informations de Contact</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">contact@devfreelance.pro</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Téléphone</div>
                        <div className="text-sm text-muted-foreground">+33 6 12 34 56 78</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Localisation</div>
                        <div className="text-sm text-muted-foreground">France (télétravail)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Disponibilité</div>
                        <div className="text-sm text-muted-foreground">Lun-Ven 9h-18h</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <CardContent className="text-center space-y-4">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Réponse Rapide</h3>
                  <p className="text-muted-foreground">
                    Je m'engage à vous répondre sous <strong>24 heures</strong> avec un premier retour 
                    sur votre projet et les prochaines étapes.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ rapide */}
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <h3 className="text-xl font-semibold">Questions Fréquentes</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Le devis est-il vraiment gratuit ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Oui, totalement gratuit et sans engagement. Je prends le temps d'analyser 
                        votre projet pour vous proposer une solution adaptée.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Travaillez-vous avec les petites entreprises ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Absolument ! J'accompagne PME, start-ups et entrepreneurs avec des solutions 
                        adaptées à leur budget et leurs besoins.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Proposez-vous de la maintenance ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Oui, je propose des contrats de maintenance pour assurer la pérennité 
                        et l'évolution de votre application.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <h3 className="text-xl font-semibold">Processus de Collaboration</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div>
                        <div className="font-medium">Analyse de votre demande</div>
                        <div className="text-sm text-muted-foreground">Étude approfondie de vos besoins</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div>
                        <div className="font-medium">Devis personnalisé</div>
                        <div className="text-sm text-muted-foreground">Proposition technique et tarifaire</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div>
                        <div className="font-medium">Rendez-vous de validation</div>
                        <div className="text-sm text-muted-foreground">Échange pour finaliser les détails</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                      <div>
                        <div className="font-medium">Développement et suivi</div>
                        <div className="text-sm text-muted-foreground">Livraisons régulières et communication</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Alternative */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Vous Préférez Échanger Directement ?
            </h2>
            <p className="text-lg text-muted-foreground">
              N'hésitez pas à m'appeler ou m'envoyer un email pour discuter de votre projet de vive voix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+33612345678">
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@devfreelance.pro">
                  <Mail className="mr-2 w-5 h-5" />
                  Envoyer un email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;