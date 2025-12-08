import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PrefixCompleteProps {
  correct: number;
  total: number;
  onReset: () => void;
}

export const PrefixComplete = ({ correct, total, onReset }: PrefixCompleteProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((correct / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return "Perfect! You're a Prefix Master!";
    if (percentage >= 80) return "Excellent work! Keep it up!";
    if (percentage >= 60) return "Good job! Practice makes perfect!";
    return "Keep practicing! You'll improve!";
  };

  return (
    <Card className="w-full max-w-md text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Trophy className="h-16 w-16 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl">Practice Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-4xl font-bold text-primary">
            {correct} / {total}
          </p>
          <p className="text-muted-foreground">({percentage}% correct)</p>
        </div>

        <p className="text-lg">{getMessage()}</p>

        <div className="flex gap-2 justify-center flex-wrap">
          <Button variant="outline" onClick={() => navigate("/")}>
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button onClick={onReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
