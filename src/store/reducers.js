import { combineReducers } from "@reduxjs/toolkit";
import customer from "../features/reducers";

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
