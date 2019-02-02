import {handleActions} from "redux-actions";
import {ReducerInterface} from "../../app/duck/types";
import actionTypes from "./action";

const INIT_STATE: ReducerInterface = {
    home: "",
    count: 0,
    inputValue: ""
};
const HomeReducer = handleActions(
    {
        [actionTypes.CLICK_ACTION_SUCCSS]: (state, action) => {
            return {
                ...state,
                count: state.count + 1
            };
        },
        [actionTypes.ON_INPUT_CHANGE]: (state, action) => {
            return {
                ...state,
                inputValue: action.payload ? action.payload : ""
            };
        }
    },
    INIT_STATE
);

export default HomeReducer;
