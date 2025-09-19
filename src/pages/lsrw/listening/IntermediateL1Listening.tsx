import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Play, Pause, Volume2, CheckCircle } from "lucide-react";
import { audioQuizzes, Question } from "@/data/i1data";

const IntermediateL1Listening: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [score, setScore] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<{ audio: string; questions: Question[] } | null>(null);

  // timer state
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Pick random audio + questions on load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * audioQuizzes.length);
    setQuiz(audioQuizzes[randomIndex]);
  }, []);

  // countdown effect
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0 || score !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev !== null ? prev - 1 : prev));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, score]);

  // auto submit when timer hits 0
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleOptionSelect = (id: number, idx: number) => {
    if (!audioEnded) return; // 🚫 block selection until audio finished
    setSelectedAnswers((prev) => ({ ...prev, [id]: idx }));
  };

  const handleNext = () => {
    if (!quiz) return;
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!quiz) return;
    let calculatedScore = 0;
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) calculatedScore++;
    });
    setScore(calculatedScore);
  };

  if (!quiz) return <div>Loading quiz...</div>;

  return (
    <div className="container mx-auto p-6">
      {/* Audio Section */}
      <Card className="mb-6">
        <CardHeader className="flex items-center gap-3">
          <Volume2 className="w-6 h-6 text-primary" />
          <CardTitle>Listen to the Audio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <audio
                ref={audioRef}
                src={quiz.audio}
                onEnded={() => {
                  setAudioEnded(true);
                  setIsPlaying(false);
                  setTimeLeft(60); // ⏳ start 1-minute timer
                }}
              />
              <Button
                onClick={() => {
                  if (!audioRef.current) return;
                  if (!isPlaying && !audioEnded) {
                    audioRef.current.play();
                    setIsPlaying(true);
                  } else if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                  }
                }}
                disabled={audioEnded} // 🔒 disable once audio is finished
              >
                {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isPlaying ? "Pause" : audioEnded ? "Played" : "Play"}
              </Button>
            </div>
            {/* Timer */}
            {audioEnded && score === null && (
              <span className="text-lg font-semibold text-red-600">
                ⏱ {timeLeft}s
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question Section */}
      {score === null ? (
        <Card>
          <CardHeader>
            <CardTitle>Question {quiz.questions[currentQ].id}</CardTitle>
            <CardDescription>Answer the following question:</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{quiz.questions[currentQ].question}</p>
            <div className="space-y-3">
              {quiz.questions[currentQ].options.map((opt, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-2 p-2 border rounded cursor-pointer ${
                    selectedAnswers[quiz.questions[currentQ].id] === idx
                      ? "bg-primary/10 border-primary"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${quiz.questions[currentQ].id}`}
                    checked={selectedAnswers[quiz.questions[currentQ].id] === idx}
                    onChange={() => handleOptionSelect(quiz.questions[currentQ].id, idx)}
                    disabled={!audioEnded} // 🚫 disable until audio ends
                  />
                  {opt}
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={handleNext}
                disabled={
                  !audioEnded ||
                  selectedAnswers[quiz.questions[currentQ].id] == null
                }
              >
                {currentQ < quiz.questions.length - 1 ? "Next" : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" /> Submit
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">You scored {score} out of {quiz.questions.length}!</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IntermediateL1Listening;