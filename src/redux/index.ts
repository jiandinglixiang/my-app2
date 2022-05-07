import { AnyAction, combineReducers, createStore } from "redux";
import { FormState } from "../pages/formInput/formSlice";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState: FormState = {
  value: 0,
  asyncValue: [],
  combineValue: [],
  asyncCombineValue: "0",
};

export const CHANGE_VALUE1 = "CHANGE_VALUE1";
export const CHANGE_VALUE2 = "CHANGE_VALUE2";
export const CHANGE_VALUE3 = "CHANGE_VALUE3";
export const CHANGE_VALUE4 = "CHANGE_VALUE4";

function formReducer(state: FormState = initialState, action: AnyAction) {
  console.log(state, action);
  switch (action.type) {
    case CHANGE_VALUE1:
      state.value += action.payload;
      return { ...state };
    case CHANGE_VALUE2:
      return {
        ...state,
        asyncValue: state.asyncValue.concat(action.payload),
      };
    case CHANGE_VALUE3:
      return {
        ...state,
        combineValue: state.combineValue.concat(action.payload),
      };
    case CHANGE_VALUE4:
      state.asyncCombineValue += action.payload;
      return { ...state };
    default:
      return state;
  }
}

export default createStore(
  combineReducers({
    form: formReducer,
  }),
  applyMiddleware(thunk)
);
