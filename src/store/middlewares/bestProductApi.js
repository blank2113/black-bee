import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bestProductsApi = createApi({
    reducerPath: 'bestProductsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build) => ({
        getBestProducts: build.query({
            query: ()=> 'products?in_sales=false&in_popular=true&in_stock=false',
        })
    })
})

export const {useGetBestProductsQuery}= bestProductsApi;