import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const VocabularyLevels = () => {
  const levels = [
    {
      id: "basic",
      title: "Basic Vocabulary",
      description: "Essential everyday words and common expressions for daily communication",
    },
    {
      id: "intermediate-l1",
      title: "Intermediate L1 Vocabulary",
      description: "Expanded vocabulary for academic and workplace contexts",
    },
    {
      id: "intermediate-l2",
      title: "Intermediate L2 Vocabulary",
      description: "Advanced workplace and academic vocabulary with nuanced meanings",
    },
    {
      id: "expert-l1",
      title: "Expert L1 Vocabulary",
      description: "Sophisticated vocabulary for professional and academic excellence",
    },
    {
      id: "expert-l2",
      title: "Expert L2 Vocabulary",
      description: "Specialized terminology and advanced idiomatic expressions",
    },
    {
      id: "proficient",
      title: "Proficient Vocabulary",
      description: "Master-level vocabulary for native-like fluency and expression",
    }
  ];

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
                <h1 className="text-2xl font-bold text-foreground">Vocabulary Builder Levels</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Vocabulary Level
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Build your vocabulary systematically from basic everyday words to advanced professional terminology. 
                Each level contains carefully curated word collections with interactive learning tools.
              </p>
            </div>

            {/* Levels Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levels.map((level) => (
                <Card 
                  key={level.id}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{level.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm whitespace-normal min-h-[48px]">
                      {level.description}
                    </CardDescription>
                    <Link to={`/modules/vocabulary/${level.id}`}>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full bg-primary text-primary-foreground border-primary/20 hover:bg-primary/5 hover:text-primary"
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

export default VocabularyLevels;
