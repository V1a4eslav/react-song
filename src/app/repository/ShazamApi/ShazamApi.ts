import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {links} from "../../links/Links";
import {IChartsResponse} from "./models";

export const ShazamApi = createApi({
    reducerPath: 'Shazam',
    baseQuery: fetchBaseQuery({
        baseUrl: links.shazamCharts,
        prepareHeaders: (headers, {getState}) => {
            headers.set( 'X-RapidAPI-Host', 'shazam.p.rapidapi.com');
            headers.set( 'X-RapidAPI-Key','2482486450msh007a4a83c861c57p18d2f6jsn18435d945892',)
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: build => ({
        getCharts: build.query<IChartsResponse, void>({
            query: () => ({
                url: 'charts/track'
            }),
        }),
    })
});

export const {
    useGetChartsQuery
} = ShazamApi;