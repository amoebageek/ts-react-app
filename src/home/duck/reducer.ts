import {handleActions} from "redux-actions";
import actionTypes from "./action";

const INIT_STATE = {
    home: {}
};
const homeReducer = handleActions(
    {
        [actionTypes.FIRST_ACTION_SUCCSS]: (state, action) => {
            return {
                ...state,
                count: action.payload
            };
        }
    },
    INIT_STATE
);

export default homeReducer;
