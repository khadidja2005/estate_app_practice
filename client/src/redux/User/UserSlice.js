import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser : null ,
    loading : false ,
    error : null,
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        SigninStart : (state)=> {
            state.loading = true
        },
        SigninSuccess : (state , action)=> {
            state.loading = false, 
            state.error = null,
            state.currentUser=action.payload
        },
        SigninFailure: (state , action)=>{
            state.error = action.payload,
            state.loading= false
        }
    }

});

export const {SigninFailure, SigninStart , SigninSuccess} = UserSlice.actions;


export default UserSlice.reducer ;