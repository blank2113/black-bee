import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const brandApi = createApi({
    reducerPath:'brandApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (builder) =>({
        getBrands: builder.query({
            query: ()=> 'brands'
        })
    })
})

export const { useGetBrandsQuery} = brandApi;