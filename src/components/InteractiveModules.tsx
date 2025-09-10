import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Mic, MessageSquare, TrendingUp } from "lucide-react";
import vocabeeLogo from "@/assets/vocabee-logo-new.png";

const modules = [
  {
    icon: BookOpen,
    title: "Grammar Essentials",
    description: "Master English grammar fundamentals",
    color: "bg-gradient-primary"
  },
  {
    icon: Mic,
    title: "Speaking Practice", 
    description: "Practice pronunciation and fluency",
    color: "bg-gradient-secondary"
  },
  {
    icon: MessageSquare,
    title: "AI Feedback",
    description: "Get instant personalized feedback",
    color: "bg-gradient-success"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your learning journey",
    color: "bg-gradient-accent"
  }
];

const InteractiveModules = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Learning Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover to explore our features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl ${module.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {(module as any).customLogo ? (
                    <img src={(module as any).customLogo} alt={module.title} className="w-10 h-10" />
                  ) : (
                    <module.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {module.title}
                </h3>
                <p className="text-muted-foreground">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveModules;