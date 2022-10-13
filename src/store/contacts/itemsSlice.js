import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      state.unshift(payload)
    },
    deleteContact(state, { payload }) {
      state.filter((contact) => contact.name !== payload)
    },
  },
})

export const { addContact, deleteContact } = itemsSlice.actions

export const itemsReducer = itemsSlice.reducer
