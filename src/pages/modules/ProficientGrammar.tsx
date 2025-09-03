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

const ProficientGrammar = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const grammarTopics = [
    {
      id: "corpus-linguistics",
      title: "Corpus-Based Patterns",
      description: "Real-world usage patterns from large text collections",
      progress: 0,
      status: "available",
      icon: "📊",
      content: {
        definition: "Corpus linguistics examines authentic language use through analysis of large collections of real texts.",
        types: [
          { name: "Collocations", example: "strong tea, heavy rain, make a decision", description: "Words that naturally occur together" },
          { name: "Lexical Bundles", example: "on the other hand, it is important to note", description: "Multi-word sequences in discourse" },
          { name: "Semantic Prosody", example: "utterly (negative contexts), sheer (intensity)", description: "Emotional coloring of words" },
          { name: "Register Variation", example: "commence vs start, terminate vs end", description: "Formality levels in usage" },
          { name: "Frequency Patterns", example: "most common prepositions, typical verb forms", description: "Statistical tendencies in language" }
        ],
        examples: [
          "We say 'make a decision' not 'do a decision' (established collocation)",
          "'Commit' often appears with negative words: commit crime, error, sin",
          "'Sheer' intensifies: sheer determination, sheer luck, sheer volume"
        ]
      }
    },
    {
      id: "cognitive-grammar",
      title: "Cognitive Grammar",
      description: "How mental concepts shape grammatical structures",
      progress: 0,
      status: "available",
      icon: "🧠",
      content: {
        definition: "Cognitive grammar explores how our conceptual understanding influences the way we structure language.",
        types: [
          { name: "Conceptual Metaphor", example: "time is money, argument is war", description: "Abstract concepts understood through concrete ones" },
          { name: "Image Schemas", example: "container (in/out), path (from/to)", description: "Basic spatial concepts in grammar" },
          { name: "Figure/Ground", example: "The bike is near the house (bike=figure)", description: "Perspective in spatial relations" },
          { name: "Mental Spaces", example: "In 1995... vs If I were rich...", description: "Cognitive domains for interpretation" },
          { name: "Prototype Effects", example: "robin is more 'bird-like' than penguin", description: "Category membership gradients" }
        ],
        examples: [
          "We 'spend' time and 'save' time (time as money metaphor)",
          "Ideas 'come to mind' and we 'grasp' concepts (thinking as manipulation)",
          "We're 'in' trouble but 'out of' danger (states as containers)"
        ]
      }
    },
    {
      id: "genre-analysis",
      title: "Genre-Specific Grammar",
      description: "Grammatical conventions across different text types",
      progress: 0,
      status: "available",
      icon: "📚",
      content: {
        definition: "Different genres (academic, legal, literary) have distinct grammatical patterns and conventions.",
        types: [
          { name: "Academic Writing", example: "passive voice, nominalization, hedging", description: "Objective, formal structures" },
          { name: "Legal Language", example: "shall, hereby, whereas, provided that", description: "Precise, unambiguous expressions" },
          { name: "Scientific Reports", example: "method descriptions, result presentations", description: "Systematic, replicable language" },
          { name: "Literary Prose", example: "stylistic devices, narrative techniques", description: "Creative, expressive structures" },
          { name: "Business Communication", example: "diplomatic language, action-oriented", description: "Professional, goal-focused grammar" }
        ],
        examples: [
          "Academic: 'It has been demonstrated that...' vs Popular: 'Studies show...'",
          "Legal: 'The party of the first part shall...' vs Casual: 'You should...'",
          "Scientific: 'The solution was heated to 100°C' vs 'We heated the solution'"
        ]
      }
    },
    {
      id: "multimodal-grammar",
      title: "Multimodal Grammar",
      description: "Grammar in digital and multimedia contexts",
      progress: 0,
      status: "available",
      icon: "🌐",
      content: {
        definition: "Multimodal grammar examines how meaning is created through combinations of text, images, sound, and layout.",
        types: [
          { name: "Visual Grammar", example: "layout, color, typography effects", description: "How visual elements create meaning" },
          { name: "Digital Discourse", example: "hashtags, @mentions, emoji usage", description: "Grammar of social media and digital texts" },
          { name: "Hypertext Structure", example: "linking, navigation, information architecture", description: "Non-linear text organization" },
          { name: "Audio-Visual Sync", example: "subtitle timing, voice-over coordination", description: "Alignment of different modes" },
          { name: "Interactive Elements", example: "clickable text, responsive design", description: "User engagement through language" }
        ],
        examples: [
          "Email: subject lines create expectation, formatting shows hierarchy",
          "Websites: headings guide reading path, buttons use imperative mood",
          "Social Media: hashtags function as topical markers, emoji add emotional tone"
        ]
      }
    },
    {
      id: "historical-grammar",
      title: "Historical Grammar Changes",
      description: "How grammar evolves and changes over time",
      progress: 0,
      status: "available",
      icon: "⏳",
      content: {
        definition: "Historical grammar traces how grammatical structures develop, change, and disappear over time.",
        types: [
          { name: "Grammaticalization", example: "going to → gonna, will → 'll", description: "Content words becoming grammar words" },
          { name: "Semantic Change", example: "silly meant 'blessed', nice meant 'precise'", description: "Meaning shifts over time" },
          { name: "Syntactic Change", example: "Old English word order vs Modern English", description: "Structural pattern evolution" },
          { name: "Borrowing Effects", example: "French influence on English grammar", description: "Contact-induced changes" },
          { name: "Emerging Patterns", example: "new conditional: If I was to...", description: "Currently developing structures" }
        ],
        examples: [
          "Shakespeare: 'Thou art' → Modern: 'You are' (pronoun system change)",
          "Progressive developing: 'I'm loving it' (stative verbs in progressive)",
          "Modal meanings shifting: 'must' becoming less common than 'have to'"
        ]
      }
    },
    {
      id: "pragmatic-grammar",
      title: "Pragmatic Grammar Interface",
      description: "How context and intention shape grammatical choices",
      progress: 0,
      status: "available",
      icon: "🎯",
      content: {
        definition: "Pragmatic grammar examines how speakers choose grammatical structures to achieve communicative goals.",
        types: [
          { name: "Politeness Strategies", example: "Could you vs Can you vs You must", description: "Grammar for social relationships" },
          { name: "Information Structure", example: "topic-comment, given-new patterns", description: "How grammar packages information flow" },
          { name: "Speech Act Grammar", example: "performatives, commissives, directives", description: "Grammar that performs actions" },
          { name: "Implicature Triggers", example: "even, only, just create implications", description: "Grammar that suggests unspoken meaning" },
          { name: "Contextual Variation", example: "same structure, different meanings in context", description: "Situational interpretation of grammar" }
        ],
        examples: [
          "Would you mind...? (very polite) vs Can you...? (neutral) vs You need to... (direct)",
          "As for the weather, it's terrible (topic-comment structure)",
          "I pronounce you married (performative utterance through grammar)"
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
    window.location.href = `/modules/grammar/proficient/quiz/${selectedTopic.id}`;
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
                <h1 className="text-2xl font-bold text-foreground">Proficient Grammar</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Master-Level Grammar Understanding
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Explore the deepest aspects of English grammar including historical evolution, cognitive patterns, and advanced pragmatic uses. 
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
                  <h3 className="text-lg font-semibold mb-3">Master-Level Concepts</h3>
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

export default ProficientGrammar;