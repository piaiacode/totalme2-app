"use client"

import { useState } from "react"
import { Activity, Dumbbell, Apple, Heart, User, TrendingUp, Award, Users, Camera, MessageCircle, Target, Calendar, Flame, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function TotalMe() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 backdrop-blur-sm bg-white/80 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#8BA888] to-[#6B8E6B] rounded-lg flex items-center justify-center shadow-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold font-inter text-[#8BA888]">TotalMe</h1>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#8BA888]/10">
            <User className="w-5 h-5 text-gray-700" />
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-[73px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-0 h-auto p-0 gap-1">
              <TabsTrigger 
                value="dashboard" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#8BA888] rounded-none px-4 py-3 data-[state=active]:text-[#8BA888] text-gray-600"
              >
                <Activity className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="treinos"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#8BA888] rounded-none px-4 py-3 data-[state=active]:text-[#8BA888] text-gray-600"
              >
                <Dumbbell className="w-4 h-4 mr-2" />
                Treinos
              </TabsTrigger>
              <TabsTrigger 
                value="calorias"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#8BA888] rounded-none px-4 py-3 data-[state=active]:text-[#8BA888] text-gray-600"
              >
                <Apple className="w-4 h-4 mr-2" />
                Nutrição
              </TabsTrigger>
              <TabsTrigger 
                value="emocional"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#8BA888] rounded-none px-4 py-3 data-[state=active]:text-[#8BA888] text-gray-600"
              >
                <Heart className="w-4 h-4 mr-2" />
                Mente
              </TabsTrigger>
              <TabsTrigger 
                value="perfil"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#8BA888] rounded-none px-4 py-3 data-[state=active]:text-[#8BA888] text-gray-600"
              >
                <User className="w-4 h-4 mr-2" />
                Perfil
              </TabsTrigger>
            </TabsList>

            {/* Dashboard */}
            <TabsContent value="dashboard" className="mt-0">
              <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 font-inter text-gray-800">Visão Geral</h2>
                  <p className="text-gray-600">Acompanhe seu progresso diário</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <Card className="bg-white border-gray-200 p-6 hover:border-[#8BA888] transition-all duration-300 hover:shadow-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-[#8BA888]/10 rounded-xl flex items-center justify-center">
                        <Flame className="w-6 h-6 text-[#FF6B6B]" />
                      </div>
                      <Badge className="bg-[#8BA888]/20 text-[#6B8E6B] border-0">+12%</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Calorias Queimadas</p>
                    <p className="text-3xl font-bold text-[#8BA888]">2,847</p>
                    <p className="text-xs text-gray-500 mt-2">Meta: 3,000 kcal</p>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 hover:border-[#8BA888] transition-all duration-300 hover:shadow-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-[#8BA888]/10 rounded-xl flex items-center justify-center">
                        <Dumbbell className="w-6 h-6 text-[#8BA888]" />
                      </div>
                      <Badge className="bg-[#8BA888]/20 text-[#6B8E6B] border-0">5/7</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Treinos Semanais</p>
                    <p className="text-3xl font-bold text-gray-800">5</p>
                    <p className="text-xs text-gray-500 mt-2">Meta: 7 treinos</p>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 hover:border-[#8BA888] transition-all duration-300 hover:shadow-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-[#8BA888]/10 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#8BA888]" />
                      </div>
                      <Badge className="bg-[#8BA888]/20 text-[#6B8E6B] border-0">-2kg</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Peso Atual</p>
                    <p className="text-3xl font-bold text-gray-800">78.5kg</p>
                    <p className="text-xs text-gray-500 mt-2">Meta: 75kg</p>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 hover:border-[#8BA888] transition-all duration-300 hover:shadow-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-[#8BA888]/10 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-[#8BA888]" />
                      </div>
                      <Badge className="bg-[#8BA888]/20 text-[#6B8E6B] border-0">85%</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Metas Atingidas</p>
                    <p className="text-3xl font-bold text-gray-800">17/20</p>
                    <p className="text-xs text-gray-500 mt-2">Este mês</p>
                  </Card>
                </div>

                {/* Progress Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                      <Activity className="w-5 h-5 text-[#8BA888]" />
                      Progresso Diário
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Passos</span>
                          <span className="text-sm font-bold text-gray-800">8,547 / 10,000</span>
                        </div>
                        <Progress value={85} className="h-2 bg-gray-200" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Água</span>
                          <span className="text-sm font-bold text-gray-800">1.8L / 2.5L</span>
                        </div>
                        <Progress value={72} className="h-2 bg-gray-200" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Sono</span>
                          <span className="text-sm font-bold text-gray-800">7h / 8h</span>
                        </div>
                        <Progress value={87} className="h-2 bg-gray-200" />
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                      <Award className="w-5 h-5 text-[#8BA888]" />
                      Conquistas Recentes
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-[#8BA888]/5 rounded-lg border border-[#8BA888]/20">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#8BA888] to-[#6B8E6B] rounded-full flex items-center justify-center">
                          <Flame className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Sequência de Fogo</p>
                          <p className="text-sm text-gray-600">7 dias consecutivos</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <Dumbbell className="w-6 h-6 text-[#8BA888]" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Mestre do Treino</p>
                          <p className="text-sm text-gray-600">50 treinos completos</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <Target className="w-6 h-6 text-[#8BA888]" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Meta Alcançada</p>
                          <p className="text-sm text-gray-600">Perdeu 5kg</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Community Feed */}
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                    <Users className="w-5 h-5 text-[#8BA888]" />
                    Comunidade
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                        <Avatar className="w-12 h-12 bg-gradient-to-br from-[#8BA888] to-[#6B8E6B]" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-gray-800">Usuário {i}</p>
                            <Badge className="bg-[#8BA888]/20 text-[#6B8E6B] border-0 text-xs">Nível {i + 5}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Completou treino de HIIT - 45 minutos</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <button className="hover:text-[#FF6B6B] transition-colors">❤️ 24</button>
                            <button className="hover:text-[#8BA888] transition-colors">💬 5</button>
                            <span>há 2h</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Treinos */}
            <TabsContent value="treinos" className="mt-0">
              <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 font-inter text-gray-800">Meus Treinos</h2>
                  <p className="text-gray-600">Organize e acompanhe suas atividades</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "HIIT Cardio", duration: "30 min", calories: "450 kcal", icon: Flame, color: "from-orange-400 to-red-400" },
                    { name: "Musculação", duration: "60 min", calories: "380 kcal", icon: Dumbbell, color: "from-[#8BA888] to-[#6B8E6B]" },
                    { name: "Yoga", duration: "45 min", calories: "200 kcal", icon: Heart, color: "from-purple-400 to-pink-400" },
                    { name: "Corrida", duration: "40 min", calories: "520 kcal", icon: Activity, color: "from-blue-400 to-cyan-400" },
                    { name: "Natação", duration: "50 min", calories: "600 kcal", icon: Activity, color: "from-teal-400 to-emerald-400" },
                    { name: "Ciclismo", duration: "90 min", calories: "750 kcal", icon: Activity, color: "from-yellow-400 to-orange-400" },
                  ].map((workout, i) => (
                    <Card key={i} className="bg-white border-gray-200 p-6 hover:border-[#8BA888] transition-all duration-300 hover:shadow-lg shadow-md cursor-pointer group">
                      <div className={`w-16 h-16 bg-gradient-to-br ${workout.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <workout.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{workout.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {workout.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-4 h-4" />
                          {workout.calories}
                        </span>
                      </div>
                      <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-bold shadow-md">
                        Iniciar Treino
                      </Button>
                    </Card>
                  ))}
                </div>

                <Card className="bg-white border-gray-200 p-6 mt-8 shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Histórico Semanal</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs text-gray-600 mb-2">{day}</p>
                        <div className={`h-24 rounded-lg ${i < 5 ? 'bg-[#8BA888]/20 border-2 border-[#8BA888]' : 'bg-gray-100 border border-gray-200'} flex items-end justify-center p-2`}>
                          {i < 5 && <span className="text-xs font-bold text-[#8BA888]">✓</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Nutrição */}
            <TabsContent value="calorias" className="mt-0">
              <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 font-inter text-gray-800">Nutrição</h2>
                  <p className="text-gray-600">Registre suas refeições e monitore sua nutrição</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">Consumidas</h3>
                      <Apple className="w-5 h-5 text-[#7EC850]" />
                    </div>
                    <p className="text-4xl font-bold text-[#7EC850] mb-2">1,847</p>
                    <p className="text-sm text-gray-600">de 2,200 kcal</p>
                    <Progress value={84} className="h-2 bg-gray-200 mt-4" />
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">Queimadas</h3>
                      <Flame className="w-5 h-5 text-[#FF6B6B]" />
                    </div>
                    <p className="text-4xl font-bold text-[#FF6B6B] mb-2">547</p>
                    <p className="text-sm text-gray-600">exercícios hoje</p>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">Restantes</h3>
                      <Target className="w-5 h-5 text-[#8BA888]" />
                    </div>
                    <p className="text-4xl font-bold text-[#8BA888] mb-2">353</p>
                    <p className="text-sm text-gray-600">para meta diária</p>
                  </Card>
                </div>

                <Card className="bg-white border-gray-200 p-6 mb-6 shadow-md">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Adicionar Refeição</h3>
                    <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-bold shadow-md">
                      <Camera className="w-4 h-4 mr-2" />
                      Tirar Foto
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Café da Manhã", "Almoço", "Lanche", "Jantar"].map((meal) => (
                      <Button key={meal} variant="outline" className="border-gray-300 hover:border-[#7EC850] hover:bg-[#7EC850]/10 h-auto py-4 text-gray-700">
                        <div className="text-center">
                          <Apple className="w-6 h-6 mx-auto mb-2 text-[#7EC850]" />
                          <p className="text-sm">{meal}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Refeições de Hoje</h3>
                  <div className="space-y-4">
                    {[
                      { meal: "Café da Manhã", items: "Ovos, Pão Integral, Café", calories: 420, time: "08:30" },
                      { meal: "Almoço", items: "Frango Grelhado, Arroz, Salada", calories: 680, time: "12:45" },
                      { meal: "Lanche", items: "Banana, Whey Protein", calories: 247, time: "16:00" },
                    ].map((entry, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#7EC850]/10 rounded-xl flex items-center justify-center">
                            <Apple className="w-6 h-6 text-[#7EC850]" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{entry.meal}</p>
                            <p className="text-sm text-gray-600">{entry.items}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#7EC850]">{entry.calories} kcal</p>
                          <p className="text-xs text-gray-500">{entry.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Mente */}
            <TabsContent value="emocional" className="mt-0">
              <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 font-inter text-gray-800">Mente</h2>
                  <p className="text-gray-600">Cuide da sua saúde mental e bem-estar</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gradient-to-br from-[#B8A5D6]/20 to-[#9B7FBD]/20 border-[#B8A5D6]/30 p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B8A5D6] to-[#9B7FBD] rounded-xl flex items-center justify-center shadow-md">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Chat com IA</h3>
                        <p className="text-sm text-gray-600">Converse sobre seus sentimentos</p>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#B8A5D6] to-[#9B7FBD] hover:from-[#A594C5] hover:to-[#8A6EAC] text-white font-bold shadow-md">
                      Iniciar Conversa
                    </Button>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Como você está se sentindo?</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {["😊", "😐", "😔", "😰", "😡"].map((emoji, i) => (
                        <button key={i} className="text-4xl p-4 bg-gray-50 rounded-xl hover:bg-[#B8A5D6]/20 hover:scale-110 transition-all duration-300 border border-gray-200">
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </Card>
                </div>

                <Card className="bg-white border-gray-200 p-6 mb-6 shadow-md">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                    <Heart className="w-5 h-5 text-[#B8A5D6]" />
                    Dicas de Bem-Estar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Meditação Guiada", duration: "10 min", icon: "🧘" },
                      { title: "Exercícios de Respiração", duration: "5 min", icon: "🌬️" },
                      { title: "Diário de Gratidão", duration: "15 min", icon: "📝" },
                      { title: "Música Relaxante", duration: "30 min", icon: "🎵" },
                    ].map((tip, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#B8A5D6] transition-all duration-300 cursor-pointer group">
                        <div className="text-4xl">{tip.icon}</div>
                        <div className="flex-1">
                          <p className="font-bold group-hover:text-[#B8A5D6] transition-colors text-gray-800">{tip.title}</p>
                          <p className="text-sm text-gray-600">{tip.duration}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="group-hover:bg-[#B8A5D6]/20">
                          ▶️
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Registro de Humor</h3>
                  <div className="space-y-3">
                    {[
                      { date: "Hoje", mood: "Ótimo", note: "Treino completo e alimentação equilibrada" },
                      { date: "Ontem", mood: "Bom", note: "Dia produtivo no trabalho" },
                      { date: "2 dias atrás", mood: "Regular", note: "Pouco sono, mas consegui treinar" },
                    ].map((entry, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#B8A5D6]/10 rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-[#B8A5D6]" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{entry.date}</p>
                            <p className="text-sm text-gray-600">{entry.note}</p>
                          </div>
                        </div>
                        <Badge className="bg-[#B8A5D6]/20 text-[#9B7FBD] border-0">{entry.mood}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Perfil */}
            <TabsContent value="perfil" className="mt-0">
              <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 font-inter text-gray-800">Meu Perfil</h2>
                  <p className="text-gray-600">Acompanhe seu progresso e conquistas</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white border-gray-200 p-6 lg:col-span-1 shadow-md">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#8BA888] to-[#6B8E6B] rounded-full flex items-center justify-center mb-4 shadow-md">
                        <User className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-1 text-gray-800">João Silva</h3>
                      <Badge className="bg-[#8BA888]/20 text-[#6B8E6B] border-0 mb-4">Nível 12</Badge>
                      <div className="w-full space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Idade:</span>
                          <span className="font-bold text-gray-800">28 anos</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Altura:</span>
                          <span className="font-bold text-gray-800">1.75m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Peso:</span>
                          <span className="font-bold text-gray-800">78.5kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">IMC:</span>
                          <span className="font-bold text-[#8BA888]">25.6</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 lg:col-span-2 shadow-md">
                    <h3 className="text-xl font-bold mb-6 text-gray-800">Progresso de Peso</h3>
                    <div className="h-48 flex items-end justify-between gap-2">
                      {[82, 81.5, 81, 80.5, 80, 79.5, 79, 78.5].map((weight, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-gradient-to-t from-[#8BA888] to-[#6B8E6B] rounded-t-lg transition-all duration-300 hover:opacity-80 shadow-sm"
                            style={{ height: `${((82 - weight) / 4) * 100 + 20}%` }}
                          />
                          <span className="text-xs text-gray-600">S{i + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-2xl font-bold text-[#8BA888]">-3.5kg</p>
                        <p className="text-xs text-gray-600">Perdidos</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-2xl font-bold text-gray-800">75kg</p>
                        <p className="text-xs text-gray-600">Meta</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-2xl font-bold text-[#FF6B6B]">-3.5kg</p>
                        <p className="text-xs text-gray-600">Restantes</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                      <Target className="w-5 h-5 text-[#8BA888]" />
                      Metas Ativas
                    </h3>
                    <div className="space-y-4">
                      {[
                        { goal: "Perder 5kg", progress: 70, current: "3.5kg", target: "5kg" },
                        { goal: "Correr 5km", progress: 85, current: "4.2km", target: "5km" },
                        { goal: "30 dias consecutivos", progress: 60, current: "18 dias", target: "30 dias" },
                      ].map((goal, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-bold text-gray-800">{goal.goal}</span>
                            <span className="text-sm text-gray-600">{goal.current} / {goal.target}</span>
                          </div>
                          <Progress value={goal.progress} className="h-2 bg-gray-200" />
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                      <Award className="w-5 h-5 text-[#8BA888]" />
                      Badges Conquistados
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { icon: "🔥", name: "Sequência", unlocked: true },
                        { icon: "💪", name: "Força", unlocked: true },
                        { icon: "🏃", name: "Corredor", unlocked: true },
                        { icon: "🥇", name: "Campeão", unlocked: true },
                        { icon: "🎯", name: "Precisão", unlocked: true },
                        { icon: "⭐", name: "Estrela", unlocked: false },
                        { icon: "👑", name: "Rei", unlocked: false },
                        { icon: "🚀", name: "Foguete", unlocked: false },
                      ].map((badge, i) => (
                        <div key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-2 ${badge.unlocked ? 'bg-[#8BA888]/10 border-2 border-[#8BA888]' : 'bg-gray-50 border border-gray-200 opacity-40'}`}>
                          <span className="text-3xl">{badge.icon}</span>
                          <span className="text-xs font-bold text-gray-700">{badge.name}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Estatísticas Gerais</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Total de Treinos", value: "127", icon: Dumbbell },
                      { label: "Calorias Queimadas", value: "45.2k", icon: Flame },
                      { label: "Dias Ativos", value: "89", icon: Calendar },
                      { label: "Badges", value: "12/20", icon: Award },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-lg text-center border border-gray-200">
                        <stat.icon className="w-8 h-8 text-[#8BA888] mx-auto mb-2" />
                        <p className="text-2xl font-bold mb-1 text-gray-800">{stat.value}</p>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </nav>
    </div>
  )
}
