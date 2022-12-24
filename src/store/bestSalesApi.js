import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bestSalesApi = createApi({
    reducerPath: 'bestSalesApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (build) => ({
        getBestSales: build.query({
            query: ()=> 'bestSales',
        })
    })
})

export const {useGetBestSalesQuery}= bestSalesApi;