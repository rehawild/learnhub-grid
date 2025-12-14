import { PhoneScenario, CallStatus } from "@/types/phoneenglish";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, Grid3X3, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CallInterfaceProps {
    scenario: PhoneScenario;
    status: CallStatus;
    duration: number;
    isMuted: boolean;
    isSpeakerOn: boolean;
    onStartCall: () => void;
    onEndCall: () => void;
    onToggleMute: () => void;
    onToggleSpeaker: () => void;
}

export const CallInterface = ({
    scenario,
    status,
    duration,
    isMuted,
    isSpeakerOn,
    onStartCall,
    onEndCall,
    onToggleMute,
    onToggleSpeaker
}: CallInterfaceProps) => {

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const scs = secs % 60;
        return `${mins}:${scs.toString().padStart(2, '0')}`;
    };

    const isActive = status === "connected";
    const isEnded = status === "ended";

    return (
        <div className="flex flex-col items-center justify-center p-4">

            {/* Phone Screen Container */}
            <div className="w-full max-w-sm bg-black rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 overflow-hidden relative min-h-[600px] flex flex-col justify-between">

                {/* Dynamic Island / Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>

                {/* Status Bar */}
                <div className="flex justify-between items-center text-white text-xs px-4 pt-2 mb-8 opacity-80">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-sm border border-white/50 flex items-center justify-center text-[8px]">5G</div>
                        <div className="w-5 h-3 bg-white/50 rounded-sm"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center pt-8 text-center text-white space-y-6">
                    <Avatar className="w-32 h-32 border-4 border-gray-700 shadow-xl">
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${scenario.title}&background=random`} />
                        <AvatarFallback className="text-4xl text-black bg-gray-200"><User /></AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                        {isEnded ? (
                            <h2 className="text-sm text-gray-400 font-medium tracking-wide uppercase">Call Ended</h2>
                        ) : isActive ? (
                            <h2 className="text-sm text-gray-400 font-medium tracking-wide uppercase">In Call</h2>
                        ) : status === "dialing" ? (
                            <h2 className="text-sm text-gray-400 font-medium tracking-wide uppercase">Calling...</h2>
                        ) : (
                            <h2 className="text-sm text-gray-400 font-medium tracking-wide uppercase">Outgoing Call</h2>
                        )}

                        <h1 className="text-3xl font-semibold tracking-tight">{scenario.title}</h1>
                    </div>

                    <div className="text-xl font-mono opacity-80 min-h-[2rem]">
                        {isActive && formatTime(duration)}
                        {isEnded && formatTime(duration)}
                    </div>

                    {!isActive && !isEnded && status !== "dialing" && (
                        <div className="px-6 py-4 bg-gray-800/50 rounded-xl backdrop-blur-sm text-sm text-gray-300 mx-4">
                            <span className="block font-bold mb-1 text-white">Objective:</span>
                            {scenario.objective}
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="pb-12 bg-transparent">
                    {status === "idle" ? (
                        <div className="flex justify-center">
                            <Button
                                size="lg"
                                className="w-20 h-20 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform hover:scale-110"
                                onClick={onStartCall}
                            >
                                <Phone className="w-8 h-8 fill-current" />
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-6 px-6">
                            {/* Row 1 */}
                            <Button variant="ghost" className={cn("h-16 w-16 rounded-full flex flex-col gap-1 text-white hover:bg-white/20 transition-all", isMuted && "bg-white text-black hover:bg-gray-200")} onClick={onToggleMute}>
                                {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                                <span className="text-[10px] font-normal">mute</span>
                            </Button>
                            <Button variant="ghost" className="h-16 w-16 rounded-full flex flex-col gap-1 text-white hover:bg-white/20 transition-all" disabled>
                                <Grid3X3 className="w-6 h-6" />
                                <span className="text-[10px] font-normal">keypad</span>
                            </Button>
                            <Button variant="ghost" className={cn("h-16 w-16 rounded-full flex flex-col gap-1 text-white hover:bg-white/20 transition-all", isSpeakerOn && "bg-white text-black hover:bg-gray-200")} onClick={onToggleSpeaker}>
                                {isSpeakerOn ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                                <span className="text-[10px] font-normal">audio</span>
                            </Button>

                            {/* Row 2 - End Call */}
                            <div className="col-span-3 flex justify-center mt-4">
                                {isEnded ? (
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-8 text-white border-white/20 hover:bg-white/20 hover:text-white transition-all"
                                        onClick={onEndCall} // Re-purposed to act as "Close"
                                    >
                                        Close
                                    </Button>
                                ) : (
                                    <Button
                                        size="lg"
                                        className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition-transform hover:scale-110"
                                        onClick={onEndCall}
                                    >
                                        <PhoneOff className="w-8 h-8 fill-current" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* Info Card outside phone */}
            <div className="mt-8 text-center max-w-sm text-muted-foreground text-sm">
                <p>Simulating a phone interface helps practice speaking without visual cues.</p>
            </div>
        </div>
    );
};
