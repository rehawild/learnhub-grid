import { EmailTemplate } from "@/types/emailwriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Eye, Send, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EmailComposerProps {
    template: EmailTemplate;
    fields: Record<string, string>;
    onUpdateField: (id: string, value: string) => void;
    onPreview: () => void;
}

export const EmailComposer = ({
    template,
    fields,
    onUpdateField,
    onPreview
}: EmailComposerProps) => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        Drafting: <span className="text-primary">{template.name}</span>
                    </CardTitle>
                    <CardDescription>
                        Fill in the details below. Hover over the info icons for tips.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {template.fields.map((field) => (
                        <div key={field.id} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor={field.id} className="text-base font-medium">
                                    {field.label}
                                </Label>
                                {field.tips.length > 0 && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="w-4 h-4 text-muted-foreground cursor-help hover:text-primary" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <ul className="list-disc list-inside text-xs">
                                                    {field.tips.map((tip, i) => (
                                                        <li key={i}>{tip}</li>
                                                    ))}
                                                </ul>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>

                            {field.id === 'body' ? (
                                <Textarea
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    value={fields[field.id]}
                                    onChange={(e) => onUpdateField(field.id, e.target.value)}
                                    className="min-h-[200px] text-base"
                                />
                            ) : (
                                <Input
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    value={fields[field.id]}
                                    onChange={(e) => onUpdateField(field.id, e.target.value)}
                                    className="text-base"
                                />
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onPreview} className="gap-2">
                    <Eye className="w-4 h-4" /> Preview Email
                </Button>
            </div>
        </div>
    );
};
