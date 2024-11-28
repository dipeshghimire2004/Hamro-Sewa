import { useForm, SubmitHandler } from 'react-hook-form';
import { productReviewType } from './ProductItemType';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAppSelector } from '@/store/Hooks';
import { useParams } from 'react-router-dom';
import {selectUserData} from '@/features/auth/authSlice'; 
import toast,{Toaster} from 'react-hot-toast';
import {Button,Input} from '../../components/index';

const ReviewFom = () => {
    const {register, handleSubmit, formState:{errors},}=useForm<productReviewType>();
    const {id}= useParams<{id:string}>();
    const product_id:number= Number(id)

    const userData = useAppSelector(selectUserData);
    // const uData=Cookies.get('userData')
    // const userData=JSON.parse(uData)
    console.log(userData)

    
    const onSubmit:SubmitHandler<productReviewType> = async(data) => {
        const token = Cookies.get('access');

        // Include the product id and user id in the form data
        const formData={
            ...data,
            product_id:Number(product_id),
            user_id:userData?.id,
        };

        try {
            const response=await axios.post('https://shop-co-backend-nine.vercel.app/api/review',formData,{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                }
            });
            if(response.status==201){
                console.log(response)
                toast.success("Review Sent Successfully")
            }
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
        <Toaster/>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 rounded-lg shadow-xl w-full max-w-md'>
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
                    {...register("comment", {required:"comment is required",
                        min: { value: 1, message: "Rating must be at least 1" },
                        max: { value: 5, message: "Rating must not exceed 5" }
                    })}
                />
                {errors.comment && <span className="text-red-500">{errors.comment.message}</span>}

            </div>

            
        

                        {/* Submit Button */}
                <div className='flex justify-center'>
                    <Button
                        type="submit"
                    >
                        Submit Review
                    </Button>

                </div>
        </form>
    </div>
  )
}

export default ReviewFom