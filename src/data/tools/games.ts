import { createTool, Tool } from "@/types/tool";

export const gamesTools: Tool[] = [
  createTool("game-1", "Word Search", "🔠", "tool-card-indigo", "games", { url: "/word-search" }),
  createTool("game-2", "Crossword", "✖️", "tool-card-purple", "games", { url: "/crossword" }),
  createTool("game-3", "Hangman", "🪢", "tool-card-pink", "games"),
  createTool("game-4", "Scrabble", "🎲", "tool-card-lime", "games"),
  createTool("game-5", "Word Chain", "⛓️", "tool-card-red", "games"),
  createTool("game-6", "Trivia Quiz", "❓", "tool-card-orange", "games"),
  createTool("game-7", "Memory Match", "🧩", "tool-card-yellow", "games"),
  createTool("game-8", "Riddles", "🤔", "tool-card-green", "games"),
];
