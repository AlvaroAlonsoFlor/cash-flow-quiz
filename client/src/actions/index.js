import { CHANGE_POSITION } from "../constants/action-types";

export const moveQuestionPosition = questionPosition => ({
    type: CHANGE_POSITION,
    payload: questionPosition
});