import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { ArrowLeft, Mic, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const BasicReading = () => {
  const [isRecording, setIsRecording] = useState(false);

  const readingText = `
    Welcome to our software development team. As a new developer, you will be working with various programming languages including Python, JavaScript, and Java. 

    Your daily responsibilities will include writing clean code, debugging applications, and collaborating with team members. We use Git for version control and follow agile methodologies for project management.

    Please make sure to attend daily stand-up meetings at 9:30 AM and submit your code reviews before 5:00 PM. If you have any questions about the codebase or need help with debugging, feel free to ask your mentor or team lead.

    Our office hours are Monday to Friday, 9:00 AM to 6:00 PM. We have flexible working arrangements and you can work remotely twice a week after your probation period.
  `;

  const handleStartRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual recording functionality
    console.log(isRecording ? "Stopping recording..." : "Starting recording...");
  };

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
                  <h1 className="text-xl font-bold text-foreground">Basic Reading</h1>
                  <p className="text-sm text-muted-foreground">Reading comprehension exercise</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Beginner
              </Badge>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-primary" />
                    Reading Exercise Instructions
                  </CardTitle>
                  <CardDescription>
                    Read the passage below aloud and record yourself. Focus on clear pronunciation and natural rhythm.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tips for better reading:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Read at a comfortable pace</li>
                      <li>• Pay attention to punctuation for natural pauses</li>
                      <li>• Emphasize key technical terms</li>
                      <li>• Maintain clear pronunciation throughout</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Reading Passage */}
              <Card>
                <CardHeader>
                  <CardTitle>Reading Passage</CardTitle>
                  <CardDescription>
                    Read the following text about software development workplace orientation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <div className="bg-card border border-border rounded-lg p-6 leading-relaxed text-foreground">
                      {readingText.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className="mb-4 last:mb-0">
                            {paragraph.trim()}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recording Controls */}
              <Card>
                <CardHeader>
                  <CardTitle>Record Your Reading</CardTitle>
                  <CardDescription>
                    Click the button below to start recording yourself reading the passage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                      isRecording 
                        ? "bg-red-500 animate-pulse" 
                        : "bg-primary hover:bg-primary/80"
                    }`}>
                      <Mic className="w-10 h-10 text-white" />
                    </div>
                    
                    <div>
                      <Button 
                        variant={isRecording ? "destructive" : "hero"}
                        size="lg"
                        onClick={handleStartRecording}
                        className="min-w-[200px]"
                      >
                        {isRecording ? "Stop Recording" : "Start Recording"}
                      </Button>
                      
                      {isRecording && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Recording in progress... Speak clearly and at a comfortable pace
                        </p>
                      )}
                    </div>

                    {/* TODO: Add playback controls and submission */}
                    <div className="flex gap-4 justify-center">
                      <Button variant="outline" disabled={isRecording}>
                        Play Recording
                      </Button>
                      <Button variant="outline" disabled={isRecording}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BasicReading;