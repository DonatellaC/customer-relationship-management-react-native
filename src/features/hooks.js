import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";
import { onNotificationSubmit } from "../utilities/notification";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state.customer.form);
  useEffect(() => {
    if (customerID) {
      dispatch(actions.setForm(customerID));
    } else {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID]);

  return {
    fields,
    setFormField: (field) => (value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.updateForm({ ...fields, [field]: value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createNewCustomer());
      onNotificationSubmit();
    },
  };
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.customer.edit);

  return {
    status,
    onSubmit: () => {
      console.log(`Dispatching EDIT_CUSTOMER action with id=${customerID}`);
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers);
};

export const useLoadCustomers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);

  console.log("Dispatching LOAD_CUSTOMER action");

  return useSelector((state) => state.customer.list.customers);
};
