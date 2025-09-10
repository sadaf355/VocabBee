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

const ExpertL2Grammar = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const grammarTopics = [
    {
      id: "stylistics",
      title: "Stylistic Variations",
      description: "Adapt grammar for different registers and contexts",
      progress: 0,
      status: "available",
      icon: "🎨",
      content: {
        definition: "Stylistic variations involve choosing appropriate grammatical structures based on context, audience, and purpose.",
        types: [
          { name: "Formal vs Informal", example: "It is vs It's; whom vs who", description: "Register-appropriate choices" },
          { name: "Academic Style", example: "passive voice, nominalizations", description: "Objective, impersonal tone" },
          { name: "Literary Devices", example: "metaphor, parallelism, alliteration", description: "Creative language use" },
          { name: "Business English", example: "diplomatic language, hedging", description: "Professional communication" },
          { name: "Colloquialisms", example: "gonna, wanna, ain't", description: "Informal spoken forms" }
        ],
        examples: [
          "Formal: The research was conducted... vs Informal: We did the research...",
          "Academic: The phenomenon requires investigation vs Casual: We need to check this out",
          "Business: We would appreciate your consideration vs Direct: Please consider this"
        ]
      }
    },
    {
      id: "advanced-conditionals",
      title: "Advanced Conditionals",
      description: "Complex hypothetical and counterfactual expressions",
      progress: 0,
      status: "available",
      icon: "🌀",
      content: {
        definition: "Advanced conditionals express complex relationships between hypothetical situations and their consequences.",
        types: [
          { name: "Mixed Conditionals", example: "If I had studied medicine, I would be a doctor now.", description: "Past condition, present result" },
          { name: "Inverted Conditionals", example: "Were it not for..., Should you need...", description: "Formal conditional structures" },
          { name: "Implicit Conditionals", example: "Otherwise, but for, in case of", description: "Conditional meaning without 'if'" },
          { name: "Progressive Conditionals", example: "If I were working there, I would be earning more.", description: "Continuous actions in conditionals" },
          { name: "Wish + Past Perfect", example: "I wish I had known earlier.", description: "Regret about past situations" }
        ],
        examples: [
          "If she hadn't moved abroad, she would still be living here. (mixed)",
          "But for your help, I would have failed completely. (implicit)",
          "Had I known about the traffic, I would have left earlier. (inverted)"
        ]
      }
    },
    {
      id: "complex-nominalizations",
      title: "Complex Nominalizations",
      description: "Transform verbs and adjectives into noun phrases",
      progress: 0,
      status: "available",
      icon: "🔄",
      content: {
        definition: "Nominalization converts verbs and adjectives into nouns, creating more formal and concise expression.",
        types: [
          { name: "Process Nominalizations", example: "analyze → analysis, develop → development", description: "Actions become things" },
          { name: "Quality Nominalizations", example: "important → importance, difficult → difficulty", description: "Qualities become entities" },
          { name: "Agent Nominalizations", example: "teach → teacher, manage → manager", description: "Doers of actions" },
          { name: "Result Nominalizations", example: "arrange → arrangement, achieve → achievement", description: "Outcomes of processes" },
          { name: "Gerundive Nominalizations", example: "The opening of the store...", description: "Gerund phrases as subjects" }
        ],
        examples: [
          "Verb: We decided quickly → Noun: Our quick decision...",
          "Adjective: The proposal is feasible → Noun: The feasibility of the proposal...",
          "Complex: The fact that costs increased → Nominalized: The cost increase..."
        ]
      }
    },
    {
      id: "hedging",
      title: "Hedging & Modality",
      description: "Express degrees of certainty and tentative language",
      progress: 0,
      status: "available",
      icon: "🤔",
      content: {
        definition: "Hedging uses language that softens claims, expresses uncertainty, or shows politeness and caution.",
        types: [
          { name: "Modal Hedging", example: "might, could, would seem", description: "Tentative modal verbs" },
          { name: "Lexical Hedging", example: "perhaps, possibly, apparently", description: "Adverbs showing uncertainty" },
          { name: "Approximation", example: "roughly, approximately, about", description: "Imprecise quantities" },
          { name: "Attribution", example: "according to, it is claimed that", description: "Distance from claims" },
          { name: "Possibility Phrases", example: "it is possible that, there is a chance", description: "Expressing likelihood" }
        ],
        examples: [
          "Direct: This causes problems → Hedged: This might cause some problems",
          "Strong: The results prove → Cautious: The results suggest/indicate",
          "Certain: All students → Hedged: Most students tend to..."
        ]
      }
    },
    {
      id: "metadiscourse",
      title: "Metadiscourse Markers",
      description: "Guide readers through text organization and meaning",
      progress: 0,
      status: "available",
      icon: "🗺️",
      content: {
        definition: "Metadiscourse markers help organize text and guide readers through the writer's reasoning and attitude.",
        types: [
          { name: "Textual Markers", example: "first, in summary, for example", description: "Organize and structure text" },
          { name: "Interpersonal Markers", example: "obviously, unfortunately, I believe", description: "Show attitude and engage readers" },
          { name: "Transition Signals", example: "in contrast, similarly, on the other hand", description: "Connect ideas logically" },
          { name: "Evidential Markers", example: "according to research, studies show", description: "Support claims with evidence" },
          { name: "Code Glosses", example: "in other words, that is, specifically", description: "Clarify and elaborate meaning" }
        ],
        examples: [
          "To begin with, we must consider... (textual organization)",
          "Clearly, this approach has merit... (interpersonal attitude)",
          "The data suggests, however, that... (evidential support)"
        ]
      }
    },
    {
      id: "pragmatic-particles",
      title: "Pragmatic Particles",
      description: "Subtle meaning through discourse particles and tags",
      progress: 0,
      status: "available",
      icon: "✨",
      content: {
        definition: "Pragmatic particles are small words that convey attitude, emphasis, or interpersonal meaning beyond literal content.",
        types: [
          { name: "Emphasis Particles", example: "even, only, just, actually", description: "Highlight or downplay elements" },
          { name: "Attitude Markers", example: "frankly, honestly, surely", description: "Express speaker's stance" },
          { name: "Conversation Fillers", example: "well, you know, I mean", description: "Manage spoken interaction" },
          { name: "Tag Questions", example: "isn't it?, don't you think?", description: "Seek agreement or confirmation" },
          { name: "Politeness Markers", example: "please, if you don't mind", description: "Soften requests and commands" }
        ],
        examples: [
          "I just wanted to ask... (downplaying request)",
          "You do understand, don't you? (seeking confirmation)",
          "Frankly speaking, I disagree. (expressing honest opinion)"
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
    window.location.href = `/modules/grammar/expert-l2/quiz/${selectedTopic.id}`;
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
                <h1 className="text-2xl font-bold text-foreground">Expert L2 Grammar</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Expert-Level Grammar Mastery
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Master the most sophisticated aspects of English grammar including stylistic variations and pragmatic nuances. 
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
                  <h3 className="text-lg font-semibold mb-3">Expert Concepts</h3>
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

export default ExpertL2Grammar;