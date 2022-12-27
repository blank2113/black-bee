import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const animalsApi = createApi({
    reducerPath: 'animalsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (build) => ({
        getAnimals: build.query({
            query: ()=> 'animals',
        })
    })
})

export const {useGetAnimalsQuery}= animalsApi;