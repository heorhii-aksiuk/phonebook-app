import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer, filterReducer } from './contacts/slice'
import { userReducer } from './user/userSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer,
  },
})
