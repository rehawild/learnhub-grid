import { LetterTemplate } from "@/types/letterwriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Eye, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface LetterComposerProps {
    template: LetterTemplate;
    fields: Record<string, string>;
    onUpdateField: (id: string, value: string) => void;
    onPreview: () => void;
}

export const LetterComposer = ({
    template,
    fields,
    onUpdateField,
    onPreview
}: LetterComposerProps) => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        Writing: <span className="text-primary">{template.name}</span>
                    </CardTitle>
                    <CardDescription>
                        Fill in the details below. Follow the tips for a great letter!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {template.fields.map((field) => (
                        <div key={field.id} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor={field.id} className="text-base font-medium">
                                    {field.label} {field.required && <span className="text-destructive">*</span>}
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

                            {field.type === 'textarea' ? (
                                <Textarea
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    value={fields[field.id]}
                                    onChange={(e) => onUpdateField(field.id, e.target.value)}
                                    className="min-h-[120px] text-base resize-y"
                                />
                            ) : (
                                <Input
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={fields[field.id]}
                                    onChange={(e) => onUpdateField(field.id, e.target.value)}
                                    className="h-11 text-base"
                                />
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onPreview} className="gap-2">
                    <Eye className="w-4 h-4" /> Preview Letter
                </Button>
            </div>
        </div>
    );
};
