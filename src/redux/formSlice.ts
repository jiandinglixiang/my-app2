import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../app/store";

export interface FormState {
  value: number;
  asyncValue: Array<number>;
  combineValue: Array<number | string>;
  asyncCombineValue: string;
}

const initialState: FormState = {
  value: 0,
  asyncValue: [],
  combineValue: [],
  asyncCombineValue: "",
};

export const increment2Async = createAsyncThunk(
  "form/increment2",
  async (time: number) => {
    const { data } = await new Promise((resolve) => {
      setTimeout(() => resolve({ data: Math.random() }), time);
    });
    return data;
  }
);

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    increment1: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.value += action.payload;
        return;
      }
      state.value += 1;
    },
    increment3: (state, action: PayloadAction<number | string>) => {
      state.combineValue.push(action.payload);
    },
    increment4: (state, action: PayloadAction<string>) => {
      state.asyncCombineValue += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increment2Async.fulfilled, (state, action) => {
      state.asyncValue.push(action.payload);
    });
  },
});

export const { increment1, increment3, increment4 } = formSlice.actions;

export function combineChanges(): AppThunk {
  return async function (dispatch, getState) {
    const { form } = getState();
    dispatch(increment1(form.value));
    // dispatch(increment2Async(1000));
    dispatch(increment3(form.value));
  };
}

export function changeAsync4(): AppThunk {
  return async function (dispatch, getState) {
    const { form } = getState();
    dispatch(increment1(form.value));
    await dispatch(increment2Async(1000));
    dispatch(increment3(form.value));
    dispatch(increment4(`${form.value}`));
  };
}

export default formSlice.reducer;
