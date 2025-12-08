import { createTool, Tool } from "@/types/tool";

export const vocabularyTools: Tool[] = [
  createTool("vocab-1", "Flashcards", "🃏", "tool-card-red", "vocabulary", { url: "/flashcards" }),
  createTool("vocab-2", "Word Match", "🔗", "tool-card-orange", "vocabulary", { url: "/word-match" }),
  createTool("vocab-3", "Spelling Bee", "🐝", "tool-card-yellow", "vocabulary", { url: "/spelling-bee" }),
  createTool("vocab-4", "Synonym Finder", "📚", "tool-card-green", "vocabulary", { url: "/synonym-finder" }),
  createTool("vocab-5", "Antonym Quest", "↔️", "tool-card-teal", "vocabulary", { url: "/antonym-quest" }),
  createTool("vocab-6", "Word Builder", "🧱", "tool-card-blue", "vocabulary", { url: "/word-builder" }),
  createTool("vocab-7", "Prefix Master", "🔤", "tool-card-indigo", "vocabulary"),
  createTool("vocab-8", "Suffix Lab", "✨", "tool-card-purple", "vocabulary"),
];
