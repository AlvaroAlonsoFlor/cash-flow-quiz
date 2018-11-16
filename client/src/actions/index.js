import { CHANGE_POSITION, RESET_POSITION, ADD_POINTS, RESET_POINTS, SET_MAX_SCORE } from "../constants/action-types";

export const moveQuestionPosition = () => ({
    type: CHANGE_POSITION,
});

export const resetPostion = () => ({
    type: RESET_POSITION
})

export const addPoints = (points) => ({
    type: ADD_POINTS,
    payload: points
})

export const resetPoints = () => ({
    type: RESET_POINTS
})

export const setMaxScore = (score) => ({
    type: SET_MAX_SCORE,
    payload: score
})