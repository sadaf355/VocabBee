import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Users,
  Play,
  CheckCircle,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const CommunicationLevels = () => {
  const levels = [
    {
      id: "basic",
      title: "Basic Communication",
      description: "Essential communication skills for everyday interactions and workplace basics",
      progress: 0,
      status: "available",
      topics: 6,
      duration: "4-6 weeks",
      difficulty: "Beginner"
    },
    {
      id: "intermediate-l1", 
      title: "Intermediate L1 Communication",
      description: "Professional email writing, meeting participation, and business conversations",
      progress: 0,
      status: "available",
      topics: 6,
      duration: "6-8 weeks", 
      difficulty: "Intermediate"
    },
    {
      id: "intermediate-l2",
      title: "Intermediate L2 Communication", 
      description: "Advanced business communication, negotiations, and presentation skills",
      progress: 0,
      status: "available",
      topics: 6,
      duration: "6-8 weeks",
      difficulty: "Intermediate"
    },
    {
      id: "expert-l1",
      title: "Expert L1 Communication",
      description: "Leadership communication, strategic discussions, and executive presence",
      progress: 0,
      status: "available", 
      topics: 6,
      duration: "8-10 weeks",
      difficulty: "Advanced"
    },
    {
      id: "expert-l2",
      title: "Expert L2 Communication",
      description: "Cross-cultural communication, conflict resolution, and diplomatic skills",
      progress: 0,
      status: "available",
      topics: 6,
      duration: "8-10 weeks", 
      difficulty: "Advanced"
    },
    {
      id: "proficient",
      title: "Proficient Communication",
      description: "Master-level professional communication for C-suite and international contexts",
      progress: 0,
      status: "available",
      topics: 6,
      duration: "10-12 weeks",
      difficulty: "Expert"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "in-progress":
        return <Play className="w-5 h-5 text-primary" />;
      default:
        return <Play className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "in-progress":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center gap-4">
              <SidebarTrigger />
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Professional Communication Levels</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Communication Level
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Develop professional communication skills from basic workplace interactions to executive-level leadership. 
                Master the art of clear, persuasive, and culturally appropriate communication.
              </p>
            </div>

            {/* Levels Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levels.map((level, index) => (
                <Card 
                  key={level.id}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{level.title}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className={getStatusColor(level.status)}>
                            {level.status === 'completed' ? 'Completed' : 
                             level.status === 'in-progress' ? 'In Progress' : 'Available'}
                          </Badge>
                          <Badge variant="outline" className={getDifficultyColor(level.difficulty)}>
                            {level.difficulty}
                          </Badge>
                        </div>
                      </div>
                      {getStatusIcon(level.status)}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {level.description}
                    </CardDescription>
                    
                    {/* Progress Bar for levels with progress */}
                    {level.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{level.progress}%</span>
                        </div>
                        <Progress value={level.progress} className="h-2" />
                      </div>
                    )}
                    
                    {/* Stats */}
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>{level.topics} Topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{level.duration}</span>
                      </div>
                    </div>
                    
                    <Link to={`/modules/communication/${level.id}`}>
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Start Level
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CommunicationLevels;