import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bestProductsApi = createApi({
    reducerPath: 'bestProductsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (build) => ({
        getBestProducts: build.query({
            query: ()=> 'bestProducts',
        })
    })
})

export const {useGetBestProductsQuery}= bestProductsApi;