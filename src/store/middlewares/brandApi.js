import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const brandApi = createApi({
    reducerPath:'brandApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (builder) =>({
        getBrands: builder.query({
            query: ()=> 'brands'
        }),
        addBrands: builder.mutation({
            query: (payload) =>({
                url: 'brands',
                method: 'POST',
                body: payload,
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        }),
        delBrands: builder.mutation({
            query: (payload)=>({
                url: `brands?id=${Number(payload)}`,
                method: 'DELETE',
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        })
    })
})

export const { useGetBrandsQuery, useAddBrandsMutation, useDelBrandsMutation} = brandApi;