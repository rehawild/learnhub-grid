import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, TrendingUp, Sparkles, Coffee } from "lucide-react";
import { useSmallTalk } from "@/hooks/useSmallTalk";
import { smallTalkTopics } from "@/data/smalltalk/topics";
import { TopicSelector } from "@/components/smalltalk/TopicSelector";
import { ConversationFlow, ResultsView } from "@/components/smalltalk/ConversationFlow";
import { cn } from "@/lib/utils";

export default function SmallTalk() {
    const {
        state,
        selectTopic,
        makeSelection,
        nextTurn,
        resetTool
    } = useSmallTalk();

    const { mode, currentTopic, currentTurnIndex, selections, totalScore } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8 items-center justify-between flex">
                    <div className="flex items-center gap-4">
                        {mode !== 'selection' ? (
                            <Button variant="ghost" size="icon" onClick={resetTool}>
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        ) : (
                            <Link to="/">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {mode !== 'selection' && (
                        <div className="hidden sm:flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Social Savvy Level</span>
                        </div>
                    )}
                </div>

                {/* 2. Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        ☕ Small Talk
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {currentTopic ? currentTopic.title : "Master the subtle art of casual professional conversation."}
                    </p>
                </div>

                {/* 3. Main Interaction Area */}
                <div className="relative">
                    {mode === 'selection' ? (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 justify-center mb-8">
                                <Coffee className="w-5 h-5 text-primary" />
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Select an Arena</span>
                            </div>
                            <TopicSelector topics={smallTalkTopics} onSelect={selectTopic} />
                        </div>
                    ) : mode === 'conversation' && currentTopic ? (
                        <ConversationFlow
                            topic={currentTopic}
                            currentTurnIndex={currentTurnIndex}
                            onSelect={makeSelection}
                            onNext={nextTurn}
                            selections={selections}
                            totalScore={totalScore}
                            reset={resetTool}
                        />
                    ) : mode === 'results' && currentTopic ? (
                        <ResultsView
                            score={totalScore}
                            topic={currentTopic}
                            reset={resetTool}
                        />
                    ) : null}
                </div>

            </div>
        </div>
    );
}
