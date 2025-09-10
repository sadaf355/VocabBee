import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useUser } from "../context/UserContext";

const AssessmentQuiz = () => {
  const { user } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    { question: "Choose the correct sentence:", options: ["I am working in this company since 2020.","I have been working in this company since 2020.","I work in this company since 2020.","I was working in this company since 2020."], correct: 1 },
    { question: "What is the meaning of 'debugging' in programming?", options: ["Writing new code","Finding and fixing errors in code","Deleting old code","Running the program"], correct: 1 },
    { question: "Choose the most professional way to start an email:", options: ["Hey there!","Hi buddy,","Dear Sir/Madam,","Yo!"], correct: 2 },
    { question: "Which pronunciation is correct for 'schedule'?", options: ["/ˈʃedjuːl/ (SHED-yool)","/ˈskedʒuːl/ (SKED-jool)","Both are correct","None of the above"], correct: 2 },
    { question: "In technical writing, which is preferred?", options: ["The system works good","The system works well","The system is working good","The system work well"], correct: 1 },
    { question: "What does 'scalable' mean in technology?", options: ["Something that can be weighed","Something that can grow or expand efficiently","Something that is small","Something that is expensive"], correct: 1 },
    { question: "Choose the correct passive voice:", options: ["The bug was fixed by the developer","The developer fixed the bug","The bug fixed by the developer","The developer was fixing the bug"], correct: 0 },
    { question: "Which is the most formal closing for a business email?", options: ["Cheers!","Thanks!","Sincerely,","Bye!"], correct: 2 },
    { question: "What is the correct pronunciation of 'algorithm'?", options: ["/ˈælɡərɪðəm/ (AL-guh-ri-thuhm)","/ˈeɪlɡərɪðəm/ (AYL-guh-ri-thuhm)","/ˈælɡoʊrɪðəm/ (AL-go-ri-thuhm)","All are correct"], correct: 0 },
    { question: "In a presentation, which phrase is most professional?", options: ["I think maybe this might work","This solution will definitely work","This approach appears to be effective","I guess this is okay"], correct: 2 }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!selectedAnswer) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else handleQuizComplete();
  };

  const handleQuizComplete = async () => {
    if (!user) return alert("User not found. Please log in again.");

    let score = 0;
    answers.forEach((answer, i) => {
      if (parseInt(answer) === questions[i].correct) score++;
    });

    try {
      const res = await fetch("http://localhost:4000/api/assessed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });
      if (!res.ok) return alert("Failed to mark assessment");

      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    } catch {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-learning flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4"/><span>~2 min remaining</span></div>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle>{questions[currentQuestion].question}</CardTitle>
            <CardDescription>Choose the best answer from the options below</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {questions[currentQuestion].options.map((option, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors">
                  <RadioGroupItem value={i.toString()} id={`option-${i}`} />
                  <Label htmlFor={`option-${i}`} className="flex-1 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-6">
              <Button variant="outline" disabled={currentQuestion === 0} onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setSelectedAnswer(answers[currentQuestion - 1] || "");
              }}>Previous</Button>

              <Button variant="hero" onClick={handleNext} disabled={!selectedAnswer}>
                {currentQuestion === questions.length - 1 ? <>Complete Quiz <CheckCircle className="w-4 h-4 ml-2"/></> : <>Next Question <ArrowRight className="w-4 h-4 ml-2"/></>}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentQuiz;
