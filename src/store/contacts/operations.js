import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios.get('contacts')
      return data
    } catch (error) {
      alert(error.message)
    }
  },
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    try {
      const { data } = await axios.post('contacts', contact)
      return data
    } catch (error) {
      alert(error.message)
    }
  },
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    try {
      const { data } = await axios.delete(`contacts/${contactId}`)
      return data
    } catch (error) {
      alert(error.message)
    }
  },
)
