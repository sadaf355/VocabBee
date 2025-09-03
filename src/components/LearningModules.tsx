import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  MessageSquare, 
  Volume2, 
  PenTool, 
  Headphones, 
  Mic,
  Eye,
  Edit3,
  ArrowRight,
  Clock,
  Users
} from "lucide-react";

const LearningModules = () => {
  const mainModules = [
    {
      icon: BookOpen,
      title: "Grammar Essentials",
      description: "Master the fundamentals of English grammar with interactive exercises",
      level: "All Levels",
      duration: "4 weeks",
      students: "2.5k",
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Professional Communication",
      description: "Learn business English and workplace communication skills",
      level: "Intermediate",
      duration: "6 weeks",
      students: "1.8k",
      color: "secondary"
    },
    {
      icon: Volume2,
      title: "Vocabulary Builder",
      description: "Expand your technical and professional vocabulary",
      level: "All Levels",
      duration: "Ongoing",
      students: "3.2k",
      color: "success"
    },
    {
      icon: Mic,
      title: "Pronunciation Practice",
      description: "Perfect your pronunciation with AI-powered feedback",
      level: "All Levels",
      duration: "3 weeks",
      students: "1.9k",
      color: "primary"
    }
  ];

  const lsrwModules = [
    {
      icon: Headphones,
      title: "Listening Skills",
      description: "Improve comprehension with audio exercises and real-world scenarios",
      levels: ["Basic", "Intermediate L1", "Intermediate L2", "Expert L1", "Expert L2", "Proficient"],
      color: "bg-blue-500"
    },
    {
      icon: Mic,
      title: "Speaking Skills", 
      description: "Practice speaking with AI feedback on pronunciation and fluency",
      levels: ["Basic", "Intermediate L1", "Intermediate L2", "Expert L1", "Expert L2", "Proficient"],
      color: "bg-orange-500"
    },
    {
      icon: Eye,
      title: "Reading Skills",
      description: "Enhance reading comprehension and technical document analysis",
      levels: ["Basic", "Intermediate L1", "Intermediate L2", "Expert L1", "Expert L2", "Proficient"],
      color: "bg-green-500"
    },
    {
      icon: Edit3,
      title: "Writing Skills",
      description: "Master professional writing, emails, and technical documentation",
      levels: ["Basic", "Intermediate L1", "Intermediate L2", "Expert L1", "Expert L2", "Proficient"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="modules" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            Learning Modules
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Comprehensive Learning{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our expertly designed modules to build your English proficiency step by step
          </p>
        </div>

        {/* Main Learning Modules */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Learning Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-${module.color} flex items-center justify-center mb-4`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <Badge variant="outline">{module.level}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {module.students}
                      </div>
                    </div>
                    <Button variant="learning" size="sm" className="w-full group">
                      Start Module
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* LSRW Skills Modules */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">LSRW Skills Training</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lsrwModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-4`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground mb-2 block">Available Levels:</span>
                      <div className="flex flex-wrap gap-1">
                        {module.levels.slice(0, 3).map((level, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {level}
                          </Badge>
                        ))}
                        {module.levels.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{module.levels.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="learning" size="sm" className="w-full group">
                      Explore Levels
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModules;