import { EmailTemplate } from "@/types/emailwriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface EmailTemplateSelectorProps {
    templates: EmailTemplate[];
    onSelect: (template: EmailTemplate) => void;
}

export const EmailTemplateSelector = ({ templates, onSelect }: EmailTemplateSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
                <Card
                    key={template.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelect(template)}
                >
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                                {/* Helper to render icon based on name since we stored string names */}
                                <Mail className="w-6 h-6" />
                            </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{template.name}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                            Tone: {template.structure}
                        </div>
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(template);
                            }}
                        >
                            <Mail className="w-4 h-4" /> Start Writing
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
