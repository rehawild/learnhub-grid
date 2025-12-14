import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useParagraphPro } from "@/hooks/useParagraphPro";
import { paragraphGuides } from "@/data/paragraphpro/paragraph-guides";
import { GuideSelector } from "@/components/paragraphpro/GuideSelector";
import { ParagraphBuilder } from "@/components/paragraphpro/ParagraphBuilder";
import { ParagraphReview } from "@/components/paragraphpro/ParagraphReview";

const ParagraphPro = () => {
    const {
        state,
        selectGuide,
        updatePart,
        reviewParagraph,
        resetTool,
        goBack
    } = useParagraphPro();

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
                        📄 Paragraph Pro
                    </h1>
                    <p className="text-muted-foreground">
                        Structure perfect paragraphs step-by-step.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <GuideSelector guides={paragraphGuides} onSelect={selectGuide} />
                ) : state.mode === "building" && state.currentGuide ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Style
                            </Button>
                        </div>
                        <ParagraphBuilder
                            guide={state.currentGuide}
                            parts={state.parts}
                            onUpdatePart={updatePart}
                            onReview={reviewParagraph}
                        />
                    </div>
                ) : state.mode === "review" && state.currentGuide ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Editor
                            </Button>
                        </div>
                        <ParagraphReview
                            guide={state.currentGuide}
                            parts={state.parts}
                            onBackToEdit={goBack}
                            onReset={resetTool}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default ParagraphPro;
