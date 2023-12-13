import {configureStore} from '@reduxjs/toolkit'
import { accountApi, chartsApi } from '../Charts'
import { setupListeners } from '@reduxjs/toolkit/query'
import accountReducer from './../../slices/accountSlice';

export const store = configureStore({
    reducer : {
        account : accountReducer , 
        [chartsApi.reducerPath] : chartsApi.reducer,
        [accountApi.reducerPath] : accountApi.reducer
    },

    middleware : 
        (getDefaultMiddleware) => 
            getDefaultMiddleware()
            .concat([
                        chartsApi.middleware,
                        accountApi.middleware
                    ])

    

})


setupListeners(store.dispatch)

