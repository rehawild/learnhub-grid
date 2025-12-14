import { useState } from "react";
import { ScoreTrackState, ScoreRecord, TestType, Goal } from "@/types/scoretrack";
import { MOCK_RECORDS, MOCK_GOALS } from "@/data/scoretrack/history";

const INITIAL_STATE: ScoreTrackState = {
    records: MOCK_RECORDS,
    goals: MOCK_GOALS,
    filterType: 'All'
};

export const useScoreTrack = () => {
    const [state, setState] = useState<ScoreTrackState>(INITIAL_STATE);

    const setFilter = (type: TestType | 'All') => {
        setState(prev => ({ ...prev, filterType: type }));
    };

    const addRecord = (record: ScoreRecord) => {
        setState(prev => ({
            ...prev,
            records: [record, ...prev.records]
        }));
    };

    const deleteRecord = (id: string) => {
        setState(prev => ({
            ...prev,
            records: prev.records.filter(r => r.id !== id)
        }));
    };

    const getFilteredRecords = () => {
        if (state.filterType === 'All') return state.records;
        return state.records.filter(r => r.testType === state.filterType);
    };

    const getGoals = () => {
        // Simple getter matching filter? Or always show all?
        // Let's filter goals too if specific category selected
        if (state.filterType === 'All') return state.goals;
        return state.goals.filter(g => g.testType === state.filterType);
    };

    return {
        state,
        filteredRecords: getFilteredRecords(),
        filteredGoals: getGoals(),
        setFilter,
        addRecord,
        deleteRecord
    };
};
