import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-learning">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-success/10 text-success hover:bg-success/20 border-success/20">
                🚀 AI-Powered Learning Platform
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Master{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  English Communication
                </span>{" "}
                with VocaBee
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Transform your communication skills with VocaBee's AI-powered platform. 
                Perfect your LSRW abilities and excel in professional environments 
                with personalized learning experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">10,000+ Learners</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">95% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="xl" 
                className="animate-bounce-gentle bg-gradient-primary text-primary-foreground border-0 hover:bg-gradient-secondary"
                asChild
              >
                <Link to="/register">Start Learning Today</Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="group bg-gradient-learning text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Trusted by students from top institutions
              </p>
              <div className="flex gap-2 text-xs text-muted-foreground">
                <Badge variant="outline">IIT</Badge>
                <Badge variant="outline">NIT</Badge>
                <Badge variant="outline">VIT</Badge>
                <Badge variant="outline">SRM</Badge>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="VocaBee Learning Platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-secondary text-white p-3 rounded-xl shadow-soft animate-bounce-gentle">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-success text-white p-3 rounded-xl shadow-soft animate-bounce-gentle delay-300">
              <Star className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;