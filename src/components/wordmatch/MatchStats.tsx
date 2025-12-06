import { Trophy, Target } from "lucide-react";

interface MatchStatsProps {
  matches: number;
  totalPairs: number;
  attempts: number;
}

export const MatchStats = ({ matches, totalPairs, attempts }: MatchStatsProps) => {
  return (
    <div className="flex items-center gap-6 text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-tool-card-yellow" />
        <span className="font-medium">
          {matches} / {totalPairs}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-tool-card-orange" />
        <span className="font-medium">{attempts} attempts</span>
      </div>
    </div>
  );
};
