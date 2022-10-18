import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: null,
  email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {},
})

export default userSlice.reducer
