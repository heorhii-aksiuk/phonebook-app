import { createSlice } from '@reduxjs/toolkit'
import { signup, login, logout } from './userOperations'

const initialState = {
  name: null,
  email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signup.fulfilled](state, action) {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    [login.fulfilled](state, action) {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    [logout.fulfilled](state) {
      state.name = null
      state.email = null
    },
  },
})

export const userReducer = userSlice.reducer
