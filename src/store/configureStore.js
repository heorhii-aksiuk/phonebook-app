import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { filterReducer } from './contacts/filterSlice'
import { contactsApi } from './contacts/contactsApi'
import { userReducer } from './user/userSlice'

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
})

setupListeners(store.dispatch)
