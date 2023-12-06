import { all, fork } from "redux-saga/effects";
import ProductSaga from "./Product/ProductSaga";

export function* sagas() {
  yield all([fork(ProductSaga)]);
}
