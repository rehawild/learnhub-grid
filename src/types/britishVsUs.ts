export interface DialectItem {
    id: string;
    uk: string;
    us: string;
    category: string;
    context: string;
    exampleUK: string;
    exampleUS: string;
}

export interface DialectState {
    currentIndex: number;
    score: number;
    completed: boolean;
    attempts: number;
}
