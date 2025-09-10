import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { 
  ArrowLeft, 
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

const ProficientListening = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center gap-4">
              <SidebarTrigger />
              <Link to="/lsrw/listening-levels">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Proficient Listening</h1>
                <Badge variant="secondary" className="mt-1">Expert</Badge>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8 max-w-4xl">
            <Card className="text-center py-16">
              <CardContent className="space-y-6">
                <Lock className="w-16 h-16 mx-auto text-muted-foreground" />
                <h2 className="text-2xl font-bold text-foreground">Level Locked</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Complete the previous level (Expert L2) to unlock this expert-level listening exercise.
                </p>
                <Link to="/lsrw/listening-levels">
                  <Button variant="outline">
                    Return to Levels
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProficientListening;