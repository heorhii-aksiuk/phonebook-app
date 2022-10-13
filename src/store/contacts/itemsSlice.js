import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return [payload, ...state]
    },
    deleteContact(state, { payload }) {
      return state.filter((contact) => contact.name !== payload)
    },
  },
})

export const { addContact, deleteContact } = itemsSlice.actions

export const itemsReducer = itemsSlice.reducer
