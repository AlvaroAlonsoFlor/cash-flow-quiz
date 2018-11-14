import { CHANGE_POSITION } from "../constants/action-types";

export const moveQuestionPosition = questionPosition => ({
    type: CHANGE_POSITION,
    // probably i don't need payload since I am increasing by one when this action
    // payload: questionPosition
});