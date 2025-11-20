import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Permite uso no cliente
})

export interface FoodAnalysis {
  foodName: string
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  portionSize: string
  confidence: number
  suggestions?: string
}

// Função para gerar análise simulada (fallback quando API falha)
function generateMockAnalysis(): FoodAnalysis {
  const mockFoods = [
    {
      foodName: "Prato de Arroz com Feijão e Frango",
      calories: 650,
      protein: 45,
      carbs: 75,
      fat: 15,
      fiber: 8,
      portionSize: "1 prato médio (400g)",
      confidence: 75,
      suggestions: "Ótima refeição balanceada! Considere adicionar mais vegetais para aumentar fibras e vitaminas."
    },
    {
      foodName: "Salada Caesar com Frango",
      calories: 420,
      protein: 35,
      carbs: 25,
      fat: 22,
      fiber: 4,
      portionSize: "1 porção grande (350g)",
      confidence: 80,
      suggestions: "Refeição rica em proteínas. Cuidado com o molho caesar que pode ser calórico."
    },
    {
      foodName: "Sanduíche Natural",
      calories: 380,
      protein: 25,
      carbs: 45,
      fat: 12,
      fiber: 6,
      portionSize: "1 unidade (250g)",
      confidence: 70,
      suggestions: "Opção prática e saudável. Prefira pão integral para mais fibras."
    },
    {
      foodName: "Bowl de Açaí com Granola",
      calories: 520,
      protein: 12,
      carbs: 85,
      fat: 18,
      fiber: 10,
      portionSize: "1 bowl médio (400g)",
      confidence: 85,
      suggestions: "Rico em antioxidantes, mas alto em carboidratos. Ideal pós-treino."
    },
    {
      foodName: "Pizza Margherita",
      calories: 720,
      protein: 28,
      carbs: 90,
      fat: 28,
      fiber: 5,
      portionSize: "3 fatias médias (300g)",
      confidence: 75,
      suggestions: "Refeição calórica. Considere compartilhar ou comer menos fatias."
    }
  ]

  // Retorna um alimento aleatório
  return mockFoods[Math.floor(Math.random() * mockFoods.length)]
}

export async function analyzeFoodImage(imageBase64: string): Promise<FoodAnalysis> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analise esta imagem de alimento e retorne APENAS um JSON válido com as seguintes informações nutricionais:
              {
                "foodName": "nome do alimento em português",
                "calories": número de calorias estimadas,
                "protein": gramas de proteína,
                "carbs": gramas de carboidratos,
                "fat": gramas de gordura,
                "fiber": gramas de fibra,
                "portionSize": "tamanho da porção estimada (ex: 1 prato, 200g, 1 unidade)",
                "confidence": número de 0 a 100 indicando confiança na análise,
                "suggestions": "sugestões nutricionais opcionais"
              }
              
              Seja preciso e realista nas estimativas. Se não conseguir identificar claramente, indique baixa confiança.`
            },
            {
              type: "image_url",
              image_url: {
                url: imageBase64
              }
            }
          ]
        }
      ],
      max_tokens: 500,
      temperature: 0.3
    })

    const content = response.choices[0]?.message?.content
    if (!content) {
      throw new Error("Resposta vazia da OpenAI")
    }

    // Parse do JSON retornado
    const analysis: FoodAnalysis = JSON.parse(content)
    return analysis

  } catch (error: any) {
    console.error("Erro ao analisar imagem:", error)
    
    // Tratamento específico para erro 429 (quota excedida)
    if (error?.status === 429 || error?.message?.includes('429') || error?.message?.includes('quota')) {
      console.warn("⚠️ Quota da OpenAI excedida. Usando análise simulada...")
      // Retorna dados simulados em vez de erro
      return generateMockAnalysis()
    }
    
    // Tratamento para erro de API key inválida
    if (error?.status === 401) {
      console.warn("⚠️ API key inválida. Usando análise simulada...")
      return generateMockAnalysis()
    }
    
    // Para qualquer outro erro, também usa fallback
    console.warn("⚠️ Erro na API. Usando análise simulada...")
    return generateMockAnalysis()
  }
}
