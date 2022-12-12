import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{isLogged:false},
    reducers:{
        login(state){
            state.isLogged=true;
        },
        logout(state){
            state.isLogged=false;
        }
    }
})
export const loginActions=authSlice.actions;
export default authSlice