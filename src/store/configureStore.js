import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { itemsReducer } from './contacts/itemsSlice'
import { filterReducer } from './contacts/filterSlice'
import { contactsApi } from './contacts/contactsApi'

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
