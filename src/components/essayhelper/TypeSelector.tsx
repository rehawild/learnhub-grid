import { EssayTemplate } from "@/types/essayhelper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

interface TypeSelectorProps {
    templates: EssayTemplate[];
    onSelect: (template: EssayTemplate) => void;
}

export const TypeSelector = ({ templates, onSelect }: TypeSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
                <Card
                    key={template.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelect(template)}
                >
                    <CardHeader>
                        <div className="text-4xl mb-4">{template.icon}</div>
                        <CardTitle className="group-hover:text-primary transition-colors">{template.name}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(template);
                            }}
                        >
                            <PenTool className="w-4 h-4" /> Start Writing
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
