import {combineReducers} from "redux";
import homeReducer from "../../home/duck/reducer";

const reducers = combineReducers({
    // application: appReducer,
    home: homeReducer
});
export default reducers;
