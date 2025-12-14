import { LetterTemplate } from "@/types/letterwriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, Heart, PenTool } from "lucide-react";

interface LetterTemplateSelectorProps {
    templates: LetterTemplate[];
    onSelect: (template: LetterTemplate) => void;
}

const iconMap: Record<string, any> = {
    Mail,
    Briefcase,
    Heart,
    PenTool
};

export const LetterTemplateSelector = ({ templates, onSelect }: LetterTemplateSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => {
                const IconComponent = iconMap[template.icon] || Mail;
                return (
                    <Card
                        key={template.id}
                        className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                        onClick={() => onSelect(template)}
                    >
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                            </div>
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
                                <IconComponent className="w-4 h-4" /> Start Writing
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};
