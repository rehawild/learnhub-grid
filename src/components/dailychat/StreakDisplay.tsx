import { UserStats } from "@/types/dailychat";
import { Flame, Calendar } from "lucide-react";

interface StreakDisplayProps {
    stats: UserStats;
}

export const StreakDisplay = ({ stats }: StreakDisplayProps) => {
    return (
        <div className="flex items-center gap-4 bg-card border rounded-full px-6 py-2 shadow-sm text-sm font-medium">
            <div className="flex items-center gap-1.5 text-orange-500">
                <Flame className="w-5 h-5 fill-current" />
                <span>{stats.currentStreak} Day Streak</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Total: {stats.totalDays} days</span>
            </div>
        </div>
    );
};
