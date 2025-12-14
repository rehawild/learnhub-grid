import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useStoryWriter } from "@/hooks/useStoryWriter";
import { storyGenres } from "@/data/storywriter/story-prompts";
import { GenreSelector } from "@/components/storywriter/GenreSelector";
import { StoryWorkspace } from "@/components/storywriter/StoryWorkspace";
import { StoryComplete } from "@/components/storywriter/StoryComplete";

const StoryWriter = () => {
    const {
        state,
        selectGenre,
        updateStory,
        finishStory,
        resetWriter,
        goBack
    } = useStoryWriter();

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
                        📝 Story Writer
                    </h1>
                    <p className="text-muted-foreground">
                        Choose a genre, get a creative prompt, and start writing your masterpiece.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <GenreSelector genres={storyGenres} onSelect={selectGenre} />
                ) : state.mode === "writing" && state.currentPrompt ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Genre
                            </Button>
                        </div>
                        <StoryWorkspace
                            prompt={state.currentPrompt}
                            content={state.storyContent}
                            onUpdate={updateStory}
                            onFinish={finishStory}
                        />
                    </div>
                ) : state.mode === "complete" ? (
                    <div className="space-y-6">
                        <StoryComplete
                            content={state.storyContent}
                            onBackToEdit={goBack}
                            onReset={resetWriter}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default StoryWriter;
