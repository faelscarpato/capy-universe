"use client"

import { useEffect } from "react"

export default function CapyUniversePage() {
  useEffect(() => {
    // Redireciona para o arquivo HTML na pasta public
    window.location.href = "/capyuniverse.html"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">Carregando CapyUniverse...</h1>
        <p className="text-gray-300">Redirecionando para a plataforma completa</p>
      </div>
    </div>
  )
}
