import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import {
  BookOpen,
  Target,
  MessageSquare,
  Volume2,
  Headphones,
  Mic,
  Eye,
  Edit3,
  TrendingUp,
  Award,
  BarChart3,
  User
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const navigate = useNavigate();
const { user } = useUser(); // get logged-in user

const userProgress = {
  name: user?.username || user?.email || "Guest", // display username from DB
  level: "Intermediate",
  quizScore: 78,
  status: "Good Progress",
  streakDays: 15,
  modulesCompleted: 8,
  totalModules: 24
};

  const coreLearningModules = [
    { title: "Grammar Essentials", description: "Master the fundamentals of English grammar", icon: BookOpen, color: "bg-gradient-primary" },
    { title: "Professional Communication", description: "Learn business English and workplace communication", icon: MessageSquare, color: "bg-gradient-secondary" },
    { title: "Vocabulary Builder", description: "Expand your technical and professional vocabulary", icon: Target, color: "bg-gradient-success" },
    { title: "Resume/Email Writing", description: "Perfect your resume building and email writing skills", icon: Volume2, color: "bg-gradient-accent" },
  ];

  const lsrwSkills = [
    { title: "Listening Skills", description: "Improve comprehension with audio exercises", icon: Headphones, color: "bg-gradient-primary" },
    { title: "Speaking Skills", description: "Practice speaking with AI feedback", icon: Mic, color: "bg-gradient-secondary" },
    { title: "Reading Skills", description: "Enhance reading comprehension", icon: Eye, color: "bg-gradient-success" },
    { title: "Writing Skills", description: "Master professional writing", icon: Edit3, color: "bg-gradient-accent" }
  ];

  const quickActions = [
    { title: "FluencyBot", description: "Chat with AI tutor", icon: MessageSquare, color: "bg-gradient-primary" },
    { title: "Leaderboard", description: "See your ranking", icon: BarChart3, color: "bg-gradient-secondary" },
    { title: "Progress", description: "Track your improvement", icon: TrendingUp, color: "bg-gradient-success" },
    { title: "Certificates", description: "View achievements", icon: Award, color: "bg-gradient-accent" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              <SidebarTrigger className="p-2" />

              {/* User Info */}
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/profile")}>
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium text-foreground">{userProgress.name}</span>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Fluency Score Card */}
            <Card className="mb-8 bg-gradient-learning border-primary/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Fluency Score</h2>
                  <div className="text-6xl font-bold text-primary mb-2">{userProgress.quizScore}/100</div>
                  <Badge className="bg-success/10 text-success border-success/20 text-lg px-4 py-1">
                    {userProgress.status}
                  </Badge>
                  <p className="text-muted-foreground mt-3">
                    Based on your latest assessment quiz
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Learning Modules */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Core Learning Modules</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreLearningModules.map((module, index) => (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <module.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{module.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                      <Link to={
                        module.title === "Grammar Essentials" ? "/modules/grammar-levels" :
                        module.title === "Vocabulary Builder" ? "/modules/vocabulary-levels" :
                        module.title === "Professional Communication" ? "/modules/communication-levels" :
                        "#"
                      }>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-4 bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
                        >
                          Start Module →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* LSRW Skills */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">LSRW Skills Training</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {lsrwSkills.map((skill, index) => (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                      {skill.title === "Listening Skills" ? (
                        <Link to="/lsrw/listening-levels">
                          <Button variant="outline" size="sm" className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground">
                            Explore Levels →
                          </Button>
                        </Link>
                      ) : skill.title === "Reading Skills" ? (
                        <Link to="/lsrw/reading-levels">
                          <Button variant="outline" size="sm" className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground">
                            Explore Levels →
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground">
                          Explore Levels →
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
              <p className="text-muted-foreground">Jump into your learning activities</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
