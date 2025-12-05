import { tools } from "@/data/tools";
import { ToolGrid } from "@/components/ToolGrid";

// Single Responsibility: Page component only orchestrates layout
const Index = () => {
  return (
    <main className="h-screen w-screen overflow-hidden p-1 sm:p-1.5 lg:p-2">
      <ToolGrid tools={tools} logoPosition={30} />
    </main>
  );
};

export default Index;
