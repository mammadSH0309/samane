import { createSlice } from '@reduxjs/toolkit'


const initialState = { 
    token : null 
}

export const accountSlice = createSlice({
    name : 'accountAuth', 
    initialState,
    reducers : {
        setUser : (state , action) =>{
            localStorage.setItem('user' , JSON.stringify({
                token : action.payload.token
            })
            )
            state.token = action.payload.token
        },
        logout : (state) =>{
            localStorage.clear();
            state.token = null 
        }
    }
})



export const {setUser, logout}  = accountSlice.actions

export default accountSlice.reducer


