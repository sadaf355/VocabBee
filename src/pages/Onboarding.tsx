import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ArrowRight, User, GraduationCap, Target, Languages } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    qualification: "",
    preferredLanguage: "",
    goal: "",
    comfortLevel: ""
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Profile data:", profileData);
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-gradient-learning flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src="/src/assets/vocabee-logo-white.png" alt="VocabBee" className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold text-primary">VocabBee</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Let's Personalize Your Learning</h1>
          <p className="text-muted-foreground mt-2">Answer a few questions to customize your experience</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              {step === 1 && <GraduationCap className="w-6 h-6 text-primary" />}
              {step === 2 && <Languages className="w-6 h-6 text-primary" />}
              {step === 3 && <Target className="w-6 h-6 text-primary" />}
              {step === 4 && <User className="w-6 h-6 text-primary" />}
              
              <div>
                <CardTitle>
                  {step === 1 && "What's your qualification?"}
                  {step === 2 && "Preferred language for learning?"}
                  {step === 3 && "What's your main goal?"}
                  {step === 4 && "Your comfort level in English?"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Help us understand your educational background"}
                  {step === 2 && "Choose the language you're most comfortable with"}
                  {step === 3 && "Tell us what you want to achieve"}
                  {step === 4 && "Rate your current English proficiency"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Qualification */}
            {step === 1 && (
              <RadioGroup
                value={profileData.qualification}
                onValueChange={(value) => setProfileData({...profileData, qualification: value})}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="school" id="school" />
                  <Label htmlFor="school">School Student (10th/12th)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="diploma" id="diploma" />
                  <Label htmlFor="diploma">Diploma Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="engineering" id="engineering" />
                  <Label htmlFor="engineering">Engineering Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="graduate" id="graduate" />
                  <Label htmlFor="graduate">Graduate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional">Working Professional</Label>
                </div>
              </RadioGroup>
            )}

            {/* Step 2: Preferred Language */}
            {step === 2 && (
              <div className="space-y-4">
                <Select 
                  value={profileData.preferredLanguage} 
                  onValueChange={(value) => setProfileData({...profileData, preferredLanguage: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                    <SelectItem value="marathi">Marathi</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="gujarati">Gujarati</SelectItem>
                    <SelectItem value="kannada">Kannada</SelectItem>
                    <SelectItem value="malayalam">Malayalam</SelectItem>
                    <SelectItem value="punjabi">Punjabi</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <RadioGroup
                value={profileData.goal}
                onValueChange={(value) => setProfileData({...profileData, goal: value})}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="interviews" id="interviews" />
                  <Label htmlFor="interviews">Job Interviews</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="speaking" id="speaking" />
                  <Label htmlFor="speaking">Public Speaking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fluency" id="fluency" />
                  <Label htmlFor="fluency">Overall Fluency</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="writing" id="writing" />
                  <Label htmlFor="writing">Professional Writing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical">Technical Communication</Label>
                </div>
              </RadioGroup>
            )}

            {/* Step 4: Comfort Level */}
            {step === 4 && (
              <RadioGroup
                value={profileData.comfortLevel}
                onValueChange={(value) => setProfileData({...profileData, comfortLevel: value})}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner - I struggle with basic English</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="elementary" id="elementary" />
                  <Label htmlFor="elementary">Elementary - I can understand simple sentences</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate - I can have basic conversations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Advanced - I'm comfortable but want to improve</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fluent" id="fluent" />
                  <Label htmlFor="fluent">Fluent - I want to perfect my skills</Label>
                </div>
              </RadioGroup>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step < totalSteps ? (
                <Button variant="hero" onClick={handleNext}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button variant="hero" onClick={handleSubmit}>
                  Complete Setup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;