import { createSlice } from "@reduxjs/toolkit";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../utilities/helpers";

const name = "customer";

const initialState = {
  list: {
    status: PENDING,
    customers: [],
  },
  form: {
    fields: {
      firstName: "",
      lastName: "",
      region: "",
      contact: "",
    },
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  error: {
    message: "",
  },
  delete: {
    status: "PENDING",
  },
};

const reducers = {
  createNewCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createNewCustomerResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createNewCustomerError: (state, { payload }) => {
    state.create.status = ERROR;
    state.create.error = payload;
    state.form.fields = initialState.form.fields;
  },

  createNewCustomerReset: (state) => {
    state.create = initialState.create;
  },
  setForm: (state, { payload }) => {
    const customer = state.list.customers.find((a) => a.id === payload);

    if (customer) {
      state.form.fields = { ...customer };
    } else {
      state.error.message = `Could not find customer with id: ${payload}`;
    }
  },
  editCustomer: (state) => {
    state.edit.status = REQUESTING;
  },
  editCustomerResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editCustomerStatus: (state, { payload }) => {
    state.edit = payload;
  },
  editCustomerError: (state, { payload }) => {
    state.edit.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  deleteCustomers: (state) => {
    state.delete.status = "REQUESTING";
  },
  deleteCustomersResult: (state) => {
    state.delete.status = "SUCCESS";
    state.list = { ...initialState.list };
  },
  deleteCustomersError: (state) => {
    state.delete.status = "ERROR";
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
  loadCustomers: (state) => {
    state.status = REQUESTING;
  },
  loadCustomersResult: (state, { payload }) => {
    state.list.customers = payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createNewCustomer,
  createNewCustomerResult,
  createNewCustomerError,
  createNewCustomerReset,
  setForm,
  editCustomer,
  editCustomerResult,
  editCustomerError,
  editCustomerStatus,
  setFormField,
  loadCustomers,
  loadCustomersResult,
  deleteCustomers,
  deleteCustomersResult,
  deleteCustomersError,
} = slice.actions;

export default slice.reducer;
