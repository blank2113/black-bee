import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bestSalesApi = createApi({
    reducerPath: 'bestSalesApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.blackbee.uz/'}),
    endpoints: (build) => ({
        getBestSales: build.query({
            query: ()=> 'product?in_sales=true&in_popular=false&in_stock=false',
        })
    })
})

export const {useGetBestSalesQuery}= bestSalesApi;