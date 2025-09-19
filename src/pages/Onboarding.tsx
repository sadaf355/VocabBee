import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  User,
  GraduationCap,
  Target,
  Languages,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/languageContext";
import { useOnboarding, Level } from "@/context/OnboardingContext";

const Onboarding = () => {
  const navigate = useNavigate();
  const { data, updateData, currentStep, setCurrentStep, setIsCompleted } =
    useOnboarding();
  const { t, setLanguage } = useLanguage();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const isStepAnswered =
    (currentStep === 1 && !!data.preferredLanguage) ||
    (currentStep === 2 && !!data.qualification) ||
    (currentStep === 3 && !!data.goal) ||
    (currentStep === 4 && !!data.comfortLevel);

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    console.log("✅ Final onboarding data:", data);
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-gradient-learning flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src="/src/assets/vocabee-logo-white.png"
                alt="VocabBee"
                className="w-8 h-8"
              />
            </div>
            <span className="text-2xl font-bold text-primary">VocabBee</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {t("onboarding.step" + currentStep + ".title")}
          </h1>
          <p className="text-muted-foreground mt-2">
            {t("onboarding.step" + currentStep + ".subtitle")}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>
              {t("onboarding.step")} {currentStep} {t("onboarding.of")}{" "}
              {totalSteps}
            </span>
            <span>
              {Math.round(progress)}% {t("onboarding.complete")}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Card */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              {currentStep === 1 && <Languages className="w-6 h-6 text-primary" />}
              {currentStep === 2 && (
                <GraduationCap className="w-6 h-6 text-primary" />
              )}
              {currentStep === 3 && <Target className="w-6 h-6 text-primary" />}
              {currentStep === 4 && <User className="w-6 h-6 text-primary" />}

              <div>
                <CardTitle>
                  {t("onboarding.step" + currentStep + ".title")}
                </CardTitle>
                <CardDescription>
                  {t("onboarding.step" + currentStep + ".subtitle")}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Preferred Language */}
            {currentStep === 1 && (
              <Select
                value={data.preferredLanguage}
                onValueChange={(value) => {
                  updateData("preferredLanguage", value);
                  setLanguage(value as any);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("selectLanguage")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">{t("english")}</SelectItem>
                  <SelectItem value="hindi">{t("hindi")}</SelectItem>
                  <SelectItem value="marathi">{t("marathi")}</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Step 2: Qualification */}
            {currentStep === 2 && (
              <RadioGroup
                value={data.qualification}
                onValueChange={(value) => updateData("qualification", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="school" id="school" />
                  <Label htmlFor="school">{t("onboarding.step2.school")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="diploma" id="diploma" />
                  <Label htmlFor="diploma">{t("onboarding.step2.diploma")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="engineering" id="engineering" />
                  <Label htmlFor="engineering">{t("onboarding.step2.engineering")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="graduate" id="graduate" />
                  <Label htmlFor="graduate">{t("onboarding.step2.graduate")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional">{t("onboarding.step2.professional")}</Label>
                </div>
              </RadioGroup>
            )}

            {/* Step 3: Goal */}
            {currentStep === 3 && (
              <RadioGroup
                value={data.goal}
                onValueChange={(value) => updateData("goal", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="interviews" id="interviews" />
                  <Label htmlFor="interviews">{t("onboarding.step3.interviews")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="speaking" id="speaking" />
                  <Label htmlFor="speaking">{t("onboarding.step3.speaking")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fluency" id="fluency" />
                  <Label htmlFor="fluency">{t("onboarding.step3.fluency")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="writing" id="writing" />
                  <Label htmlFor="writing">{t("onboarding.step3.writing")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical">{t("onboarding.step3.technical")}</Label>
                </div>
              </RadioGroup>
            )}

            {/* Step 4: Comfort Level */}
            {currentStep === 4 && (
              <RadioGroup
                value={data.comfortLevel}
                onValueChange={(value) => updateData("comfortLevel", value as Level)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic">{t("onboarding.step4.basic")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate1" id="intermediate1" />
                  <Label htmlFor="intermediate1">{t("onboarding.step4.intermediate1")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate2" id="intermediate2" />
                  <Label htmlFor="intermediate2">{t("onboarding.step4.intermediate2")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert1" id="expert1" />
                  <Label htmlFor="expert1">{t("onboarding.step4.expert1")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert2" id="expert2" />
                  <Label htmlFor="expert2">{t("onboarding.step4.expert2")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="proficient" id="proficient" />
                  <Label htmlFor="proficient">{t("onboarding.step4.proficient")}</Label>
                </div>
              </RadioGroup>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                {t("buttons.previous")}
              </Button>
              {currentStep < totalSteps ? (
                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={!isStepAnswered}
                >
                  {t("buttons.next")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  variant="hero"
                  onClick={handleSubmit}
                  disabled={!isStepAnswered}
                >
                  {t("buttons.complete")}
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
