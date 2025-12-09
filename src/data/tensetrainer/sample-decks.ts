import { TenseDeck } from "@/types/tensetrainer";

export const tenseTrainerDecks: TenseDeck[] = [
  {
    id: "simple-past",
    name: "Simple Past Tense",
    description: "Practice converting verbs to simple past tense",
    words: [
      {
        id: "sp-1",
        baseVerb: "go",
        tense: "Simple Past",
        correctAnswer: "went",
        sentence: "Yesterday, I ___ to the store.",
        hint: "Irregular verb - completely changes form"
      },
      {
        id: "sp-2",
        baseVerb: "eat",
        tense: "Simple Past",
        correctAnswer: "ate",
        sentence: "She ___ breakfast at 7 AM.",
        hint: "Irregular verb - vowel change"
      },
      {
        id: "sp-3",
        baseVerb: "play",
        tense: "Simple Past",
        correctAnswer: "played",
        sentence: "The children ___ in the park.",
        hint: "Regular verb - add -ed"
      },
      {
        id: "sp-4",
        baseVerb: "write",
        tense: "Simple Past",
        correctAnswer: "wrote",
        sentence: "He ___ a letter to his friend.",
        hint: "Irregular verb - vowel change"
      },
      {
        id: "sp-5",
        baseVerb: "see",
        tense: "Simple Past",
        correctAnswer: "saw",
        sentence: "We ___ a beautiful sunset.",
        hint: "Irregular verb - completely changes"
      },
      {
        id: "sp-6",
        baseVerb: "make",
        tense: "Simple Past",
        correctAnswer: "made",
        sentence: "Mom ___ a delicious cake.",
        hint: "Irregular verb - vowel change"
      },
      {
        id: "sp-7",
        baseVerb: "walk",
        tense: "Simple Past",
        correctAnswer: "walked",
        sentence: "They ___ to school together.",
        hint: "Regular verb - add -ed"
      },
      {
        id: "sp-8",
        baseVerb: "buy",
        tense: "Simple Past",
        correctAnswer: "bought",
        sentence: "I ___ a new book yesterday.",
        hint: "Irregular verb - completely changes"
      }
    ]
  },
  {
    id: "present-continuous",
    name: "Present Continuous",
    description: "Practice forming present continuous tense",
    words: [
      {
        id: "pc-1",
        baseVerb: "run",
        tense: "Present Continuous",
        correctAnswer: "running",
        sentence: "She is ___ in the marathon.",
        hint: "Double the final consonant, add -ing"
      },
      {
        id: "pc-2",
        baseVerb: "swim",
        tense: "Present Continuous",
        correctAnswer: "swimming",
        sentence: "The kids are ___ in the pool.",
        hint: "Double the final consonant, add -ing"
      },
      {
        id: "pc-3",
        baseVerb: "read",
        tense: "Present Continuous",
        correctAnswer: "reading",
        sentence: "I am ___ an interesting book.",
        hint: "Simply add -ing"
      },
      {
        id: "pc-4",
        baseVerb: "write",
        tense: "Present Continuous",
        correctAnswer: "writing",
        sentence: "He is ___ an email right now.",
        hint: "Drop the -e, add -ing"
      },
      {
        id: "pc-5",
        baseVerb: "dance",
        tense: "Present Continuous",
        correctAnswer: "dancing",
        sentence: "They are ___ at the party.",
        hint: "Drop the -e, add -ing"
      },
      {
        id: "pc-6",
        baseVerb: "sit",
        tense: "Present Continuous",
        correctAnswer: "sitting",
        sentence: "The cat is ___ on the couch.",
        hint: "Double the final consonant, add -ing"
      },
      {
        id: "pc-7",
        baseVerb: "study",
        tense: "Present Continuous",
        correctAnswer: "studying",
        sentence: "We are ___ for the exam.",
        hint: "Simply add -ing (keep the y)"
      },
      {
        id: "pc-8",
        baseVerb: "make",
        tense: "Present Continuous",
        correctAnswer: "making",
        sentence: "She is ___ dinner for everyone.",
        hint: "Drop the -e, add -ing"
      }
    ]
  },
  {
    id: "present-perfect",
    name: "Present Perfect",
    description: "Practice forming present perfect tense",
    words: [
      {
        id: "pp-1",
        baseVerb: "eat",
        tense: "Present Perfect",
        correctAnswer: "eaten",
        sentence: "I have ___ lunch already.",
        hint: "Irregular past participle"
      },
      {
        id: "pp-2",
        baseVerb: "go",
        tense: "Present Perfect",
        correctAnswer: "gone",
        sentence: "She has ___ to Paris twice.",
        hint: "Irregular past participle"
      },
      {
        id: "pp-3",
        baseVerb: "finish",
        tense: "Present Perfect",
        correctAnswer: "finished",
        sentence: "They have ___ their homework.",
        hint: "Regular - add -ed"
      },
      {
        id: "pp-4",
        baseVerb: "see",
        tense: "Present Perfect",
        correctAnswer: "seen",
        sentence: "We have ___ that movie before.",
        hint: "Irregular past participle"
      },
      {
        id: "pp-5",
        baseVerb: "write",
        tense: "Present Perfect",
        correctAnswer: "written",
        sentence: "He has ___ three books.",
        hint: "Irregular past participle"
      },
      {
        id: "pp-6",
        baseVerb: "break",
        tense: "Present Perfect",
        correctAnswer: "broken",
        sentence: "Someone has ___ the window.",
        hint: "Irregular past participle"
      },
      {
        id: "pp-7",
        baseVerb: "learn",
        tense: "Present Perfect",
        correctAnswer: "learned",
        sentence: "I have ___ a lot this year.",
        hint: "Regular - add -ed"
      },
      {
        id: "pp-8",
        baseVerb: "take",
        tense: "Present Perfect",
        correctAnswer: "taken",
        sentence: "She has ___ the exam.",
        hint: "Irregular past participle"
      }
    ]
  },
  {
    id: "future-simple",
    name: "Future Simple",
    description: "Practice forming future tense with will",
    words: [
      {
        id: "fs-1",
        baseVerb: "go",
        tense: "Future Simple",
        correctAnswer: "will go",
        sentence: "Tomorrow I ___ to the beach.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-2",
        baseVerb: "help",
        tense: "Future Simple",
        correctAnswer: "will help",
        sentence: "She ___ you with your project.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-3",
        baseVerb: "call",
        tense: "Future Simple",
        correctAnswer: "will call",
        sentence: "I ___ you later tonight.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-4",
        baseVerb: "finish",
        tense: "Future Simple",
        correctAnswer: "will finish",
        sentence: "They ___ the work by Friday.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-5",
        baseVerb: "arrive",
        tense: "Future Simple",
        correctAnswer: "will arrive",
        sentence: "The train ___ at 3 PM.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-6",
        baseVerb: "meet",
        tense: "Future Simple",
        correctAnswer: "will meet",
        sentence: "We ___ at the coffee shop.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-7",
        baseVerb: "rain",
        tense: "Future Simple",
        correctAnswer: "will rain",
        sentence: "It ___ tomorrow according to the forecast.",
        hint: "Use 'will' + base verb"
      },
      {
        id: "fs-8",
        baseVerb: "be",
        tense: "Future Simple",
        correctAnswer: "will be",
        sentence: "Everything ___ okay.",
        hint: "Use 'will' + base verb"
      }
    ]
  }
];
