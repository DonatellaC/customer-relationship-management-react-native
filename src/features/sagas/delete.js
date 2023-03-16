import { put, delay, takeLatest } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "../../utilities/async_storage";
import * as actions from "../../features/reducers";

export function* watchDeleteCustomers() {
  yield takeLatest(actions.deleteCustomers.toString(), takeDeleteCustomers);
}

export function* takeDeleteCustomers() {
  try {
    yield AsyncStorage.removeItem("CUSTOMERS_KEY");

    yield delay(1500);

    const customers = yield get("CUSTOMERS_KEY");
    yield put(actions.loadCustomersResult(customers || []));
  } catch (error) {
    yield put(actions.loadCustomersResult([]));
  }
}
