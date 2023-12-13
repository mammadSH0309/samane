import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const URL = 'http://192.168.200.40:8000/'
export const chartsApi = createApi({
    reducerPath : 'chartsApi',
    baseQuery : fetchBaseQuery({baseUrl : `${URL}twitter/`}),
    endpoints : (builder) =>({
        getChartsDay : builder.query({
            query : () => 'filtercurrentdaytwittertrends/get/'
        }),                           
        getChartsMonth : builder.query({
            query : () => 'filtercurrentmonthtwittertrends/get/'
        }), 
        getChartsYear : builder.query({
            query : () => 'filtercurrentmonthtwittertrends/get/'
        }), 
        getChartsWithParams : builder.query({
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


export const {useLoginUserMutation} = accountApi
export const {useGetChartsDayQuery,useGetChartsMonthQuery ,useGetChartsYearQuery, useGetChartsWithParamsQuery , useGetChartsByDayQuery} = chartsApi
