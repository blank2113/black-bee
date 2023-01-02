import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build) =>({
        getProducts: build.query({
            query: ()=> 'products',
        }),
        addNewProduct: build.mutation({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            })
        })
    })
})

export const { useGetProductsQuery, useAddNewProductMutation} = productsApi;