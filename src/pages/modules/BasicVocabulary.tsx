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

const BasicVocabulary = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const vocabularyTopics = [
    {
      id: "daily-life",
      title: "Daily Life Words",
      description: "Essential vocabulary for everyday activities and routines",
      progress: 0,
      status: "available",
      icon: "🏠",
      content: {
        definition: "Basic vocabulary needed for daily activities, home life, and personal routines.",
        categories: [
          { name: "Home & Family", words: ["house, room, kitchen, family, mother, father, sister, brother"], description: "Words related to home and family members" },
          { name: "Food & Drinks", words: ["food, water, bread, milk, coffee, tea, breakfast, lunch, dinner"], description: "Common food items and meals" },
          { name: "Time & Days", words: ["time, day, week, month, year, today, tomorrow, yesterday"], description: "Time-related vocabulary" },
          { name: "Activities", words: ["work, study, sleep, eat, drink, walk, run, read, write"], description: "Daily activities and routines" },
          { name: "Places", words: ["school, office, hospital, bank, store, park, street, city"], description: "Common places and locations" }
        ],
        examples: [
          "I eat breakfast at home every morning.",
          "My family lives in a big house.",
          "I work in an office in the city center."
        ]
      }
    },
    {
      id: "common-objects",
      title: "Common Objects",
      description: "Everyday items and things around us",
      progress: 0,
      status: "available",
      icon: "📱",
      content: {
        definition: "Vocabulary for objects, tools, and items we use in daily life.",
        categories: [
          { name: "Technology", words: ["phone, computer, internet, email, website, app, camera"], description: "Modern technology items" },
          { name: "Clothing", words: ["shirt, pants, dress, shoes, hat, jacket, socks, belt"], description: "Basic clothing items" },
          { name: "School Supplies", words: ["book, pen, pencil, paper, bag, desk, chair, blackboard"], description: "Educational materials" },
          { name: "Transportation", words: ["car, bus, train, bike, plane, boat, taxi, ticket"], description: "Ways to travel and move" },
          { name: "Money & Shopping", words: ["money, price, buy, sell, shop, market, credit card, cash"], description: "Commerce and financial terms" }
        ],
        examples: [
          "I use my phone to send emails.",
          "She bought a new dress at the shop.",
          "The bus ticket costs five dollars."
        ]
      }
    },
    {
      id: "emotions-feelings",
      title: "Emotions & Feelings",
      description: "Express how you feel and understand others",
      progress: 0,
      status: "available",
      icon: "😊",
      content: {
        definition: "Vocabulary to express emotions, feelings, and states of mind.",
        categories: [
          { name: "Basic Emotions", words: ["happy, sad, angry, excited, nervous, calm, worried, relaxed"], description: "Fundamental emotional states" },
          { name: "Positive Feelings", words: ["good, great, wonderful, amazing, fantastic, excellent, perfect"], description: "Positive emotional expressions" },
          { name: "Negative Feelings", words: ["bad, terrible, awful, horrible, disappointed, frustrated, upset"], description: "Negative emotional expressions" },
          { name: "Physical States", words: ["tired, hungry, thirsty, sick, healthy, strong, weak, hot, cold"], description: "Physical conditions and sensations" },
          { name: "Mental States", words: ["confused, clear, focused, distracted, interested, bored, curious"], description: "Mental and cognitive states" }
        ],
        examples: [
          "I feel very happy today.",
          "She looks tired after work.",
          "He is excited about the trip."
        ]
      }
    },
    {
      id: "colors-numbers",
      title: "Colors & Numbers",
      description: "Basic colors and counting from 1 to 100",
      progress: 0,
      status: "available",
      icon: "🔢",
      content: {
        definition: "Essential vocabulary for colors, numbers, and basic measurements.",
        categories: [
          { name: "Basic Colors", words: ["red, blue, green, yellow, black, white, brown, orange, pink, purple"], description: "Primary and secondary colors" },
          { name: "Numbers 1-20", words: ["one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve"], description: "Cardinal numbers one through twenty" },
          { name: "Numbers 21-100", words: ["twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, hundred"], description: "Larger numbers and counting" },
          { name: "Ordinal Numbers", words: ["first, second, third, fourth, fifth, last, next, previous"], description: "Order and sequence" },
          { name: "Size & Quantity", words: ["big, small, large, little, many, few, some, all, none, enough"], description: "Size and amount descriptors" }
        ],
        examples: [
          "The car is red and very big.",
          "I have three books and five pens.",
          "This is my first day at the new job."
        ]
      }
    },
    {
      id: "weather-seasons",
      title: "Weather & Seasons",
      description: "Talk about weather conditions and seasons",
      progress: 0,
      status: "available",
      icon: "🌤️",
      content: {
        definition: "Vocabulary for describing weather conditions, seasons, and climate.",
        categories: [
          { name: "Weather Conditions", words: ["sunny, cloudy, rainy, snowy, windy, foggy, stormy, clear"], description: "Different weather states" },
          { name: "Seasons", words: ["spring, summer, autumn, winter, season, warm, cool, hot, cold"], description: "Four seasons and temperatures" },
          { name: "Weather Phenomena", words: ["rain, snow, wind, cloud, sun, storm, thunder, lightning"], description: "Natural weather events" },
          { name: "Temperature", words: ["hot, warm, cool, cold, freezing, boiling, mild, moderate"], description: "Temperature descriptions" },
          { name: "Outdoor Activities", words: ["walk, picnic, swim, ski, hike, garden, barbecue, camping"], description: "Weather-related activities" }
        ],
        examples: [
          "It's sunny and warm today.",
          "I love spring because of the flowers.",
          "We can't go camping in this storm."
        ]
      }
    },
    {
      id: "basic-actions",
      title: "Basic Actions",
      description: "Common verbs and action words for daily activities",
      progress: 0,
      status: "available",
      icon: "🏃",
      content: {
        definition: "Essential action verbs and movement words for everyday communication.",
        categories: [
          { name: "Movement Verbs", words: ["go, come, walk, run, jump, sit, stand, lie, move, stop"], description: "Physical movement and position" },
          { name: "Daily Actions", words: ["eat, drink, sleep, wake, wash, dress, cook, clean, work, rest"], description: "Routine daily activities" },
          { name: "Communication", words: ["speak, talk, say, tell, ask, answer, listen, hear, read, write"], description: "Language and communication actions" },
          { name: "Learning Actions", words: ["learn, study, teach, practice, remember, forget, understand, know"], description: "Educational and cognitive verbs" },
          { name: "Social Actions", words: ["meet, visit, help, give, take, share, play, laugh, smile, cry"], description: "Social interaction verbs" }
        ],
        examples: [
          "I walk to work every morning.",
          "She speaks English very well.",
          "We study together in the library."
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
    window.location.href = `/modules/vocabulary/basic/quiz/${selectedTopic.id}`;
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
              <Link to="/modules/vocabulary-levels">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Vocabulary Levels
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Basic Vocabulary</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Essential Vocabulary for Daily Life
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Build your foundation with the most important words for everyday communication. 
                Click on any topic to explore word categories and take a quiz to test your knowledge.
              </p>
            </div>

            {/* Vocabulary Topics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vocabularyTopics.map((topic, index) => (
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
                {/* Categories Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Word Categories</h3>
                  <div className="grid gap-4">
                    {selectedTopic.content.categories.map((category: any, index: number) => (
                      <Card key={index} className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-primary">{category.name}</h4>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                          <div className="bg-muted p-2 rounded text-sm">
                            <strong>Words:</strong> {category.words}
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

export default BasicVocabulary;