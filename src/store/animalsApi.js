import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const animalsApi = createApi({
    reducerPath: 'animalsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build) => ({
        getAnimals: build.query({
            query: ()=> 'products',
        })
    })
})

export const {useGetAnimalsQuery}= animalsApi;