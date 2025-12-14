import { createTool, Tool } from "@/types/tool";

export const testTools: Tool[] = [

  createTool("test-1", "TOEFL Prep", "🏆", "tool-card-lime", "test", { url: "/toefl-prep" }),
  createTool("test-2", "Cambridge", "🎓", "tool-card-red", "test", { url: "/cambridge" }),
  createTool("test-3", "Mock Tests", "📋", "tool-card-orange", "test", { url: "/mock-tests" }),
  createTool("test-4", "Timer Drill", "⏱️", "tool-card-yellow", "test", { url: "/timer-drill" }),
  createTool("test-5", "Weak Areas", "🔎", "tool-card-teal", "test"),
  createTool("test-6", "Practice Plus", "➕", "tool-card-blue", "test", { url: "/practice-plus" }),
];
