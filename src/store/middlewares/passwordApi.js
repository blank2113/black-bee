import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const passwordApi = createApi({
    reducerPath:"passwordApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://api.blackbee.uz/'}),
    endpoints: (build) =>({
        getPassword: build.query({
            query: ()=> 'token'
        }),
        getTokenAccess: build.mutation({
            query: (payload) => ({
                url: 'token',
                method: 'POST',
                body:payload,
            })
        })
        
    })
})

export const {useGetPasswordQuery, useGetTokenAccessMutation} =passwordApi;