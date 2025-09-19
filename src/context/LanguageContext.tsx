import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "english" | "hindi" | "marathi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, any>> = {
  english: {
    selectLanguage: "Select language",
    english: "English",
    hindi: "Hindi",
    marathi: "Marathi",
    navbar: {
      dashboard: "Dashboard",
      settings: "Settings",
      contact: "Contact Us",
    },
    buttons: {
      next: "Next",
      previous: "Previous",
      complete: "Complete Setup",
    },
    onboarding: {
      step1: {
        title: "Choose Your Language",
        subtitle: "Select your preferred language",
      },
      step2: {
        title: "Your Qualification",
        subtitle: "Tell us about your current education level",
        school: "School",
        diploma: "Diploma",
        engineering: "Engineering",
        graduate: "Graduate",
        professional: "Professional",
      },
      step3: {
        title: "Your Goal",
        subtitle: "What do you want to achieve?",
        interviews: "Crack interviews",
        speaking: "Speak confidently",
        fluency: "Become fluent",
        writing: "Improve writing skills",
        technical: "Master technical English",
      },
      step4: {
        title: "Your comfort level in English?",
        subtitle: "Rate your proficiency",
        basic: "Basic",
        intermediate1: "Intermediate 1",
        intermediate2: "Intermediate 2",
        expert1: "Expert 1",
        expert2: "Expert 2",
        proficient: "Proficient",
      },
      step: "Step",
      of: "of",
      complete: "complete",
    },
    assessment: {
      title: "Assessment",
      subtitle: "Test your knowledge with these questions",
      question: "Question",
      remaining: "remaining",
      previous: "Previous",
      nextQuestion: "Next Question",
      completeQuiz: "Complete Quiz",
    },
  },

  hindi: {
    selectLanguage: "भाषा चुनें",
    english: "अंग्रेज़ी",
    hindi: "हिंदी",
    marathi: "मराठी",
    navbar: {
      dashboard: "डैशबोर्ड",
      settings: "सेटिंग्स",
      contact: "संपर्क करें",
    },
    buttons: {
      next: "आगे",
      previous: "पिछला",
      complete: "सेटअप पूरा करें",
    },
    onboarding: {
      step1: {
        title: "अपनी भाषा चुनें",
        subtitle: "वह भाषा चुनें जिसमें आप सहज हैं",
      },
      step2: {
        title: "आपकी योग्यता",
        subtitle: "अपनी वर्तमान शिक्षा स्तर बताएं",
        school: "स्कूल",
        diploma: "डिप्लोमा",
        engineering: "इंजीनियरिंग",
        graduate: "स्नातक",
        professional: "पेशेवर",
      },
      step3: {
        title: "आपका लक्ष्य",
        subtitle: "आप क्या हासिल करना चाहते हैं?",
        interviews: "इंटरव्यू में सफलता",
        speaking: "आत्मविश्वास से बोलना",
        fluency: "धारा प्रवाही बनना",
        writing: "लेखन सुधारें",
        technical: "तकनीकी अंग्रेज़ी सीखें",
      },
      step4: {
        title: "आपकी अंग्रेज़ी में सहजता?",
        subtitle: "अपनी दक्षता चुनें",
        basic: "मूल",
        intermediate1: "प्रारंभिक 1",
        intermediate2: "प्रारंभिक 2",
        expert1: "विशेषज्ञ 1",
        expert2: "विशेषज्ञ 2",
        proficient: "निपुण",
      },
      step: "चरण",
      of: "में से",
      complete: "पूरा",
    },
    assessment: {
      title: "मूल्यांकन",
      subtitle: "इन सवालों के साथ अपने ज्ञान को परखें",
      question: "सवाल",
      remaining: "शेष",
      previous: "पिछला",
      nextQuestion: "अगला सवाल",
      completeQuiz: "क्विज़ पूरा करें",
    },
  },

  marathi: {
    selectLanguage: "भाषा निवडा",
    english: "इंग्रजी",
    hindi: "हिंदी",
    marathi: "मराठी",
    navbar: {
      dashboard: "डॅशबोर्ड",
      settings: "सेटिंग्स",
      contact: "संपर्क",
    },
    buttons: {
      next: "पुढे",
      previous: "मागील",
      complete: "सेटअप पूर्ण करा",
    },
    onboarding: {
      step1: {
        title: "तुमची भाषा निवडा",
        subtitle: "ज्या भाषेत तुम्हाला सोईस्कर आहे ती निवडा",
      },
      step2: {
        title: "तुमचे शैक्षणिक पात्रता",
        subtitle: "तुमच्या सध्याच्या शिक्षण पातळीबद्दल सांगा",
        school: "शाळा",
        diploma: "डिप्लोमा",
        engineering: "इंजिनीअरिंग",
        graduate: "पदवीधर",
        professional: "व्यावसायिक",
      },
      step3: {
        title: "तुमचे उद्दिष्ट",
        subtitle: "तुम्हाला काय साध्य करायचे आहे?",
        interviews: "इंटरव्ह्यू तयारी",
        speaking: "आत्मविश्वासाने बोला",
        fluency: "धाराप्रवाही व्हा",
        writing: "लेखन सुधार करा",
        technical: "तांत्रिक इंग्रजी शिका",
      },
      step4: {
        title: "तुमची इंग्रजीतील सोय?",
        subtitle: "तुमची प्रावीण्य निवडा",
        basic: "मूलभूत",
        intermediate1: "प्रारंभिक 1",
        intermediate2: "प्रारंभिक 2",
        expert1: "तज्ज्ञ 1",
        expert2: "तज्ज्ञ 2",
        proficient: "प्रवीण",
      },
      step: "पायरी",
      of: "पैकी",
      complete: "पूर्ण",
    },
    assessment: {
      title: "मूल्यमापन",
      subtitle: "या प्रश्नांद्वारे तुमचं ज्ञान तपासा",
      question: "प्रश्न",
      remaining: "शिल्लक",
      previous: "मागील",
      nextQuestion: "पुढील प्रश्न",
      completeQuiz: "क्विझ पूर्ण करा",
    },
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || "english"
  );

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const value = key.split(".").reduce((acc: any, part: string) => {
      if (acc && part in acc) {
        return acc[part];
      }
      return undefined;
    }, translations[language]);

    if (typeof value === "string") {
      return value;
    } else {
      return `[MISSING:${key}]`;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
