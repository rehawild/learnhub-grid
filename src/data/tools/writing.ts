import { createTool, Tool } from "@/types/tool";

export const writingTools: Tool[] = [
  createTool("write-1", "Essay Helper", "✍️", "tool-card-teal", "writing", { url: "/essay-helper" }),
  createTool("write-2", "Story Writer", "📝", "tool-card-blue", "writing", { url: "/story-writer" }),
  createTool("write-3", "Email Writer", "📧", "tool-card-indigo", "writing", { url: "/email-writer" }),
  createTool("write-4", "Paragraph Pro", "📄", "tool-card-purple", "writing", { url: "/paragraph-pro" }),
  createTool("write-5", "Dialogue Maker", "🗣️", "tool-card-pink", "writing", { url: "/dialogue-maker" }),
  createTool("write-6", "Description Lab", "🎨", "tool-card-lime", "writing", { url: "/description-lab" }),
  createTool("write-7", "Letter Writer", "✉️", "tool-card-red", "writing", { url: "/letter-writer" }),
  createTool("write-8", "Review Writer", "⭐", "tool-card-orange", "writing", { url: "/review-writer" }),
];
