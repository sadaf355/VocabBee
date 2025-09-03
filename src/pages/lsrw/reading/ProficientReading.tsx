import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const ProficientReading = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/lsrw/reading-levels">
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Proficient Reading</h1>
                  <p className="text-sm text-muted-foreground">Academic literature</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                Proficient
              </Badge>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-12 h-12 text-muted-foreground" />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Level Locked
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Complete the previous level to unlock Proficient Reading exercises.
                </p>
                
                <Button asChild>
                  <Link to="/lsrw/reading-levels">
                    Return to Levels
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProficientReading;