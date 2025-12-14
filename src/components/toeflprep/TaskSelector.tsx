import { TOEFLModule } from "@/types/toeflprep";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Mic } from "lucide-react";

interface TaskSelectorProps {
    modules: TOEFLModule[];
    onSelect: (m: TOEFLModule) => void;
}

export const TaskSelector = ({ modules, onSelect }: TaskSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
                <Card key={module.id} className="cursor-pointer hover:border-primary transition-all group">
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant={module.type.includes('integrated') ? "default" : "secondary"}>
                                {module.type.includes('integrated') ? 'Integrated' : 'Independent'}
                            </Badge>
                            {module.type.includes('speaking') ? <Mic className="w-4 h-4 text-muted-foreground" /> : <BookOpen className="w-4 h-4" />}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{module.title}</CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full" onClick={() => onSelect(module)}>Start Task</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
