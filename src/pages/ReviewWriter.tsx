import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useReviewWriter } from "@/hooks/useReviewWriter";
import { reviewCategories } from "@/data/reviewwriter/review-categories";
import { CategorySelector } from "@/components/reviewwriter/CategorySelector";
import { ReviewEditor } from "@/components/reviewwriter/ReviewEditor";
import { ReviewPreview } from "@/components/reviewwriter/ReviewPreview";

const ReviewWriter = () => {
    const {
        state,
        selectCategory,
        updateState,
        addPro,
        removePro,
        addCon,
        removeCon,
        previewReview,
        resetTool,
        goBack
    } = useReviewWriter();

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
                        ⭐ Review Writer
                    </h1>
                    <p className="text-muted-foreground">
                        Share your opinions on books, movies, and more.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <CategorySelector categories={reviewCategories} onSelect={selectCategory} />
                ) : state.mode === "writing" && state.currentCategory ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Category
                            </Button>
                        </div>
                        <ReviewEditor
                            category={state.currentCategory}
                            title={state.title}
                            rating={state.rating}
                            pros={state.pros}
                            cons={state.cons}
                            body={state.body}
                            onUpdateTitle={(val) => updateState({ title: val })}
                            onUpdateRating={(val) => updateState({ rating: val })}
                            onAddPro={addPro}
                            onRemovePro={removePro}
                            onAddCon={addCon}
                            onRemoveCon={removeCon}
                            onUpdateBody={(val) => updateState({ body: val })}
                            onPreview={previewReview}
                        />
                    </div>
                ) : state.mode === "preview" && state.currentCategory ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Editor
                            </Button>
                        </div>
                        <ReviewPreview
                            category={state.currentCategory}
                            title={state.title}
                            rating={state.rating}
                            pros={state.pros}
                            cons={state.cons}
                            body={state.body}
                            onBackToEdit={goBack}
                            onReset={resetTool}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default ReviewWriter;
