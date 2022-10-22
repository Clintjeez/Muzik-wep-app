import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        preparedHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '67a564f147mshbd8ae044475cb2dp1a4d5ajsn3063f76b9890');
           
            return headers;
        },
    }),
    endpoints: (builder) => ( {
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi