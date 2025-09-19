import { useState, useEffect } from "react";
import { useLanguage } from "@/context/languageContext";
import { useOnboarding, Level } from "@/context/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getRandomQuestionsForLevel, type Question } from "@/data/quizData";

export const Assessment= () => {
  const { t } = useLanguage();
  const { data } = useOnboarding();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(10).fill(-1));
  const [timeRemaining, setTimeRemaining] = useState(120);

  useEffect(() => {
    if (data.comfortLevel) {
      // Cast comfortLevel to Level type for type safety
      const level = data.comfortLevel as Level;
      const randomQuestions = getRandomQuestionsForLevel(level, 10);
      setQuestions(randomQuestions);
    }
  }, [data.comfortLevel]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleCompleteQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

const handleCompleteQuiz = () => {
  let correctAnswers = 0;
  selectedAnswers.forEach((answer, index) => {
    if (answer === questions[index].correctAnswer) {
      correctAnswers++;
    }
  });

  const score = Math.round((correctAnswers / questions.length) * 100);
  localStorage.setItem("assessmentScore", score.toString());           // Save score
  localStorage.setItem("assessmentLevel", data.comfortLevel || "");    // Save level if desired
  navigate("/dashboard");
};

  const isLastQuestion = currentQuestion === questions.length - 1;
  const canProceed = selectedAnswers[currentQuestion] !== -1;

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading assessment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t("assessment.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("assessment.subtitle")}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              {t("assessment.question")} {currentQuestion + 1} {t("onboarding.of")} {questions.length}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" />
              ~{minutes}:{seconds.toString().padStart(2, "0")} {t("assessment.remaining")}
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="w-full max-w-4xl mx-auto shadow-sm border border-border mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">{questions[currentQuestion].question}</h2>
            <p className="text-muted-foreground mb-6">Choose the best answer from the options below</p>

            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="text-muted-foreground"
          >
            {t("assessment.previous")}
          </Button>

          {isLastQuestion ? (
            <Button
              onClick={handleCompleteQuiz}
              disabled={!canProceed}
              className="bg-primary hover:bg-primary-light text-primary-foreground font-medium px-6 py-2 rounded-full"
            >
              {t("assessment.completeQuiz")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-primary hover:bg-primary-light text-primary-foreground font-medium px-6 py-2 rounded-full"
            >
              {t("assessment.nextQuestion")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
