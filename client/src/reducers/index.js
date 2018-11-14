import { CHANGE_POSITION, RESET_POSITION, ADD_POINTS, RESET_POINTS, SET_MAX_SCORE, SET_NAME } from "../constants/action-types";

const initialState = {
    questionPosition: 0,
    maxScore: 0,
    playerScore: 0,
    playerName: ''
}

const rootReducer = (state = initialState, action) => {
    // All changes to the state here
    switch (action.type) {
        case CHANGE_POSITION:
            // I could use Object.assing instead of the spread operator but it seems to be clearer this way
            return { ...state, questionPosition: state.questionPosition + 1}
        case RESET_POSITION:
            return {...state, questionPosition: 0 }
        case SET_NAME:
            return {...state, playerName: action.payload}
        case ADD_POINTS:
            return {...state, playerScore: state.playerScore + action.payload }
        case RESET_POINTS:
            return {...state, playerScore: 0 }
        case SET_MAX_SCORE:            
            return {...state, maxScore: action.payload }
    
        default:
            return state;
    }
};

export default rootReducer;