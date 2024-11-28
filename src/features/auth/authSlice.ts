import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "@/store/store";

export interface UserData{
    id:string;
    email:string;
    password?:string;
    profilePicture?:string;
    address?:string;
}

export interface authState{
    userData:UserData | null;
    isAuthenticated:boolean;
    accessToken:string | null;
}

const initialState:authState={
    userData:null,
    isAuthenticated:false,
    accessToken: Cookies.get('access') ?? null
}


export const authSlice=createSlice({
        name:'auth',
        initialState,
        reducers:{
            login:(state,action:PayloadAction<{userData: UserData; accessToken: string}>)=>{
                console.log('Login action dispatched:', action.payload);
                state.userData = action.payload.userData;
                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;

                Cookies.set('userData', JSON.stringify(action.payload.userData))

                const userDataString = Cookies.get('userData');
                    let userData = null;

                    if (userDataString) {
                        try {
                            userData = JSON.parse(userDataString);
                        } catch (error) {
                            console.error('Error parsing user data from cookie:', error);
                        }
                    }
                Cookies.set("access", action.payload.accessToken,{
                    expires:1,
                    sameSite:"Lax",
                    path:'/',
                });
            },
            logout:(state)=>{
                state.userData=null;
                state.isAuthenticated=false;
                state.accessToken=null;

                Cookies.remove('access');
            },
            updateUserData:(state, action:PayloadAction<Partial<UserData>>)=>{
                if(state.userData){
                    state.userData={
                        ...state.userData,
                        ...action.payload,
                    };
                }
            },
        },
});



export const {login, logout,updateUserData} =authSlice.actions

//Selectors
export const selectIsAuthenticated = (state : RootState) => !!state.auth.accessToken    // to convert value into a boolean
export const selectUserData = (state : RootState) => state.auth.userData;

export default authSlice.reducer;

