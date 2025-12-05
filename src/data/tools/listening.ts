import { createTool, Tool } from "@/types/tool";

export const listeningTools: Tool[] = [
  createTool("listen-1", "Podcast Hub", "🎧", "tool-card-yellow", "listening"),
  createTool("listen-2", "Dictation", "🎤", "tool-card-green", "listening"),
  createTool("listen-3", "Song Lyrics", "🎵", "tool-card-teal", "listening"),
  createTool("listen-4", "Accent Trainer", "🌍", "tool-card-blue", "listening"),
  createTool("listen-5", "Audio Stories", "📻", "tool-card-indigo", "listening"),
  createTool("listen-6", "Interview Prep", "🎙️", "tool-card-purple", "listening"),
  createTool("listen-7", "TED Talks", "🎬", "tool-card-pink", "listening"),
  createTool("listen-8", "Fill the Gap", "🕳️", "tool-card-lime", "listening"),
];
