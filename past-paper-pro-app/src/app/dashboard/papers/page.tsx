"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Calendar, 
  BarChart3, 
  Eye,
  Upload,
  Plus
} from "lucide-react";

// Mock data
const uploadedPapers = [
  {
    id: "physics-2023",
    title: "Physics Past Papers 2023",
    subject: "Physics",
    uploadDate: "2025-08-15",
    questionsAnalyzed: 45,
    topicsIdentified: 8,
    status: "analyzed",
  },
  {
    id: "chemistry-2022",
    title: "Chemistry Past Papers 2022",
    subject: "Chemistry", 
    uploadDate: "2025-08-10",
    questionsAnalyzed: 38,
    topicsIdentified: 6,
    status: "analyzed",
  },
  {
    id: "math-2023",
    title: "Mathematics Past Papers 2023",
    subject: "Mathematics",
    uploadDate: "2025-08-08",
    questionsAnalyzed: 52,
    topicsIdentified: 10,
    status: "analyzed",
  },
  {
    id: "biology-2022",
    title: "Biology Past Papers 2022",
    subject: "Biology",
    uploadDate: "2025-08-05",
    questionsAnalyzed: 0,
    topicsIdentified: 0,
    status: "processing",
  },
];

const subjectColors: { [key: string]: string } = {
  Physics: "bg-blue-100 text-blue-800",
  Chemistry: "bg-green-100 text-green-800", 
  Mathematics: "bg-purple-100 text-purple-800",
  Biology: "bg-red-100 text-red-800",
};

export default function PapersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Papers</h1>
          <p className="text-gray-600 mt-2">Manage and analyze your uploaded past papers</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Upload New Papers
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{uploadedPapers.length}</p>
                <p className="text-sm text-gray-600">Total Papers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">
                  {uploadedPapers.reduce((sum, paper) => sum + paper.questionsAnalyzed, 0)}
                </p>
                <p className="text-sm text-gray-600">Questions Analyzed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Upload className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">
                  {uploadedPapers.filter(p => p.status === "analyzed").length}
                </p>
                <p className="text-sm text-gray-600">Ready to Study</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">
                  {new Set(uploadedPapers.map(p => p.subject)).size}
                </p>
                <p className="text-sm text-gray-600">Subjects</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploadedPapers.map((paper) => (
          <Card key={paper.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{paper.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2 mt-2">
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        subjectColors[paper.subject] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {paper.subject}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span>{new Date(paper.uploadDate).toLocaleDateString()}</span>
                  </CardDescription>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  paper.status === "analyzed" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {paper.status === "analyzed" ? "Ready" : "Processing"}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Questions:</span>
                  <span className="font-medium">{paper.questionsAnalyzed}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Topics:</span>
                  <span className="font-medium">{paper.topicsIdentified}</span>
                </div>
                
                {paper.status === "analyzed" ? (
                  <Link href={`/dashboard/papers/${paper.id}`}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Eye className="mr-2 h-4 w-4" />
                      View Analysis
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full">
                    Processing...
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Upload New Card */}
        <Card className="border-2 border-dashed border-orange-200 hover:border-orange-300 transition-colors">
          <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
            <Upload className="h-12 w-12 text-orange-400" />
            <div>
              <h3 className="font-medium text-gray-900">Upload New Papers</h3>
              <p className="text-sm text-gray-600 mt-1">
                Add more past papers to expand your study materials
              </p>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="mr-2 h-4 w-4" />
              Choose Files
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
