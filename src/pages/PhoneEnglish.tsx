import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePhoneEnglish } from "@/hooks/usePhoneEnglish";
import { phoneScenarios } from "@/data/phoneenglish/scenarios";
import { ScenarioList } from "@/components/phoneenglish/ScenarioList";
import { CallInterface } from "@/components/phoneenglish/CallInterface";

const PhoneEnglish = () => {
    const {
        state,
        selectScenario,
        startCall,
        endCall,
        toggleMute,
        toggleSpeaker,
        exitCall
    } = usePhoneEnglish();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

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
                        📞 Phone English
                    </h1>
                    <p className="text-muted-foreground">
                        Practice handled phone conversations in a realistic interface.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "list" ? (
                    <ScenarioList
                        scenarios={phoneScenarios}
                        onSelect={selectScenario}
                    />
                ) : state.mode === "call" && state.currentScenario ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={exitCall} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> End Session
                            </Button>
                        </div>
                        <CallInterface
                            scenario={state.currentScenario}
                            status={state.callStatus}
                            duration={state.callDuration}
                            isMuted={state.isMuted}
                            isSpeakerOn={state.isSpeakerOn}
                            onStartCall={startCall}
                            onEndCall={state.callStatus === "ended" ? exitCall : endCall}
                            onToggleMute={toggleMute}
                            onToggleSpeaker={toggleSpeaker}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default PhoneEnglish;
