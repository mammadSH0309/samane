import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const URL = 'http://192.168.200.100:8000//'

export const OstanNamaApi = createApi({
    reducerPath : 'OstanNama',
    baseQuery : fetchBaseQuery({baseUrl : `${URL}ostannama/`}),
    endpoints : (builder)=> ({
        getNewsKeshvarReal : builder.query({
            query : (ostan)=> `keshvarrealdata/get/?ostan=${ostan}`
        }), 
        getNewsRadarChart : builder.query({
            query : (ostan) => `twitternewsostanresanehsanjradarchartsbasictarghib/get/?ostan=${ostan}` 
        }),
        getNewsEntekhabat : builder.query({
            query : (ostan)=> `privatenewsostan/get/?ostan=${ostan}`
        }), 
        getNewsOstan : builder.query({
            query : (ostan)=> `onlinenewsostan/get/?ostan=${ostan}`
        })
    
    })
})
export const khabarNegarApi = createApi({
    reducerPath : 'KhabarNegar',
    baseQuery : fetchBaseQuery({baseUrl : `${URL}khabarnegar/`}),
    endpoints : (builder)=> ({
        getHotNews : builder.query({
            query : ()=> 'hotnews/get/'
        }),
        getPrivateNews : builder.query({
            query : ()=> 'privatenews/get/'
        }),
        getOnlineNews : builder.query({
            query : ()=> 'onlinenews/get/'
        }),
        getPopularNews : builder.query({
            query : ()=> 'onlinenewspopular/get/'
        }),
        
    })   
})

export const {useGetNewsOstanQuery, useGetNewsEntekhabatQuery,useGetNewsKeshvarRealQuery , useGetNewsRadarChartQuery} = OstanNamaApi
export const {useGetHotNewsQuery , useGetPrivateNewsQuery , useGetOnlineNewsQuery , useGetPopularNewsQuery} = khabarNegarApi