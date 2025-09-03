import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { User, Bell, Shield, Palette, Globe, Save, Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate English learner improving communication skills",
    level: "Intermediate",
    streak: 15
  });

  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    achievements: true,
    weeklyProgress: false,
    newContent: true
  });

  const { toast } = useToast();

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              <SidebarTrigger className="p-2" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium text-foreground">{profile.name}</span>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Settings & Profile</h1>
              <p className="text-muted-foreground">
                Manage your account settings and learning preferences
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Overview */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle>{profile.name}</CardTitle>
                    <CardDescription>{profile.email}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <Badge className="bg-success/10 text-success border-success/20">
                        {profile.level} Level
                      </Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Current Streak</p>
                      <p className="text-2xl font-bold text-primary">{profile.streak} days</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Camera className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Settings Forms */}
              <div className="lg:col-span-2 space-y-6">
                {/* Profile Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Profile Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal information and bio
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                        placeholder="Tell us about your learning goals..."
                        className="min-h-[80px]"
                      />
                    </div>
                    <Button onClick={handleSaveProfile} className="bg-gradient-primary hover:opacity-90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Choose what notifications you'd like to receive
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Daily Learning Reminders</p>
                        <p className="text-sm text-muted-foreground">Get reminded to practice daily</p>
                      </div>
                      <Switch
                        checked={notifications.dailyReminders}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, dailyReminders: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Achievement Notifications</p>
                        <p className="text-sm text-muted-foreground">Celebrate your milestones</p>
                      </div>
                      <Switch
                        checked={notifications.achievements}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, achievements: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Weekly Progress Reports</p>
                        <p className="text-sm text-muted-foreground">Summary of your weekly learning</p>
                      </div>
                      <Switch
                        checked={notifications.weeklyProgress}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, weeklyProgress: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">New Content Updates</p>
                        <p className="text-sm text-muted-foreground">Get notified about new lessons</p>
                      </div>
                      <Switch
                        checked={notifications.newContent}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, newContent: checked }))
                        }
                      />
                    </div>

                    <Button onClick={handleSaveNotifications} className="bg-gradient-secondary hover:opacity-90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Notifications
                    </Button>
                  </CardContent>
                </Card>

                {/* Security Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Security & Privacy
                    </CardTitle>
                    <CardDescription>
                      Manage your account security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Privacy Settings
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;