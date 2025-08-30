"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Globe, Zap, Shield, Users, Star, Play, ArrowRight } from "lucide-react"
import { InteractiveOnboarding } from "@/components/interactive-onboarding"
import { FeatureHighlight } from "@/components/feature-highlight"

export default function CapyUniverseLanding() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const [showOnboarding, setShowOnboarding] = useState(false)

  const content = {
    pt: {
      nav: {
        features: "Recursos",
        pricing: "Preços",
        support: "Suporte",
        contact: "Contato",
      },
      hero: {
        badge: "Inteligência Artificial Premium",
        title: "CapyUniverse IA",
        subtitle: "As capivaras mais futuristas do universo",
        description:
          "Simplifique suas capivaras mais futuristas do universo com nossa plataforma de IA. Economize tempo e torne sua vida mais eficiente.",
        cta: "Começar Agora",
        demo: "Ver Demo",
      },
      features: {
        title: "Recursos Poderosos",
        subtitle: "Descubra as ferramentas que vão transformar seu trabalho",
        items: [
          {
            icon: Zap,
            title: "CapyResumo",
            description: "Resuma qualquer texto, artigo ou documento em segundos com nossa IA avançada.",
          },
          {
            icon: Shield,
            title: "Segurança Premium",
            description: "Seus dados estão protegidos com criptografia de ponta e privacidade garantida.",
          },
          {
            icon: Users,
            title: "Colaboração",
            description: "Trabalhe em equipe com ferramentas colaborativas inteligentes.",
          },
        ],
      },
      onboarding: {
        title: "Como Começar",
        steps: [
          { number: "01", title: "Cadastre-se", description: "Crie sua conta gratuita em segundos" },
          { number: "02", title: "Explore", description: "Descubra nossas ferramentas de IA" },
          { number: "03", title: "Crie", description: "Comece a usar e seja mais produtivo" },
        ],
      },
      testimonials: {
        title: "O que nossos usuários dizem",
        items: [
          {
            name: "Maria Silva",
            role: "Empreendedora",
            content: "O CapyUniverse revolucionou minha produtividade. Economizo horas todos os dias!",
            rating: 5,
          },
          {
            name: "João Santos",
            role: "Designer",
            content: "Interface intuitiva e resultados incríveis. Recomendo para todos!",
            rating: 5,
          },
        ],
      },
      cta: {
        title: "Pronto para começar?",
        description: "Junte-se a milhares de usuários que já transformaram seu trabalho",
        button: "Começar Gratuitamente",
      },
    },
    en: {
      nav: {
        features: "Features",
        pricing: "Pricing",
        support: "Support",
        contact: "Contact",
      },
      hero: {
        badge: "Premium Artificial Intelligence",
        title: "CapyUniverse AI",
        subtitle: "The most futuristic capybaras in the universe",
        description:
          "Simplify your most futuristic capybaras in the universe with our AI platform. Save time and make your life more efficient.",
        cta: "Get Started",
        demo: "Watch Demo",
      },
      features: {
        title: "Powerful Features",
        subtitle: "Discover the tools that will transform your work",
        items: [
          {
            icon: Zap,
            title: "CapyResumo",
            description: "Summarize any text, article or document in seconds with our advanced AI.",
          },
          {
            icon: Shield,
            title: "Premium Security",
            description: "Your data is protected with cutting-edge encryption and guaranteed privacy.",
          },
          {
            icon: Users,
            title: "Collaboration",
            description: "Work as a team with intelligent collaborative tools.",
          },
        ],
      },
      onboarding: {
        title: "How to Get Started",
        steps: [
          { number: "01", title: "Sign Up", description: "Create your free account in seconds" },
          { number: "02", title: "Explore", description: "Discover our AI tools" },
          { number: "03", title: "Create", description: "Start using and be more productive" },
        ],
      },
      testimonials: {
        title: "What our users say",
        items: [
          {
            name: "Maria Silva",
            role: "Entrepreneur",
            content: "CapyUniverse revolutionized my productivity. I save hours every day!",
            rating: 5,
          },
          {
            name: "João Santos",
            role: "Designer",
            content: "Intuitive interface and incredible results. I recommend it to everyone!",
            rating: 5,
          },
        ],
      },
      cta: {
        title: "Ready to get started?",
        description: "Join thousands of users who have already transformed their work",
        button: "Start for Free",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Interactive Onboarding */}
      <InteractiveOnboarding language={language} onComplete={() => console.log("Onboarding completed")} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-space-grotesk font-bold text-xl">CapyUniverse</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.features}
            </a>
            <a href="/labs" className="text-sm font-medium hover:text-primary transition-colors">
              {language === "pt" ? "Labs" : "Labs"}
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.pricing}
            </a>
            <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.support}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === "pt" ? "EN" : "PT"}</span>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-card text-card-foreground">
            {t.hero.badge}
          </Badge>

          <h1 className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
            {t.hero.title}
          </h1>

          <p className="font-space-grotesk font-semibold text-xl md:text-2xl text-muted-foreground mb-4">
            {t.hero.subtitle}
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{t.hero.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
              <a href="/labs">
                {t.hero.cta}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              {t.hero.demo}
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <FeatureHighlight language={language} />

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4">{t.features.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-space-grotesk">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4">{t.onboarding.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.onboarding.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 font-space-grotesk font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="font-space-grotesk font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-pretty">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4">{t.cta.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
            <a href="/labs">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-space-grotesk font-bold text-xl">CapyUniverse</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t.nav.support}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t.nav.contact}
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CapyUniverse. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
