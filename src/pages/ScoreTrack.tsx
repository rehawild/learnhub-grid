import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useScoreTrack } from "@/hooks/useScoreTrack";
import { ScoreChart } from "@/components/scoretrack/ScoreChart";
import { RecentActivity } from "@/components/scoretrack/RecentActivity";
import { GoalTracker } from "@/components/scoretrack/GoalTracker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TestType } from "@/types/scoretrack";

const ScoreTrack = () => {
    const { state, filteredRecords, filteredGoals, setFilter, deleteRecord } = useScoreTrack();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

                {/* 1. Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2 -ml-2 px-0">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Tools
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Score Tracker 📈</h1>
                            <p className="text-muted-foreground">Monitor your progress across all testing tools.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Select value={state.filterType} onValueChange={(val) => setFilter(val as TestType | 'All')}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Tests</SelectItem>
                                <SelectItem value="IELTS">IELTS</SelectItem>
                                <SelectItem value="TOEFL">TOEFL</SelectItem>
                                <SelectItem value="Cambridge">Cambridge</SelectItem>
                                <SelectItem value="Mock Test">Mock Test</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="gap-2">
                            <Plus className="w-4 h-4" /> Add Score
                        </Button>
                    </div>
                </div>

                {/* 2. Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Main Chart (Spans 2 cols) */}
                    <ScoreChart records={filteredRecords} />

                    {/* Goals (Spans 1 col) */}
                    <GoalTracker goals={filteredGoals} />

                    {/* Recent Activity (Spans 3 cols or split?) */}
                    {/* Let's make Activity span full width or 2 cols depending on layout pref. */}
                    {/* Let's do Full Width below */}
                    <div className="lg:col-span-3">
                        <RecentActivity records={filteredRecords} onDelete={deleteRecord} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ScoreTrack;
