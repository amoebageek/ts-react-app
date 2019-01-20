import {put, takeEvery, all} from "redux-saga/effects";
import actionTypes, {firstActionSuccess} from "../duck/action";

function* transformFunction() {
    yield put(firstActionSuccess("5"));
}
export function* watchFirstAction() {
    yield takeEvery(actionTypes.FIRST_ACTION, transformFunction);
}
