// counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

// Rename CounterState to a unique name, for example, CounterSliceState
export interface isCheckoutRendered {
  rendered: boolean;
}

const initialState: isCheckoutRendered = {
  rendered: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    isRender: (state) => {
      state.rendered = true;
    },
    isNotRender: (state) => {
      state.rendered = false;
    },
  },
});
export const { isRender, isNotRender } = counterSlice.actions;
export default counterSlice.reducer;
