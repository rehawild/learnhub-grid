import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEmailWriter } from "@/hooks/useEmailWriter";
import { emailTemplates } from "@/data/emailwriter/email-templates";
import { EmailTemplateSelector } from "@/components/emailwriter/EmailTemplateSelector";
import { EmailComposer } from "@/components/emailwriter/EmailComposer";
import { EmailPreviewDisplay } from "@/components/emailwriter/EmailPreviewDisplay";

const EmailWriter = () => {
    const {
        state,
        selectTemplate,
        updateField,
        previewEmail,
        resetWriter,
        goBack
    } = useEmailWriter();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        📧 Email Writer
                    </h1>
                    <p className="text-muted-foreground">
                        Draft professional emails quickly using structured templates.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <EmailTemplateSelector templates={emailTemplates} onSelect={selectTemplate} />
                ) : state.mode === "composing" && state.currentTemplate ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Template
                            </Button>
                        </div>
                        <EmailComposer
                            template={state.currentTemplate}
                            fields={state.fields}
                            onUpdateField={updateField}
                            onPreview={previewEmail}
                        />
                    </div>
                ) : state.mode === "preview" && state.currentTemplate ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Editor
                            </Button>
                        </div>
                        <EmailPreviewDisplay
                            template={state.currentTemplate}
                            fields={state.fields}
                            onBackToEdit={goBack}
                            onReset={resetWriter}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default EmailWriter;
