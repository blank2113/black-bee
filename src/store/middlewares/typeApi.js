import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const typeApi = createApi({
    reducerPath: 'typeApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.blackbee.uz/'}),
    endpoints: (build)=> ({
        getType: build.query({
            query: ()=> 'types',
        }),
        addType: build.mutation({
            query: (payload) =>({
                url:'types',
                method: 'POST',
                body:payload,
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        }),
        delType: build.mutation({
            query: (payload) =>({
                url: `types?id=${payload}`,
                method: 'delete',
                headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
            })
        })
    })
})

export const { useGetTypeQuery , useAddTypeMutation, useDelTypeMutation} = typeApi;