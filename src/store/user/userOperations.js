import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const signup = createAsyncThunk(
  'user/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials)
      return data
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message)
      // or
      // toast(error.message)
    }
  },
)
