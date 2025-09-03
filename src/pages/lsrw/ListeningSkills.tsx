import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Lock,
  Clock,
  Users,
  Trophy,
  Volume2,
  Pause
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ListeningSkills = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const moduleProgress = 78;
  
  const levels = [
    {
      title: "Basic",
      description: "Simple conversations and basic instructions",
      progress: 100,
      status: "completed",
      exercises: 8,
      duration: "45 min"
    },
    {
      title: "Intermediate L1", 
      description: "Technical discussions and workplace conversations",
      progress: 85,
      status: "completed",
      exercises: 12,
      duration: "60 min"
    },
    {
      title: "Intermediate L2",
      description: "Complex technical presentations and interviews",
      progress: 60,
      status: "in-progress",
      exercises: 15,
      duration: "75 min"
    },
    {
      title: "Expert L1",
      description: "Advanced technical seminars and conferences",
      progress: 0,
      status: "locked",
      exercises: 18,
      duration: "90 min"
    },
    {
      title: "Expert L2",
      description: "Professional negotiations and complex discussions",
      progress: 0,
      status: "locked",
      exercises: 20,
      duration: "100 min"
    },
    {
      title: "Proficient",
      description: "Native-level comprehension and nuanced understanding",
      progress: 0,
      status: "locked",
      exercises: 25,
      duration: "120 min"
    }
  ];

  const currentExercises = [
    {
      title: "Technical Meeting Discussion",
      type: "Multiple Choice",
      duration: "8 min",
      difficulty: "Intermediate",
      status: "new"
    },
    {
      title: "Project Status Update",
      type: "Fill in the Blanks", 
      duration: "6 min",
      difficulty: "Intermediate",
      status: "completed"
    },
    {
      title: "Customer Support Call",
      type: "True/False",
      duration: "10 min", 
      difficulty: "Intermediate",
      status: "in-progress"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Listening Skills</h1>
              <p className="text-sm text-muted-foreground">Improve your comprehension</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Listening Skills Training</CardTitle>
                    <CardDescription>
                      Enhance your ability to understand spoken English in technical contexts
                    </CardDescription>
                  </div>
                  <Badge variant="default" className="bg-blue-500">
                    Intermediate L2
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Overall Progress</span>
                      <span>{moduleProgress}%</span>
                    </div>
                    <Progress value={moduleProgress} className="h-3" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500 mb-1">2.5</div>
                      <div className="text-sm text-muted-foreground">Current Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-1">45</div>
                      <div className="text-sm text-muted-foreground">Exercises Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success mb-1">92%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Practice */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Practice</CardTitle>
                <CardDescription>5-minute listening exercise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">Daily Challenge</h3>
                    <p className="text-sm text-muted-foreground">Software Development Terms</p>
                  </div>
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? "Pause" : "Start"} Practice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Level Exercises */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Current Level: Intermediate L2</CardTitle>
            <CardDescription>Complete these exercises to advance to the next level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentExercises.map((exercise, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      exercise.status === "completed" 
                        ? "bg-success text-white" 
                        : exercise.status === "in-progress"
                        ? "bg-blue-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {exercise.status === "completed" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold">{exercise.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{exercise.type}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {exercise.duration}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {exercise.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant={exercise.status === "completed" ? "outline" : "hero"} 
                    size="sm"
                  >
                    {exercise.status === "completed" ? "Review" : exercise.status === "in-progress" ? "Continue" : "Start"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* All Levels */}
        <Card>
          <CardHeader>
            <CardTitle>All Levels</CardTitle>
            <CardDescription>Your progression path through listening skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {levels.map((level, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    level.status === "locked" 
                      ? "border-border bg-muted/50" 
                      : "border-border hover:border-primary/20 hover:bg-accent cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      level.status === "completed" 
                        ? "bg-success text-white" 
                        : level.status === "in-progress"
                        ? "bg-blue-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {level.status === "completed" ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : level.status === "locked" ? (
                        <Lock className="w-6 h-6" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${level.status === "locked" ? "text-muted-foreground" : "text-foreground"}`}>
                          {level.title}
                        </h3>
                        {level.status === "in-progress" && (
                          <Badge variant="secondary" className="text-xs">Current</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{level.description}</p>
                      
                      {level.status !== "locked" && (
                        <div className="flex items-center gap-1 mb-2">
                          <Progress value={level.progress} className="w-32 h-2" />
                          <span className="text-xs text-muted-foreground">{level.progress}%</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{level.exercises} exercises</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {level.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {level.status !== "locked" && (
                      <Button 
                        variant={level.status === "completed" ? "outline" : "hero"} 
                        size="sm"
                      >
                        {level.status === "completed" ? "Review" : level.status === "in-progress" ? "Continue" : "Start"}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListeningSkills;