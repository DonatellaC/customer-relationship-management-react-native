import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { set } from "../../utilities/async_storage";

export function* watchCreateNewCustomer() {
  yield takeLatest(actions.createNewCustomer.toString(), takeCreateNewCustomer);
}

export function* takeCreateNewCustomer() {
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const createNewCustomer = {
      id: customers.length + 1,
      ...fields,
    };

    yield delay(1500);

    const result = [createNewCustomer, ...customers];

    yield set("CUSTOMERS_KEY", result);

    yield put(actions.createNewCustomerResult(result));
  } catch (error) {
    console.log(error);
    yield put(actions.createNewCustomerError(error.toString()));
  }
}
