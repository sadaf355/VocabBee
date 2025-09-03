import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import AssessmentQuiz from "./pages/AssessmentQuiz";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import Settings from "./pages/Settings";
import GrammarEssentials from "./pages/modules/GrammarEssentials";
import GrammarLevels from "./pages/modules/GrammarLevels";
import BasicGrammar from "./pages/modules/BasicGrammar";
import IntermediateL1Grammar from "./pages/modules/IntermediateL1Grammar";
import IntermediateL2Grammar from "./pages/modules/IntermediateL2Grammar";
import ExpertL1Grammar from "./pages/modules/ExpertL1Grammar";
import ExpertL2Grammar from "./pages/modules/ExpertL2Grammar";
import ProficientGrammar from "./pages/modules/ProficientGrammar";
import GrammarQuiz from "./pages/modules/quiz/GrammarQuiz";
import VocabularyLevels from "./pages/modules/VocabularyLevels";
import BasicVocabulary from "./pages/modules/BasicVocabulary";
import CommunicationLevels from "./pages/modules/CommunicationLevels";
import BasicCommunication from "./pages/modules/BasicCommunication";
import PronunciationLevels from "./pages/modules/PronunciationLevels";
import BasicPronunciation from "./pages/modules/BasicPronunciation";
import ListeningSkills from "./pages/lsrw/ListeningSkills";
import ListeningLevels from "./pages/lsrw/ListeningLevels";
import BasicListening from "./pages/lsrw/quizzes/BasicListening";
import IntermediateL1Listening from "./pages/lsrw/quizzes/IntermediateL1Listening";
import IntermediateL2Listening from "./pages/lsrw/quizzes/IntermediateL2Listening";
import ExpertL1Listening from "./pages/lsrw/quizzes/ExpertL1Listening";
import ExpertL2Listening from "./pages/lsrw/quizzes/ExpertL2Listening";
import ProficientListening from "./pages/lsrw/quizzes/ProficientListening";
import ReadingLevels from "./pages/lsrw/ReadingLevels";
import BasicReading from "./pages/lsrw/reading/BasicReading";
import IntermediateL1Reading from "./pages/lsrw/reading/IntermediateL1Reading";
import IntermediateL2Reading from "./pages/lsrw/reading/IntermediateL2Reading";
import ExpertL1Reading from "./pages/lsrw/reading/ExpertL1Reading";
import ExpertL2Reading from "./pages/lsrw/reading/ExpertL2Reading";
import ProficientReading from "./pages/lsrw/reading/ProficientReading";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/assessment" element={<AssessmentQuiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/modules/grammar-essentials" element={<GrammarEssentials />} />
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
          
          {/* Vocabulary Routes */}
          <Route path="/modules/vocabulary-levels" element={<VocabularyLevels />} />
          <Route path="/modules/vocabulary/basic" element={<BasicVocabulary />} />
          
          {/* Communication Routes */}
          <Route path="/modules/communication-levels" element={<CommunicationLevels />} />
          <Route path="/modules/communication/basic" element={<BasicCommunication />} />
          
          {/* Pronunciation Routes */}
          <Route path="/modules/pronunciation-levels" element={<PronunciationLevels />} />
          <Route path="/modules/pronunciation/basic" element={<BasicPronunciation />} />
          
          <Route path="/lsrw/listening" element={<ListeningSkills />} />
          <Route path="/lsrw/listening-levels" element={<ListeningLevels />} />
          <Route path="/lsrw/listening/basic" element={<BasicListening />} />
          <Route path="/lsrw/listening/intermediate-l1" element={<IntermediateL1Listening />} />
          <Route path="/lsrw/listening/intermediate-l2" element={<IntermediateL2Listening />} />
          <Route path="/lsrw/listening/expert-l1" element={<ExpertL1Listening />} />
          <Route path="/lsrw/listening/expert-l2" element={<ExpertL2Listening />} />
          <Route path="/lsrw/listening/proficient" element={<ProficientListening />} />
          <Route path="/lsrw/reading-levels" element={<ReadingLevels />} />
          <Route path="/lsrw/reading/basic" element={<BasicReading />} />
          <Route path="/lsrw/reading/intermediate-l1" element={<IntermediateL1Reading />} />
          <Route path="/lsrw/reading/intermediate-l2" element={<IntermediateL2Reading />} />
          <Route path="/lsrw/reading/expert-l1" element={<ExpertL1Reading />} />
          <Route path="/lsrw/reading/expert-l2" element={<ExpertL2Reading />} />
          <Route path="/lsrw/reading/proficient" element={<ProficientReading />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
