import { CHANGE_POSITION } from "../constants/action-types";

const initialState = {
    questionPosition: 0,
    totalScore: 0,
    score: 0,
    playerName: ''
}

const rootReducer = (state = initialState, action) => {
    // All changes to the state here
    switch (action.type) {
        case CHANGE_POSITION:
            return { ...state, questionPosition: state.questionPosition + 1}
    
        default:
            return state;
    }
};

export {rootReducer};