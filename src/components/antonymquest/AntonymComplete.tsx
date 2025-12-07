import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AntonymCompleteProps {
  correctAnswers: number;
  totalWords: number;
  onReset: () => void;
}

export const AntonymComplete = ({
  correctAnswers,
  totalWords,
  onReset,
}: AntonymCompleteProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((correctAnswers / totalWords) * 100);

  return (
    <Card className="w-full max-w-md text-center">
      <CardHeader>
        <Trophy className="h-16 w-16 mx-auto text-yellow-500" />
        <CardTitle className="text-2xl">Quest Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-4xl font-bold text-primary">{percentage}%</div>
        <p className="text-muted-foreground">
          You got {correctAnswers} out of {totalWords} antonyms correct!
        </p>

        <div className="flex gap-2 justify-center pt-4">
          <Button variant="outline" onClick={() => navigate("/")}>
            <Home className="h-4 w-4 mr-1" />
            Home
          </Button>
          <Button onClick={onReset}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
