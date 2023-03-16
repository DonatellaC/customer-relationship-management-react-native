import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateFields = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.form.fields);

  return {
    fields,
    setFormField: (field) => (value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createNewCustomer());
    },
  };
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: (fields) => {
      console.log(
        `Dispatching EDIT_CUSTOMER action with id=${customerID}`,
        fields
      );
      dispatch(actions.editCustomer({ id: customerID, ...fields }));
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
