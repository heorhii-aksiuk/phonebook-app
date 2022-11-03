import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import token from '../../services/api/token'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
//TODO: move

export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  try {
    const { data } = await axios.post('users/signup', credentials)
    token.set(data.token)
    return data
  } catch (error) {
    alert(error.message)
  }
})

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const { data } = await axios.post('users/login', credentials)
    token.set(data.token)
    return data
  } catch (error) {
    alert(error.message)
  }
})

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const persistedToken = state.auth.token

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user')
  }

  try {
    token.set(persistedToken)
    const { data } = await axios.get('users/current')
    return data
  } catch (error) {
    alert(error.message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout')
    token.unset()
  } catch (error) {
    alert(error.message)
  }
})
