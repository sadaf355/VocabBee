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

const BasicPronunciation = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const pronunciationTopics = [
    {
      id: "vowel-sounds",
      title: "Vowel Sounds",
      description: "Master the foundation of English pronunciation with clear vowel sounds",
      progress: 0,
      status: "available",
      icon: "🗣️",
      content: {
        definition: "Learn to produce clear and accurate vowel sounds, the foundation of English pronunciation.",
        sounds: [
          { name: "Short Vowels", examples: ["/æ/ as in 'cat'", "/ɛ/ as in 'bed'", "/ɪ/ as in 'sit'", "/ɒ/ as in 'hot'", "/ʌ/ as in 'cup'"], description: "Basic short vowel sounds" },
          { name: "Long Vowels", examples: ["/iː/ as in 'see'", "/uː/ as in 'moon'", "/ɑː/ as in 'car'", "/ɔː/ as in 'law'", "/ɜː/ as in 'bird'"], description: "Extended vowel sounds" },
          { name: "Diphthongs", examples: ["/eɪ/ as in 'day'", "/aɪ/ as in 'my'", "/ɔɪ/ as in 'boy'", "/aʊ/ as in 'how'", "/oʊ/ as in 'go'"], description: "Two vowel sounds combined" },
          { name: "Schwa Sound", examples: ["/ə/ as in 'about'", "/ə/ as in 'taken'", "/ə/ as in 'pencil'"], description: "The most common vowel sound in English" },
          { name: "Vowel Contrasts", examples: ["sheep vs ship", "pool vs pull", "cat vs cut", "bet vs bat"], description: "Distinguishing similar vowel sounds" }
        ],
        examples: [
          "Practice: 'The cat sat on the mat' - focus on the /æ/ sound",
          "Contrast: 'I can see the sea' - /aɪ/ vs /iː/ sounds",
          "Rhythm: 'About eleven pencils' - notice the schwa sounds"
        ]
      }
    },
    {
      id: "consonant-sounds",
      title: "Consonant Sounds",
      description: "Learn clear articulation of English consonant sounds",
      progress: 0,
      status: "available",
      icon: "👄",
      content: {
        definition: "Master the articulation of consonant sounds for clear and understandable speech.",
        sounds: [
          { name: "Stop Consonants", examples: ["/p/ as in 'pen'", "/b/ as in 'boy'", "/t/ as in 'top'", "/d/ as in 'dog'", "/k/ as in 'cat'", "/g/ as in 'go'"], description: "Sounds made by stopping airflow completely" },
          { name: "Fricative Sounds", examples: ["/f/ as in 'fish'", "/v/ as in 'van'", "/θ/ as in 'think'", "/ð/ as in 'this'", "/s/ as in 'sun'", "/z/ as in 'zoo'"], description: "Sounds made by restricting airflow" },
          { name: "Nasal Sounds", examples: ["/m/ as in 'man'", "/n/ as in 'no'", "/ŋ/ as in 'sing'"], description: "Sounds produced through the nose" },
          { name: "Liquid Sounds", examples: ["/l/ as in 'light'", "/r/ as in 'red'"], description: "Flowing consonant sounds" },
          { name: "Common Problems", examples: ["th vs s/z", "r vs l", "v vs w", "p vs b"], description: "Typical pronunciation challenges" }
        ],
        examples: [
          "Practice: 'Peter Piper picked' - focus on /p/ sound",
          "Challenge: 'Think about this thing' - practice /θ/ and /ð/",
          "Contrast: 'Rice and lice' - distinguish /r/ and /l/"
        ]
      }
    },
    {
      id: "word-stress",
      title: "Word Stress",
      description: "Learn to emphasize the right syllables in English words",
      progress: 0,
      status: "available",
      icon: "📈",
      content: {
        definition: "Understand and apply correct word stress patterns for natural-sounding English.",
        patterns: [
          { name: "Two-syllable Words", examples: ["TAbLE", "comPUTE", "HOtel", "deCIDE"], description: "Stress patterns in words with two syllables" },
          { name: "Three-syllable Words", examples: ["TElePHONE", "unDERstand", "JApaNESE", "elePHANT"], description: "Stress patterns in longer words" },
          { name: "Word Families", examples: ["PHOtograph", "phoTOgraphy", "photoGRAPHic"], description: "How stress changes with suffixes" },
          { name: "Compound Words", examples: ["HOTdog", "blackBOARD", "UPstairs"], description: "Stress in compound words" },
          { name: "Unstressed Syllables", examples: ["a-BOUT", "to-GET-her", "dif-FER-ent"], description: "How unstressed syllables sound" }
        ],
        examples: [
          "Practice: 'I want to take a PHO-to-graph'",
          "Compare: 'REcord (noun) vs reCORD (verb)'",
          "Rhythm: 'The COM-pu-ter is on the TA-ble'"
        ]
      }
    },
    {
      id: "basic-intonation",
      title: "Basic Intonation",
      description: "Use rising and falling tones to convey meaning",
      progress: 0,
      status: "available",
      icon: "🎵",
      content: {
        definition: "Learn basic intonation patterns to sound more natural and convey meaning effectively.",
        patterns: [
          { name: "Falling Intonation", examples: ["Statements: 'I like coffee ↘'", "Commands: 'Sit down ↘'", "Wh-questions: 'Where are you going? ↘'"], description: "When voice goes down at the end" },
          { name: "Rising Intonation", examples: ["Yes/No questions: 'Are you ready? ↗'", "Uncertainty: 'Maybe? ↗'", "Lists: 'apples ↗, oranges ↗, and bananas ↘'"], description: "When voice goes up at the end" },
          { name: "Question Types", examples: ["'You're coming?' ↗ (checking)", "'Where are you going?' ↘ (asking)"], description: "Different question intonations" },
          { name: "Emotions", examples: ["Happy: 'Great! ↗'", "Surprised: 'Really? ↗'", "Disappointed: 'Oh no ↘'"], description: "How intonation shows feelings" },
          { name: "Emphasis", examples: ["'I LOVE coffee ↗'", "'That's AMAZING ↗'"], description: "Using intonation for emphasis" }
        ],
        examples: [
          "Statement: 'I'm going home ↘'",
          "Question: 'Are you going home? ↗'",
          "Surprise: 'You're going HOME? ↗'"
        ]
      }
    },
    {
      id: "linking-sounds",
      title: "Linking Sounds",
      description: "Connect words smoothly for natural speech flow",
      progress: 0,
      status: "available",
      icon: "🔗",
      content: {
        definition: "Learn how to connect words smoothly in connected speech for natural flow.",
        techniques: [
          { name: "Consonant to Vowel", examples: ["turn_on", "an_apple", "look_at"], description: "Linking consonant ending to vowel beginning" },
          { name: "Vowel to Vowel", examples: ["go_away (/w/ sound)", "say_it (/j/ sound)", "see_you (/j/ sound)"], description: "Adding linking sounds between vowels" },
          { name: "Same Consonants", examples: ["good_day", "some_money", "big_girl"], description: "When same consonants meet" },
          { name: "Silent Letters", examples: ["comb_my (silent b)", "talk_to (silent l)"], description: "How silent letters affect linking" },
          { name: "Common Phrases", examples: ["How_are_you?", "What_time_is_it?", "See_you_later"], description: "Frequently linked phrase patterns" }
        ],
        examples: [
          "Practice: 'Turn it on' becomes 'tur-ni-ton'",
          "Flow: 'I am an English student' - smooth connections",
          "Rhythm: 'Pick it up' vs 'pi-ki-tup'"
        ]
      }
    },
    {
      id: "common-problems",
      title: "Common Problems",
      description: "Address typical pronunciation challenges for English learners",
      progress: 0,
      status: "available",
      icon: "🎯",
      content: {
        definition: "Identify and practice solutions for the most common pronunciation difficulties.",
        problems: [
          { name: "Th Sounds", examples: ["think /θ/", "this /ð/", "Practice: 'three things'"], description: "The challenging /θ/ and /ð/ sounds" },
          { name: "R and L", examples: ["rice vs lice", "right vs light", "Practice: 'really long road'"], description: "Distinguishing /r/ and /l/ sounds" },
          { name: "V and W", examples: ["very vs wary", "vine vs wine", "Practice: 'we have twelve'"], description: "Difference between /v/ and /w/" },
          { name: "Final Consonants", examples: ["bed (not be)", "cat (not ca)", "dogs (not dog)"], description: "Pronouncing consonants at word endings" },
          { name: "Silent Letters", examples: ["knife (silent k)", "lamb (silent b)", "listen (silent t)"], description: "When not to pronounce certain letters" }
        ],
        examples: [
          "Challenge: 'I think this thing is thick'",
          "Practice: 'Red lorry, yellow lorry'",
          "Focus: 'Very well, we will wait'"
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
    window.location.href = `/modules/pronunciation/basic/quiz/${selectedTopic.id}`;
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
              <Link to="/modules/pronunciation-levels">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Pronunciation Levels
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Basic Pronunciation</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Foundation Pronunciation Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Build clear and confident pronunciation from the ground up. 
                Click on any topic to explore sound patterns and practice with audio-guided exercises.
              </p>
            </div>

            {/* Pronunciation Topics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pronunciationTopics.map((topic, index) => (
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
                {/* Content Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Pronunciation Focus</h3>
                  <div className="grid gap-4">
                    {Object.values(selectedTopic.content)[1] && (Object.values(selectedTopic.content)[1] as any[]).map((item: any, index: number) => (
                      <Card key={index} className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-primary">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <div className="bg-muted p-2 rounded text-sm">
                            <strong>Examples:</strong> {Array.isArray(item.examples) ? item.examples.join(", ") : item.examples}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Examples Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Practice Examples</h3>
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

export default BasicPronunciation;