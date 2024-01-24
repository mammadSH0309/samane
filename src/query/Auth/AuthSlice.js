import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setAuth , logout, login } from '../../slices/AccountSlice'


const baseQuery = fetchBaseQuery({
    baseUrl : 'http://192.168.200.100:8000' ,
    prepareHeaders: (headers, { getState }) => {
        console.log('prepareHeaders is called');
        const token = getState().auth.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },

})


const baseQueryWithReauth = async (args , api , extraOptions) => {
    let result = await baseQuery(args , api , extraOptions)

        if(result?.error?.originalStatus === 403) {
            console.log('send refresh')
            /// send refresh token

            const refreshResult = await baseQuery('/token/refresh/' , api , extraOptions)
            if(refreshResult?.data) {
                const user = api.getState().auth.user

                //store new token 

                api.dispatch(login({...refreshResult.data , user}))
                result = await baseQuery(args , api , extraOptions)

            } else {
                api.dispatch(logout())
            }
        }
        return result
}





export const AuthSlice = createApi({
    baseQuery : baseQueryWithReauth,
    endpoints : (builder) => ({
        login : builder.mutation({
            query : ({username , password}) => ({
                url : '/token/',
                method : 'POST',
                body :  {username , password} , 
                credentials : 'include'
                
            })
        }),
      
        refresh : builder.mutation({
            query : (refresh) =>({
                url : '/token/refresh/',
                body : refresh , 
                method : 'POST'
            })
        }),
        home : builder.query({
            query : ()=> '/home/'
        })
    }),
   
        
}) 


export const {useLoginMutation , useHomeQuery } = AuthSlice