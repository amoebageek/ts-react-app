import {put, takeEvery, all} from "redux-saga/effects";
import actionTypes, {clickHandlerSuccess} from "../duck/action";
import {AnyAction} from "redux";

function* transformFunction(action: AnyAction) {
    yield put(clickHandlerSuccess());
}
export function* watchFirstAction() {
    yield takeEvery(actionTypes.CLICK_ACTION, transformFunction);
}
