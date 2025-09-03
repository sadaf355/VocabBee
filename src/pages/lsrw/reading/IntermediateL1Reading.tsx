import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { ArrowLeft, Mic, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const IntermediateL1Reading = () => {
  const [isRecording, setIsRecording] = useState(false);

  const readingText = `
    Our company's API documentation outlines the integration process for third-party developers. The RESTful API follows standard HTTP protocols and returns JSON formatted responses.

    Authentication requires an API key which must be included in the request headers. The rate limit is set to 1000 requests per hour for basic tier users and 5000 requests per hour for premium subscribers.

    Error handling is implemented using standard HTTP status codes. A 400 error indicates bad request parameters, while 401 signifies unauthorized access. Server errors return a 500 status code with detailed error messages in the response body.

    Database connectivity is maintained through connection pooling to ensure optimal performance. The application uses PostgreSQL for primary data storage and Redis for caching frequently accessed data.

    Deployment follows CI/CD practices using GitHub Actions for automated testing and Docker containers for consistent environment management across development, staging, and production environments.
  `;

  const handleStartRecording = () => {
    setIsRecording(!isRecording);
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
                  <h1 className="text-xl font-bold text-foreground">Intermediate L1 Reading</h1>
                  <p className="text-sm text-muted-foreground">Technical documentation reading</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Intermediate
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
                    Read the technical documentation passage aloud. Focus on technical terms and clear articulation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Focus areas for this level:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Technical vocabulary and acronyms</li>
                      <li>• Complex sentence structures</li>
                      <li>• Professional tone and pace</li>
                      <li>• Clear pronunciation of technical terms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Reading Passage */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Documentation</CardTitle>
                  <CardDescription>
                    API integration and deployment procedures
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
                          Recording in progress... Focus on technical terms and clarity
                        </p>
                      )}
                    </div>

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

export default IntermediateL1Reading;