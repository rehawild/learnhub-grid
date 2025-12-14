import { createTool, Tool } from "@/types/tool";

export const grammarTools: Tool[] = [
  createTool("gram-1", "Tense Trainer", "⏰", "tool-card-pink", "grammar", { url: "/tense-trainer" }),
  createTool("gram-2", "Article Expert", "📰", "tool-card-lime", "grammar", { url: "/article-expert" }),
  createTool("gram-3", "Preposition Pro", "📍", "tool-card-red", "grammar", { url: "/preposition-pro" }),
  createTool("gram-4", "Verb Forms", "🏃", "tool-card-orange", "grammar", { url: "/verb-forms" }),
  createTool("gram-5", "Sentence Fix", "🔧", "tool-card-yellow", "grammar", { url: "/sentence-fix" }),
  createTool("gram-6", "Punctuation", "❗", "tool-card-green", "grammar", { url: "/punctuation" }),
  createTool("gram-7", "Parts of Speech", "🏷️", "tool-card-teal", "grammar", { url: "/parts-of-speech" }),
  createTool("gram-8", "Clause Builder", "🔨", "tool-card-blue", "grammar", { url: "/clause-builder" }),
];
