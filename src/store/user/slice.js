import { createSlice } from '@reduxjs/toolkit'
import { signup, login, logout, fetchCurrentUser } from './operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.isLoggedIn = true
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.isLoggedIn = true
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.user
      state.isRefreshing = false
      state.isLoggedIn = true
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false
    },
  },
})

export const authReducer = authSlice.reducer
