import { ScoreRecord } from "@/types/scoretrack";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ScoreChartProps {
    records: ScoreRecord[];
}

export const ScoreChart = ({ records }: ScoreChartProps) => {
    // Need to normalize scores to percentage for comparison?
    // Or just show raw values if filtered.
    // Let's map to percentage for the main unified chart 0-100.

    // Process data: sort by date ascending
    const data = [...records]
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map(r => ({
            date: r.date,
            score: (r.score / r.maxScore) * 100, // Normalize to %
            rawScore: r.score,
            label: r.details,
            type: r.testType
        }));

    return (
        <Card className="col-span-1 lg:col-span-2 shadow-md">
            <CardHeader>
                <CardTitle>Performance Trend (Normalized %)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                {data.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                            <XAxis
                                dataKey="date"
                                fontSize={12}
                                tickFormatter={(val) => new Date(val).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            />
                            <YAxis domain={[0, 100]} fontSize={12} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)' }}
                                labelStyle={{ color: 'var(--foreground)' }}
                                formatter={(value: number, name: string, props: any) => [`${Math.round(value)}%`, props.payload.type]}
                                labelFormatter={(label) => new Date(label).toLocaleDateString()}
                            />
                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="var(--primary)"
                                strokeWidth={3}
                                dot={{ fill: 'var(--primary)', r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                        No data available
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
