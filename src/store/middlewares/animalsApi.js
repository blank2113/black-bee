import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const animalsApi = createApi({
    reducerPath: 'animalsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.blackbee.uz/'}),
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
        }),
        deleteCategory: build.mutation({
            query: (payload) =>({
                url: `categories?id=${payload}`,
                method: 'delete',
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        })
    })
})

export const {useGetAnimalsQuery, useAddNewCategoryMutation, useDeleteCategoryMutation}= animalsApi;