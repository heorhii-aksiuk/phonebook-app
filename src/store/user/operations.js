import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import token from '../../services/api/token'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
//TODO: move expression and string in a variable

export const signup = createAsyncThunk('auth/signup', async (user) => {
  try {
    const { data } = await axios.post('users/signup', user)
    token.set(data.token)
    return data
  } catch (error) {
    alert(error.message)
  }
})

export const login = createAsyncThunk('auth/login', async (user) => {
  try {
    const { data } = await axios.post('users/login', user)
    token.set(data.token)
    return data
  } catch (error) {
    //TODO: Remove this alert. Use different error handling
    alert(error.message)
  }
})

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (!persistedToken) {
      //TODO: fix magic string
      return thunkAPI.rejectWithValue('Unable to fetch user')
    }

    try {
      token.set(persistedToken)
      const { data } = await axios.get('users/current')
      return data
    } catch (error) {
      alert(error.message)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout')
    token.unset()
  } catch (error) {
    alert(error.message)
  }
})
