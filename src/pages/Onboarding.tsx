import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { GraduationCap, Languages, Target, User, ArrowRight } from "lucide-react";
import { useUser } from "../context/UserContext";

interface ProfileData {
  qualification: string;
  preferredLanguage: string;
  goal: string;
  comfortLevel: string;
}

const Onboarding = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState<ProfileData>({
    qualification: "",
    preferredLanguage: "",
    goal: "",
    comfortLevel: ""
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => step < totalSteps && setStep(step + 1);
  const handlePrevious = () => step > 1 && setStep(step - 1);

  const handleSubmit = async () => {
    if (!user) return alert("User not found. Please log in again.");

    try {
      const res = await fetch("http://localhost:4000/api/onboarded", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });

      if (!res.ok) {
        const data = await res.json();
        return alert(data.message || "Failed to update onboarding");
      }

      navigate("/assessment");
    } catch {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-learning flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Let's Personalize Your Learning</h1>
          <p className="text-muted-foreground mt-2">Answer a few questions to customize your experience</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

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
            {step === 1 && (
              <RadioGroup value={profileData.qualification} onValueChange={v => setProfileData({...profileData, qualification: v})}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="school" id="school" /><Label htmlFor="school">School Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="diploma" id="diploma" /><Label htmlFor="diploma">Diploma Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="engineering" id="engineering" /><Label htmlFor="engineering">Engineering Student</Label>
                </div>
              </RadioGroup>
            )}

            {step === 2 && (
              <Select value={profileData.preferredLanguage} onValueChange={v => setProfileData({...profileData, preferredLanguage: v})}>
                <SelectTrigger><SelectValue placeholder="Select language" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="marathi">Marathi</SelectItem>
                </SelectContent>
              </Select>
            )}

            {step === 3 && (
              <RadioGroup value={profileData.goal} onValueChange={v => setProfileData({...profileData, goal: v})}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="interviews" id="interviews" /><Label htmlFor="interviews">Job Interviews</Label>
                </div>
              </RadioGroup>
            )}

            {step === 4 && (
              <RadioGroup value={profileData.comfortLevel} onValueChange={v => setProfileData({...profileData, comfortLevel: v})}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" /><Label htmlFor="beginner">Beginner</Label>
                </div>
              </RadioGroup>
            )}

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>Previous</Button>
              {step < totalSteps ? (
                <Button variant="hero" onClick={handleNext}>Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
              ) : (
                <Button variant="hero" onClick={handleSubmit}>Complete Setup <ArrowRight className="w-4 h-4 ml-2" /></Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
