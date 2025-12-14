import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEssayHelper } from "@/hooks/useEssayHelper";
import { essayTemplates } from "@/data/essayhelper/essay-templates";
import { TypeSelector } from "@/components/essayhelper/TypeSelector";
import { EssayBuilder } from "@/components/essayhelper/EssayBuilder";
import { EssayPreview } from "@/components/essayhelper/EssayPreview";

const EssayHelper = () => {
    const {
        state,
        currentSection,
        selectTemplate,
        updateSectionContent,
        nextSection,
        prevSection,
        resetHelper,
        goBack
    } = useEssayHelper();

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
                        ✍️ Essay Helper
                    </h1>
                    <p className="text-muted-foreground">
                        Structure your thoughts and draft compelling essays step-by-step.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <TypeSelector templates={essayTemplates} onSelect={selectTemplate} />
                ) : state.mode === "building" && currentSection ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Template
                            </Button>
                        </div>
                        <EssayBuilder
                            section={currentSection}
                            currentIndex={state.currentSectionIndex}
                            totalSections={state.sections.length}
                            onUpdateContent={updateSectionContent}
                            onNext={nextSection}
                            onPrev={prevSection}
                        />
                    </div>
                ) : state.mode === "preview" ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Editing
                            </Button>
                        </div>
                        <EssayPreview
                            sections={state.sections}
                            onBackToEdit={goBack}
                            onReset={resetHelper}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default EssayHelper;
