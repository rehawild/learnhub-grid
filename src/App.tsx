import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToolLoading } from "@/components/core/ToolLoading";

// Standard Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy Loaded Tool Pages
const Flashcards = lazy(() => import("./pages/Flashcards"));
const WordMatch = lazy(() => import("./pages/WordMatch"));
const SpellingBee = lazy(() => import("./pages/SpellingBee"));
const SynonymFinder = lazy(() => import("./pages/SynonymFinder"));
const AntonymQuest = lazy(() => import("./pages/AntonymQuest"));
const Collocations = lazy(() => import("./pages/Collocations"));
const IdiomMaster = lazy(() => import("./pages/IdiomMaster"));
const BritishVsUS = lazy(() => import("./pages/BritishVsUS"));
const PhrasalVerbs = lazy(() => import("./pages/PhrasalVerbs"));
const SlangSchool = lazy(() => import("./pages/SlangSchool"));
const Expressions = lazy(() => import("./pages/Expressions"));
const DailyPhrase = lazy(() => import("./pages/DailyPhrase"));
const Proverbs = lazy(() => import("./pages/Proverbs"));
const WordBuilder = lazy(() => import("./pages/WordBuilder"));
const PrefixMaster = lazy(() => import("./pages/PrefixMaster"));
const SuffixLab = lazy(() => import("./pages/SuffixLab"));
const TenseTrainer = lazy(() => import("./pages/TenseTrainer"));
const ArticleExpert = lazy(() => import("./pages/ArticleExpert"));
const PrepositionPro = lazy(() => import("./pages/PrepositionPro"));
const VerbForms = lazy(() => import("./pages/VerbForms"));
const SentenceFix = lazy(() => import("./pages/SentenceFix"));
const BookClub = lazy(() => import("./pages/BookClub"));
const QuoteQuiz = lazy(() => import("./pages/QuoteQuiz"));
const ContextClues = lazy(() => import("./pages/ContextClues"));
const StoryWriter = lazy(() => import("./pages/StoryWriter"));
const EmailWriter = lazy(() => import("./pages/EmailWriter"));
const EssayHelper = lazy(() => import("./pages/EssayHelper"));
const ParagraphPro = lazy(() => import("./pages/ParagraphPro"));
const DialogueMaker = lazy(() => import("./pages/DialogueMaker"));
const DescriptionLab = lazy(() => import("./pages/DescriptionLab"));
const LetterWriter = lazy(() => import("./pages/LetterWriter"));
const ReviewWriter = lazy(() => import("./pages/ReviewWriter"));
const PodcastHub = lazy(() => import("./pages/PodcastHub"));
const Dictation = lazy(() => import("./pages/Dictation"));
const SongLyrics = lazy(() => import("./pages/SongLyrics"));
const AccentTrainer = lazy(() => import("./pages/AccentTrainer"));
const AudioStories = lazy(() => import("./pages/AudioStories"));
const InterviewPrep = lazy(() => import("./pages/InterviewPrep"));
const TedTalks = lazy(() => import("./pages/TedTalks"));
const FillTheGap = lazy(() => import("./pages/FillTheGap"));
const Pronunciation = lazy(() => import("./pages/Pronunciation"));
const TongueTwisters = lazy(() => import("./pages/TongueTwisters"));
const RecordReview = lazy(() => import("./pages/RecordReview"));
const DebateClub = lazy(() => import("./pages/DebateClub"));
const RolePlay = lazy(() => import("./pages/RolePlay"));
const Presentation = lazy(() => import("./pages/Presentation"));
const PhoneEnglish = lazy(() => import("./pages/PhoneEnglish"));
const DailyChat = lazy(() => import("./pages/DailyChat"));
const IELTSPrep = lazy(() => import("./pages/IELTSPrep"));
const IELTSReading = lazy(() => import("./pages/IELTSReading"));
const TOEFLPrep = lazy(() => import("./pages/TOEFLPrep"));
const Cambridge = lazy(() => import("./pages/Cambridge"));
const MockTests = lazy(() => import("./pages/MockTests"));
const TimerDrill = lazy(() => import("./pages/TimerDrill"));
const PracticePlus = lazy(() => import("./pages/PracticePlus"));
const JargonBuster = lazy(() => import("./pages/JargonBuster"));
const Networking = lazy(() => import("./pages/Networking"));
const Pitching = lazy(() => import("./pages/Pitching"));
const ReportWriting = lazy(() => import("./pages/ReportWriting"));
const ResumeHelp = lazy(() => import("./pages/ResumeHelp"));
const SmallTalk = lazy(() => import("./pages/SmallTalk"));
const Negotiation = lazy(() => import("./pages/Negotiation"));
const MeetingTalk = lazy(() => import("./pages/MeetingTalk"));
const Riddles = lazy(() => import("./pages/Riddles"));
const MemoryMatch = lazy(() => import("./pages/MemoryMatch"));
const Trivia = lazy(() => import("./pages/Trivia"));
const WordChain = lazy(() => import("./pages/WordChain"));
const Scrabble = lazy(() => import("./pages/Scrabble"));
const Hangman = lazy(() => import("./pages/Hangman"));
const Crossword = lazy(() => import("./pages/Crossword"));
const WordSearch = lazy(() => import("./pages/WordSearch"));
const Punctuation = lazy(() => import("./pages/Punctuation"));
const PartsOfSpeech = lazy(() => import("./pages/PartsOfSpeech"));
const ClauseBuilder = lazy(() => import("./pages/ClauseBuilder"));
const SpeedReader = lazy(() => import("./pages/SpeedReader"));
const StoryTime = lazy(() => import("./pages/StoryTime"));
const NewsReader = lazy(() => import("./pages/NewsReader"));
const Comprehension = lazy(() => import("./pages/Comprehension"));
const PoetryCorner = lazy(() => import("./pages/PoetryCorner"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<ToolLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/word-match" element={<WordMatch />} />
            <Route path="/word-search" element={<WordSearch />} />
            <Route path="/crossword" element={<Crossword />} />
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/scrabble" element={<Scrabble />} />
            <Route path="/word-chain" element={<WordChain />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/memory-match" element={<MemoryMatch />} />
            <Route path="/riddles" element={<Riddles />} />
            <Route path="/meeting-talk" element={<MeetingTalk />} />
            <Route path="/negotiation" element={<Negotiation />} />
            <Route path="/report-writing" element={<ReportWriting />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/pitching" element={<Pitching />} />
            <Route path="/jargon-buster" element={<JargonBuster />} />
            <Route path="/small-talk" element={<SmallTalk />} />
            <Route path="/resume-help" element={<ResumeHelp />} />
            <Route path="/spelling-bee" element={<SpellingBee />} />
            <Route path="/synonym-finder" element={<SynonymFinder />} />
            <Route path="/antonym-quest" element={<AntonymQuest />} />
            <Route path="/collocations" element={<Collocations />} />
            <Route path="/idiom-master" element={<IdiomMaster />} />
            <Route path="/british-vs-us" element={<BritishVsUS />} />
            <Route path="/phrasal-verbs" element={<PhrasalVerbs />} />
            <Route path="/slang-school" element={<SlangSchool />} />
            <Route path="/expressions" element={<Expressions />} />
            <Route path="/suffix-lab" element={<SuffixLab />} />
            <Route path="/tense-trainer" element={<TenseTrainer />} />
            <Route path="/article-expert" element={<ArticleExpert />} />
            <Route path="/preposition-pro" element={<PrepositionPro />} />
            <Route path="/verb-forms" element={<VerbForms />} />
            <Route path="/proverbs" element={<Proverbs />} />
            <Route path="/word-builder" element={<WordBuilder />} />
            <Route path="/prefix-master" element={<PrefixMaster />} />
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
            <Route path="/daily-phrase" element={<DailyPhrase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

