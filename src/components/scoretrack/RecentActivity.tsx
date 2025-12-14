import { ScoreRecord } from "@/types/scoretrack";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecentActivityProps {
    records: ScoreRecord[];
    onDelete: (id: string) => void;
}

export const RecentActivity = ({ records, onDelete }: RecentActivityProps) => {
    return (
        <Card className="shadow-md h-[400px] flex flex-col">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full px-6 pb-4">
                    <div className="space-y-4">
                        {records.map(record => (
                            <div key={record.id} className="flex items-center justify-between p-3 border rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors group">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-xs">{record.testType}</Badge>
                                        <span className="font-medium text-sm">{record.details}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {new Date(record.date).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold font-mono text-primary">
                                        {record.score}/{record.maxScore}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => onDelete(record.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>

                                </div>
                            </div>
                        ))}
                        {records.length === 0 && (
                            <p className="text-center text-muted-foreground py-8">No records found</p>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};
