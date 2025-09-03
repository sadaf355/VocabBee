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

const IntermediateL2Grammar = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const grammarTopics = [
    {
      id: "passive-voice",
      title: "Passive Voice",
      description: "Transform active sentences to passive constructions",
      progress: 0,
      status: "available",
      icon: "🔄",
      content: {
        definition: "The passive voice is used when the focus is on the action, not who or what is performing the action.",
        types: [
          { name: "Present Passive", example: "The book is read by millions.", description: "Present tense passive construction" },
          { name: "Past Passive", example: "The house was built in 1990.", description: "Past tense passive construction" },
          { name: "Future Passive", example: "The project will be completed next month.", description: "Future tense passive construction" },
          { name: "Present Perfect Passive", example: "The work has been finished.", description: "Present perfect passive construction" },
          { name: "Modal Passive", example: "This can be done easily.", description: "Passive with modal verbs" }
        ],
        examples: [
          "Active: The chef cooks the meal. → Passive: The meal is cooked by the chef.",
          "Active: They built this bridge. → Passive: This bridge was built by them.",
          "The letter will be delivered tomorrow. (focus on the letter, not who delivers it)"
        ]
      }
    },
    {
      id: "reported-speech",
      title: "Reported Speech",
      description: "Report what someone else said",
      progress: 0,
      status: "available",
      icon: "💬",
      content: {
        definition: "Reported speech is used to tell someone what another person said without using their exact words.",
        types: [
          { name: "Present to Past", example: "He says → He said", description: "Tense changes when reporting" },
          { name: "Questions", example: "He asked if I was ready.", description: "Reporting yes/no and wh-questions" },
          { name: "Commands", example: "She told me to wait.", description: "Reporting orders and requests" },
          { name: "Time Changes", example: "today → that day, tomorrow → the next day", description: "Time expressions change in reported speech" },
          { name: "Modal Changes", example: "can → could, will → would", description: "Modal verbs change in reported speech" }
        ],
        examples: [
          "Direct: 'I am tired,' she said. → Indirect: She said she was tired.",
          "Direct: 'Where do you live?' he asked. → Indirect: He asked where I lived.",
          "Direct: 'Please help me,' she said. → Indirect: She asked me to help her."
        ]
      }
    },
    {
      id: "relative-clauses",
      title: "Relative Clauses",
      description: "Connect ideas using who, which, that, where",
      progress: 0,
      status: "available",
      icon: "🔗",
      content: {
        definition: "Relative clauses give extra information about a noun in the main clause.",
        types: [
          { name: "Defining Clauses", example: "The book that I bought is good.", description: "Essential information, no commas" },
          { name: "Non-defining Clauses", example: "My car, which is red, is fast.", description: "Extra information, use commas" },
          { name: "Who/Whom", example: "The person who called / to whom I spoke", description: "For people (subject/object)" },
          { name: "Which/That", example: "The car which/that I bought", description: "For things and animals" },
          { name: "Where/When/Why", example: "The place where we met", description: "For place, time, and reason" }
        ],
        examples: [
          "The student who studies hard will succeed. (defining)",
          "London, which is the capital of England, is very busy. (non-defining)",
          "This is the house where I was born."
        ]
      }
    },
    {
      id: "phrasal-verbs",
      title: "Phrasal Verbs",
      description: "Verbs combined with particles for new meanings",
      progress: 0,
      status: "available",
      icon: "⚡",
      content: {
        definition: "Phrasal verbs are combinations of verbs with prepositions or adverbs that create new meanings.",
        types: [
          { name: "Separable", example: "turn on the light / turn the light on", description: "Object can go before or after particle" },
          { name: "Inseparable", example: "look after the children", description: "Object must come after particle" },
          { name: "Three-word", example: "look forward to, get along with", description: "Verb + particle + preposition" },
          { name: "Intransitive", example: "break down, show up", description: "No object needed" },
          { name: "Multiple meanings", example: "get up (wake up/organize)", description: "Same phrasal verb, different meanings" }
        ],
        examples: [
          "Please turn off the TV. / Please turn the TV off. (separable)",
          "I'm looking for my keys. (inseparable)",
          "We're looking forward to seeing you. (three-word)"
        ]
      }
    },
    {
      id: "gerunds-infinitives",
      title: "Gerunds & Infinitives",
      description: "When to use -ing forms vs to + verb",
      progress: 0,
      status: "available",
      icon: "🔧",
      content: {
        definition: "Gerunds (-ing forms) and infinitives (to + verb) are verb forms that function as nouns.",
        types: [
          { name: "Gerund as Subject", example: "Swimming is good exercise.", description: "Gerund starts the sentence" },
          { name: "Infinitive Purpose", example: "I study to improve my English.", description: "Infinitive shows purpose or intention" },
          { name: "Verb + Gerund", example: "I enjoy reading.", description: "Some verbs are followed by gerunds" },
          { name: "Verb + Infinitive", example: "I want to go.", description: "Some verbs are followed by infinitives" },
          { name: "Both Forms", example: "I like reading/to read.", description: "Some verbs accept both forms" }
        ],
        examples: [
          "I enjoy cooking. (verb + gerund)",
          "I decided to cook. (verb + infinitive)",
          "Reading books helps improve vocabulary. (gerund as subject)"
        ]
      }
    },
    {
      id: "perfect-tenses",
      title: "Perfect Tenses",
      description: "Present, past, and future perfect constructions",
      progress: 0,
      status: "available",
      icon: "⏰",
      content: {
        definition: "Perfect tenses show the relationship between two time periods or completed actions.",
        types: [
          { name: "Present Perfect", example: "I have lived here for 5 years.", description: "Past action with present relevance" },
          { name: "Past Perfect", example: "I had finished before you arrived.", description: "Action completed before another past action" },
          { name: "Future Perfect", example: "I will have finished by 6 PM.", description: "Action that will be completed by a future time" },
          { name: "Present Perfect Continuous", example: "I have been studying for 2 hours.", description: "Ongoing action that started in the past" },
          { name: "Time Expressions", example: "for, since, already, yet, just", description: "Common time words with perfect tenses" }
        ],
        examples: [
          "She has worked here since 2020. (still working now)",
          "When I arrived, they had already left. (left before I arrived)",
          "By next month, I will have completed the course. (future completion)"
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
    window.location.href = `/modules/grammar/intermediate-l2/quiz/${selectedTopic.id}`;
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
                <h1 className="text-2xl font-bold text-foreground">Intermediate L2 Grammar</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Advanced Intermediate Grammar
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Master complex grammar structures and advanced language patterns. 
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
                  <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
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

export default IntermediateL2Grammar;