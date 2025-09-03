import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { 
  ArrowLeft, 
  Headphones, 
  Clock, 
  Trophy,
  Lock,
  Play,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const ListeningLevels = () => {
  const levels = [
    {
      id: "basic",
      title: "Basic",
      description: "Start with simple conversations and everyday scenarios",
      progress: 100,
      status: "completed",
      exercises: 15,
      duration: "2-3 hours",
      difficulty: "Beginner",
      unlocked: true
    },
    {
      id: "intermediate-l1",
      title: "Intermediate L1",
      description: "Progress to workplace discussions and news reports",
      progress: 65,
      status: "in-progress", 
      exercises: 20,
      duration: "3-4 hours",
      difficulty: "Intermediate",
      unlocked: true
    },
    {
      id: "intermediate-l2",
      title: "Intermediate L2",
      description: "Handle complex topics and technical presentations",
      progress: 0,
      status: "locked",
      exercises: 18,
      duration: "4-5 hours", 
      difficulty: "Intermediate+",
      unlocked: false
    },
    {
      id: "expert-l1",
      title: "Expert L1",
      description: "Master advanced academic and professional content",
      progress: 0,
      status: "locked",
      exercises: 22,
      duration: "5-6 hours",
      difficulty: "Advanced",
      unlocked: false
    },
    {
      id: "expert-l2", 
      title: "Expert L2",
      description: "Understand nuanced speech and cultural contexts",
      progress: 0,
      status: "locked",
      exercises: 25,
      duration: "6-7 hours",
      difficulty: "Advanced+",
      unlocked: false
    },
    {
      id: "proficient",
      title: "Proficient",
      description: "Achieve native-level comprehension across all domains",
      progress: 0,
      status: "locked",
      exercises: 30,
      duration: "7-8 hours",
      difficulty: "Expert",
      unlocked: false
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
            <div className="container mx-auto px-4 h-full flex items-center gap-4">
              <SidebarTrigger />
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Headphones className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Listening Skills Levels</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Listening Level
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Progress through our carefully structured listening comprehension levels. 
                Each level builds upon the previous one, helping you develop stronger 
                listening skills step by step.
              </p>
            </div>

            {/* Levels Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levels.map((level, index) => (
                <Card 
                  key={level.id}
                  className={`group transition-all duration-300 hover:-translate-y-1 ${
                    level.unlocked 
                      ? 'hover:shadow-card cursor-pointer' 
                      : 'opacity-75 cursor-not-allowed'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(level.status)}
                        <div>
                          <CardTitle className="text-lg">{level.title}</CardTitle>
                          <Badge variant="outline" className={getStatusColor(level.status)}>
                            {level.status === 'completed' ? 'Completed' : 
                             level.status === 'in-progress' ? 'In Progress' : 'Locked'}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {level.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {level.description}
                    </CardDescription>
                    
                    {/* Progress Bar for unlocked levels */}
                    {level.unlocked && level.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{level.progress}%</span>
                        </div>
                        <Progress value={level.progress} className="h-2" />
                      </div>
                    )}
                    
                    {/* Level Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        <span>{level.exercises} exercises</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{level.duration}</span>
                      </div>
                    </div>
                    
                     {/* Action Button */}
                     {level.unlocked ? (
                       <Link to={`/lsrw/listening/${level.id}`}>
                         <Button 
                           variant="outline" 
                           size="sm"
                           className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
                         >
                           Start Exercise
                         </Button>
                       </Link>
                     ) : (
                       <Button 
                         variant="outline" 
                         size="sm" 
                         disabled
                         className="w-full"
                       >
                         Locked
                       </Button>
                     )}
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

export default ListeningLevels;