import {configureStore} from '@reduxjs/toolkit'
import { accountApi, chartsTwitterApi , chartsTelegramApi  , rasadNegarApi, chartsInstagramApi} from '../Charts'
import { setupListeners } from '@reduxjs/toolkit/query'

import { OstanNamaApi, khabarNegarApi } from '../Charts/KhabarApi';
import  authApiReducer  from '../../slices/AccountSlice';
import { AuthSlice } from '../Auth/AuthSlice';
export const store = configureStore({
    reducer : {
       
        auth : authApiReducer ,
        
        [AuthSlice.reducerPath] : AuthSlice.reducer,
        [OstanNamaApi.reducerPath] : OstanNamaApi.reducer,
        [chartsInstagramApi.reducerPath] : chartsInstagramApi.reducer,
        [rasadNegarApi.reducerPath] : rasadNegarApi.reducer,
        [chartsTwitterApi.reducerPath] : chartsTwitterApi.reducer,
        [chartsTelegramApi.reducerPath] : chartsTelegramApi.reducer,
        [accountApi.reducerPath] : accountApi.reducer,
        [khabarNegarApi.reducerPath]: khabarNegarApi.reducer
    },

    middleware : 
        (getDefaultMiddleware) => 
            getDefaultMiddleware()
            .concat([
                        AuthSlice.middleware,
                        OstanNamaApi.middleware,
                        chartsTwitterApi.middleware,
                        chartsInstagramApi.middleware,
                        chartsTelegramApi.middleware ,
                        accountApi.middleware , 
                        rasadNegarApi.middleware , 
                        khabarNegarApi.middleware,
                    ])

    

})


setupListeners(store.dispatch)

