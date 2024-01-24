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
        }),
        getTelegramBubbleChart : builder.query({
            query : ()=> 'telegramnewsbubblechartssimplesubjectflow/get/'
        }),
        getTelegramBarChart : builder.query({
            query : ()=> 'telegramnewssubtagbarchart/get/'
        }),
        getTelegramHeatMap : builder.query({
            query : ()=> 'telegramnewsnahadsanjheatmap/get/'
        }),
        getTelegramSwarmMap : builder.query({
            query : ()=> 'telegramnewssanjeshnameswarmplot/get/'
        }),
        getTelegramStackedColumns : builder.query({
            query : ()=> 'telegramnewspartycolumnchartsstackedcolumns/get/'
        }),
        getTelegramPieChart : builder.query({
            query: ()=> 'telegramnewspositivepartypiechartsimplepie/get/'
        }),
        getTelegramEhsas : builder.query({
            query : () => 'ehsastelegramnewsperday/get/'
        }),
        getTelegramRadarYek : builder.query({
            query : ()=> 'telegramnewsresanehsanjradarchartstarghib/get/'
        }),
        getTelegramRadarDO : builder.query({
            query : ()=> 'telegramnewsresanehsanjradarchartsnottarghib/get/'
        })


        // telegramnewsbubblechartssimplesubjectflow/get/

    })
})


export const chartsInstagramApi = createApi({
    reducerPath : 'ChartsInstagram',
    baseQuery : fetchBaseQuery({baseUrl : `${URL}instagram/`}),
    endpoints : (builder)=>({
        getInstagramBubbleChart : builder.query({
            query : ()=> 'instagramnewsbubblechartssimplesubjectflow/get/'
        }),
        getInstagramBarChart : builder.query({
            query : ()=> 'instagramnewssubtagbarchart/get/'
        }),
        getInstagramHeatChart : builder.query({
            query : ()=> 'instagramnewsnahadsanjheatmap/get/'
        }), 
        getInstagramSwarmChart : builder.query({
            query : ()=>'instagramnewssanjeshnameswarmplot/get/'
        }),
        getInstagramStackedChart :builder.query({
            query: ()=> 'instagramnewspartycolumnchartsstackedcolumns/get/'
        }) , 
        getInstagramPieChart : builder.query({
            query: ()=> 'instagramnewspositivepartypiechartsimplepie/get/'
        }), 
        getInstagramRadarYek : builder.query({
            query : ()=> 'instagramnewsresanehsanjradarchartsbasictarghib/get/'
        }),
        getInstagramRadarDo :builder.query({
            query: ()=> 'instagramnewsresanehsanjradarchartsbasicnottarghib/get/'
        }),
        getInstagramEhsasChart : builder.query({
            query : () => 'instagramnewslinechart/get/'
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
        getTwitterBubbleChart : builder.query({
            query : ()=> 'twitternewsbubblechartssimplesubjectflow/get/'
        }),
        getTwitterHeatChart : builder.query({
            query : ()=> 'twitternewsnahadsanjheatmap/get/'
        }),
        getTwitterSwarmChart : builder.query({
            query : ()=> 'twitternewssanjeshnameswarmplot/get/'
        }),
        getTwitterEhsas : builder.query({
            query : ()=>'twitternewslinechart/get/'
        }),
        getTwitterStacketChart : builder.query({
            query : ()=> 'twitternewspartycolumnchartsstackedcolumns/get/'
        }),
        getTwitterPieChart : builder.query({
            query : ()=>'twitternewspositivepartypiechartsimplepie/get/'
        }),
        getTwitterRadarYekChart : builder.query({
            query : ()=> 'twitternewsresanehsanjradarchartsbasictarghib/get/'
        }),
        getTwitterRadarDoChart : builder.query({
            query : ()=> 'twitternewsresanehsanjradarchartsbasicnottarghib/get/'
        }),
        getTwitterBarChart:builder.query({
            query : ()=> 'twitternewssubtagbarchart/get/'
        })

        
       
    }),
       
        
})


export const {useGetAfkarQuery, useGetRasadNamaQuery , useGetBasteNamaQuery , useGetMehvarNamaQuery , useGetFakeNewsQuery , useGetRevayatQuery } = rasadNegarApi
export const {useLoginUserMutation} = accountApi
export const {useGetTwitterBarChartQuery,useGetTwitterEhsasQuery , useGetTwitterHeatChartQuery ,useGetTwitterRadarYekChartQuery , useGetTwitterRadarDoChartQuery, useGetTwitterStacketChartQuery, useGetTwitterBubbleChartQuery , useGetTwitterPieChartQuery , useGetTwitterSwarmChartQuery } = chartsTwitterApi
export const {useGetTelegramRadarYekQuery,useGetTelegramRadarDOQuery,useGetTelegramEhsasQuery,useGetTelegramPieChartQuery,useGetTelegramSwarmMapQuery,useGetTelegramBarChartQuery,useGetTelegramStackedColumnsQuery,useGetTelegramHeatMapQuery,useGetTelegramBubbleChartQuery,useGetTelegramNewsHotQuery,useGetTelegramNewsOnlineQuery , useGetTelegramNewsPrivateQuery,useGetTelegramNewsOstanHeatMapQuery,useGetTelegramNewsTolidMasrafQuery,useGetTelegramNewsOstanEhsasQuery,useGetTelegramNewsOstanAllQuery,useGetTelegramNewsOstanQuery,useGetEhsasTelegramNewsQuery , useGetEhsasTelegramNewsPerMonthQuery , useGetEhsasTelegramNewsPerYearQuery , useGetEhsasTelegramNewsHeatMapQuery , useGetEhsasTelegramNewsParallelQuery} = chartsTelegramApi
export const {useGetInstagramEhsasChartQuery,useGetInstagramRadarYekQuery,useGetInstagramRadarDoQuery,useGetInstagramBubbleChartQuery , useGetInstagramBarChartQuery , useGetInstagramHeatChartQuery , useGetInstagramPieChartQuery , useGetInstagramStackedChartQuery , useGetInstagramSwarmChartQuery } = chartsInstagramApi