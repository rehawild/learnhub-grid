import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MatchCompleteProps {
  matches: number;
  attempts: number;
  onPlayAgain: () => void;
}

export const MatchComplete = ({
  matches,
  attempts,
  onPlayAgain,
}: MatchCompleteProps) => {
  const navigate = useNavigate();
  const accuracy = Math.round((matches / attempts) * 100);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="text-6xl animate-bounce">🎉</div>
      <Trophy className="w-16 h-16 text-tool-card-yellow" />
      
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Congratulations!
        </h2>
        <p className="text-muted-foreground">
          You matched all pairs!
        </p>
      </div>

      <div className="flex gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-primary">{matches}</div>
          <div className="text-sm text-muted-foreground">Matches</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-tool-card-orange">{attempts}</div>
          <div className="text-sm text-muted-foreground">Attempts</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-tool-card-green">{accuracy}%</div>
          <div className="text-sm text-muted-foreground">Accuracy</div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={onPlayAgain} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Play Again
        </Button>
        <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
          <Home className="w-4 h-4" />
          Home
        </Button>
      </div>
    </div>
  );
};
