import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Lock,
  Clock,
  Users,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const GrammarEssentials = () => {
  const moduleProgress = 85;
  
  const lessons = [
    { 
      title: "Basic Sentence Structure", 
      duration: "15 min", 
      status: "completed",
      description: "Learn the foundation of English sentences"
    },
    { 
      title: "Tenses in Technical Writing", 
      duration: "20 min", 
      status: "completed",
      description: "Master present, past, and future tenses"
    },
    { 
      title: "Subject-Verb Agreement", 
      duration: "18 min", 
      status: "completed",
      description: "Ensure your subjects and verbs match perfectly"
    },
    { 
      title: "Articles and Prepositions", 
      duration: "22 min", 
      status: "in-progress",
      description: "When to use 'a', 'an', 'the' and common prepositions"
    },
    { 
      title: "Complex Sentences", 
      duration: "25 min", 
      status: "locked",
      description: "Combine ideas with conjunctions and clauses"
    },
    { 
      title: "Technical Grammar Rules", 
      duration: "30 min", 
      status: "locked",
      description: "Special grammar rules for technical communication"
    }
  ];

  const completedLessons = lessons.filter(lesson => lesson.status === "completed").length;

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
            <div className="p-2 bg-gradient-primary rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Grammar Essentials</h1>
              <p className="text-sm text-muted-foreground">Master the fundamentals</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Module Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Grammar Essentials</CardTitle>
                    <CardDescription>
                      Build a strong foundation in English grammar for technical communication
                    </CardDescription>
                  </div>
                  <Badge variant="default" className="bg-success">
                    {moduleProgress}% Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progress</span>
                      <span>{completedLessons}/{lessons.length} lessons completed</span>
                    </div>
                    <Progress value={moduleProgress} className="h-3" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{completedLessons}</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-1">120</div>
                      <div className="text-sm text-muted-foreground">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success mb-1">2.5k</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Module Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Total Duration</div>
                      <div className="text-sm text-muted-foreground">~2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-medium">Active Learners</div>
                      <div className="text-sm text-muted-foreground">2,500+ students</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-success" />
                    <div>
                      <div className="font-medium">Success Rate</div>
                      <div className="text-sm text-muted-foreground">94% completion</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
                <Button variant="learning" className="w-full">
                  Practice Exercises
                </Button>
                <Button variant="outline" className="w-full">
                  Download Notes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Lessons List */}
        <Card>
          <CardHeader>
            <CardTitle>Lessons</CardTitle>
            <CardDescription>Progress through each lesson to master grammar essentials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    lesson.status === "locked" 
                      ? "border-border bg-muted/50" 
                      : "border-border hover:border-primary/20 hover:bg-accent cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      lesson.status === "completed" 
                        ? "bg-success text-white" 
                        : lesson.status === "in-progress"
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {lesson.status === "completed" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : lesson.status === "locked" ? (
                        <Lock className="w-5 h-5" />
                      ) : (
                        <span className="font-bold">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold ${lesson.status === "locked" ? "text-muted-foreground" : "text-foreground"}`}>
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{lesson.description}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lesson.duration}
                        </span>
                        {lesson.status === "completed" && (
                          <Badge variant="outline" className="text-xs">Completed</Badge>
                        )}
                        {lesson.status === "in-progress" && (
                          <Badge variant="secondary" className="text-xs">In Progress</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {lesson.status !== "locked" && (
                      <Button 
                        variant={lesson.status === "completed" ? "outline" : "hero"} 
                        size="sm"
                      >
                        {lesson.status === "completed" ? "Review" : lesson.status === "in-progress" ? "Continue" : "Start"}
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

export default GrammarEssentials;