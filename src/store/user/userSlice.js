import { createSlice } from '@reduxjs/toolkit'
import { signup, login, logout } from './userOperations'

const initialState = {
  name: null,
  email: null,
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signup.fulfilled](state, action) {
      state.name = action.payload.user.name
      state.email = action.payload.user.email
      state.isLoggedIn = true
    },
    [login.fulfilled](state, action) {
      state.name = action.payload.user.name
      state.email = action.payload.user.email
      state.isLoggedIn = true
    },
    [logout.fulfilled](state) {
      state.name = null
      state.email = null
      state.isLoggedIn = false
    },
  },
})

export const userReducer = userSlice.reducer

//TODO: rejected reducers
