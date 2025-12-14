import { createTool, Tool } from "@/types/tool";

export const listeningTools: Tool[] = [
  createTool("listen-1", "Podcast Hub", "🎧", "tool-card-yellow", "listening", { url: "/podcast-hub" }),
  createTool("listen-2", "Dictation", "🎤", "tool-card-green", "listening", { url: "/dictation" }),
  createTool("listen-3", "Song Lyrics", "🎵", "tool-card-teal", "listening", { url: "/song-lyrics" }),
  createTool("listen-4", "Accent Trainer", "🌍", "tool-card-blue", "listening", { url: "/accent-trainer" }),
  createTool("listen-5", "Audio Stories", "📻", "tool-card-indigo", "listening", { url: "/audio-stories" }),
  createTool("listen-6", "Interview Prep", "🎙️", "tool-card-purple", "listening", { url: "/interview-prep" }),
  createTool("listen-7", "TED Talks", "🎬", "tool-card-pink", "listening", { url: "/ted-talks" }),
  createTool("listen-8", "Fill the Gap", "🕳️", "tool-card-lime", "listening", { url: "/fill-the-gap" }),
];
