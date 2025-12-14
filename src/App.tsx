import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Flashcards from "./pages/Flashcards";
import WordMatch from "./pages/WordMatch";
import SpellingBee from "./pages/SpellingBee";
import SynonymFinder from "./pages/SynonymFinder";
import AntonymQuest from "./pages/AntonymQuest";
import WordBuilder from "./pages/WordBuilder";
import PrefixMaster from "./pages/PrefixMaster";
import SuffixLab from "./pages/SuffixLab";
import TenseTrainer from "./pages/TenseTrainer";
import ArticleExpert from "./pages/ArticleExpert";
import PrepositionPro from "./pages/PrepositionPro";
import VerbForms from "./pages/VerbForms";
import SentenceFix from "./pages/SentenceFix";
import BookClub from "./pages/BookClub";
import QuoteQuiz from "./pages/QuoteQuiz";
import ContextClues from "./pages/ContextClues";
import StoryWriter from "./pages/StoryWriter";
import EmailWriter from "./pages/EmailWriter";
import EssayHelper from "./pages/EssayHelper";
import ParagraphPro from "./pages/ParagraphPro";
import DialogueMaker from "./pages/DialogueMaker";
import DescriptionLab from "./pages/DescriptionLab";
import LetterWriter from "./pages/LetterWriter";
import ReviewWriter from "./pages/ReviewWriter";
import PodcastHub from "./pages/PodcastHub";
import Dictation from "./pages/Dictation";
import SongLyrics from "./pages/SongLyrics";
import AccentTrainer from "./pages/AccentTrainer";
import AudioStories from "./pages/AudioStories";
import InterviewPrep from "./pages/InterviewPrep";
import TedTalks from "./pages/TedTalks";
import FillTheGap from "./pages/FillTheGap";
import Pronunciation from "./pages/Pronunciation";
import TongueTwisters from "./pages/TongueTwisters";
import RecordReview from "./pages/RecordReview";
import DebateClub from "./pages/DebateClub";
import RolePlay from "./pages/RolePlay";
import Presentation from "./pages/Presentation";
import PhoneEnglish from "./pages/PhoneEnglish";
import DailyChat from "./pages/DailyChat";
import IELTSPrep from "./pages/IELTSPrep";
import IELTSReading from "./pages/IELTSReading";
import TOEFLPrep from "./pages/TOEFLPrep";
import Cambridge from "./pages/Cambridge";
import MockTests from "./pages/MockTests";
import TimerDrill from "./pages/TimerDrill";
import PracticePlus from "./pages/PracticePlus";

// ... existing imports




import Crossword from "./pages/Crossword";
import WordSearch from "./pages/WordSearch";
import Punctuation from "./pages/Punctuation";
import PartsOfSpeech from "./pages/PartsOfSpeech";
import ClauseBuilder from "./pages/ClauseBuilder";
import SpeedReader from "./pages/SpeedReader";
import StoryTime from "./pages/StoryTime";
import NewsReader from "./pages/NewsReader";
import Comprehension from "./pages/Comprehension";
import PoetryCorner from "./pages/PoetryCorner";
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
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/word-match" element={<WordMatch />} />
          <Route path="/word-search" element={<WordSearch />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/spelling-bee" element={<SpellingBee />} />
          <Route path="/synonym-finder" element={<SynonymFinder />} />
          <Route path="/antonym-quest" element={<AntonymQuest />} />
          <Route path="/word-builder" element={<WordBuilder />} />
          <Route path="/prefix-master" element={<PrefixMaster />} />
          <Route path="/suffix-lab" element={<SuffixLab />} />
          <Route path="/tense-trainer" element={<TenseTrainer />} />
          <Route path="/article-expert" element={<ArticleExpert />} />
          <Route path="/preposition-pro" element={<PrepositionPro />} />
          <Route path="/verb-forms" element={<VerbForms />} />
          <Route path="/sentence-fix" element={<SentenceFix />} />
          <Route path="/punctuation" element={<Punctuation />} />
          <Route path="/parts-of-speech" element={<PartsOfSpeech />} />
          <Route path="/clause-builder" element={<ClauseBuilder />} />
          <Route path="/speed-reader" element={<SpeedReader />} />
          <Route path="/story-time" element={<StoryTime />} />
          <Route path="/news-reader" element={<NewsReader />} />
          <Route path="/comprehension" element={<Comprehension />} />
          <Route path="/poetry-corner" element={<PoetryCorner />} />
          <Route path="/book-club" element={<BookClub />} />
          <Route path="/quote-quiz" element={<QuoteQuiz />} />
          <Route path="/context-clues" element={<ContextClues />} />
          <Route path="/essay-helper" element={<EssayHelper />} />
          <Route path="/story-writer" element={<StoryWriter />} />
          <Route path="/email-writer" element={<EmailWriter />} />

          <Route path="/paragraph-pro" element={<ParagraphPro />} />
          <Route path="/dialogue-maker" element={<DialogueMaker />} />
          <Route path="/description-lab" element={<DescriptionLab />} />
          <Route path="/letter-writer" element={<LetterWriter />} />
          <Route path="/review-writer" element={<ReviewWriter />} />
          <Route path="/podcast-hub" element={<PodcastHub />} />
          <Route path="/dictation" element={<Dictation />} />
          <Route path="/song-lyrics" element={<SongLyrics />} />
          <Route path="/accent-trainer" element={<AccentTrainer />} />
          <Route path="/audio-stories" element={<AudioStories />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/ted-talks" element={<TedTalks />} />
          <Route path="/fill-the-gap" element={<FillTheGap />} />
          <Route path="/pronunciation" element={<Pronunciation />} />
          <Route path="/tongue-twisters" element={<TongueTwisters />} />
          <Route path="/record-review" element={<RecordReview />} />
          <Route path="/debate-club" element={<DebateClub />} />
          <Route path="/role-play" element={<RolePlay />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/phone-english" element={<PhoneEnglish />} />
          <Route path="/daily-chat" element={<DailyChat />} />
          <Route path="/ielts-prep" element={<IELTSPrep />} />
          <Route path="/ielts-reading" element={<IELTSReading />} />
          <Route path="/toefl-prep" element={<TOEFLPrep />} />
          <Route path="/cambridge" element={<Cambridge />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/timer-drill" element={<TimerDrill />} />
          <Route path="/practice-plus" element={<PracticePlus />} />











          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
