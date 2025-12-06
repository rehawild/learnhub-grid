import { SpellingBeeDeck } from "@/types/spellingbee";

export const spellingBeeDecks: SpellingBeeDeck[] = [
  {
    id: "common-words",
    name: "Common Words",
    description: "Frequently used everyday words",
    words: [
      { id: "1", word: "necessary", hint: "Required or essential" },
      { id: "2", word: "accommodate", hint: "To provide space or lodging" },
      { id: "3", word: "separate", hint: "To divide or keep apart" },
      { id: "4", word: "occurrence", hint: "Something that happens" },
      { id: "5", word: "definitely", hint: "Without doubt" },
      { id: "6", word: "receive", hint: "To get or accept" },
      { id: "7", word: "believe", hint: "To have faith in" },
      { id: "8", word: "achieve", hint: "To accomplish a goal" },
    ],
  },
  {
    id: "tricky-spelling",
    name: "Tricky Spelling",
    description: "Words that are often misspelled",
    words: [
      { id: "1", word: "rhythm", hint: "A regular pattern of sound" },
      { id: "2", word: "mischievous", hint: "Playfully troublesome" },
      { id: "3", word: "conscience", hint: "Inner sense of right and wrong" },
      { id: "4", word: "acquaintance", hint: "Someone you know slightly" },
      { id: "5", word: "bureaucracy", hint: "Government administration" },
      { id: "6", word: "entrepreneur", hint: "Business starter" },
      { id: "7", word: "onomatopoeia", hint: "Words that sound like their meaning" },
      { id: "8", word: "pneumonia", hint: "A lung infection" },
    ],
  },
  {
    id: "academic-words",
    name: "Academic Words",
    description: "Words used in academic writing",
    words: [
      { id: "1", word: "hypothesis", hint: "A proposed explanation" },
      { id: "2", word: "phenomenon", hint: "An observable event" },
      { id: "3", word: "synthesis", hint: "Combining elements into a whole" },
      { id: "4", word: "paradigm", hint: "A model or pattern" },
      { id: "5", word: "empirical", hint: "Based on observation" },
      { id: "6", word: "ambiguous", hint: "Having multiple meanings" },
      { id: "7", word: "comprehensive", hint: "Complete and thorough" },
      { id: "8", word: "substantiate", hint: "To provide evidence" },
    ],
  },
];
