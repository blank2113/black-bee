import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const typeApi = createApi({
    reducerPath: 'typeApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://164.92.147.133:8000/'}),
    endpoints: (build)=> ({
        getType: build.query({
            query: ()=> 'types',
        })
    })
})

export const { useGetTypeQuery } = typeApi;