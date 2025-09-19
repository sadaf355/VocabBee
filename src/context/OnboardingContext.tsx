import { createContext, useContext, useState, ReactNode } from "react";

// Define Level type matching quiz data levels exactly
export type Level =
  | "basic"
  | "intermediate1"
  | "intermediate2"
  | "expert1"
  | "expert2"
  | "proficient";

interface OnboardingData {
  preferredLanguage: string;
  qualification: string;
  goal: string;
  comfortLevel: Level; // Use Level type here for strict typing
}

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (field: keyof OnboardingData, value: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isCompleted: boolean;
  setIsCompleted: (value: boolean) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingData>({
    preferredLanguage: "",
    qualification: "",
    goal: "",
    comfortLevel: "basic" // default value
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const updateData = (field: keyof OnboardingData, value: string) => {
    // Type cast value when updating comfortLevel
    if (field === "comfortLevel") {
      setData((prev) => ({ ...prev, [field]: value as Level }));
    } else {
      setData((prev) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        updateData,
        currentStep,
        setCurrentStep,
        isCompleted,
        setIsCompleted,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
};
