import {createAction} from "redux-actions";

const actionTypes = {
    CLICK_ACTION: "CLICK_ACTION",
    CLICK_ACTION_SUCCSS: "CLICK_ACTION_SUCCSS",
    ON_INPUT_CHANGE: "ON_INPUT_CHANGE"
};
export default actionTypes;

export const clickHandler = createAction(actionTypes.CLICK_ACTION);

export const clickHandlerSuccess = createAction(
    actionTypes.CLICK_ACTION_SUCCSS
);
export const onInputChange = createAction(actionTypes.ON_INPUT_CHANGE);
