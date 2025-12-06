import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SpellingCompleteProps {
  correct: number;
  total: number;
  onReset: () => void;
}

export const SpellingComplete = ({ correct, total, onReset }: SpellingCompleteProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((correct / total) * 100);

  return (
    <div className="flex flex-col items-center gap-6 p-6 text-center">
      <Trophy className="w-16 h-16 text-primary" />
      <h2 className="text-2xl font-bold text-foreground">Spelling Bee Complete!</h2>

      <div className="bg-card p-6 rounded-xl border border-border">
        <p className="text-4xl font-bold text-primary mb-2">{percentage}%</p>
        <p className="text-muted-foreground">
          {correct} out of {total} words correct
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => navigate("/")}>
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
        <Button onClick={onReset}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Play Again
        </Button>
      </div>
    </div>
  );
};
