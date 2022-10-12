import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { itemsReducer } from './contacts/itemsSlice'
import { filterReducer } from './contacts/filterSlice'

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
})
