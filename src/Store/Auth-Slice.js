import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{isLogged:false,userInfo:"",userId:""},
    reducers:{
        login(state){
            state.isLogged=true;
        },
        logout(state){
            state.isLogged=false;
            state.userInfo=null;
            state.userId=null;
        },
        user(state,action){
            state.userInfo=action.payload.userInfo;
            state.userId=action.payload.userId;
        }
    }
})
export const loginActions=authSlice.actions;
export default authSlice
