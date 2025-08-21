"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save,
  Mail,
  Lock
} from "lucide-react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    fullName: "Sarah Chen",
    email: "sarah.chen@university.edu",
    university: "University of Toronto",
    studyGoal: "Medical School Entrance Exams"
  });

  const [notifications, setNotifications] = useState({
    studyReminders: true,
    progressUpdates: true,
    newFeatures: false,
    weeklyReports: true
  });

  const handleProfileSave = () => {
    console.log("Saving profile:", profile);
    // Mock save operation
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account preferences and study settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-orange-600" />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>
                Update your personal information and study preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={profile.fullName}
                    onChange={(e) => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="university">University/Institution</Label>
                <Input
                  id="university"
                  value={profile.university}
                  onChange={(e) => setProfile(prev => ({ ...prev, university: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studyGoal">Study Goal</Label>
                <Input
                  id="studyGoal"
                  value={profile.studyGoal}
                  onChange={(e) => setProfile(prev => ({ ...prev, studyGoal: e.target.value }))}
                />
              </div>
              <Button onClick={handleProfileSave} className="bg-orange-600 hover:bg-orange-700">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-orange-600" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>
                Choose what notifications you'd like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Study Reminders</h4>
                    <p className="text-sm text-gray-600">Get reminded when it's time to study</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.studyReminders}
                    onChange={(e) => handleNotificationChange('studyReminders', e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Progress Updates</h4>
                    <p className="text-sm text-gray-600">Receive updates on your study progress</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.progressUpdates}
                    onChange={(e) => handleNotificationChange('progressUpdates', e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">New Features</h4>
                    <p className="text-sm text-gray-600">Be notified about new features and updates</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.newFeatures}
                    onChange={(e) => handleNotificationChange('newFeatures', e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Weekly Reports</h4>
                    <p className="text-sm text-gray-600">Get weekly summaries of your activity</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.weeklyReports}
                    onChange={(e) => handleNotificationChange('weeklyReports', e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <span>Security</span>
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Lock className="mr-2 h-4 w-4" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Update Email Address
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-medium text-gray-900">{profile.fullName}</h3>
                <p className="text-sm text-gray-600">{profile.email}</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Member since:</span>
                  <span>August 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Papers uploaded:</span>
                  <span>4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Study hours:</span>
                  <span>32h</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-orange-600" />
                <span>Appearance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Theme</Label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="theme"
                        value="light"
                        defaultChecked
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm">Light</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="theme"
                        value="dark"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm">Dark</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="theme"
                        value="system"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm">System</span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                Export My Data
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                Privacy Settings
              </Button>
              <Button variant="destructive" size="sm" className="w-full justify-start text-sm">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
