import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
    reducerPath: 'dummyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({limit = 10, search = "", page = 1} ) => {
                const skip = (page - 1) * limit;
                if(search){
                    return `/products/search?q=${search}&limit=${limit}&skip=${skip}`;
                }
                return `/products?limit=${limit}&skip=${skip}`;
            }
        }),
    }),
});

export const { useGetProductsQuery } = dummyApi;