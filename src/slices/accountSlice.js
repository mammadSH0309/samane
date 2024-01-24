import { createSlice } from "@reduxjs/toolkit";
import { accountApi } from "../query/Charts";

const initialState = 
{
    access : '',
    refresh : ''
}

export const authApi = createSlice({
    name : 'auth', 
    initialState ,
    reducers : {
        login : (state , action) => {
            const {access , refresh } = action.payload
            state.access = access
            state.refresh = refresh
            localStorage.setItem('access' , access)
            localStorage.setItem('refresh' , refresh)
        },
        logout : (state , action) => {
            state.access = null 
            state.refresh = null
            localStorage.clear()
        }
    }
})

export const {login , logout} = authApi.actions

export default authApi.reducer