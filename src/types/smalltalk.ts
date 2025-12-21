export type SocialImpact = 'high' | 'medium' | 'low';

export interface DialogueOption {
    id: string;
    text: string;
    impact: SocialImpact;
    feedback: string;
}

export interface ConversationTurn {
    id: string;
    partnerSays: string;
    options: DialogueOption[];
}

export interface SmallTalkTopic {
    id: string;
    title: string;
    description: string;
    icon: string;
    turns: ConversationTurn[];
}

export type SmallTalkMode = 'selection' | 'conversation' | 'results';

export interface SmallTalkState {
    mode: SmallTalkMode;
    currentTopic: SmallTalkTopic | null;
    currentTurnIndex: number;
    selections: { turnId: string; optionId: string }[];
    totalScore: number;
}
