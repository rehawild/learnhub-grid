import { createTool, Tool } from "@/types/tool";

export const testTools: Tool[] = [
  createTool("test-1", "IELTS Prep", "🎯", "tool-card-pink", "test"),
  createTool("test-2", "TOEFL Prep", "🏆", "tool-card-lime", "test"),
  createTool("test-3", "Cambridge", "🎓", "tool-card-red", "test"),
  createTool("test-4", "Mock Tests", "📋", "tool-card-orange", "test"),
  createTool("test-5", "Timer Drill", "⏱️", "tool-card-yellow", "test"),
  createTool("test-6", "Score Track", "📈", "tool-card-green", "test"),
  createTool("test-7", "Weak Areas", "🔎", "tool-card-teal", "test"),
  createTool("test-8", "Practice Plus", "➕", "tool-card-blue", "test"),
];
