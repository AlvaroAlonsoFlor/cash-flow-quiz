import { CHANGE_POSITION, RESET_POSITION, ADD_POINTS, RESET_POINTS, SET_MAX_SCORE, SET_NAME } from "../constants/action-types";

const initialState = {
    questionPosition: 0,
    // maxScore: 0, not necessary if it is always 10 questions
    playerScore: 0,
    playerName: ''
}

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CHANGE_POSITION:
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