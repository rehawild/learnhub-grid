import { Tool } from "@/types/tool";
import { ToolCard } from "./ToolCard";
import { Logo } from "./Logo";
import { useTool } from "@/hooks/useTool";

interface ToolGridProps {
  tools: Tool[];
  logoPosition?: number; // Index where logo should appear
}

// Single Responsibility: Component only handles grid layout of tools
export const ToolGrid = ({ tools, logoPosition = 30 }: ToolGridProps) => {
  const { handleToolClick } = useTool();

  const beforeLogo = tools.slice(0, logoPosition);
  const afterLogo = tools.slice(logoPosition);

  return (
    <div className="tool-grid">
      {beforeLogo.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          onClick={() => handleToolClick(tool)}
        />
      ))}

      <div className="logo-cell flex items-center justify-center">
        <Logo />
      </div>

      {afterLogo.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          onClick={() => handleToolClick(tool)}
        />
      ))}
    </div>
  );
};
