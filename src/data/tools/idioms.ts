import { createTool, Tool } from "@/types/tool";

export const idiomsTools: Tool[] = [
  createTool("idiom-1", "Idiom Master", "🗝️", "tool-card-yellow", "idioms", { url: "/idiom-master" }),
  createTool("idiom-2", "Phrasal Verbs", "🚀", "tool-card-green", "idioms", { url: "/phrasal-verbs" }),
  createTool("idiom-3", "Slang School", "😎", "tool-card-teal", "idioms", { url: "/slang-school" }),
  createTool("idiom-4", "Collocations", "🤞", "tool-card-blue", "idioms", { url: "/collocations" }),
  createTool("idiom-5", "Proverbs", "🦉", "tool-card-indigo", "idioms", { url: "/proverbs" }),
  createTool("idiom-6", "Expressions", "😃", "tool-card-yellow", "idioms", { url: "/expressions" }),
  createTool("idiom-7", "British vs US", "🇬🇧", "tool-card-yellow", "idioms", { url: "/british-vs-us" }),
  createTool("idiom-8", "Daily Phrase", "📅", "tool-card-lime", "idioms", { url: "/daily-phrase" }),
];
