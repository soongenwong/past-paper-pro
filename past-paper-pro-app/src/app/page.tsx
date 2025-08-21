import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, TrendingUp, Upload, BarChart3, Target, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">Evolve AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-orange-600 hover:bg-orange-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stop Just Reading.{" "}
            <span className="text-orange-600">Start Mastering</span>{" "}
            Your Exams.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Evolve is the AI study partner that turns your past papers into a personalized path to success. 
            Upload, analyze, and master your exams with intelligent insights.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Sign Up for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your AI-Powered Study Assistant
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform the way you study with intelligent analysis and personalized learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Comprehensive Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base">
                Upload past papers and our AI will reveal exam trends and high-frequency topics to focus your study efforts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Personalized Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base">
                Engage with adaptive quizzes and practice sessions tailored to your weak spots and learning style.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Dynamic Study Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base">
                Receive an intelligent study plan that evolves with your progress and keeps you on track for success.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20 bg-orange-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and transform your study experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <Upload className="h-8 w-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload</h3>
            <p className="text-gray-600">Upload your past exam papers in PDF, DOCX, or text format</p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <Brain className="h-8 w-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analyze</h3>
            <p className="text-gray-600">Our AI analyzes patterns, topics, and question types</p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Master</h3>
            <p className="text-gray-600">Practice with personalized quizzes and follow your study plan</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Evolve AI has transformed study experiences for students worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <CardTitle className="text-lg">Sarah Chen</CardTitle>
              <CardDescription>Medical Student, University of Toronto</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                "Evolve AI helped me identify my weak areas in biochemistry. The personalized quizzes were exactly what I needed to ace my finals."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <CardTitle className="text-lg">Marcus Johnson</CardTitle>
              <CardDescription>Engineering Student, MIT</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                "The trend analysis feature is incredible. I could see exactly which topics appeared most frequently in past exams."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
              <CardDescription>Law Student, Harvard</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                "The dynamic study plan kept me organized and motivated. I improved my grades significantly using Evolve AI."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Join thousands of students who have already improved their exam performance with Evolve AI.
          </p>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Brain className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-white">Evolve AI</span>
          </div>
          <div className="text-center">
            <p>&copy; 2025 Evolve AI Study Partner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
