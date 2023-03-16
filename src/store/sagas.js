import { all } from "redux-saga/effects";
import customer from "../features/sagas";

export default function* rootSaga() {
  yield all([customer()]);
}
