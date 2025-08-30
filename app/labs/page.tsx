"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Sparkles, ArrowRight } from "lucide-react"

const tools = [
  {
    title: "CapyWrite Pro",
    description: "IA especializada em criação de conteúdo que adapta tom, estilo e audiência automaticamente",
    category: "Criação de Conteúdo",
    tags: ["escrita", "conteúdo", "marketing", "copywriting"],
    icon: "✍️",
    pageUrl: "#capywrite",
  },
  {
    title: "CapyAnalyze",
    description: "Análise inteligente de dados com visualizações interativas e insights automáticos",
    category: "Análise de Dados",
    tags: ["dados", "análise", "gráficos", "insights"],
    icon: "📊",
    pageUrl: "#capyanalyze",
  },
  {
    title: "CapyDesign",
    description: "Geração de designs profissionais com IA criativa e templates adaptativos",
    category: "Design",
    tags: ["design", "criativo", "visual", "templates"],
    icon: "🎨",
    pageUrl: "#capydesign",
  },
  {
    title: "CapyCode",
    description: "Assistente de programação que entende contexto e gera código otimizado",
    category: "Desenvolvimento",
    tags: ["código", "programação", "dev", "otimização"],
    icon: "💻",
    pageUrl: "#capycode",
  },
  {
    title: "CapyLegal",
    description: "Análise jurídica inteligente com interpretação de contratos e documentos",
    category: "Jurídico",
    tags: ["jurídico", "contratos", "análise", "documentos"],
    icon: "⚖️",
    pageUrl: "#capylegal",
  },
  {
    title: "CapyLearn",
    description: "Plataforma de aprendizagem adaptativa que personaliza o ensino",
    category: "Educação",
    tags: ["educação", "aprendizagem", "ensino", "personalização"],
    icon: "🎓",
    pageUrl: "#capylearn",
  },
  {
    title: "CapyVision",
    description: "Reconhecimento e análise de imagens com IA avançada",
    category: "Visão Computacional",
    tags: ["imagem", "reconhecimento", "visão", "análise"],
    icon: "👁️",
    pageUrl: "#capyvision",
  },
  {
    title: "CapyChat",
    description: "Chatbot inteligente que mantém contexto e personalidade consistente",
    category: "Conversação",
    tags: ["chat", "conversação", "atendimento", "bot"],
    icon: "💬",
    pageUrl: "#capychat",
  },
  {
    title: "CapyTranslate",
    description: "Tradução contextual que preserva nuances culturais e técnicas",
    category: "Tradução",
    tags: ["tradução", "idiomas", "localização", "contexto"],
    icon: "🌐",
    pageUrl: "#capytranslate",
  },
  {
    title: "CapyAudio",
    description: "Processamento de áudio com transcrição, síntese e análise emocional",
    category: "Áudio",
    tags: ["áudio", "transcrição", "síntese", "emoção"],
    icon: "🎵",
    pageUrl: "#capyaudio",
  },
  {
    title: "CapyPredict",
    description: "Modelos preditivos personalizados para diferentes setores e necessidades",
    category: "Machine Learning",
    tags: ["predição", "ml", "modelos", "forecasting"],
    icon: "🔮",
    pageUrl: "#capypredict",
  },
  {
    title: "CapySocial",
    description: "Análise de sentimento e tendências em redes sociais com insights acionáveis",
    category: "Social Media",
    tags: ["social", "sentimento", "tendências", "insights"],
    icon: "📱",
    pageUrl: "#capysocial",
  },
]

const categories = Array.from(new Set(tools.map((tool) => tool.category)))

export default function LabsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [language, setLanguage] = useState<"pt" | "en">("pt")

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "Todas" || tool.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const translations = {
    pt: {
      title: "Laboratório de IA",
      subtitle: "Ferramentas que desafiam o impossível",
      searchPlaceholder: "Buscar ferramentas...",
      allCategories: "Todas",
      tryNow: "Experimentar",
      learnMore: "Saiba Mais",
      toolsCount: "ferramentas disponíveis",
    },
    en: {
      title: "AI Laboratory",
      subtitle: "Tools that challenge the impossible",
      searchPlaceholder: "Search tools...",
      allCategories: "All",
      tryNow: "Try Now",
      learnMore: "Learn More",
      toolsCount: "available tools",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <div className="flex gap-2">
          <Button
            variant={language === "pt" ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage("pt")}
            className="text-xs"
          >
            PT
          </Button>
          <Button
            variant={language === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage("en")}
            className="text-xs"
          >
            EN
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-cyan-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">{t.title}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
            <div className="text-sm text-gray-400">
              {tools.length} {t.toolsCount}
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === "Todas" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Todas")}
              size="sm"
              className="whitespace-nowrap"
            >
              <Filter className="h-4 w-4 mr-2" />
              {t.allCategories}
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <Card
              key={tool.title}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg group-hover:text-cyan-400 transition-colors">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs text-gray-400 border-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  >
                    {t.tryNow}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:text-white bg-transparent"
                  >
                    {t.learnMore}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">Nenhuma ferramenta encontrada</div>
            <div className="text-gray-500 text-sm">Tente ajustar os filtros ou termo de busca</div>
          </div>
        )}
      </div>
    </div>
  )
}
