import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the state
interface Transaction {
  id: string,
  title: string,
  amount: number,
  date: string
}

// Define the shape of the state
interface ExpenseState {
  transactions: Transaction[] // Array of Transaction Objects
}

const initialState: ExpenseState = {
  transactions: []
}

const expenseSlice = createSlice({
  name: "expenses", // Name of the slice
  initialState, // Initial state
  reducers: { // Reducers are functions that modify the state also called as actions
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload)
    },
    // PayloadAction<string> means that the payload is a string
    deleteTransaction: (state, action: PayloadAction<string>) => {
      // Filter out the transaction with the id that matches the payload
      state.transactions = state.transactions.filter((transaction) => transaction.id !== action.payload)
    },
  },
});

export const { addTransaction, deleteTransaction } = expenseSlice.actions; // Exporting the actions
export default expenseSlice.reducer; // Exporting the reducer
