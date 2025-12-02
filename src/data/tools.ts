export interface Tool {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: string;
  url?: string;
}

export const tools: Tool[] = [
  // Row 1 - Vocabulary
  { id: "1", name: "Flashcards", icon: "🃏", color: "tool-card-red", category: "vocabulary" },
  { id: "2", name: "Word Match", icon: "🔗", color: "tool-card-orange", category: "vocabulary" },
  { id: "3", name: "Spelling Bee", icon: "🐝", color: "tool-card-yellow", category: "vocabulary" },
  { id: "4", name: "Synonym Finder", icon: "📚", color: "tool-card-green", category: "vocabulary" },
  { id: "5", name: "Antonym Quest", icon: "↔️", color: "tool-card-teal", category: "vocabulary" },
  { id: "6", name: "Word Builder", icon: "🧱", color: "tool-card-blue", category: "vocabulary" },
  { id: "7", name: "Prefix Master", icon: "🔤", color: "tool-card-indigo", category: "vocabulary" },
  { id: "8", name: "Suffix Lab", icon: "✨", color: "tool-card-purple", category: "vocabulary" },
  { id: "9", name: "Tense Trainer", icon: "⏰", color: "tool-card-pink", category: "grammar" },
  { id: "10", name: "Article Expert", icon: "📰", color: "tool-card-lime", category: "grammar" },
  { id: "11", name: "Preposition Pro", icon: "📍", color: "tool-card-red", category: "grammar" },
  { id: "12", name: "Verb Forms", icon: "🏃", color: "tool-card-orange", category: "grammar" },
  
  // Row 2 - Grammar & Reading
  { id: "13", name: "Sentence Fix", icon: "🔧", color: "tool-card-yellow", category: "grammar" },
  { id: "14", name: "Punctuation", icon: "❗", color: "tool-card-green", category: "grammar" },
  { id: "15", name: "Parts of Speech", icon: "🏷️", color: "tool-card-teal", category: "grammar" },
  { id: "16", name: "Clause Builder", icon: "🔨", color: "tool-card-blue", category: "grammar" },
  { id: "17", name: "Speed Reader", icon: "⚡", color: "tool-card-indigo", category: "reading" },
  { id: "18", name: "Story Time", icon: "📖", color: "tool-card-purple", category: "reading" },
  { id: "19", name: "News Reader", icon: "🗞️", color: "tool-card-pink", category: "reading" },
  { id: "20", name: "Comprehension", icon: "🧠", color: "tool-card-lime", category: "reading" },
  { id: "21", name: "Poetry Corner", icon: "🎭", color: "tool-card-red", category: "reading" },
  { id: "22", name: "Book Club", icon: "📚", color: "tool-card-orange", category: "reading" },
  { id: "23", name: "Quote Quiz", icon: "💬", color: "tool-card-yellow", category: "reading" },
  { id: "24", name: "Context Clues", icon: "🔍", color: "tool-card-green", category: "reading" },
  
  // Row 3 (before logo) - Writing & Listening
  { id: "25", name: "Essay Helper", icon: "✍️", color: "tool-card-teal", category: "writing" },
  { id: "26", name: "Story Writer", icon: "📝", color: "tool-card-blue", category: "writing" },
  { id: "27", name: "Email Writer", icon: "📧", color: "tool-card-indigo", category: "writing" },
  { id: "28", name: "Paragraph Pro", icon: "📄", color: "tool-card-purple", category: "writing" },
  { id: "29", name: "Dialogue Maker", icon: "🗣️", color: "tool-card-pink", category: "writing" },
  { id: "30", name: "Description Lab", icon: "🎨", color: "tool-card-lime", category: "writing" },
  // Logo goes here (4 columns)
  { id: "31", name: "Letter Writer", icon: "✉️", color: "tool-card-red", category: "writing" },
  { id: "32", name: "Review Writer", icon: "⭐", color: "tool-card-orange", category: "writing" },
  { id: "33", name: "Podcast Hub", icon: "🎧", color: "tool-card-yellow", category: "listening" },
  { id: "34", name: "Dictation", icon: "🎤", color: "tool-card-green", category: "listening" },
  { id: "35", name: "Song Lyrics", icon: "🎵", color: "tool-card-teal", category: "listening" },
  { id: "36", name: "Accent Trainer", icon: "🌍", color: "tool-card-blue", category: "listening" },
  
  // Row 4 - Listening & Speaking
  { id: "37", name: "Audio Stories", icon: "📻", color: "tool-card-indigo", category: "listening" },
  { id: "38", name: "Interview Prep", icon: "🎙️", color: "tool-card-purple", category: "listening" },
  { id: "39", name: "TED Talks", icon: "🎬", color: "tool-card-pink", category: "listening" },
  { id: "40", name: "Fill the Gap", icon: "🕳️", color: "tool-card-lime", category: "listening" },
  { id: "41", name: "Pronunciation", icon: "👄", color: "tool-card-red", category: "speaking" },
  { id: "42", name: "Tongue Twisters", icon: "😝", color: "tool-card-orange", category: "speaking" },
  { id: "43", name: "Record & Review", icon: "🔴", color: "tool-card-yellow", category: "speaking" },
  { id: "44", name: "Debate Club", icon: "⚖️", color: "tool-card-green", category: "speaking" },
  { id: "45", name: "Role Play", icon: "🎭", color: "tool-card-teal", category: "speaking" },
  { id: "46", name: "Presentation", icon: "📊", color: "tool-card-blue", category: "speaking" },
  { id: "47", name: "Phone English", icon: "📞", color: "tool-card-indigo", category: "speaking" },
  { id: "48", name: "Daily Chat", icon: "💭", color: "tool-card-purple", category: "speaking" },
  
  // Row 5 - Test Prep & Games
  { id: "49", name: "IELTS Prep", icon: "🎯", color: "tool-card-pink", category: "test" },
  { id: "50", name: "TOEFL Prep", icon: "🏆", color: "tool-card-lime", category: "test" },
  { id: "51", name: "Cambridge", icon: "🎓", color: "tool-card-red", category: "test" },
  { id: "52", name: "Mock Tests", icon: "📋", color: "tool-card-orange", category: "test" },
  { id: "53", name: "Timer Drill", icon: "⏱️", color: "tool-card-yellow", category: "test" },
  { id: "54", name: "Score Track", icon: "📈", color: "tool-card-green", category: "test" },
  { id: "55", name: "Weak Areas", icon: "🔎", color: "tool-card-teal", category: "test" },
  { id: "56", name: "Practice Plus", icon: "➕", color: "tool-card-blue", category: "test" },
  { id: "57", name: "Word Search", icon: "🔠", color: "tool-card-indigo", category: "games" },
  { id: "58", name: "Crossword", icon: "✖️", color: "tool-card-purple", category: "games" },
  { id: "59", name: "Hangman", icon: "🪢", color: "tool-card-pink", category: "games" },
  { id: "60", name: "Scrabble", icon: "🎲", color: "tool-card-lime", category: "games" },
  
  // Row 6 - Games & Business
  { id: "61", name: "Word Chain", icon: "⛓️", color: "tool-card-red", category: "games" },
  { id: "62", name: "Trivia Quiz", icon: "❓", color: "tool-card-orange", category: "games" },
  { id: "63", name: "Memory Match", icon: "🧩", color: "tool-card-yellow", category: "games" },
  { id: "64", name: "Riddles", icon: "🤔", color: "tool-card-green", category: "games" },
  { id: "65", name: "Meeting Talk", icon: "🤝", color: "tool-card-teal", category: "business" },
  { id: "66", name: "Negotiation", icon: "💼", color: "tool-card-blue", category: "business" },
  { id: "67", name: "Report Writing", icon: "📑", color: "tool-card-indigo", category: "business" },
  { id: "68", name: "Networking", icon: "🌐", color: "tool-card-purple", category: "business" },
  { id: "69", name: "Pitching", icon: "📢", color: "tool-card-pink", category: "business" },
  { id: "70", name: "Jargon Buster", icon: "💡", color: "tool-card-lime", category: "business" },
  { id: "71", name: "Small Talk", icon: "☕", color: "tool-card-red", category: "business" },
  { id: "72", name: "Resume Help", icon: "📃", color: "tool-card-orange", category: "business" },
  
  // Row 7 - Idioms & Phrases
  { id: "73", name: "Idiom Master", icon: "🗝️", color: "tool-card-yellow", category: "idioms" },
  { id: "74", name: "Phrasal Verbs", icon: "🚀", color: "tool-card-green", category: "idioms" },
  { id: "75", name: "Slang School", icon: "😎", color: "tool-card-teal", category: "idioms" },
  { id: "76", name: "Collocations", icon: "🤞", color: "tool-card-blue", category: "idioms" },
  { id: "77", name: "Proverbs", icon: "🦉", color: "tool-card-indigo", category: "idioms" },
  { id: "78", name: "Expressions", icon: "😃", color: "tool-card-purple", category: "idioms" },
  { id: "79", name: "British vs US", icon: "🇬🇧", color: "tool-card-pink", category: "idioms" },
  { id: "80", name: "Daily Phrase", icon: "📅", color: "tool-card-lime", category: "idioms" },
];
