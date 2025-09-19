import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { ArrowLeft, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const levels = [
  {
    title: "Basic",
    description: "Simple technical documents and basic instructions",
    route: "/lsrw/reading/basic",
  },
  {
    title: "Intermediate L1",
    description: "Technical manuals and workplace documentation",
    route: "/lsrw/reading/intermediate-l1",
  },
  {
    title: "Intermediate L2",
    description: "Complex technical specifications and reports",
    route: "/lsrw/reading/intermediate-l2",
  },
  {
    title: "Expert L1",
    description: "Advanced research papers and technical articles",
    route: "/lsrw/reading/expert-l1",
  },
  {
    title: "Expert L2",
    description: "Professional contracts and complex documentation",
    route: "/lsrw/reading/expert-l2",
  },
  {
    title: "Proficient",
    description: "Academic papers and advanced technical literature",
    route: "/lsrw/reading/proficient",
  },
];

const ReadingLevels = () => {
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
                <h1 className="text-2xl font-bold text-foreground">Reading Skills Levels</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Reading Level
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Progress through our carefully structured reading comprehension
                levels. Each level builds upon the previous one, helping you
                develop stronger reading skills step by step.
              </p>
            </div>
            {/* Levels Grid - Exactly like ListeningLevels layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levels.map((level, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{level.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {level.description}
                    </CardDescription>
                    <Link to={level.route}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-8 bg-primary hover:bg-primary/5 text-primary-foreground hover:text-primary border-primary/20"
                      >
                        Start Exercise
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

export default ReadingLevels;
