import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{isLogged:false,userInfo:null},
    reducers:{
        login(state,action){
            state.isLogged=true;
            state.userInfo=action.payload;
        },
        logout(state){
            state.isLogged=false;
            state.userInfo=null;
        }
    }
})
export const loginActions=authSlice.actions;
export default authSlice