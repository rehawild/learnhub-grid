import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, Pencil, Check } from "lucide-react";
import { toast } from "sonner";
import { EmailTemplate } from "@/types/emailwriter";

interface EmailPreviewDisplayProps {
    template: EmailTemplate;
    fields: Record<string, string>;
    onBackToEdit: () => void;
    onReset: () => void;
}

export const EmailPreviewDisplay = ({ template, fields, onBackToEdit, onReset }: EmailPreviewDisplayProps) => {

    // Construct the full email text
    const fullEmail = `Subject: ${fields.subject}

${fields.greeting}

${fields.body}

${fields.closing}
${fields.sender}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullEmail);
        toast.success("Email copied to clipboard!");
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="border-2 border-muted">
                <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        New Message
                    </CardTitle>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="border-b pb-2">
                        <span className="text-muted-foreground mr-2">To:</span>
                        <span className="font-medium">{fields.recipient}</span>
                    </div>
                    <div className="border-b pb-4">
                        <span className="text-muted-foreground mr-2">Subject:</span>
                        <span className="font-bold">{fields.subject}</span>
                    </div>

                    <div className="min-h-[200px] whitespace-pre-wrap font-sans text-lg leading-relaxed pt-2">
                        {fullEmail.split('\n\n').slice(1).join('\n\n')}
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    <Pencil className="w-4 h-4" /> Edit
                </Button>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={copyToClipboard} className="gap-2">
                        <Copy className="w-4 h-4" /> Copy Text
                    </Button>
                    <Button onClick={onReset} variant="outline" className="gap-2 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive">
                        <RotateCcw className="w-4 h-4" /> Start Over
                    </Button>
                </div>
            </div>
        </div>
    );
};
