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

const BasicGrammar = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const grammarTopics = [
    {
      id: "noun",
      title: "Nouns",
      description: "Learn about persons, places, things, and ideas",
      progress: 0,
      status: "available",
      icon: "📝",
      content: {
        definition: "A noun is a word that names a person, place, thing, or idea.",
        types: [
          { name: "Common Nouns", example: "book, city, teacher", description: "General names for people, places, or things" },
          { name: "Proper Nouns", example: "London, John, Microsoft", description: "Specific names that are capitalized" },
          { name: "Abstract Nouns", example: "love, happiness, freedom", description: "Names for ideas, emotions, or concepts" },
          { name: "Concrete Nouns", example: "table, car, apple", description: "Names for things you can touch or see" },
          { name: "Collective Nouns", example: "team, family, crowd", description: "Names for groups of people or things" }
        ],
        examples: [
          "The teacher (person) walked into the classroom (place).",
          "My book (thing) is full of interesting ideas (concept).",
          "London (proper noun) is a beautiful city (common noun)."
        ]
      }
    },
    {
      id: "pronoun",
      title: "Pronouns",
      description: "Words that replace nouns in sentences",
      progress: 0,
      status: "available",
      icon: "👤",
      content: {
        definition: "A pronoun is a word that takes the place of a noun to avoid repetition.",
        types: [
          { name: "Personal Pronouns", example: "I, you, he, she, it, we, they", description: "Replace specific people or things" },
          { name: "Possessive Pronouns", example: "mine, yours, his, hers, ours, theirs", description: "Show ownership" },
          { name: "Demonstrative Pronouns", example: "this, that, these, those", description: "Point to specific things" },
          { name: "Relative Pronouns", example: "who, which, that, whom", description: "Connect clauses" },
          { name: "Indefinite Pronouns", example: "someone, anything, nobody", description: "Refer to non-specific people or things" }
        ],
        examples: [
          "John likes pizza. He (John) eats it (pizza) every Friday.",
          "This is my book. That one is yours.",
          "The person who called didn't leave a message."
        ]
      }
    },
    {
      id: "verb",
      title: "Verbs",
      description: "Action words and state of being",
      progress: 0,
      status: "available",
      icon: "⚡",
      content: {
        definition: "A verb is a word that expresses action, occurrence, or state of being.",
        types: [
          { name: "Action Verbs", example: "run, write, think, speak", description: "Express physical or mental actions" },
          { name: "Linking Verbs", example: "is, am, are, was, were, seem", description: "Connect the subject to additional information" },
          { name: "Helping Verbs", example: "have, has, will, would, can, could", description: "Work with main verbs to form tenses" },
          { name: "Modal Verbs", example: "must, should, might, may", description: "Express possibility, necessity, or permission" }
        ],
        examples: [
          "She runs (action) to school every morning.",
          "The weather is (linking) beautiful today.",
          "I have finished (helping + main) my homework."
        ]
      }
    },
    {
      id: "adjective",
      title: "Adjectives",
      description: "Words that describe nouns and pronouns",
      progress: 0,
      status: "available",
      icon: "🎨",
      content: {
        definition: "An adjective is a word that describes or modifies a noun or pronoun.",
        types: [
          { name: "Descriptive Adjectives", example: "beautiful, tall, smart, red", description: "Describe qualities or characteristics" },
          { name: "Demonstrative Adjectives", example: "this, that, these, those", description: "Point out specific nouns" },
          { name: "Possessive Adjectives", example: "my, your, his, her, their", description: "Show ownership" },
          { name: "Quantitative Adjectives", example: "many, few, several, some", description: "Indicate quantity" },
          { name: "Comparative/Superlative", example: "bigger, biggest, more beautiful", description: "Compare things" }
        ],
        examples: [
          "The tall building has many windows.",
          "This red car is faster than that blue one.",
          "She is the smartest student in her class."
        ]
      }
    },
    {
      id: "adverb",
      title: "Adverbs",
      description: "Words that modify verbs, adjectives, or other adverbs",
      progress: 0,
      status: "available",
      icon: "🚀",
      content: {
        definition: "An adverb is a word that modifies a verb, adjective, or another adverb.",
        types: [
          { name: "Manner Adverbs", example: "quickly, carefully, loudly", description: "Describe how something is done" },
          { name: "Time Adverbs", example: "now, yesterday, soon, always", description: "Tell when something happens" },
          { name: "Place Adverbs", example: "here, there, everywhere, inside", description: "Tell where something happens" },
          { name: "Degree Adverbs", example: "very, quite, extremely, rather", description: "Tell to what extent" },
          { name: "Frequency Adverbs", example: "often, rarely, sometimes, never", description: "Tell how often" }
        ],
        examples: [
          "She speaks English fluently (manner).",
          "We will meet tomorrow (time) at the park.",
          "The music was extremely (degree) loud."
        ]
      }
    },
    {
      id: "preposition",
      title: "Prepositions",
      description: "Words that show relationships between other words",
      progress: 0,
      status: "available",
      icon: "🔗",
      content: {
        definition: "A preposition is a word that shows the relationship between a noun/pronoun and other words in a sentence.",
        types: [
          { name: "Place Prepositions", example: "in, on, at, under, beside", description: "Show location or position" },
          { name: "Time Prepositions", example: "before, after, during, since", description: "Show when something happens" },
          { name: "Direction Prepositions", example: "to, from, toward, through", description: "Show movement or direction" },
          { name: "Manner Prepositions", example: "by, with, without, like", description: "Show how something is done" }
        ],
        examples: [
          "The book is on the table (place).",
          "We'll meet after lunch (time).",
          "She walked through the park (direction)."
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
    // Navigate to quiz page - we'll implement this next
    window.location.href = `/modules/grammar/basic/quiz/${selectedTopic.id}`;
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
                <h1 className="text-2xl font-bold text-foreground">Basic Grammar</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Grammar Fundamentals
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Master the building blocks of English grammar. Click on any topic to learn more about it and take a quiz to test your understanding.
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
                  <h3 className="text-lg font-semibold mb-3">Types of {selectedTopic.title}</h3>
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

export default BasicGrammar;