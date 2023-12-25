import { createSlice } from '@reduxjs/toolkit'


const initialState = { 
    token : null ,
    refresh : null , 
    isAuth : false
}

export const accountSlice = createSlice({
    name : 'accountAuth', 
    initialState,
    reducers : {
        login : (state , action) =>{
            localStorage.setItem('user' , JSON.stringify({
                token : action.payload.token,
                // refresh : action.payload.refresh
            })
            )
            state.token = action.payload.token
            // state.refresh = action.payload.refresh
            state.isAuth = true
        },
        logout : (state) =>{
            localStorage.clear();
            state.token = null 
            // state.refresh = null
            state.isAuth = false
        }
    }
})



export const {login, logout}  = accountSlice.actions

export default accountSlice.reducer


