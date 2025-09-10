import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import AssessmentQuiz from "./pages/AssessmentQuiz";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import Settings from "./pages/Settings";

// Grammar Modules
import GrammarLevels from "./pages/modules/GE/GrammarLevels";
import BasicGrammar from "./pages/modules/GE/BasicGrammar";
import IntermediateL1Grammar from "./pages/modules/GE/IntermediateL1Grammar";
import IntermediateL2Grammar from "./pages/modules/GE/IntermediateL2Grammar";
import ExpertL1Grammar from "./pages/modules/GE/ExpertL1Grammar";
import ExpertL2Grammar from "./pages/modules/GE/ExpertL2Grammar";
import ProficientGrammar from "./pages/modules/GE/ProficientGrammar";
import GrammarQuiz from "./pages/modules/GE/GrammarQuiz";

// Vocabulary & Communication Modules
import VocabularyLevels from "./pages/modules/VB/VocabularyLevels";
import BasicVocabulary from "./pages/modules/VB/BasicVocabulary";
import CommunicationLevels from "./pages/modules/PC/CommunicationLevels";
import BasicCommunication from "./pages/modules/PC/BasicCommunication";

// LSRW Modules
import ListeningLevels from "./pages/lsrw/listening/ListeningLevels";
import BasicListening from "./pages/lsrw/listening/BasicListening";
import IntermediateL1Listening from "./pages/lsrw/listening/IntermediateL1Listening";
import IntermediateL2Listening from "./pages/lsrw/listening/IntermediateL2Listening";
import ExpertL1Listening from "./pages/lsrw/listening/ExpertL1Listening";
import ExpertL2Listening from "./pages/lsrw/listening/ExpertL2Listening";
import ProficientListening from "./pages/lsrw/listening/ProficientListening";

import ReadingLevels from "./pages/lsrw/reading/ReadingLevels";
import BasicReading from "./pages/lsrw/reading/BasicReading";
import IntermediateL1Reading from "./pages/lsrw/reading/IntermediateL1Reading";
import IntermediateL2Reading from "./pages/lsrw/reading/IntermediateL2Reading";
import ExpertL1Reading from "./pages/lsrw/reading/ExpertL1Reading";
import ExpertL2Reading from "./pages/lsrw/reading/ExpertL2Reading";
import ProficientReading from "./pages/lsrw/reading/ProficientReading";

import NotFound from "./pages/NotFound";

// Context
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />

            {/* Onboarding / Assessment */}
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/assessment" element={<AssessmentQuiz />} />

            {/* User Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/settings" element={<Settings />} />

            {/* Grammar Modules */}
            <Route path="/modules/grammar-levels" element={<GrammarLevels />} />
            <Route path="/modules/grammar/basic" element={<BasicGrammar />} />
            <Route path="/modules/grammar/intermediate-l1" element={<IntermediateL1Grammar />} />
            <Route path="/modules/grammar/intermediate-l2" element={<IntermediateL2Grammar />} />
            <Route path="/modules/grammar/expert-l1" element={<ExpertL1Grammar />} />
            <Route path="/modules/grammar/expert-l2" element={<ExpertL2Grammar />} />
            <Route path="/modules/grammar/proficient" element={<ProficientGrammar />} />
            <Route path="/modules/grammar/basic/quiz/:topic" element={<GrammarQuiz />} />
            <Route path="/modules/grammar/intermediate-l1/quiz/:topic" element={<GrammarQuiz />} />
            <Route path="/modules/grammar/intermediate-l2/quiz/:topic" element={<GrammarQuiz />} />
            <Route path="/modules/grammar/expert-l1/quiz/:topic" element={<GrammarQuiz />} />
            <Route path="/modules/grammar/expert-l2/quiz/:topic" element={<GrammarQuiz />} />
            <Route path="/modules/grammar/proficient/quiz/:topic" element={<GrammarQuiz />} />

            {/* Vocabulary Modules */}
            <Route path="/modules/vocabulary-levels" element={<VocabularyLevels />} />
            <Route path="/modules/vocabulary/basic" element={<BasicVocabulary />} />

            {/* Communication Modules */}
            <Route path="/modules/communication-levels" element={<CommunicationLevels />} />
            <Route path="/modules/communication/basic" element={<BasicCommunication />} />

            {/* Listening Modules */}
            <Route path="/lsrw/listening" element={<ListeningLevels />} />
            <Route path="/lsrw/listening-levels" element={<ListeningLevels />} />
            <Route path="/lsrw/listening/basic" element={<BasicListening />} />
            <Route path="/lsrw/listening/intermediate-l1" element={<IntermediateL1Listening />} />
            <Route path="/lsrw/listening/intermediate-l2" element={<IntermediateL2Listening />} />
            <Route path="/lsrw/listening/expert-l1" element={<ExpertL1Listening />} />
            <Route path="/lsrw/listening/expert-l2" element={<ExpertL2Listening />} />
            <Route path="/lsrw/listening/proficient" element={<ProficientListening />} />

            {/* Reading Modules */}
            <Route path="/lsrw/reading-levels" element={<ReadingLevels />} />
            <Route path="/lsrw/reading/basic" element={<BasicReading />} />
            <Route path="/lsrw/reading/intermediate-l1" element={<IntermediateL1Reading />} />
            <Route path="/lsrw/reading/intermediate-l2" element={<IntermediateL2Reading />} />
            <Route path="/lsrw/reading/expert-l1" element={<ExpertL1Reading />} />
            <Route path="/lsrw/reading/expert-l2" element={<ExpertL2Reading />} />
            <Route path="/lsrw/reading/proficient" element={<ProficientReading />} />

            {/* Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
