import { WordMatchDeck } from "@/types/wordmatch";

export const wordMatchDecks: WordMatchDeck[] = [
  {
    id: "basic-verbs",
    name: "Basic Verbs",
    description: "Match common English verbs with their meanings",
    pairs: [
      { id: "1", word: "Abandon", definition: "To leave behind or give up" },
      { id: "2", word: "Acquire", definition: "To gain or obtain something" },
      { id: "3", word: "Allocate", definition: "To distribute for a purpose" },
      { id: "4", word: "Anticipate", definition: "To expect or predict" },
      { id: "5", word: "Collaborate", definition: "To work together" },
      { id: "6", word: "Demonstrate", definition: "To show or prove clearly" },
    ],
  },
  {
    id: "adjectives",
    name: "Descriptive Adjectives",
    description: "Match adjectives with their definitions",
    pairs: [
      { id: "1", word: "Abundant", definition: "Existing in large quantities" },
      { id: "2", word: "Ambiguous", definition: "Open to multiple meanings" },
      { id: "3", word: "Candid", definition: "Truthful and straightforward" },
      { id: "4", word: "Diligent", definition: "Hardworking and careful" },
      { id: "5", word: "Eloquent", definition: "Fluent and persuasive" },
      { id: "6", word: "Frugal", definition: "Economical with money" },
    ],
  },
  {
    id: "advanced-vocab",
    name: "Advanced Vocabulary",
    description: "Challenge yourself with advanced words",
    pairs: [
      { id: "1", word: "Ephemeral", definition: "Lasting for a very short time" },
      { id: "2", word: "Ubiquitous", definition: "Present everywhere" },
      { id: "3", word: "Pragmatic", definition: "Dealing with things practically" },
      { id: "4", word: "Meticulous", definition: "Showing great attention to detail" },
      { id: "5", word: "Enigmatic", definition: "Mysterious and puzzling" },
      { id: "6", word: "Resilient", definition: "Able to recover quickly" },
    ],
  },
];
