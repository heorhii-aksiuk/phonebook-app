import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.unshift(action.payload)
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.name !== action.payload)
    },
  },
})

export const { addContact, deleteContact } = itemsSlice.actions

export const itemsReducer = itemsSlice.reducer
