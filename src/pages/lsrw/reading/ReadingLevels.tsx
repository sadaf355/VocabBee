import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { 
  ArrowLeft, 
  CheckCircle, 
  Lock,
  Clock,
  Users,
  Trophy,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const ReadingLevels = () => {
  const levels = [
    {
      title: "Basic",
      description: "Simple technical documents and basic instructions",
      progress: 100,
      status: "completed",
      exercises: 8,
      duration: "45 min",
      difficulty: "Beginner",
      unlocked: true,
      route: "/lsrw/reading/basic"
    },
    {
      title: "Intermediate L1", 
      description: "Technical manuals and workplace documentation",
      progress: 75,
      status: "in-progress",
      exercises: 12,
      duration: "60 min",
      difficulty: "Intermediate",
      unlocked: true,
      route: "/lsrw/reading/intermediate-l1"
    },
    {
      title: "Intermediate L2",
      description: "Complex technical specifications and reports",
      progress: 0,
      status: "locked",
      exercises: 15,
      duration: "75 min",
      difficulty: "Intermediate",
      unlocked: false,
      route: "/lsrw/reading/intermediate-l2"
    },
    {
      title: "Expert L1",
      description: "Advanced research papers and technical articles",
      progress: 0,
      status: "locked",
      exercises: 18,
      duration: "90 min",
      difficulty: "Advanced",
      unlocked: false,
      route: "/lsrw/reading/expert-l1"
    },
    {
      title: "Expert L2",
      description: "Professional contracts and complex documentation",
      progress: 0,
      status: "locked",
      exercises: 20,
      duration: "100 min",
      difficulty: "Expert",
      unlocked: false,
      route: "/lsrw/reading/expert-l2"
    },
    {
      title: "Proficient",
      description: "Academic papers and advanced technical literature",
      progress: 0,
      status: "locked",
      exercises: 25,
      duration: "120 min",
      difficulty: "Proficient",
      unlocked: false,
      route: "/lsrw/reading/proficient"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "in-progress":
        return <Play className="w-5 h-5 text-primary" />;
      case "locked":
        return <Lock className="w-5 h-5 text-muted-foreground" />;
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
      case "locked":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center">
              <Button variant="ghost" size="icon" asChild className="mr-4">
                <Link to="/dashboard">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-foreground">
                Reading Skills Levels
              </h1>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levels.map((level, index) => (
                <Card 
                  key={index}
                  className={`group transition-all duration-300 hover:shadow-card ${
                    level.unlocked 
                      ? "hover:-translate-y-1 cursor-pointer border-border" 
                      : "opacity-75 border-muted-foreground/20"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{level.title}</CardTitle>
                      <Badge className={getStatusColor(level.status)}>
                        {getStatusIcon(level.status)}
                        <span className="ml-1 capitalize">{level.status}</span>
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {level.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {level.status !== "locked" && level.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>Progress</span>
                          <span>{level.progress}%</span>
                        </div>
                        <Progress value={level.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        <span>{level.exercises} exercises</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{level.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {level.difficulty}
                      </Badge>
                      
                      {level.unlocked ? (
                        <Link to={level.route}>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
                          >
                            Start Exercise
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" size="sm" disabled>
                          Locked
                        </Button>
                      )}
                    </div>
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

export default ReadingLevels;