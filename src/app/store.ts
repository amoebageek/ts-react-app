import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./duck/rootSaga";
import reducers from "./duck/reducers";
const sagaMiddleware = createSagaMiddleware();

const middleWare = applyMiddleware(sagaMiddleware);
const store = createStore(reducers, composeWithDevTools(middleWare));
sagaMiddleware.run(rootSaga);
export default store;
