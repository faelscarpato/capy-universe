"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ArrowRight, ArrowLeft, Sparkles, Zap, Users } from "lucide-react"

interface OnboardingStep {
  id: string
  title: string
  description: string
  targetElement?: string
  icon: React.ComponentType<any>
  action?: {
    label: string
    onClick: () => void
  }
}

interface InteractiveOnboardingProps {
  language: "pt" | "en"
  onComplete: () => void
}

export function InteractiveOnboarding({ language, onComplete }: InteractiveOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const content = {
    pt: {
      welcome: {
        title: "Bem-vindo ao CapyUniverse!",
        description: "Vamos te mostrar como aproveitar ao máximo nossa plataforma de IA",
        start: "Começar Tour",
        skip: "Pular",
      },
      steps: [
        {
          id: "features",
          title: "Explore Nossas Ferramentas",
          description: "Descubra o CapyResumo e outras ferramentas poderosas de IA que vão transformar seu trabalho",
          icon: Sparkles,
          action: {
            label: "Ver Todas as Ferramentas",
            onClick: () => (window.location.href = "/labs"),
          },
        },
        {
          id: "demo",
          title: "Veja em Ação",
          description: "Assista nossa demonstração para entender como economizar horas do seu dia",
          icon: Zap,
          action: {
            label: "Assistir Demo",
            onClick: () => console.log("Reproduzindo demo"),
          },
        },
        {
          id: "community",
          title: "Junte-se à Comunidade",
          description: "Conecte-se com outros usuários e aprenda as melhores práticas",
          icon: Users,
          action: {
            label: "Ver Comunidade",
            onClick: () => console.log("Navegando para comunidade"),
          },
        },
      ],
      navigation: {
        next: "Próximo",
        previous: "Anterior",
        finish: "Finalizar",
        close: "Fechar",
      },
    },
    en: {
      welcome: {
        title: "Welcome to CapyUniverse!",
        description: "Let us show you how to make the most of our AI platform",
        start: "Start Tour",
        skip: "Skip",
      },
      steps: [
        {
          id: "features",
          title: "Explore Our Tools",
          description: "Discover CapyResumo and other powerful AI tools that will transform your work",
          icon: Sparkles,
          action: {
            label: "View All Tools",
            onClick: () => (window.location.href = "/labs"),
          },
        },
        {
          id: "demo",
          title: "See It in Action",
          description: "Watch our demonstration to understand how to save hours of your day",
          icon: Zap,
          action: {
            label: "Watch Demo",
            onClick: () => console.log("Playing demo"),
          },
        },
        {
          id: "community",
          title: "Join the Community",
          description: "Connect with other users and learn best practices",
          icon: Users,
          action: {
            label: "View Community",
            onClick: () => console.log("Navigating to community"),
          },
        },
      ],
      navigation: {
        next: "Next",
        previous: "Previous",
        finish: "Finish",
        close: "Close",
      },
    },
  }

  const t = content[language]
  const steps = t.steps

  useEffect(() => {
    // Show onboarding after a short delay for new users
    const hasSeenOnboarding = localStorage.getItem("capyuniverse-onboarding-completed")
    if (!hasSeenOnboarding) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    localStorage.setItem("capyuniverse-onboarding-completed", "true")
    setIsVisible(false)
    onComplete()
  }

  const handleSkip = () => {
    localStorage.setItem("capyuniverse-onboarding-completed", "true")
    setIsVisible(false)
    onComplete()
  }

  if (!isVisible) return null

  const getCurrentStepIcon = () => {
    if (currentStep >= 0 && currentStep < steps.length) {
      const IconComponent = steps[currentStep].icon
      return <IconComponent className="h-6 w-6 text-primary" />
    }
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4">
        <Card className="border-2 border-primary/20 shadow-2xl">
          <CardHeader className="relative">
            <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={handleSkip}>
              <X className="h-4 w-4" />
            </Button>

            {currentStep === -1 ? (
              <>
                <CardTitle className="font-space-grotesk text-2xl text-center">{t.welcome.title}</CardTitle>
                <CardDescription className="text-center text-base">{t.welcome.description}</CardDescription>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {getCurrentStepIcon()}
                  </div>
                </div>
                <CardTitle className="font-space-grotesk text-xl text-center">{steps[currentStep].title}</CardTitle>
                <CardDescription className="text-center text-base">{steps[currentStep].description}</CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {currentStep >= 0 && steps[currentStep].action && (
              <div className="text-center">
                <Button onClick={steps[currentStep].action!.onClick} className="bg-secondary hover:bg-secondary/90">
                  {steps[currentStep].action!.label}
                </Button>
              </div>
            )}

            {/* Progress indicator */}
            {currentStep >= 0 && (
              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      index <= currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {currentStep === -1 ? (
                <>
                  <Button variant="ghost" onClick={handleSkip}>
                    {t.welcome.skip}
                  </Button>
                  <Button onClick={() => setCurrentStep(0)} className="bg-primary hover:bg-primary/90">
                    {t.welcome.start}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.navigation.previous}
                  </Button>
                  <Badge variant="secondary" className="px-3 py-1">
                    {currentStep + 1} / {steps.length}
                  </Badge>
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 flex items-center">
                    {currentStep === steps.length - 1 ? t.navigation.finish : t.navigation.next}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
