import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const URL = 'http://192.168.200.100:8000//'


export const rasadNegarApi = createApi({
    reducerPath : 'rasadNegar' , 
    baseQuery : fetchBaseQuery({baseUrl : `${URL}rasadnegar/`}),
    endpoints : (builder) =>({
        getRasadNama : builder.query({
            query : ()=> 'get/rasadnama'
        }),
        getMehvarNama : builder.query({
            query : ()=> ' get/mehvarnama'
        }),
        getBasteNama : builder.query({
            query : ()=> 'get/bastenama'
        }),
        getFakeNews : builder.query({
            query : ()=> 'get/fakenews'
        }),
        getRevayat : builder.query({
            query : ()=> 'get/revayat'
        }),
        getAfkar : builder.query({
            query : ()=> 'get/afkar/'
        })
    })
})
export const chartsTwitterApi = createApi({
    reducerPath : 'chartsTwitter',
    baseQuery : fetchBaseQuery({baseUrl : `${URL}twitter/`}),
    endpoints : (builder) =>({
        getChartsDayTwitter : builder.query({
            query : () => 'filtercurrentdaytwittertrends/get/'
        }),                           
        getChartsMonthTwitter : builder.query({
            query : () => 'filtercurrentmonthtwittertrends/get/'
        }), 
        getChartsYearTwitter : builder.query({
            query : () => 'filtercurrentmonthtwittertrends/get/'
        }), 
        getChartsTwitterWithParams : builder.query({
          query : ({year,
                    start_month,
                    end_month,
                    order_by,
                    reverse,
                    number
                }) => `filterdatetimeorderbytwittertrends/get/?year=${year}&start_month=${start_month}&end_month=${end_month}&order_by=${order_by}&reverse=${reverse}&number=${number}`
        }),
        
       
    }),
       
        
})

export const chartsTelegramApi = createApi({
    reducerPath : 'ChartsTelegram',
    baseQuery : fetchBaseQuery({baseUrl : `${URL}telegram/`}),
    endpoints : (builder) =>({
        getEhsasTelegramNews : builder.query({
            query : ()=> 'ehsastelegramnewsperday/get/'
        }),
        getEhsasTelegramNewsPerMonth : builder.query({
            query : ()=> 'ehsastelegramnewspermonth/get/'
        }),
        getEhsasTelegramNewsPerYear : builder.query({
            query : ()=> 'ehsastelegramnewsperyear/get/'
        }), 
        getEhsasTelegramNewsHeatMap : builder.query({
            query : ()=> 'ehsastelegramnewsheatmap/get/'
        }),
        getEhsasTelegramNewsParallel: builder.query({
            query : ()=> 'ehsastelegramnewsparallelcoordinates/get/'
        }),
        getTelegramNewsOstan : builder.query({
            query : (ostan)=> `telegramnewsostan/get/?ostan=${ostan}`
        }),
        getTelegramNewsOstanAll : builder.query({
            query : (ostan)=> `telegramnewsostan/get`
        }),
        getTelegramNewsOstanEhsas : builder.query({
            query : (ostan)=> `telegramnewsostanehsassevenstackchart/get/?ostan=${ostan}`
        }), 
        getTelegramNewsTolidMasraf : builder.query({
            query : (ostan)=> `telegramnewsostanttolidmasraftlinechart/get/?ostan=${ostan}`
        }),
        getTelegramNewsOstanHeatMap : builder.query({
            query : (ostan)=> `telegramnewsostanheatmap/get/?ostan=${ostan}`
        }),
        getTelegramNewsOnline: builder.query({
            query : ()=> 'telegramnewsonline/get/'
        }),
        getTelegramNewsPrivate: builder.query({
            query : ()=> 'telegramnewsonlineprivate/get/'
        }), 
        getTelegramNewsHot : builder.query({
            query : ()=> 'telegramnewshot/get/'
        })

    })
})

export const accountApi = createApi({
    reducerPath : 'accountApi',
    baseQuery : fetchBaseQuery({baseUrl :`${URL}` }),
    endpoints : (builder) => ({
        loginUser : builder.mutation({
            query : ({username , password}) => {
                return {
                    url : 'token/',
                    method : 'post',
                    body : {username , password}
                }
            }
        })
    })
})

export const {useGetAfkarQuery, useGetRasadNamaQuery , useGetBasteNamaQuery , useGetMehvarNamaQuery , useGetFakeNewsQuery , useGetRevayatQuery } = rasadNegarApi
export const {useLoginUserMutation} = accountApi
export const {useGetChartsDayTwitterQuery,useGetChartsMonthTwitterQuery ,useGetChartsYearTwitterQuery, useGetChartsTwitterWithParamsQuery } = chartsTwitterApi
export const {useGetTelegramNewsHotQuery,useGetTelegramNewsOnlineQuery , useGetTelegramNewsPrivateQuery,useGetTelegramNewsOstanHeatMapQuery,useGetTelegramNewsTolidMasrafQuery,useGetTelegramNewsOstanEhsasQuery,useGetTelegramNewsOstanAllQuery,useGetTelegramNewsOstanQuery,useGetEhsasTelegramNewsQuery , useGetEhsasTelegramNewsPerMonthQuery , useGetEhsasTelegramNewsPerYearQuery , useGetEhsasTelegramNewsHeatMapQuery , useGetEhsasTelegramNewsParallelQuery} = chartsTelegramApi