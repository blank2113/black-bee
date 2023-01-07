import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bestSalesApi = createApi({
    reducerPath: 'bestSalesApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build) => ({
        getBestSales: build.query({
            query: ()=> 'product?in_sales=true&in_popular=false&in_stock=false',
        })
    })
})

export const {useGetBestSalesQuery}= bestSalesApi;