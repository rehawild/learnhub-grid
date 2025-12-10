import { createTool, Tool } from "@/types/tool";

export const grammarTools: Tool[] = [
  createTool("gram-1", "Tense Trainer", "⏰", "tool-card-pink", "grammar", { url: "/tense-trainer" }),
  createTool("gram-2", "Article Expert", "📰", "tool-card-lime", "grammar", { url: "/article-expert" }),
  createTool("gram-3", "Preposition Pro", "📍", "tool-card-red", "grammar"),
  createTool("gram-4", "Verb Forms", "🏃", "tool-card-orange", "grammar"),
  createTool("gram-5", "Sentence Fix", "🔧", "tool-card-yellow", "grammar"),
  createTool("gram-6", "Punctuation", "❗", "tool-card-green", "grammar"),
  createTool("gram-7", "Parts of Speech", "🏷️", "tool-card-teal", "grammar"),
  createTool("gram-8", "Clause Builder", "🔨", "tool-card-blue", "grammar"),
];
