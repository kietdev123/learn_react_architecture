import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      console.log(action.payload)
      state.value.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.value  = state.value.filter((e) => e.content != action.payload.content)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer