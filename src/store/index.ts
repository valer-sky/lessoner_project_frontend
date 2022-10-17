import {configureStore} from "@reduxjs/toolkit";
import useReducer from "./loginName/userSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
  }
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;