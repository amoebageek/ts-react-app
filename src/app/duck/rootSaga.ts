import {all} from "redux-saga/effects";
import {watchFirstAction} from "../../home/duck/sagas";

export default function* rootSaga() {
    yield all([watchFirstAction()]);
}
