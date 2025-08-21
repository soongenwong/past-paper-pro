import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, TrendingUp, Upload, BarChart3, Target, Star, ArrowRight, Zap, Cpu, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 particles-bg opacity-50"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 glass-dark">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-10 w-10 text-orange-500 animate-pulse-slow" />
              <div className="absolute inset-0 h-10 w-10 bg-orange-500 rounded-full blur-lg opacity-30 animate-glow"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Evolve AI</span>
              <div className="text-xs text-orange-300 font-medium tracking-wider">STUDY PARTNER</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-white hover:bg-white/10 border-white/20">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-gradient-orange hover:shadow-orange text-white font-semibold">
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
            <Cpu className="h-4 w-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Stop Just Reading.</span>
            <br />
            <span className="text-gradient-orange animate-glow">Start Mastering</span>
            <br />
            <span className="text-white">Your Exams.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Evolve AI is the revolutionary study partner that transforms your past papers into a 
            <span className="text-orange-400 font-semibold"> personalized AI-powered learning experience</span>. 
            Upload, analyze, and master your exams with intelligent insights that adapt to your unique learning style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg px-8 py-4 h-14 hover-lift shadow-orange-lg">
                <Brain className="mr-3 h-6 w-6" />
                Start Your AI Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 border-white/20 text-white hover:bg-white/10">
              Watch Demo
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">10K+</div>
              <div className="text-gray-400 text-sm">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">95%</div>
              <div className="text-gray-400 text-sm">Score Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-400 text-sm">AI Assistant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your AI-Powered Study Assistant
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform the way you study with cutting-edge artificial intelligence and personalized learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="glass border-orange-500/20 hover-lift hover:border-orange-500/40 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="relative mb-6 mx-auto">
                  <BarChart3 className="h-16 w-16 text-orange-500 mx-auto animate-float" />
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20"></div>
                </div>
                <CardTitle className="text-2xl text-white">Comprehensive Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-gray-300 leading-relaxed">
                  Our AI analyzes your past papers to reveal hidden exam trends, high-frequency topics, and strategic insights to maximize your study efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass border-orange-500/20 hover-lift hover:border-orange-500/40 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="relative mb-6 mx-auto">
                  <Target className="h-16 w-16 text-orange-500 mx-auto animate-float" style={{animationDelay: "2s"}} />
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20"></div>
                </div>
                <CardTitle className="text-2xl text-white">Personalized Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-gray-300 leading-relaxed">
                  Engage with adaptive quizzes and practice sessions that automatically adjust to your learning pace and target your specific weak areas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass border-orange-500/20 hover-lift hover:border-orange-500/40 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="relative mb-6 mx-auto">
                  <TrendingUp className="h-16 w-16 text-orange-500 mx-auto animate-float" style={{animationDelay: "4s"}} />
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20"></div>
                </div>
                <CardTitle className="text-2xl text-white">Dynamic Study Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-gray-300 leading-relaxed">
                  Receive intelligent study plans that evolve with your progress, keeping you motivated and on track for exam success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in three simple steps and experience the future of AI-powered learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold shadow-orange-lg group-hover:shadow-orange transition-all duration-300">
                  1
                </div>
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <Upload className="h-12 w-12 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Upload</h3>
              <p className="text-gray-300 text-lg">Upload your past exam papers in PDF, DOCX, or text format and let our AI begin the analysis</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold shadow-orange-lg group-hover:shadow-orange transition-all duration-300">
                  2
                </div>
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <Brain className="h-12 w-12 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Analyze</h3>
              <p className="text-gray-300 text-lg">Our advanced AI analyzes patterns, identifies key topics, and understands question types and difficulty levels</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold shadow-orange-lg group-hover:shadow-orange transition-all duration-300">
                  3
                </div>
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <BookOpen className="h-12 w-12 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Master</h3>
              <p className="text-gray-300 text-lg">Practice with personalized quizzes, follow your adaptive study plan, and track your progress to exam mastery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Students Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of students who have transformed their study experience with Evolve AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass border-orange-500/20 hover-lift hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  &ldquo;Evolve AI completely changed how I study. The personalized quizzes helped me identify my weak spots and the AI analysis revealed patterns I never noticed. My grades improved by 25%!&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sarah Mitchell</h4>
                    <p className="text-orange-300 text-sm">Medical Student, Cambridge</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-orange-500/20 hover-lift hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  &ldquo;The AI-powered study plans are incredible. Instead of randomly studying topics, I now follow a strategic path tailored to my learning style. Passed my engineering exams with flying colors!&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    AR
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Alex Rodriguez</h4>
                    <p className="text-orange-300 text-sm">Engineering Student, MIT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-orange-500/20 hover-lift hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  &ldquo;I was struggling with chemistry until I found Evolve AI. The trend analysis showed me exactly which topics appear most frequently in exams. Now I study smarter, not harder!&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    EJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Emily Johnson</h4>
                    <p className="text-orange-300 text-sm">Pre-Med Student, Harvard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-orange-200 mb-12 leading-relaxed">
            Join thousands of students who have already revolutionized their exam performance with Evolve AI. 
            Experience the power of artificial intelligence in education.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="text-xl px-12 py-6 h-16 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 hover-lift shadow-orange-lg">
              <Brain className="mr-3 h-6 w-6" />
              Start Your AI Journey Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 text-gray-300 py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Brain className="h-10 w-10 text-orange-500" />
            <div>
              <span className="text-2xl font-bold text-white">Evolve AI</span>
              <div className="text-xs text-orange-300 font-medium tracking-wider">STUDY PARTNER</div>
            </div>
          </div>
          <div className="text-center">
            <p>&copy; 2025 Evolve AI Study Partner. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">Revolutionizing education through artificial intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
