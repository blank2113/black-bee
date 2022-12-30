import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const passwordApi = createApi({
    reducerPath:"passwordApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (build) =>({
        getPassword: build.query({
            query: ()=> 'password'
        })
        
    })
})

export const {useGetPasswordQuery} =passwordApi;