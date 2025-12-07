import { AntonymDeck } from "@/types/antonymquest";

export const sampleAntonymDecks: AntonymDeck[] = [
  {
    id: "basic-opposites",
    name: "Basic Opposites",
    description: "Common everyday antonyms",
    words: [
      { id: "1", word: "happy", antonyms: ["sad", "unhappy", "miserable", "sorrowful"], hint: "Feeling down" },
      { id: "2", word: "hot", antonyms: ["cold", "cool", "freezing", "chilly"], hint: "Low temperature" },
      { id: "3", word: "big", antonyms: ["small", "tiny", "little", "miniature"], hint: "Not large" },
      { id: "4", word: "fast", antonyms: ["slow", "sluggish", "leisurely"], hint: "Takes more time" },
      { id: "5", word: "light", antonyms: ["dark", "heavy", "dim"], hint: "Absence of brightness or weighs more" },
      { id: "6", word: "young", antonyms: ["old", "elderly", "aged", "ancient"], hint: "Advanced in years" },
      { id: "7", word: "loud", antonyms: ["quiet", "silent", "soft", "muted"], hint: "Makes little noise" },
      { id: "8", word: "rich", antonyms: ["poor", "broke", "impoverished", "needy"], hint: "Lacking wealth" },
    ],
  },
  {
    id: "academic-antonyms",
    name: "Academic Antonyms",
    description: "Antonyms commonly used in academic writing",
    words: [
      { id: "1", word: "abstract", antonyms: ["concrete", "tangible", "specific"], hint: "Something you can touch or see" },
      { id: "2", word: "temporary", antonyms: ["permanent", "lasting", "enduring"], hint: "Lasts forever" },
      { id: "3", word: "voluntary", antonyms: ["mandatory", "compulsory", "obligatory", "required"], hint: "Must be done" },
      { id: "4", word: "expand", antonyms: ["contract", "shrink", "reduce", "diminish"], hint: "Become smaller" },
      { id: "5", word: "include", antonyms: ["exclude", "omit", "remove"], hint: "Leave out" },
      { id: "6", word: "maximum", antonyms: ["minimum", "least", "lowest"], hint: "The smallest amount" },
      { id: "7", word: "transparent", antonyms: ["opaque", "murky", "obscure"], hint: "Cannot see through" },
      { id: "8", word: "ancient", antonyms: ["modern", "contemporary", "current", "recent"], hint: "Of the present time" },
    ],
  },
  {
    id: "emotion-antonyms",
    name: "Emotion Antonyms",
    description: "Opposite feelings and emotions",
    words: [
      { id: "1", word: "love", antonyms: ["hate", "loathe", "detest", "despise"], hint: "Intense dislike" },
      { id: "2", word: "brave", antonyms: ["cowardly", "fearful", "timid", "afraid"], hint: "Lacking courage" },
      { id: "3", word: "calm", antonyms: ["anxious", "nervous", "agitated", "restless"], hint: "Feeling uneasy" },
      { id: "4", word: "confident", antonyms: ["insecure", "uncertain", "doubtful", "hesitant"], hint: "Not sure of oneself" },
      { id: "5", word: "generous", antonyms: ["selfish", "greedy", "stingy", "miserly"], hint: "Unwilling to share" },
      { id: "6", word: "hopeful", antonyms: ["hopeless", "pessimistic", "despairing"], hint: "Without hope" },
      { id: "7", word: "proud", antonyms: ["humble", "modest", "ashamed"], hint: "Not boastful" },
      { id: "8", word: "grateful", antonyms: ["ungrateful", "thankless", "unappreciative"], hint: "Not showing thanks" },
    ],
  },
];
