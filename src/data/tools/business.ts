import { createTool, Tool } from "@/types/tool";

export const businessTools: Tool[] = [
  createTool("biz-1", "Meeting Talk", "🤝", "tool-card-teal", "business", { url: "/meeting-talk" }),
  createTool("biz-2", "Negotiation", "💼", "tool-card-blue", "business", { url: "/negotiation" }),
  createTool("biz-3", "Report Writing", "📑", "tool-card-indigo", "business", { url: "/report-writing" }),
  createTool("biz-4", "Networking", "🌐", "tool-card-purple", "business", { url: "/networking" }),
  createTool("biz-5", "Pitching", "📢", "tool-card-pink", "business", { url: "/pitching" }),
  createTool("biz-6", "Jargon Buster", "💡", "tool-card-lime", "business", { url: "/jargon-buster" }),
  createTool("biz-7", "Small Talk", "☕", "tool-card-red", "business", { url: "/small-talk" }),
  createTool("biz-8", "Resume Help", "📃", "tool-card-orange", "business", { url: "/resume-help" }),
];
