import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useInterviewPrep } from "@/hooks/useInterviewPrep";
import { interviewTopics } from "@/data/interviewprep/questions";
import { TopicSelector } from "@/components/interviewprep/TopicSelector";
import { InterviewSession } from "@/components/interviewprep/InterviewSession";
import { SelfEvaluation } from "@/components/interviewprep/SelfEvaluation";

const InterviewPrep = () => {
    const {
        state,
        selectTopic,
        toggleRecording,
        nextQuestion,
        prevQuestion,
        submitSelfEvaluation,
        resetTool,
        restartSession
    } = useInterviewPrep();

    const handleBackToTopics = () => {
        resetTool();
    };

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
                        🎙️ Interview Prep
                    </h1>
                    <p className="text-muted-foreground">
                        Practice common interview questions and record your answers.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <TopicSelector topics={interviewTopics} onSelect={selectTopic} />
                ) : state.mode === "practice" && state.currentTopic ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={handleBackToTopics} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Quit Session
                            </Button>
                        </div>
                        <InterviewSession
                            topic={state.currentTopic}
                            questionIndex={state.currentQuestionIndex}
                            isRecording={state.isRecording}
                            recordingTime={state.recordingTime}
                            userResponse={state.userResponses[state.currentTopic.questions[state.currentQuestionIndex].id]}
                            onToggleRecord={toggleRecording}
                            onNext={nextQuestion}
                            onPrev={prevQuestion}
                        />
                    </div>
                ) : state.mode === "evaluation" && state.currentTopic ? (
                    <div className="space-y-6">
                        <SelfEvaluation
                            topic={state.currentTopic}
                            responses={state.userResponses}
                            onSubmitEvaluation={submitSelfEvaluation}
                            onRetry={restartSession}
                            onBack={handleBackToTopics}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default InterviewPrep;
