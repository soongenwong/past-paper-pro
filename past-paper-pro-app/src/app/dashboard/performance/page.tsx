"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Award,
  Calendar
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

// Mock data
const performanceData = [
  { date: "Aug 1", score: 65, timeSpent: 45 },
  { date: "Aug 3", score: 70, timeSpent: 60 },
  { date: "Aug 5", score: 68, timeSpent: 55 },
  { date: "Aug 7", score: 75, timeSpent: 70 },
  { date: "Aug 9", score: 78, timeSpent: 65 },
  { date: "Aug 11", score: 82, timeSpent: 80 },
  { date: "Aug 13", score: 85, timeSpent: 75 },
  { date: "Aug 15", score: 88, timeSpent: 90 },
];

const subjectPerformance = [
  { subject: "Physics", score: 85, sessions: 12 },
  { subject: "Chemistry", score: 78, sessions: 8 },
  { subject: "Mathematics", score: 92, sessions: 15 },
  { subject: "Biology", score: 73, sessions: 6 },
];

const skillsRadar = [
  { skill: "Problem Solving", score: 85 },
  { skill: "Conceptual Understanding", score: 78 },
  { skill: "Time Management", score: 82 },
  { skill: "Application", score: 75 },
  { skill: "Analysis", score: 88 },
  { skill: "Memory", score: 80 },
];

const recentAchievements = [
  {
    title: "Study Streak Master",
    description: "Completed 7 consecutive days of study",
    icon: "🔥",
    date: "Aug 21",
  },
  {
    title: "Physics Expert",
    description: "Achieved 90% average in Physics practice",
    icon: "⚡",
    date: "Aug 19",
  },
  {
    title: "Question Conqueror",
    description: "Answered 100 practice questions",
    icon: "💯",
    date: "Aug 15",
  },
  {
    title: "Time Optimizer",
    description: "Improved speed by 25% this week",
    icon: "⏱️",
    date: "Aug 12",
  },
];

export default function PerformancePage() {
  const totalQuestions = 287;
  const correctAnswers = 235;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const totalStudyTime = 32; // hours
  const averageSessionTime = 45; // minutes

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
        <p className="text-gray-600 mt-2">Track your progress and identify areas for improvement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Accuracy</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{accuracy}%</div>
            <p className="text-xs text-muted-foreground">
              {correctAnswers}/{totalQuestions} questions
            </p>
            <Progress value={accuracy} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudyTime}h</div>
            <p className="text-xs text-muted-foreground">
              {averageSessionTime}min avg session
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">
              Personal best: 12 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Improvement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+15%</div>
            <p className="text-xs text-muted-foreground">
              vs last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription>Your scores and study time over the past month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="score" 
                    stroke="#ea580c" 
                    strokeWidth={2}
                    name="Score %"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="timeSpent" 
                    stroke="#fb923c" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Time (min)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Average scores by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Bar dataKey="score" fill="#ea580c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Skills Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
            <CardDescription>Your performance across different skill areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#ea580c"
                    fill="#ea580c"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-orange-600" />
              <span>Recent Achievements</span>
            </CardTitle>
            <CardDescription>Your latest milestones and accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Subject Progress Details</CardTitle>
          <CardDescription>Detailed breakdown of your performance in each subject</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {subjectPerformance.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{subject.subject}</span>
                  <span className="text-sm text-gray-600">
                    {subject.score}% • {subject.sessions} sessions
                  </span>
                </div>
                <Progress value={subject.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
