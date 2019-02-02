import {combineReducers} from "redux";
import homeReducer from "../../home/duck/reducer";

const allReducers = combineReducers({
    homeReducer
});
export default allReducers;
