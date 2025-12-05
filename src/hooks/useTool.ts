import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Tool } from "@/types/tool";
import { toast } from "@/hooks/use-toast";

// Interface Segregation: Specific interface for tool actions
interface UseToolResult {
  handleToolClick: (tool: Tool) => void;
}

// Single Responsibility: Hook only handles tool interaction logic
export const useTool = (): UseToolResult => {
  const navigate = useNavigate();

  const handleToolClick = useCallback(
    (tool: Tool) => {
      if (tool.url) {
        // Navigate to tool-specific route
        navigate(tool.url);
      } else {
        // Placeholder for tools without routes yet
        toast({
          title: `Opening ${tool.name}`,
          description: "This tool will be available soon!",
        });
      }
    },
    [navigate]
  );

  return { handleToolClick };
};
