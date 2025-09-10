import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Trophy,
  Play,
  CheckCircle,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";

const IntermediateL1Grammar = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const grammarTopics = [
    {
      id: "tenses",
      title: "Verb Tenses",
      description: "Master past, present, and future tenses",
      progress: 0,
      status: "available",
      icon: "🕐",
      content: {
        definition: "Verb tenses indicate when an action takes place - in the past, present, or future.",
        types: [
          { name: "Simple Present", example: "I work, She eats, They play", description: "Actions that happen regularly or are always true" },
          { name: "Simple Past", example: "I worked, She ate, They played", description: "Actions completed in the past" },
          { name: "Simple Future", example: "I will work, She will eat, They will play", description: "Actions that will happen in the future" },
          { name: "Present Continuous", example: "I am working, She is eating, They are playing", description: "Actions happening right now" },
          { name: "Past Continuous", example: "I was working, She was eating, They were playing", description: "Actions that were ongoing in the past" }
        ],
        examples: [
          "I study English every day. (Simple Present)",
          "Yesterday, I studied for three hours. (Simple Past)",
          "Tomorrow, I will study with my friends. (Simple Future)",
          "Right now, I am studying grammar. (Present Continuous)"
        ]
      }
    },
    {
      id: "sentence-structure",
      title: "Sentence Structure",
      description: "Learn about subjects, predicates, and clauses",
      progress: 0,
      status: "available",
      icon: "🏗️",
      content: {
        definition: "Sentence structure refers to how words, phrases, and clauses are arranged to create meaning.",
        types: [
          { name: "Simple Sentences", example: "The cat sleeps.", description: "One independent clause with subject and predicate" },
          { name: "Compound Sentences", example: "The cat sleeps, and the dog plays.", description: "Two independent clauses joined by a conjunction" },
          { name: "Complex Sentences", example: "When the cat sleeps, the dog plays.", description: "One independent clause and one dependent clause" },
          { name: "Compound-Complex", example: "When the cat sleeps, the dog plays, but the bird sings.", description: "Multiple independent and dependent clauses" }
        ],
        examples: [
          "Subject: The quick brown fox | Predicate: jumps over the lazy dog.",
          "Independent clause: I like pizza | Dependent clause: because it tastes good.",
          "The book that I bought yesterday is very interesting."
        ]
      }
    },
    {
      id: "modals",
      title: "Modal Verbs",
      description: "Express possibility, permission, and obligation",
      progress: 0,
      status: "available",
      icon: "🔄",
      content: {
        definition: "Modal verbs are helping verbs that express necessity, possibility, permission, or ability.",
        types: [
          { name: "Can/Could", example: "I can swim. Could you help me?", description: "Ability and polite requests" },
          { name: "May/Might", example: "It may rain. You might be right.", description: "Possibility and permission" },
          { name: "Must/Have to", example: "You must study. I have to work.", description: "Necessity and obligation" },
          { name: "Should/Ought to", example: "You should exercise. We ought to leave.", description: "Advice and recommendation" },
          { name: "Will/Would", example: "I will help. Would you like coffee?", description: "Future actions and polite offers" }
        ],
        examples: [
          "You must wear a seatbelt. (obligation)",
          "She might come to the party. (possibility)",
          "Could you please open the window? (polite request)"
        ]
      }
    },
    {
      id: "articles",
      title: "Articles (A, An, The)",
      description: "Learn when and how to use articles",
      progress: 0,
      status: "available",
      icon: "📰",
      content: {
        definition: "Articles are words that define nouns as specific or unspecific.",
        types: [
          { name: "Indefinite Articles (A/An)", example: "a book, an apple, a university", description: "Used with singular countable nouns (first mention)" },
          { name: "Definite Article (The)", example: "the book, the students, the sun", description: "Used with specific nouns known to reader and writer" },
          { name: "Zero Article", example: "water, music, love, cats (general)", description: "No article needed with uncountable nouns or plural generalizations" },
          { name: "A vs An", example: "a car, an hour, a European", description: "A before consonant sounds, An before vowel sounds" }
        ],
        examples: [
          "I saw a dog in the park. The dog was very friendly.",
          "She is an engineer at the company.",
          "Water is essential for life. (no article needed)"
        ]
      }
    },
    {
      id: "comparatives",
      title: "Comparatives & Superlatives",
      description: "Compare things using adjectives and adverbs",
      progress: 0,
      status: "available",
      icon: "📊",
      content: {
        definition: "Comparatives compare two things, while superlatives compare three or more things.",
        types: [
          { name: "Short Adjectives", example: "tall → taller → tallest", description: "Add -er for comparative, -est for superlative" },
          { name: "Long Adjectives", example: "beautiful → more beautiful → most beautiful", description: "Use more/most with adjectives of 2+ syllables" },
          { name: "Irregular Forms", example: "good → better → best, bad → worse → worst", description: "Some adjectives have irregular comparative forms" },
          { name: "Equal Comparisons", example: "as tall as, not as smart as", description: "Use as...as for equal comparisons" },
          { name: "Adverb Comparisons", example: "quickly → more quickly → most quickly", description: "Most adverbs use more/most" }
        ],
        examples: [
          "This book is more interesting than that one.",
          "She is the smartest student in the class.",
          "He runs as fast as his brother."
        ]
      }
    },
    {
      id: "conditionals",
      title: "Conditional Sentences",
      description: "Express hypothetical situations and their results",
      progress: 0,
      status: "available",
      icon: "🤔",
      content: {
        definition: "Conditional sentences express what happens or would happen under certain conditions.",
        types: [
          { name: "Zero Conditional", example: "If you heat water, it boils.", description: "General truths and scientific facts" },
          { name: "First Conditional", example: "If it rains, I will stay home.", description: "Real possibility in the future" },
          { name: "Second Conditional", example: "If I won the lottery, I would travel.", description: "Unreal or unlikely situations in present/future" },
          { name: "Third Conditional", example: "If I had studied, I would have passed.", description: "Unreal situations in the past" }
        ],
        examples: [
          "If you study hard, you will succeed. (likely future)",
          "If I were rich, I would buy a yacht. (unreal present)",
          "If she had left earlier, she wouldn't have been late. (unreal past)"
        ]
      }
    }
  ];

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic);
    setShowDialog(true);
  };

  const handleStartQuiz = () => {
    setShowDialog(false);
    window.location.href = `/modules/grammar/intermediate-l1/quiz/${selectedTopic.id}`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "in-progress":
        return <Play className="w-5 h-5 text-primary" />;
      default:
        return <Play className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "in-progress":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
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
              <Link to="/modules/grammar-levels">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Grammar Levels
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Intermediate L1 Grammar</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Intermediate Grammar Concepts
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Build on your basic grammar knowledge with more complex structures and rules. 
                Click on any topic to learn more about it and take a quiz to test your understanding.
              </p>
            </div>

            {/* Grammar Topics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grammarTopics.map((topic, index) => (
                <Card 
                  key={topic.id}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer"
                  onClick={() => handleTopicClick(topic)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{topic.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{topic.title}</CardTitle>
                          <Badge variant="outline" className={getStatusColor(topic.status)}>
                            {topic.status === 'completed' ? 'Completed' : 
                             topic.status === 'in-progress' ? 'In Progress' : 'Available'}
                          </Badge>
                        </div>
                      </div>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {topic.description}
                    </CardDescription>
                    
                    {/* Progress Bar for topics with progress */}
                    {topic.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{topic.progress}%</span>
                        </div>
                        <Progress value={topic.progress} className="h-2" />
                      </div>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Topic Detail Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedTopic && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-2xl">{selectedTopic.icon}</span>
                  {selectedTopic.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedTopic.content.definition}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Types Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Types and Forms</h3>
                  <div className="grid gap-4">
                    {selectedTopic.content.types.map((type: any, index: number) => (
                      <Card key={index} className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-primary">{type.name}</h4>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                          <div className="bg-muted p-2 rounded text-sm">
                            <strong>Examples:</strong> {type.example}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Examples Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Example Sentences</h3>
                  <div className="space-y-2">
                    {selectedTopic.content.examples.map((example: string, index: number) => (
                      <div key={index} className="bg-muted p-3 rounded text-sm">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quiz Button */}
                <div className="flex justify-center pt-4">
                  <Button 
                    onClick={handleStartQuiz}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Perform a Quiz
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
};

export default IntermediateL1Grammar;