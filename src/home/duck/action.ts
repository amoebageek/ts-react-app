import {createAction} from "redux-actions";

const actionTypes = {
    FIRST_ACTION: "FIRST_ACTION",
    FIRST_ACTION_SUCCSS: "FIRST_ACTION_SUCCSS"
};
export default actionTypes;

export const firstAction = createAction(actionTypes.FIRST_ACTION);

export const firstActionSuccess = createAction(actionTypes.FIRST_ACTION_SUCCSS);
