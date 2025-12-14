import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTOEFLPrep } from "@/hooks/useTOEFLPrep";
import { toeflModules } from "@/data/toeflprep/modules";
import { TaskSelector } from "@/components/toeflprep/TaskSelector";
import { IntegratedTaskStage } from "@/components/toeflprep/IntegratedTaskStage";

const TOEFLPrep = () => {
    const {
        state,
        startModule,
        nextStage,
        reset
    } = useTOEFLPrep();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-6">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 -ml-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        TOEFL Prep
                    </h1>
                    <p className="text-muted-foreground">
                        Practice integrated and independent tasks for the TOEFL iBT.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.stage === 'idle' ? (
                    <TaskSelector
                        modules={toeflModules}
                        onSelect={startModule}
                    />
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={reset} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Quit Task
                            </Button>
                        </div>
                        <IntegratedTaskStage
                            state={state}
                            onNext={nextStage}
                        />
                    </div>
                )}

            </div>
        </div>
    );
};

export default TOEFLPrep;
