import { createSlice } from "@reduxjs/toolkit";

const adminSlice=createSlice({
    name:'Admin',
    initialState:{isAdminLogged:false},
    reducers:{
        login(state){
            state.isAdminLogged=true;
        },
        logout(state){
            state.isAdminLogged=false;
        }
    }
})
export const adminLoginActions=adminSlice.actions;
export default adminSlice