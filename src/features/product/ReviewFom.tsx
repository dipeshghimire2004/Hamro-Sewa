import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { productReviewType } from './ProductItemType';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { Input } from '@/components';
import Login from '../auth/Login';
import { useSelector, UseSelector } from 'react-redux';


const ReviewFom = () => {
    const {register, handleSubmit, watch, formState:{errors},}=useForm<productReviewType>();
    const userdata=useSelector((state)=>state.auth(login))
    const onSubmit:SubmitHandler<productReviewType> = async(data) => {
        const token = Cookies.get('access');
        try {
            await axios.post('https://shop-co-backend-nine.vercel.app/api/review',data,{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                }
            });
        } catch (error) {

            if(axios.isAxiosError(error)){
                toast.error(error.response?.data?.message || " Network Connection, please try again!");
            }
            else{
                toast.error("An unexpected error occurred");
            }
        }
    }
return (
    <div className='flex items-center justify-center'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='w-1/3 bg-gray-200 p-4'>
            <div className='mb-4'>
                <Input type="text"
                label='rating'
                    id='rating'
                    placeholder='Rating of the product'
                    {...register("rating", {required:"rating is required"})}
                />
                {errors.rating && <span className="text-red-500">{errors.rating.message}</span>}

            </div>
            <div className='mb-4'>
                <Input type="text"
                label='comment'
                    id='comment'
                    placeholder='comment'
                    {...register("comment", {required:"comment is required"})}
                />
                {errors.comment && <span className="text-red-500">{errors.comment.message}</span>}

            </div>
        </form>
    </div>
  )
}

export default ReviewFom