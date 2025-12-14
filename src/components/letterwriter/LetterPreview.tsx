import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, Pencil, Download } from "lucide-react";
import { toast } from "sonner";
import { LetterTemplate } from "@/types/letterwriter";

interface LetterPreviewProps {
    template: LetterTemplate;
    fields: Record<string, string>;
    onBackToEdit: () => void;
    onReset: () => void;
}

export const LetterPreview = ({ template, fields, onBackToEdit, onReset }: LetterPreviewProps) => {

    const copyToClipboard = () => {
        const text = document.getElementById("letter-content")?.innerText;
        if (text) {
            navigator.clipboard.writeText(text);
            toast.success("Letter copied to clipboard!");
        }
    };

    // Helper to get field value safely
    const getVal = (id: string) => fields[id] || "";

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="border-2 border-primary/10 bg-white">
                <CardContent id="letter-content" className={`p-12 font-serif text-lg leading-relaxed text-foreground/90 ${template.layout === 'formal' ? 'space-y-6' : 'space-y-4'}`}>

                    {/* Header / Sender Info */}
                    {template.layout === 'formal' && getVal('sender_info') && (
                        <div className="whitespace-pre-wrap mb-8 text-right text-base text-muted-foreground">
                            {getVal('sender_info')}
                        </div>
                    )}

                    {/* Date */}
                    {getVal('date') && (
                        <div className={template.layout === 'formal' ? "mb-8" : "text-right mb-8"}>
                            {getVal('date')}
                        </div>
                    )}

                    {/* Recipient Info */}
                    {template.layout === 'formal' && getVal('recipient_info') && (
                        <div className="whitespace-pre-wrap mb-8">
                            {getVal('recipient_info')}
                        </div>
                    )}

                    {/* Greeting */}
                    <div className="mb-4 font-bold">
                        {getVal('greeting')}
                    </div>

                    {/* Body */}
                    <div className="whitespace-pre-wrap min-h-[100px] mb-8">
                        {getVal('body') || <span className="italic text-muted-foreground">[Body of your letter goes here]</span>}
                    </div>

                    {/* Closing & Signature */}
                    <div className="mt-12">
                        <div className="mb-4">{getVal('closing')}</div>
                        {template.layout === 'formal' ? (
                            <div className="mt-8 pt-2 border-t w-48 border-black/20">
                                {getVal('signature')}
                            </div>
                        ) : (
                            <div className="font-handwriting text-2xl text-primary">
                                {getVal('signature')}
                            </div>
                        )}
                    </div>

                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    <Pencil className="w-4 h-4" /> Edit Letter
                </Button>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={copyToClipboard} className="gap-2">
                        <Copy className="w-4 h-4" /> Copy Text
                    </Button>
                    <Button onClick={onReset} className="gap-2">
                        <RotateCcw className="w-4 h-4" /> New Letter
                    </Button>
                </div>
            </div>
        </div>
    );
};
