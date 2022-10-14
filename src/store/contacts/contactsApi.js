import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://634864640b382d796c70d75d.mockapi.io/api/v1',
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
})

export const { useGetContactsQuery } = contactsApi
