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
            // I could use Object.assing instead of the spread operator but it seems to be clearer this way
            return { ...state, questionPosition: state.questionPosition + 1}
    
        default:
            return state;
    }
};

export default rootReducer;