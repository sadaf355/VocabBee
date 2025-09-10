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

const ExpertL1Grammar = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const grammarTopics = [
    {
      id: "subjunctive",
      title: "Subjunctive Mood",
      description: "Express hypothetical, doubtful, or contrary-to-fact situations",
      progress: 0,
      status: "available",
      icon: "🎭",
      content: {
        definition: "The subjunctive mood expresses wishes, suggestions, demands, or hypothetical situations.",
        types: [
          { name: "Present Subjunctive", example: "I suggest that he be present.", description: "Base form after certain verbs" },
          { name: "Past Subjunctive", example: "If I were you, I would...", description: "Were used for all persons in if-clauses" },
          { name: "Formulaic Expressions", example: "God save the Queen! Long live the king!", description: "Fixed expressions using subjunctive" },
          { name: "That-clauses", example: "It's important that she understand.", description: "After expressions of necessity, importance" },
          { name: "Conditional Wishes", example: "I wish I were taller.", description: "Expressing unreal wishes" }
        ],
        examples: [
          "I recommend that he see a doctor immediately.",
          "If she were here, she would help us.",
          "It's crucial that the meeting be postponed."
        ]
      }
    },
    {
      id: "inversion",
      title: "Inversion Structures",
      description: "Advanced word order changes for emphasis",
      progress: 0,
      status: "available",
      icon: "🔄",
      content: {
        definition: "Inversion involves changing the normal word order, often for emphasis or in formal writing.",
        types: [
          { name: "Negative Inversion", example: "Never have I seen such beauty.", description: "After negative adverbs at the beginning" },
          { name: "Conditional Inversion", example: "Had I known, I would have come.", description: "In formal conditional sentences" },
          { name: "So/Such Inversion", example: "So tired was he that he fell asleep.", description: "For emphasis with so/such" },
          { name: "Question Tags", example: "You're coming, aren't you?", description: "Inverted auxiliary in tags" },
          { name: "Exclamatory Inversion", example: "How beautiful is this place!", description: "In exclamations" }
        ],
        examples: [
          "Rarely do we encounter such dedication.",
          "Were it not for your help, I would have failed.",
          "Such was the noise that nobody could sleep."
        ]
      }
    },
    {
      id: "cleft-sentences",
      title: "Cleft Sentences",
      description: "Emphasize specific parts of sentences",
      progress: 0,
      status: "available",
      icon: "🎯",
      content: {
        definition: "Cleft sentences split information into two clauses to emphasize particular elements.",
        types: [
          { name: "It-cleft", example: "It was John who called.", description: "Emphasize the subject or object" },
          { name: "Wh-cleft", example: "What I need is some rest.", description: "Emphasize with what-clauses" },
          { name: "Pseudo-cleft", example: "The thing that annoys me is...", description: "Using 'the thing that'" },
          { name: "Reverse Wh-cleft", example: "Some rest is what I need.", description: "Reversed wh-cleft structure" },
          { name: "All-cleft", example: "All I want is peace.", description: "Using 'all' for emphasis" }
        ],
        examples: [
          "It's the blue car that I want to buy. (emphasizes 'blue car')",
          "What bothers me most is the noise. (emphasizes 'the noise')",
          "The person who helped us was very kind."
        ]
      }
    },
    {
      id: "nominal-clauses",
      title: "Nominal Clauses",
      description: "Clauses that function as nouns",
      progress: 0,
      status: "available",
      icon: "📝",
      content: {
        definition: "Nominal clauses are dependent clauses that function as nouns within sentences.",
        types: [
          { name: "That-clauses", example: "I believe that he is honest.", description: "Object clauses with 'that'" },
          { name: "Wh-clauses", example: "What he said surprised me.", description: "Clauses beginning with wh-words" },
          { name: "If/Whether clauses", example: "I wonder if/whether she will come.", description: "Indirect yes/no questions" },
          { name: "Infinitive clauses", example: "I know how to solve this.", description: "Nominal infinitive constructions" },
          { name: "Gerund clauses", example: "His singing annoyed everyone.", description: "Gerund phrases as subjects/objects" }
        ],
        examples: [
          "Whether we succeed depends on our effort. (subject)",
          "The question is where we should meet. (complement)",
          "I'm not sure what time the meeting starts. (object)"
        ]
      }
    },
    {
      id: "discourse-markers",
      title: "Discourse Markers",
      description: "Connect ideas and organize text cohesively",
      progress: 0,
      status: "available",
      icon: "🔗",
      content: {
        definition: "Discourse markers are words or phrases that organize and connect ideas in speech and writing.",
        types: [
          { name: "Addition", example: "furthermore, moreover, in addition", description: "Add more information" },
          { name: "Contrast", example: "however, nevertheless, on the contrary", description: "Show differences or opposition" },
          { name: "Sequence", example: "firstly, subsequently, finally", description: "Order events or ideas" },
          { name: "Cause/Effect", example: "therefore, consequently, as a result", description: "Show relationships between ideas" },
          { name: "Clarification", example: "in other words, that is to say, namely", description: "Explain or clarify meaning" }
        ],
        examples: [
          "The weather was terrible. Nevertheless, we enjoyed our trip.",
          "First, we'll discuss the problem. Subsequently, we'll explore solutions.",
          "The roads were icy; consequently, many flights were cancelled."
        ]
      }
    },
    {
      id: "ellipsis",
      title: "Ellipsis & Substitution",
      description: "Avoid repetition through omission and replacement",
      progress: 0,
      status: "available",
      icon: "✂️",
      content: {
        definition: "Ellipsis omits words that are understood from context; substitution replaces words to avoid repetition.",
        types: [
          { name: "Nominal Ellipsis", example: "I like red wine, not white (wine).", description: "Omit repeated nouns" },
          { name: "Verbal Ellipsis", example: "She can swim and he can (swim) too.", description: "Omit repeated verbs" },
          { name: "Clausal Ellipsis", example: "If possible, (it is possible) please come.", description: "Omit entire clauses" },
          { name: "Pro-forms", example: "I bought apples. Do you want some?", description: "Use substitutes like 'some', 'one'" },
          { name: "Comparative Ellipsis", example: "She's taller than he (is tall).", description: "Omit in comparisons" }
        ],
        examples: [
          "Would you like coffee or tea? I'll have coffee. (ellipsis of 'I would like')",
          "John studies hard, and Mary does too. (substitution with 'does')",
          "If necessary, we'll postpone the meeting. (ellipsis of 'it is')"
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
    window.location.href = `/modules/grammar/expert-l1/quiz/${selectedTopic.id}`;
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
                <h1 className="text-2xl font-bold text-foreground">Expert L1 Grammar</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Advanced Grammar Mastery
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Master sophisticated grammar structures used in academic and professional contexts. 
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
                  <h3 className="text-lg font-semibold mb-3">Advanced Concepts</h3>
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

export default ExpertL1Grammar;