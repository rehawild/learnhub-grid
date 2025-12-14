import { createTool, Tool } from "@/types/tool";

export const readingTools: Tool[] = [
  createTool("read-1", "Speed Reader", "⚡", "tool-card-indigo", "reading", { url: "/speed-reader" }),
  createTool("read-2", "Story Time", "📖", "tool-card-purple", "reading", { url: "/story-time" }),
  createTool("read-3", "News Reader", "🗞️", "tool-card-pink", "reading", { url: "/news-reader" }),
  createTool("read-4", "Comprehension", "🧠", "tool-card-lime", "reading", { url: "/comprehension" }),
  createTool("read-5", "Poetry Corner", "🎭", "tool-card-red", "reading", { url: "/poetry-corner" }),
  createTool("read-6", "Book Club", "📚", "tool-card-orange", "reading", { url: "/book-club" }),
  createTool("read-7", "Quote Quiz", "💬", "tool-card-yellow", "reading", { url: "/quote-quiz" }),
  createTool("read-8", "Context Clues", "🔍", "tool-card-green", "reading", { url: "/context-clues" }),
  createTool("read-9", "IELTS Reading", "🎓", "tool-card-indigo", "reading", { url: "/ielts-reading" }),
];
