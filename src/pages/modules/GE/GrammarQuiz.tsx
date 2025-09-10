import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Trophy,
  CheckCircle,
  X,
  RotateCcw
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const GrammarQuiz = () => {
  const { topic } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const quizData: { [key: string]: any } = {
    noun: {
      title: "Nouns Quiz",
      icon: "📝",
      questions: [
        {
          question: "Which of the following is a proper noun?",
          options: ["city", "London", "teacher", "book"],
          correct: 1,
          explanation: "London is a proper noun because it's the specific name of a city and is capitalized."
        },
        {
          question: "What type of noun is 'happiness'?",
          options: ["Concrete noun", "Abstract noun", "Collective noun", "Common noun"],
          correct: 1,
          explanation: "Happiness is an abstract noun because it represents an emotion or concept that cannot be touched."
        },
        {
          question: "Which sentence contains a collective noun?",
          options: ["The dog barks loudly", "The team won the game", "She reads books", "He drives a car"],
          correct: 1,
          explanation: "Team is a collective noun because it refers to a group of people working together."
        },
        {
          question: "Identify the concrete noun in this sentence: 'Her love for music is obvious.'",
          options: ["love", "music", "obvious", "her"],
          correct: 1,
          explanation: "Music is a concrete noun because it can be heard and experienced through the senses."
        },
        {
          question: "Which of these is NOT a common noun?",
          options: ["apple", "Microsoft", "car", "house"],
          correct: 1,
          explanation: "Microsoft is a proper noun (company name), while the others are common nouns."
        }
      ]
    },
    pronoun: {
      title: "Pronouns Quiz",
      icon: "👤",
      questions: [
        {
          question: "Which is a possessive pronoun?",
          options: ["him", "yours", "who", "this"],
          correct: 1,
          explanation: "Yours is a possessive pronoun that shows ownership without needing a noun after it."
        },
        {
          question: "What type of pronoun is 'who' in 'The person who called'?",
          options: ["Personal pronoun", "Relative pronoun", "Demonstrative pronoun", "Indefinite pronoun"],
          correct: 1,
          explanation: "Who is a relative pronoun because it connects the clause 'who called' to 'the person'."
        },
        {
          question: "Choose the correct pronoun: 'John and ___ went to the store.'",
          options: ["me", "I", "myself", "mine"],
          correct: 1,
          explanation: "I is correct because it's the subject pronoun. You can test this by removing 'John and': 'I went to the store.'"
        },
        {
          question: "Which sentence uses a demonstrative pronoun correctly?",
          options: ["These is my book", "That are beautiful", "This is my favorite", "Those book is mine"],
          correct: 2,
          explanation: "This is correct because it's singular and agrees with the singular verb 'is'."
        },
        {
          question: "What pronoun should replace 'the students' in: 'The students finished the students' homework'?",
          options: ["they", "their", "them", "theirs"],
          correct: 1,
          explanation: "Their is the possessive adjective that should replace 'the students'' to show ownership of homework."
        }
      ]
    },
    verb: {
      title: "Verbs Quiz",
      icon: "⚡",
      questions: [
        {
          question: "Which is an action verb?",
          options: ["is", "seems", "runs", "appears"],
          correct: 2,
          explanation: "Runs is an action verb because it shows physical movement or activity."
        },
        {
          question: "In 'She has been studying', what type of verb is 'has'?",
          options: ["Action verb", "Linking verb", "Helping verb", "Modal verb"],
          correct: 2,
          explanation: "Has is a helping verb (auxiliary verb) that works with 'been studying' to form the present perfect continuous tense."
        },
        {
          question: "Which sentence contains a linking verb?",
          options: ["The dog ran quickly", "She became a doctor", "They played soccer", "He wrote a letter"],
          correct: 1,
          explanation: "Became is a linking verb that connects the subject 'she' to additional information 'a doctor'."
        },
        {
          question: "What type of verb is 'might' in 'It might rain'?",
          options: ["Action verb", "Linking verb", "Helping verb", "Modal verb"],
          correct: 3,
          explanation: "Might is a modal verb because it expresses possibility or uncertainty."
        },
        {
          question: "Which verb form is correct: 'She ___ to school every day'?",
          options: ["go", "goes", "going", "gone"],
          correct: 1,
          explanation: "Goes is correct because with third person singular subjects (she), we add -s or -es to the base form of the verb."
        }
      ]
    },
    adjective: {
      title: "Adjectives Quiz",
      icon: "🎨",
      questions: [
        {
          question: "Which word is the adjective in 'The tall building'?",
          options: ["the", "tall", "building", "none"],
          correct: 1,
          explanation: "Tall is the adjective because it describes the noun 'building'."
        },
        {
          question: "What type of adjective is 'this' in 'this car'?",
          options: ["Descriptive", "Demonstrative", "Possessive", "Quantitative"],
          correct: 1,
          explanation: "This is a demonstrative adjective because it points out which specific car."
        },
        {
          question: "Which is the superlative form of 'good'?",
          options: ["gooder", "better", "best", "more good"],
          correct: 2,
          explanation: "Best is the superlative form of good (good, better, best)."
        },
        {
          question: "Choose the correct order: 'a ___ ___ house'",
          options: ["wooden beautiful", "beautiful wooden", "beautifully wooden", "wooden beautifully"],
          correct: 1,
          explanation: "Beautiful wooden is correct. Opinion adjectives (beautiful) come before material adjectives (wooden)."
        },
        {
          question: "Which sentence uses a possessive adjective?",
          options: ["That book is mine", "My book is red", "The book is theirs", "This book is good"],
          correct: 1,
          explanation: "My is a possessive adjective because it modifies the noun 'book' and shows ownership."
        }
      ]
    },
    adverb: {
      title: "Adverbs Quiz",
      icon: "🚀",
      questions: [
        {
          question: "Which word is the adverb in 'She sings beautifully'?",
          options: ["she", "sings", "beautifully", "none"],
          correct: 2,
          explanation: "Beautifully is the adverb because it modifies the verb 'sings' and tells us how she sings."
        },
        {
          question: "What type of adverb is 'yesterday' in 'We met yesterday'?",
          options: ["Manner", "Time", "Place", "Degree"],
          correct: 1,
          explanation: "Yesterday is a time adverb because it tells us when the meeting happened."
        },
        {
          question: "Which sentence uses an adverb of degree?",
          options: ["He runs quickly", "She arrived early", "The movie was very interesting", "They went outside"],
          correct: 2,
          explanation: "Very is an adverb of degree because it modifies the adjective 'interesting' and tells us to what extent."
        },
        {
          question: "Choose the correct adverb form: 'She completed the task ___'",
          options: ["quick", "quickly", "quickness", "more quick"],
          correct: 1,
          explanation: "Quickly is the correct adverb form that modifies the verb 'completed'."
        },
        {
          question: "Which adverb indicates frequency?",
          options: ["here", "loudly", "always", "very"],
          correct: 2,
          explanation: "Always is a frequency adverb because it tells us how often something happens."
        }
      ]
    },
    preposition: {
      title: "Prepositions Quiz",
      icon: "🔗",
      questions: [
        {
          question: "Which preposition shows time: 'We'll meet ___ 3 PM'?",
          options: ["in", "on", "at", "by"],
          correct: 2,
          explanation: "At is used with specific times (at 3 PM, at midnight, at noon)."
        },
        {
          question: "Choose the correct preposition: 'The book is ___ the table'",
          options: ["in", "on", "at", "by"],
          correct: 1,
          explanation: "On is correct because the book is resting on the surface of the table."
        },
        {
          question: "Which sentence uses a preposition of direction?",
          options: ["The cat is under the bed", "She walked toward the door", "We met during lunch", "He works with computers"],
          correct: 1,
          explanation: "Toward shows direction of movement - where she was walking."
        },
        {
          question: "What is the prepositional phrase in 'The dog ran through the park'?",
          options: ["the dog", "ran through", "through the park", "the park"],
          correct: 2,
          explanation: "Through the park is the prepositional phrase (preposition + object of preposition)."
        },
        {
          question: "Choose the correct preposition: 'She's good ___ math'",
          options: ["in", "on", "at", "with"],
          correct: 2,
          explanation: "At is used with the expression 'good at' when talking about skills or subjects."
        }
      ]
    }
  };

  const currentQuiz = quizData[topic || 'noun'];

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmitQuiz();
    }
  }, [timeLeft, showResults]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <VocaBeeSidebar />
          
          <main className="flex-1">
            <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="container mx-auto px-4 h-full flex items-center gap-4">
                <SidebarTrigger />
                <Link to="/modules/grammar/basic">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Topics
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{currentQuiz.icon}</span>
                  <h1 className="text-2xl font-bold text-foreground">{currentQuiz.title} Results</h1>
                </div>
              </div>
            </header>

            <div className="container mx-auto px-6 py-8">
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                    <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
                  </div>
                  <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
                  <CardDescription className="text-lg">
                    You got {score} out of {currentQuiz.questions.length} questions correct
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Results breakdown */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Question Review</h3>
                    {currentQuiz.questions.map((question: any, index: number) => {
                      const userAnswer = answers[index];
                      const isCorrect = userAnswer === question.correct;
                      
                      return (
                        <Card key={index} className={`p-4 ${isCorrect ? 'border-success' : 'border-destructive'}`}>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              {isCorrect ? (
                                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                              ) : (
                                <X className="w-5 h-5 text-destructive mt-0.5" />
                              )}
                              <div className="flex-1">
                                <p className="font-medium">{question.question}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Your answer: {userAnswer !== null ? question.options[userAnswer] : 'No answer'}
                                </p>
                                {!isCorrect && (
                                  <p className="text-sm text-success">
                                    Correct answer: {question.options[question.correct]}
                                  </p>
                                )}
                                <p className="text-sm text-muted-foreground mt-2">
                                  {question.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button onClick={resetQuiz} variant="outline" className="gap-2">
                      <RotateCcw className="w-4 h-4" />
                      Try Again
                    </Button>
                    <Link to="/modules/grammar/basic">
                      <Button className="gap-2">
                        <BookOpen className="w-4 h-4" />
                        Back to Topics
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        
        <main className="flex-1">
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full flex items-center gap-4">
              <SidebarTrigger />
              <Link to="/modules/grammar/basic">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Topics
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentQuiz.icon}</span>
                <h1 className="text-2xl font-bold text-foreground">{currentQuiz.title}</h1>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono">{formatTime(timeLeft)}</span>
                </div>
                <Badge variant="outline">
                  {currentQuestion + 1} of {currentQuiz.questions.length}
                </Badge>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <CardTitle>Question {currentQuestion + 1}</CardTitle>
                  <Progress 
                    value={((currentQuestion) / currentQuiz.questions.length) * 100} 
                    className="w-32" 
                  />
                </div>
                <CardDescription className="text-lg">
                  {currentQuiz.questions[currentQuestion].question}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {currentQuiz.questions[currentQuestion].options.map((option: string, index: number) => (
                    <Card 
                      key={index}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedAnswer === index 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedAnswer === index 
                            ? 'border-primary bg-primary' 
                            : 'border-muted-foreground'
                        }`} />
                        <span>{option}</span>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-between pt-6">
                  <Button 
                    variant="outline" 
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                  >
                    {currentQuestion === currentQuiz.questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default GrammarQuiz;