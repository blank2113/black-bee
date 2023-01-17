import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bestProductsApi = createApi({
    reducerPath: 'bestProductsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.blackbee.uz/'}),
    endpoints: (build) => ({
        getBestProducts: build.query({
            query: ()=> 'product?in_sales=false&in_popular=true&in_stock=false',
        })
    })
})

export const {useGetBestProductsQuery}= bestProductsApi;