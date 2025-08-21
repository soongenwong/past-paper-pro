"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { 
  Upload, 
  FileText, 
  TrendingUp, 
  Clock, 
  BookOpen,
  BarChart3
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// Mock data
const progressData = [
  { day: "Mon", score: 65 },
  { day: "Tue", score: 72 },
  { day: "Wed", score: 68 },
  { day: "Thu", score: 75 },
  { day: "Fri", score: 82 },
  { day: "Sat", score: 78 },
  { day: "Sun", score: 85 },
];

const recentActivity = [
  {
    id: 1,
    type: "upload",
    title: "Physics Past Papers 2023",
    description: "Uploaded 5 papers for analysis",
    time: "2 hours ago",
    icon: FileText,
  },
  {
    id: 2,
    type: "practice",
    title: "Chemistry Quiz Session",
    description: "Completed 15 questions, 80% accuracy",
    time: "1 day ago",
    icon: BookOpen,
  },
  {
    id: 3,
    type: "analysis",
    title: "Mathematics Trend Analysis",
    description: "AI identified 3 key focus areas",
    time: "2 days ago",
    icon: BarChart3,
  },
];

const todaysFocus = [
  "Review &apos;Thermodynamics&apos; concepts - 30 mins",
  "Practice &apos;Organic Chemistry&apos; questions - 45 mins",
  "Complete &apos;Calculus&apos; problem set - 1 hour",
];

export default function DashboardPage() {
  const handleFileUpload = (files: File[]) => {
    console.log("Files uploaded:", files);
    // Here you would typically send files to your backend
    // For now, we'll just log them
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
        <p className="text-gray-600 mt-2">Ready to continue your study journey? Let&apos;s make today count.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Papers</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Widget */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-6 w-6 text-orange-600" />
                <span>Upload New Past Papers</span>
              </CardTitle>
              <CardDescription>
                Upload your past exam papers to get AI-powered analysis and personalized study plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload onFileUpload={handleFileUpload} />
            </CardContent>
          </Card>

          {/* Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Mastery Progress</CardTitle>
              <CardDescription>Your performance over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#ea580c" 
                      strokeWidth={2}
                      dot={{ fill: "#ea580c" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Today's Focus */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <span>Today&apos;s Focus</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaysFocus.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{task}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Study Plan
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <activity.icon className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
