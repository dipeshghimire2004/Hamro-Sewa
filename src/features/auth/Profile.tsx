import React from 'react'
import { useState } from 'react'
import { LuFormInput } from 'react-icons/lu';
import {useForm, SubmitHandler} from 'react-hook-form'
import {useSelector, UseDispatch, useDispatch } from 'react-redux';
import { updateUserData } from './authSlice';
import { Button,Input } from '../../components';
import toast from 'react-hot-toast';
import axios from 'axios';



type FormValues={
  email:String;
  username:string;
  // password:string;
  phone:number;
  image:string;
};

const Profile:React.FC = () => {
  const [isEditing, setIsEditing]=useState(false);
  const dispatch=useDispatch();

  const userData=useSelector((state)=>state.auth.userData);
  console.log(userData);
  
  const {register, handleSubmit, formState:{errors}}= useForm<FormValues>(
    {defaultValues:{
      username:userData?.name || '',
      email:userData?.email || '',
      phone:userData?.phone || '',
    } }  
  );

  const onSubmit=async (data)=>{
    try {
      await axios.put('https://shop-co-backend-nine.vercel.app/api/')
    } catch (error) {
      if(axios.isAxiosError(error)){
        toast.error("")
      }
    }
  }

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Profile