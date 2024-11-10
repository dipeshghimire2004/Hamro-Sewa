import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export interface UserData{
    email:string;
    password?:string;
    profilePicture?:string;
    address?:string;
}

export interface authState{
    userData:UserData | null;
    status:boolean;
    accessToken:string | null;
}

const initialState:authState={
    userData:null,
    status:false,
    accessToken:null,
}

export const authSlice=createSlice({
    
        name:'auth',
        initialState,
        reducers:{
            login:(state,action:PayloadAction<{userData:UserData; accessToken:string}>)=>{
                state.userData=action.payload.userData;
                state.status=true;
                state.accessToken=action.payload.accessToken;
            },
            logout:(state)=>{
                state.userData=null;
                state.status=false;
                state.accessToken=null
            },
            updateUserData:(state, action:PayloadAction<Partial<UserData>>)=>{
                if(state.userData){
                    state.userData={
                        ...state.userData,
                        ...action.payload,
                    }
                }
            }
        }
});

export const {login, logout,updateUserData} =authSlice.actions

export default authSlice.reducer

