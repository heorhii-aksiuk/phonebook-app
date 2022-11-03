export const selectUserName = (store) => store.auth.user.name

export const selectIsLoggedIn = (store) => store.auth.isLoggedIn

export const selectIsRefreshing = (store) => store.auth.isRefreshing

export const selectContacts = (store) => store.contacts

export const selectFilter = (store) => store.filter
