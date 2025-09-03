import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Mic, 
  BarChart3, 
  Users, 
  Zap, 
  Trophy,
  Smartphone,
  Globe,
  Clock,
  Target,
  BookOpen,
  MessageCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Feedback",
      description: "Get instant, personalized feedback on your pronunciation, grammar, and writing with advanced AI technology.",
      color: "primary"
    },
    {
      icon: Mic,
      title: "Real-time Speaking Analysis",
      description: "Practice speaking with real-time analysis of your pronunciation, intonation, and fluency.",
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and weekly progress reports.",
      color: "success"
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Connect with other learners, participate in group challenges, and learn together.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Adaptive Learning",
      description: "Our AI adapts to your learning pace and style, providing personalized content recommendations.",
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Earn badges, climb leaderboards, and unlock achievements as you progress through levels.",
      color: "success"
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Access",
      description: "Learn anywhere, anytime with our responsive web platform and mobile app.",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Technical Focus",
      description: "Specialized content for engineering and technical students with industry-relevant vocabulary.",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with bite-sized lessons that fit into your busy schedule.",
      color: "success"
    }
  ];

  const uniqueFeatures = [
    {
      icon: Target,
      title: "Personalized Assessment",
      description: "Start with a comprehensive 10-question quiz to determine your proficiency level and create a customized learning path.",
      highlight: "Initial Assessment"
    },
    {
      icon: BookOpen,
      title: "LSRW Integration",
      description: "Seamlessly practice all four language skills with integrated exercises that reinforce each other.",
      highlight: "Holistic Approach"
    },
    {
      icon: MessageCircle,
      title: "AI Learning Coach",
      description: "Meet FluencyBot, your personal AI assistant that provides guidance, motivation, and answers your questions 24/7.",
      highlight: "AI Assistant"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-learning">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              VocabBee?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of language learning with our cutting-edge AI technology 
            and comprehensive skill-building approach
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Unique Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-primary transition-all duration-300 border-primary/20 bg-background">
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                {feature.highlight}
              </div>
              <CardHeader className="pb-4 pt-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;