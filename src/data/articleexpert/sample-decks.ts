import { ArticleDeck } from "@/types/articleexpert";

export const articleDecks: ArticleDeck[] = [
  {
    id: "basic-articles",
    name: "Basic Articles",
    description: "Learn when to use a, an, and the",
    sentences: [
      {
        id: "1",
        sentence: "I saw ___ elephant at the zoo.",
        correctArticle: "an",
        explanation: "'An' is used before vowel sounds. 'Elephant' starts with a vowel sound."
      },
      {
        id: "2",
        sentence: "She is ___ teacher at my school.",
        correctArticle: "a",
        explanation: "'A' is used before consonant sounds. 'Teacher' starts with a consonant sound."
      },
      {
        id: "3",
        sentence: "Please close ___ door.",
        correctArticle: "the",
        explanation: "'The' is used when referring to a specific door that both speaker and listener know about."
      },
      {
        id: "4",
        sentence: "He bought ___ umbrella yesterday.",
        correctArticle: "an",
        explanation: "'An' is used before vowel sounds. 'Umbrella' starts with a vowel sound."
      },
      {
        id: "5",
        sentence: "I need ___ book from the library.",
        correctArticle: "a",
        explanation: "'A' is used for any unspecified book, not a particular one."
      },
      {
        id: "6",
        sentence: "___ sun rises in the east.",
        correctArticle: "the",
        explanation: "'The' is used for unique objects - there is only one sun."
      },
      {
        id: "7",
        sentence: "She ate ___ apple for breakfast.",
        correctArticle: "an",
        explanation: "'An' is used before vowel sounds. 'Apple' starts with a vowel sound."
      },
      {
        id: "8",
        sentence: "He is ___ honest man.",
        correctArticle: "an",
        explanation: "'An' is used because 'honest' starts with a silent 'h', making a vowel sound."
      }
    ]
  },
  {
    id: "definite-article",
    name: "The Definite Article",
    description: "Master the use of 'the'",
    sentences: [
      {
        id: "1",
        sentence: "___ Pacific Ocean is the largest ocean.",
        correctArticle: "the",
        explanation: "'The' is used with names of oceans, seas, and rivers."
      },
      {
        id: "2",
        sentence: "She plays ___ piano beautifully.",
        correctArticle: "the",
        explanation: "'The' is used with musical instruments when talking about playing them."
      },
      {
        id: "3",
        sentence: "___ rich should help the poor.",
        correctArticle: "the",
        explanation: "'The' + adjective refers to a group of people with that characteristic."
      },
      {
        id: "4",
        sentence: "I visited ___ United States last year.",
        correctArticle: "the",
        explanation: "'The' is used with country names that include words like 'States', 'Kingdom', 'Republic'."
      },
      {
        id: "5",
        sentence: "___ Amazon is the longest river.",
        correctArticle: "the",
        explanation: "'The' is used with names of rivers."
      },
      {
        id: "6",
        sentence: "He is ___ best student in the class.",
        correctArticle: "the",
        explanation: "'The' is used with superlatives (best, worst, largest, etc.)."
      },
      {
        id: "7",
        sentence: "I read it in ___ newspaper.",
        correctArticle: "the",
        explanation: "'The' refers to a specific newspaper the speaker has in mind."
      },
      {
        id: "8",
        sentence: "___ Himalayas are in Asia.",
        correctArticle: "the",
        explanation: "'The' is used with mountain ranges."
      }
    ]
  },
  {
    id: "zero-article",
    name: "No Article Needed",
    description: "Learn when to omit articles",
    sentences: [
      {
        id: "1",
        sentence: "I love ___ music.",
        correctArticle: "no article",
        explanation: "No article is used with uncountable nouns when speaking generally."
      },
      {
        id: "2",
        sentence: "She speaks ___ French fluently.",
        correctArticle: "no article",
        explanation: "No article is used with languages."
      },
      {
        id: "3",
        sentence: "He goes to ___ school every day.",
        correctArticle: "no article",
        explanation: "No article when referring to the institution's purpose (studying), not the building."
      },
      {
        id: "4",
        sentence: "___ Water is essential for life.",
        correctArticle: "no article",
        explanation: "No article with uncountable nouns used in a general sense."
      },
      {
        id: "5",
        sentence: "I had ___ breakfast at 8 AM.",
        correctArticle: "no article",
        explanation: "No article is typically used with meal names."
      },
      {
        id: "6",
        sentence: "She traveled to ___ Japan last summer.",
        correctArticle: "no article",
        explanation: "No article with most country names."
      },
      {
        id: "7",
        sentence: "He plays ___ basketball every weekend.",
        correctArticle: "no article",
        explanation: "No article with sports and games."
      },
      {
        id: "8",
        sentence: "___ Life is beautiful.",
        correctArticle: "no article",
        explanation: "No article with abstract nouns used in a general sense."
      }
    ]
  },
  {
    id: "tricky-articles",
    name: "Tricky Cases",
    description: "Advanced article usage",
    sentences: [
      {
        id: "1",
        sentence: "He is ___ European scientist.",
        correctArticle: "a",
        explanation: "'A' is used because 'European' starts with a 'y' consonant sound, not a vowel sound."
      },
      {
        id: "2",
        sentence: "It takes ___ hour to get there.",
        correctArticle: "an",
        explanation: "'An' is used because 'hour' has a silent 'h', starting with a vowel sound."
      },
      {
        id: "3",
        sentence: "She is ___ university professor.",
        correctArticle: "a",
        explanation: "'A' is used because 'university' starts with a 'y' consonant sound."
      },
      {
        id: "4",
        sentence: "He received ___ MBA degree.",
        correctArticle: "an",
        explanation: "'An' is used because 'MBA' is pronounced starting with 'em', a vowel sound."
      },
      {
        id: "5",
        sentence: "I saw ___ one-eyed cat.",
        correctArticle: "a",
        explanation: "'A' is used because 'one' starts with a 'w' consonant sound."
      },
      {
        id: "6",
        sentence: "She wore ___ uniform to school.",
        correctArticle: "a",
        explanation: "'A' is used because 'uniform' starts with a 'y' consonant sound."
      },
      {
        id: "7",
        sentence: "It was ___ honor to meet you.",
        correctArticle: "an",
        explanation: "'An' is used because 'honor' has a silent 'h', starting with a vowel sound."
      },
      {
        id: "8",
        sentence: "He bought ___ used car.",
        correctArticle: "a",
        explanation: "'A' is used because 'used' starts with a 'y' consonant sound."
      }
    ]
  }
];
