import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { 
  ArrowLeft, 
  Play, 
  Pause,
  Volume2,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const IntermediateL2Listening = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});

  const totalQuestions = 2;
  const progress = (currentQuestion / totalQuestions) * 100;

  const questions = [
    {
      id: 1,
      title: "What is the speaker's main argument about renewable energy?",
      options: [
        { id: "A", text: "It's too expensive to implement" },
        { id: "B", text: "It will replace fossil fuels within a decade" },
        { id: "C", text: "Investment is crucial for long-term sustainability" },
        { id: "D", text: "Technology is not advanced enough yet" }
      ]
    },
    {
      id: 2,
      title: "According to the presentation, which country leads in solar energy adoption?",
      options: [
        { id: "A", text: "Germany" },
        { id: "B", text: "China" },
        { id: "C", text: "United States" },
        { id: "D", text: "Japan" }
      ]
    }
  ];

  const currentQuestionData = questions[currentQuestion - 1];

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
    // TODO: Process answers and show results
  };

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
                <h1 className="text-xl font-bold text-foreground">Technical Presentations</h1>
                <Badge variant="secondary" className="mt-1">Intermediate L2</Badge>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8 max-w-4xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion} of {totalQuestions}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Audio Exercise Section */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle>Audio Exercise</CardTitle>
                    <CardDescription>Listen carefully and answer the questions below</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="gap-2"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          Play
                        </>
                      )}
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>10 min</span>
                    </div>
                  </div>
                  
                  {/* Audio Progress Bar */}
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: isPlaying ? '30%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comprehension Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Comprehension Questions</CardTitle>
                <CardDescription>Choose the best answer for each question</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Question */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {currentQuestion}. {currentQuestionData.title}
                  </h3>
                  
                  <RadioGroup 
                    value={answers[currentQuestion] || ""} 
                    onValueChange={handleAnswerChange}
                    className="space-y-3"
                  >
                    {currentQuestionData.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3">
                        <RadioGroupItem 
                          value={option.id} 
                          id={`option-${option.id}`}
                          className="border-2"
                        />
                        <Label 
                          htmlFor={`option-${option.id}`}
                          className="text-sm font-medium cursor-pointer flex-1 py-2"
                        >
                          <span className="font-semibold mr-2">{option.id})</span>
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevious}
                    disabled={currentQuestion === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentQuestion < totalQuestions ? (
                    <Button 
                      onClick={handleNext}
                      disabled={!answers[currentQuestion]}
                      className="bg-gradient-primary text-primary-foreground border-0 hover:bg-gradient-secondary"
                    >
                      Next Question
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit}
                      disabled={!answers[currentQuestion]}
                      className="bg-gradient-success text-white border-0 hover:opacity-90"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Answers
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default IntermediateL2Listening;