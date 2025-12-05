import { Tool } from "@/types/tool";
import { cn } from "@/lib/utils";

// Interface Segregation: Props only include what ToolCard needs
interface ToolCardProps {
  tool: Tool;
  onClick?: () => void;
}

// Single Responsibility: Component only handles rendering a tool card
export const ToolCard = ({ tool, onClick }: ToolCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-center justify-center",
        "w-full h-full rounded-lg cursor-pointer",
        "transition-all duration-200 ease-out",
        "hover:scale-105 hover:z-10",
        "hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]",
        "active:scale-95",
        "border border-transparent hover:border-foreground/20",
        tool.color
      )}
    >
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-0.5 transition-transform duration-200 group-hover:scale-110">
        {tool.icon}
      </span>
      <span className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium text-foreground/90 text-center px-0.5 leading-tight line-clamp-2">
        {tool.name}
      </span>
    </button>
  );
};
