import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import token from '../../services/api/token'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const signup = createAsyncThunk('user/signup', async (credentials) => {
  try {
    const { data } = await axios.post('users/signup', credentials)
    token.set(data.token)
    return data
  } catch (error) {
    alert(error.message)
  }
})

export const login = createAsyncThunk('user/login', async (credentials) => {
  try {
    const { data } = await axios.post('users/login', credentials)
    token.set(data.token)
    return data
  } catch (error) {
    alert(error.message)
  }
})

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await axios.post('users/logout')
    token.unset()
  } catch (error) {
    alert(error.message)
  }
})
