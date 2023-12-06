import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./ProductReducer";

function* fetchData() {
  try {
    const response = yield call(fetch, "https://fakestoreapi.com/products");
    const data = yield response.json();
    yield put({ type: GET_DATA_SUCCESS, payload: data });
  } catch (error) {
    // yield put({ type: GET_DATA_ERROR, payload: error.message });
  }
}

function* watchGetData() {
  yield takeLatest(GET_DATA_REQUEST, fetchData);
}

export default function* rootSaga() {
  yield all([watchGetData()]);
}
