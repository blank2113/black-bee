import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const animalsApi = createApi({
    reducerPath: 'animalsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build) => ({
        getAnimals: build.query({
            query: ()=> 'categories',
        }),
        addNewCategory: build.mutation({
            query: (payload) =>({
                url: 'categories',
                method: 'POST',
                body: payload,
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        })
    })
})

export const {useGetAnimalsQuery, useAddNewCategoryMutation}= animalsApi;