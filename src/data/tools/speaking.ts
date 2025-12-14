import { createTool, Tool } from "@/types/tool";

export const speakingTools: Tool[] = [
  createTool("speak-1", "Pronunciation", "👄", "tool-card-red", "speaking", { url: "/pronunciation" }),
  createTool("speak-2", "Tongue Twisters", "😝", "tool-card-orange", "speaking", { url: "/tongue-twisters" }),
  createTool("speak-3", "Record & Review", "🔴", "tool-card-yellow", "speaking", { url: "/record-review" }),
  createTool("speak-4", "Debate Club", "⚖️", "tool-card-green", "speaking", { url: "/debate-club" }),
  createTool("speak-5", "Role Play", "🎭", "tool-card-teal", "speaking", { url: "/role-play" }),
  createTool("speak-6", "Presentation", "📊", "tool-card-blue", "speaking", { url: "/presentation" }),
  createTool("speak-7", "Phone English", "📞", "tool-card-indigo", "speaking", { url: "/phone-english" }),
  createTool("speak-8", "Daily Chat", "💭", "tool-card-purple", "speaking", { url: "/daily-chat" }),
  createTool("speak-9", "IELTS Speaking", "🎓", "tool-card-red", "speaking", { url: "/ielts-prep" }),
];
