import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ import providers
import { LanguageProvider } from "@/context/languageContext";
import { OnboardingProvider } from "@/context/OnboardingContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <OnboardingProvider>
      <App />
    </OnboardingProvider>
  </LanguageProvider>
);
