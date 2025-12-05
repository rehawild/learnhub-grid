// Single Responsibility: Type definitions only
export type ToolCategory = 
  | "vocabulary" 
  | "grammar" 
  | "reading" 
  | "writing" 
  | "listening" 
  | "speaking" 
  | "test" 
  | "games" 
  | "business" 
  | "idioms";

export type ToolColor =
  | "tool-card-red"
  | "tool-card-orange"
  | "tool-card-yellow"
  | "tool-card-green"
  | "tool-card-teal"
  | "tool-card-blue"
  | "tool-card-indigo"
  | "tool-card-purple"
  | "tool-card-pink"
  | "tool-card-lime";

export interface Tool {
  id: string;
  name: string;
  icon: string;
  color: ToolColor;
  category: ToolCategory;
  description?: string;
  url?: string;
  isEnabled?: boolean;
}

// Factory function for creating tools (Open/Closed: extensible without modification)
export const createTool = (
  id: string,
  name: string,
  icon: string,
  color: ToolColor,
  category: ToolCategory,
  options?: Partial<Pick<Tool, "description" | "url" | "isEnabled">>
): Tool => ({
  id,
  name,
  icon,
  color,
  category,
  isEnabled: true,
  ...options,
});
