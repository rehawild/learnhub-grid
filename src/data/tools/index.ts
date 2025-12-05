// Dependency Inversion: High-level module aggregates low-level modules
// Open/Closed: Add new categories by creating new files and importing here

import { Tool } from "@/types/tool";
import { vocabularyTools } from "./vocabulary";
import { grammarTools } from "./grammar";
import { readingTools } from "./reading";
import { writingTools } from "./writing";
import { listeningTools } from "./listening";
import { speakingTools } from "./speaking";
import { testTools } from "./test";
import { gamesTools } from "./games";
import { businessTools } from "./business";
import { idiomsTools } from "./idioms";

// Re-export individual categories for granular access
export {
  vocabularyTools,
  grammarTools,
  readingTools,
  writingTools,
  listeningTools,
  speakingTools,
  testTools,
  gamesTools,
  businessTools,
  idiomsTools,
};

// Aggregated tools list - order matters for grid layout
export const tools: Tool[] = [
  ...vocabularyTools,
  ...grammarTools,
  ...readingTools,
  ...writingTools,
  ...listeningTools,
  ...speakingTools,
  ...testTools,
  ...gamesTools,
  ...businessTools,
  ...idiomsTools,
];

// Utility functions following Single Responsibility
export const getToolsByCategory = (category: string): Tool[] =>
  tools.filter((tool) => tool.category === category);

export const getToolById = (id: string): Tool | undefined =>
  tools.find((tool) => tool.id === id);

export const getEnabledTools = (): Tool[] =>
  tools.filter((tool) => tool.isEnabled !== false);
