import { createSlice } from '@reduxjs/toolkit'
import { getContacts, addContact, deleteContact } from './operations'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [getContacts.fulfilled](_, { payload }) {
      return payload
    },
    [addContact.fulfilled](state, { payload }) {
      state.unshift(payload)
    },
    [deleteContact.fulfilled](state, { payload }) {
      return state.filter((contact) => contact.id !== payload.id)
    },
  },
})

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export const filterReducer = filterSlice.reducer

export const contactsReducer = contactsSlice.reducer
