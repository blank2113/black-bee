import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build) =>({
        getProducts: build.query({
            query: ()=> 'product',
        }),
        addNewProduct: build.mutation({
            query: (payload) => ({
                url: 'products',
                method: 'POST',
                body:payload,
                headers: {
                    "Content-Type": "multipart/form-data",
                  }
            })
        })
    })
})

export const { useGetProductsQuery, useAddNewProductMutation} = productsApi;