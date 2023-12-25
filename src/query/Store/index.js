import {configureStore} from '@reduxjs/toolkit'
import { accountApi, chartsTwitterApi , chartsTelegramApi  , rasadNegarApi} from '../Charts'
import { setupListeners } from '@reduxjs/toolkit/query'
import accountReducer from './../../slices/accountSlice';

export const store = configureStore({
    reducer : {
        account : accountReducer , 
        [rasadNegarApi.reducerPath] : rasadNegarApi.reducer,
        [chartsTwitterApi.reducerPath] : chartsTwitterApi.reducer,
        [chartsTelegramApi.reducerPath] : chartsTelegramApi.reducer,
        [accountApi.reducerPath] : accountApi.reducer
    },

    middleware : 
        (getDefaultMiddleware) => 
            getDefaultMiddleware()
            .concat([
                        chartsTwitterApi.middleware,
                        chartsTelegramApi.middleware ,
                        accountApi.middleware , 
                        rasadNegarApi.middleware
                    ])

    

})


setupListeners(store.dispatch)

