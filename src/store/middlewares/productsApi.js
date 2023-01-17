import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.blackbee.uz/'}),
    endpoints: (build) =>({
        getProducts: build.query({
            query: ()=> 'product',
        }),
        addNewProduct: build.mutation({
            query: (payload) => ({
                url: 'product',
                method: 'POST',
                body:payload,
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        }),
        deleteProduct: build.mutation({
            query: (payload) =>({
                url: `product?id=${Number(payload)}`,
                method: 'DELETE',
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        })
    })
})

export const { useGetProductsQuery, useAddNewProductMutation, useDeleteProductMutation} = productsApi;