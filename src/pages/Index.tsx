import { tools } from "@/data/tools";
import { ToolGrid } from "@/components/ToolGrid";

// Single Responsibility: Page component only orchestrates layout
const Index = () => {
  return (
    <main className="min-h-screen w-full p-2 sm:p-4 lg:p-6">
      <ToolGrid tools={tools} logoPosition={30} />
    </main>
  );
};

export default Index;
