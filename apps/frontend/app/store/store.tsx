import counterReducer from "@/store/checkoutRender";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: { counter: counterReducer },
});
export type RootState = ReturnType<typeof store.getState>;
