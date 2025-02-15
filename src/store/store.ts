import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice"

export const store = configureStore({
  reducer: {
    expenses: expenseReducer, // Add the expenseReducer to the store
  }
})

// Infer the appDispatch and rootState from the Store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
