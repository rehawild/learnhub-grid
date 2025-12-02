import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const handleToolClick = (toolName: string) => {
    toast({
      title: `Opening ${toolName}`,
      description: "This tool will be available soon!",
    });
  };

  return (
    <main className="h-screen w-screen overflow-hidden p-1 sm:p-1.5 lg:p-2">
      <div className="tool-grid">
        {/* First 30 tools */}
        {tools.slice(0, 30).map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onClick={() => handleToolClick(tool.name)}
          />
        ))}
        
        {/* Logo in center */}
        <div className="logo-cell flex items-center justify-center">
          <Logo />
        </div>
        
        {/* Remaining tools */}
        {tools.slice(30).map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onClick={() => handleToolClick(tool.name)}
          />
        ))}
      </div>
    </main>
  );
};

export default Index;
