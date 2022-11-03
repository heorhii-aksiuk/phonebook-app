import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsReducer, filterReducer } from './contacts/slice'
import { authReducer } from './user/slice'

const userPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(userPersistConfig, authReducer),
  },
})

export const persistor = persistStore(store)
