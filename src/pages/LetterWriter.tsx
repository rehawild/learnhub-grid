import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLetterWriter } from "@/hooks/useLetterWriter";
import { letterTemplates } from "@/data/letterwriter/letter-templates";
import { LetterTemplateSelector } from "@/components/letterwriter/LetterTemplateSelector";
import { LetterComposer } from "@/components/letterwriter/LetterComposer";
import { LetterPreview } from "@/components/letterwriter/LetterPreview";

const LetterWriter = () => {
    const {
        state,
        selectTemplate,
        updateField,
        previewLetter,
        resetTool,
        goBack
    } = useLetterWriter();

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
                        ✉️ Letter Writer
                    </h1>
                    <p className="text-muted-foreground">
                        Compose professional and personal letters with ease.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <LetterTemplateSelector templates={letterTemplates} onSelect={selectTemplate} />
                ) : state.mode === "writing" && state.currentTemplate ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Template
                            </Button>
                        </div>
                        <LetterComposer
                            template={state.currentTemplate}
                            fields={state.fields}
                            onUpdateField={updateField}
                            onPreview={previewLetter}
                        />
                    </div>
                ) : state.mode === "preview" && state.currentTemplate ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Editor
                            </Button>
                        </div>
                        <LetterPreview
                            template={state.currentTemplate}
                            fields={state.fields}
                            onBackToEdit={goBack}
                            onReset={resetTool}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default LetterWriter;
