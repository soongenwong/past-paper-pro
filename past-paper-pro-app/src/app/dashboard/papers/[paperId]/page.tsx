"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  PieChart, 
  BookOpen, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  PieChart as RechartsPieChart, 
  Cell,
  Pie
} from "recharts";

// Mock data
const topicFrequency = [
  { topic: "Thermodynamics", frequency: 45 },
  { topic: "Kinematics", frequency: 38 },
  { topic: "Electromagnetism", frequency: 32 },
  { topic: "Optics", frequency: 28 },
  { topic: "Quantum Physics", frequency: 22 },
  { topic: "Mechanics", frequency: 18 },
];

const questionTypes = [
  { name: "Multiple Choice", value: 40, color: "#ea580c" },
  { name: "Short Answer", value: 35, color: "#fb923c" },
  { name: "Essay", value: 15, color: "#fed7aa" },
  { name: "Problem Solving", value: 10, color: "#ffedd5" },
];

const keyConcepts = [
  "Newton's Laws of Motion",
  "Conservation of Energy",
  "Electromagnetic Induction",
  "Wave-Particle Duality",
  "Ideal Gas Laws",
  "Photon Energy Calculations",
  "Circular Motion",
  "Electric Field Strength",
];

const practiceQuestions = [
  {
    id: 1,
    question: "A car accelerates from rest at 2 m/s² for 10 seconds. What is the final velocity?",
    options: ["10 m/s", "20 m/s", "5 m/s", "15 m/s"],
    correct: 1,
    explanation: "Using v = u + at, where u = 0, a = 2 m/s², t = 10s. Therefore v = 0 + (2)(10) = 20 m/s"
  },
  {
    id: 2,
    question: "What is the unit of electric field strength?",
    options: ["N/C", "C/N", "J/C", "C/J"],
    correct: 0,
    explanation: "Electric field strength is defined as force per unit charge, so the unit is Newtons per Coulomb (N/C)"
  },
];

export default function PaperAnalysisPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    setAnsweredQuestions(prev => prev + 1);
    
    if (answerIndex === practiceQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const currentQ = practiceQuestions[currentQuestion];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Physics Past Papers 2023</h1>
        <p className="text-gray-600 mt-2">AI analysis and personalized practice for your uploaded papers</p>
      </div>

      <Tabs defaultValue="analysis" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="analysis">Analysis & Trends</TabsTrigger>
          <TabsTrigger value="practice">Personalized Practice</TabsTrigger>
        </TabsList>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Topic Frequency Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <span>Topic Frequency</span>
                </CardTitle>
                <CardDescription>
                  Most frequently appearing topics in your past papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topicFrequency} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="topic" type="category" width={100} />
                      <Bar dataKey="frequency" fill="#ea580c" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Question Type Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-orange-600" />
                  <span>Question Types</span>
                </CardTitle>
                <CardDescription>
                  Distribution of question formats in past papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <defs>
                        {questionTypes.map((entry, index) => (
                          <pattern
                            key={index}
                            id={`pattern-${index}`}
                            patternUnits="userSpaceOnUse"
                            width="4"
                            height="4"
                          >
                            <rect width="4" height="4" fill={entry.color} />
                          </pattern>
                        ))}
                      </defs>
                      <Pie
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        data={questionTypes}
                      >
                        {questionTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {questionTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: type.color }}
                      />
                      <span className="text-sm">{type.name}</span>
                      <span className="text-sm text-gray-500">({type.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Concepts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-orange-600" />
                <span>Key Concepts Identified</span>
              </CardTitle>
              <CardDescription>
                Important concepts that appear frequently across your papers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {keyConcepts.map((concept, index) => (
                  <div 
                    key={index}
                    className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center"
                  >
                    <span className="text-sm font-medium text-orange-800">{concept}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="space-y-6">
          {/* Quiz Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Practice Session Progress</CardTitle>
              <CardDescription>
                Question {currentQuestion + 1} of {practiceQuestions.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress 
                  value={((currentQuestion + 1) / practiceQuestions.length) * 100} 
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Score: {score}/{answeredQuestions}</span>
                  <span>Accuracy: {answeredQuestions > 0 ? Math.round((score / answeredQuestions) * 100) : 0}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-orange-600" />
                <span>Practice Question</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
                
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                        selectedAnswer === index
                          ? selectedAnswer === currentQ.correct
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                          : showExplanation && index === currentQ.correct
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showExplanation && (
                          <div>
                            {index === currentQ.correct ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : selectedAnswer === index ? (
                              <XCircle className="h-5 w-5 text-red-600" />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {showExplanation && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
                  <p className="text-blue-800">{currentQ.explanation}</p>
                </div>
              )}

              {showExplanation && currentQuestion < practiceQuestions.length - 1 && (
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Next Question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}

              {showExplanation && currentQuestion === practiceQuestions.length - 1 && (
                <div className="text-center space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Practice Complete!</h3>
                    <p className="text-orange-800">
                      Final Score: {score}/{practiceQuestions.length} ({Math.round((score / practiceQuestions.length) * 100)}%)
                    </p>
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Start New Practice Session
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
