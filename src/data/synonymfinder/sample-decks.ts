import { SynonymDeck } from "@/types/synonymfinder";

export const synonymDecks: SynonymDeck[] = [
  {
    id: "basic-synonyms",
    name: "Basic Synonyms",
    description: "Common words with their synonyms",
    words: [
      {
        id: "1",
        word: "happy",
        synonyms: ["joyful", "cheerful", "delighted", "pleased"],
        definition: "Feeling or showing pleasure or contentment",
        example: "She felt happy after receiving the good news."
      },
      {
        id: "2",
        word: "sad",
        synonyms: ["unhappy", "sorrowful", "dejected", "melancholy"],
        definition: "Feeling or showing sorrow; unhappy",
        example: "He was sad when his friend moved away."
      },
      {
        id: "3",
        word: "big",
        synonyms: ["large", "huge", "enormous", "massive"],
        definition: "Of considerable size or extent",
        example: "They lived in a big house on the hill."
      },
      {
        id: "4",
        word: "small",
        synonyms: ["tiny", "little", "miniature", "petite"],
        definition: "Of limited size; not big",
        example: "The small kitten fit in the palm of her hand."
      },
      {
        id: "5",
        word: "fast",
        synonyms: ["quick", "rapid", "swift", "speedy"],
        definition: "Moving or capable of moving at high speed",
        example: "The fast car zoomed down the highway."
      },
      {
        id: "6",
        word: "slow",
        synonyms: ["sluggish", "unhurried", "gradual", "leisurely"],
        definition: "Moving or operating at a low speed",
        example: "The slow turtle crossed the road carefully."
      }
    ]
  },
  {
    id: "academic-synonyms",
    name: "Academic Vocabulary",
    description: "Formal words for academic writing",
    words: [
      {
        id: "1",
        word: "analyze",
        synonyms: ["examine", "investigate", "scrutinize", "evaluate"],
        definition: "Examine methodically and in detail",
        example: "The scientists will analyze the data carefully."
      },
      {
        id: "2",
        word: "demonstrate",
        synonyms: ["show", "illustrate", "exhibit", "prove"],
        definition: "Clearly show the existence or truth of something",
        example: "The experiment will demonstrate the theory."
      },
      {
        id: "3",
        word: "significant",
        synonyms: ["important", "notable", "meaningful", "substantial"],
        definition: "Sufficiently great or important to be worthy of attention",
        example: "There was a significant increase in sales."
      },
      {
        id: "4",
        word: "establish",
        synonyms: ["create", "found", "institute", "set up"],
        definition: "Set up on a firm or permanent basis",
        example: "They worked to establish new guidelines."
      },
      {
        id: "5",
        word: "maintain",
        synonyms: ["preserve", "sustain", "uphold", "keep"],
        definition: "Cause or enable a condition to continue",
        example: "It's important to maintain good health habits."
      },
      {
        id: "6",
        word: "acquire",
        synonyms: ["obtain", "gain", "secure", "procure"],
        definition: "Buy or obtain for oneself",
        example: "She worked hard to acquire new skills."
      }
    ]
  },
  {
    id: "emotional-synonyms",
    name: "Emotional Words",
    description: "Words describing feelings and emotions",
    words: [
      {
        id: "1",
        word: "angry",
        synonyms: ["furious", "irate", "enraged", "livid"],
        definition: "Feeling or showing strong annoyance or displeasure",
        example: "He was angry about the unfair decision."
      },
      {
        id: "2",
        word: "afraid",
        synonyms: ["scared", "frightened", "terrified", "fearful"],
        definition: "Feeling fear or anxiety",
        example: "She was afraid of the dark."
      },
      {
        id: "3",
        word: "excited",
        synonyms: ["thrilled", "elated", "enthusiastic", "eager"],
        definition: "Very enthusiastic and eager",
        example: "The children were excited about the trip."
      },
      {
        id: "4",
        word: "calm",
        synonyms: ["peaceful", "serene", "tranquil", "relaxed"],
        definition: "Not showing or feeling nervousness or anger",
        example: "She remained calm during the crisis."
      },
      {
        id: "5",
        word: "confused",
        synonyms: ["bewildered", "puzzled", "perplexed", "baffled"],
        definition: "Unable to think clearly or understand",
        example: "He was confused by the complicated instructions."
      },
      {
        id: "6",
        word: "proud",
        synonyms: ["satisfied", "pleased", "gratified", "honored"],
        definition: "Feeling deep pleasure from one's achievements",
        example: "She was proud of her accomplishments."
      }
    ]
  }
];
