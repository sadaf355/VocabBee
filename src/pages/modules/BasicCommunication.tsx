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

const BasicCommunication = () => {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);

  const communicationTopics = [
    {
      id: "greetings-introductions",
      title: "Greetings & Introductions",
      description: "Start conversations and introduce yourself confidently",
      progress: 0,
      status: "available",
      icon: "👋",
      content: {
        definition: "Essential phrases and expressions for meeting people and starting conversations.",
        skills: [
          { name: "Basic Greetings", examples: ["Hello, Hi, Good morning, Good afternoon, Good evening"], description: "Common ways to greet people" },
          { name: "Introductions", examples: ["My name is..., I'm..., Nice to meet you, Pleased to meet you"], description: "How to introduce yourself and others" },
          { name: "Farewells", examples: ["Goodbye, See you later, Have a nice day, Take care"], description: "Ways to end conversations politely" },
          { name: "Small Talk", examples: ["How are you?, What's your name?, Where are you from?"], description: "Basic conversation starters" },
          { name: "Polite Expressions", examples: ["Please, Thank you, You're welcome, Excuse me, I'm sorry"], description: "Essential courtesy phrases" }
        ],
        examples: [
          "Hello! My name is Sarah. Nice to meet you.",
          "Good morning! How are you today?",
          "Thank you very much. Have a great day!"
        ]
      }
    },
    {
      id: "asking-information",
      title: "Asking for Information",
      description: "Learn to ask questions and get the information you need",
      progress: 0,
      status: "available",
      icon: "❓",
      content: {
        definition: "Question formation and information-seeking strategies for daily situations.",
        skills: [
          { name: "Question Words", examples: ["What, Where, When, Who, Why, How, Which"], description: "Basic question words for information gathering" },
          { name: "Directions", examples: ["Where is...?, How do I get to...?, Is it far from here?"], description: "Asking for directions and locations" },
          { name: "Time & Schedule", examples: ["What time is it?, When does it start?, How long does it take?"], description: "Time-related questions" },
          { name: "Personal Information", examples: ["What's your phone number?, Where do you live?, What do you do?"], description: "Asking about personal details appropriately" },
          { name: "Services & Help", examples: ["Can you help me?, Do you have...?, Is there a...?"], description: "Requesting assistance and services" }
        ],
        examples: [
          "Excuse me, where is the nearest bank?",
          "What time does the store close?",
          "Can you help me find the train station?"
        ]
      }
    },
    {
      id: "workplace-basics",
      title: "Workplace Basics",
      description: "Essential communication skills for professional environments",
      progress: 0,
      status: "available",
      icon: "💼",
      content: {
        definition: "Basic professional communication skills for workplace interactions.",
        skills: [
          { name: "Office Greetings", examples: ["Good morning everyone, How was your weekend?, See you tomorrow"], description: "Professional greetings and farewells" },
          { name: "Asking for Help", examples: ["Could you help me with...?, I need assistance with..., Do you have a moment?"], description: "Requesting workplace assistance" },
          { name: "Phone Etiquette", examples: ["Hello, this is..., May I speak to...?, Could you please hold?"], description: "Basic telephone communication" },
          { name: "Email Basics", examples: ["Dear..., Best regards, Thank you for your time, Please let me know"], description: "Simple email phrases and structure" },
          { name: "Meeting Language", examples: ["I agree, I think..., Can you repeat that?, What do you think?"], description: "Basic meeting participation" }
        ],
        examples: [
          "Good morning, Sarah. Could you help me with this report?",
          "Hello, this is John from marketing. May I speak to Ms. Chen?",
          "Thank you for the meeting. I'll send you the details by email."
        ]
      }
    },
    {
      id: "shopping-dining",
      title: "Shopping & Dining",
      description: "Communicate effectively while shopping and at restaurants",
      progress: 0,
      status: "available",
      icon: "🛒",
      content: {
        definition: "Communication skills for shopping, dining, and service interactions.",
        skills: [
          { name: "Shopping Phrases", examples: ["How much is this?, Do you have...?, Can I try this on?, I'll take it"], description: "Essential shopping communication" },
          { name: "Restaurant Orders", examples: ["I'd like..., Can I have..., What do you recommend?, The check, please"], description: "Ordering food and drinks" },
          { name: "Complaining Politely", examples: ["Excuse me, there's a problem..., This isn't what I ordered, Could you help me?"], description: "Addressing issues respectfully" },
          { name: "Payment Terms", examples: ["Cash or card?, Do you accept credit cards?, Keep the change, Here's my card"], description: "Payment-related communication" },
          { name: "Returns & Exchanges", examples: ["I'd like to return this, Do you have a receipt?, Can I exchange this?"], description: "Product return processes" }
        ],
        examples: [
          "Excuse me, how much is this shirt?",
          "I'd like a coffee and a sandwich, please.",
          "There's a problem with my order. Could you help me?"
        ]
      }
    },
    {
      id: "making-appointments",
      title: "Making Appointments",
      description: "Schedule meetings and appointments confidently",
      progress: 0,
      status: "available",
      icon: "📅",
      content: {
        definition: "Skills for scheduling, confirming, and managing appointments and meetings.",
        skills: [
          { name: "Scheduling", examples: ["I'd like to make an appointment, When are you available?, What time works for you?"], description: "Setting up appointments" },
          { name: "Confirming Details", examples: ["Let me confirm..., So that's..., Is that correct?, I'll see you at..."], description: "Verifying appointment information" },
          { name: "Rescheduling", examples: ["I need to reschedule, Can we change the time?, Is another day possible?"], description: "Changing appointment times" },
          { name: "Canceling", examples: ["I'm sorry, but I need to cancel, Something came up, Can we meet another time?"], description: "Canceling appointments politely" },
          { name: "Being Late", examples: ["I'm running late, I'll be there in 10 minutes, Sorry for the delay"], description: "Communicating delays" }
        ],
        examples: [
          "I'd like to make an appointment with Dr. Smith for next week.",
          "I'm sorry, but I need to reschedule our meeting. Is tomorrow possible?",
          "I'm running about 15 minutes late. I'll be there soon."
        ]
      }
    },
    {
      id: "emergency-help",
      title: "Emergency & Help",
      description: "Get help quickly in urgent or emergency situations",
      progress: 0,
      status: "available",
      icon: "🚨",
      content: {
        definition: "Critical communication skills for emergencies and urgent help-seeking situations.",
        skills: [
          { name: "Emergency Calls", examples: ["Help!, Call 911!, There's an emergency!, I need help immediately!"], description: "Getting immediate emergency assistance" },
          { name: "Describing Problems", examples: ["There's been an accident, Someone is hurt, I'm lost, My car broke down"], description: "Explaining emergency situations" },
          { name: "Health Issues", examples: ["I feel sick, I need a doctor, Call an ambulance, I have chest pain"], description: "Communicating health emergencies" },
          { name: "Location Information", examples: ["I'm at..., Near the..., On the corner of..., The address is..."], description: "Providing location details" },
          { name: "Urgent Requests", examples: ["This is urgent!, Please hurry!, I need immediate help!, Can you come quickly?"], description: "Expressing urgency appropriately" }
        ],
        examples: [
          "Help! There's been a car accident on Main Street!",
          "I need a doctor. I'm having chest pain.",
          "I'm lost. Can you help me find the hospital?"
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
    window.location.href = `/modules/communication/basic/quiz/${selectedTopic.id}`;
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
              <Link to="/modules/communication-levels">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Communication Levels
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Basic Communication</h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Essential Communication Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Master fundamental communication skills for everyday situations. 
                Click on any topic to explore communication strategies and practice with interactive quizzes.
              </p>
            </div>

            {/* Communication Topics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communicationTopics.map((topic, index) => (
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
                {/* Skills Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Communication Skills</h3>
                  <div className="grid gap-4">
                    {selectedTopic.content.skills.map((skill: any, index: number) => (
                      <Card key={index} className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-primary">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                          <div className="bg-muted p-2 rounded text-sm">
                            <strong>Examples:</strong> {skill.examples.join(", ")}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Examples Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Example Conversations</h3>
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

export default BasicCommunication;