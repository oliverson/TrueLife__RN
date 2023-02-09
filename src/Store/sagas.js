import { all } from "redux-saga/effects";
import authSaga from "./Auth/sagas";
import productionSaga from "./Production/sagas";

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([authSaga(), productionSaga()]);
}
