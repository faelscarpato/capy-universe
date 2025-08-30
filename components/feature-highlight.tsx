"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight, Play, FileText, Clock, CheckCircle } from "lucide-react"

interface FeatureHighlightProps {
  language: "pt" | "en"
}

export function FeatureHighlight({ language }: FeatureHighlightProps) {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const content = {
    pt: {
      title: "Experimente o CapyResumo",
      subtitle: "Sem cadastro necessário",
      description: "Cole qualquer texto e veja a mágica acontecer em segundos",
      placeholder: "Cole seu texto aqui para resumir...",
      demo: "Ver Demonstração",
      try: "Experimentar Agora",
      viewAll: "Ver Todas as Ferramentas",
      features: [
        { icon: Clock, text: "Resumo em segundos" },
        { icon: FileText, text: "Qualquer tipo de texto" },
        { icon: CheckCircle, text: "IA avançada" },
      ],
    },
    en: {
      title: "Try CapyResumo",
      subtitle: "No registration required",
      description: "Paste any text and watch the magic happen in seconds",
      placeholder: "Paste your text here to summarize...",
      demo: "Watch Demo",
      try: "Try Now",
      viewAll: "View All Tools",
      features: [
        { icon: Clock, text: "Summary in seconds" },
        { icon: FileText, text: "Any type of text" },
        { icon: CheckCircle, text: "Advanced AI" },
      ],
    },
  }

  const t = content[language]

  const handleDemo = () => {
    setActiveDemo("capyresumo")
    // Simulate demo
    setTimeout(() => setActiveDemo(null), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-card/50 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary-foreground">
              <Zap className="mr-2 h-4 w-4" />
              {t.subtitle}
            </Badge>
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4">{t.title}</h2>
            <p className="text-lg text-muted-foreground">{t.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Interactive Demo */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="font-space-grotesk flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-primary" />
                  CapyResumo
                </CardTitle>
                <CardDescription>{t.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <textarea
                    className="w-full h-32 p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder={t.placeholder}
                    disabled={activeDemo === "capyresumo"}
                  />
                  {activeDemo === "capyresumo" && (
                    <div className="absolute inset-0 bg-primary/5 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
                        <p className="text-sm text-primary font-medium">Processando...</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleDemo} className="flex-1 bg-primary hover:bg-primary/90">
                    <Play className="mr-2 h-4 w-4" />
                    {t.demo}
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    {t.try}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Features List */}
            <div className="space-y-6">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg font-medium">{feature.text}</p>
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  {t.try}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                  <a href="/labs">
                    {t.viewAll}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
