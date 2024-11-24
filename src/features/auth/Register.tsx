import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, Button } from '../../components/index'
import { Link } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Register: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
    const [isSubmitting, setIsSubmitting]=useState(false)
    const Navigate=useNavigate();
    

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

   

    type FormInputs = {
        username:string
        email: string
        phone: number
        password: string
        confirmPassword: string
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormInputs>()
    

    // console.log('Form Data:', { name, username, email, phone, password }); 
    const onSubmit: SubmitHandler<FormInputs> =async (data) => {
        const {email,username, phone,password} =data;
        try {
            const response =  await axios.post('https://shop-co-backend-nine.vercel.app/api/auth/register',
                // JSON.stringify(data)
                {
                phone,
                username,
                email,
                password,
            }
            ,{
                headers:{
                    'Content-Type':'application/json',
                },
                // withCredentials:true,
            }
        )
        console.log(response.data)
            if(response.status==200){
                toast.success('User registered successfully!!');
                reset();
                setTimeout(()=>{
                    Navigate('/login',{replace:true});
                },1000);
                
            }
            else{
                toast.error(response?.data?.message || "Regsitration failed, Please try again later")
            }

        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data?.message || "Network Error, Please try again later")
            }   
            else{
                toast.error('An unexpected error occurred. Please try again')
            }
        }
        finally{
            setIsSubmitting(false)
        }
    }
    
    const password = watch('password');

    return (
        <div className="flex justify-center items-center min-h-screen ">
        <Toaster/>
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h2>

                {/* Name Input */}
                <div className='mb-4'>
                    <Input 
                        label='Username'
                        id='username'
                        type="text"
                        {...register('username', { required: 'Name is required' })}
                        placeholder='Enter your name'
                        // className="border border-gray-300 rounded-md w-full p-2"
                    />
                    {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
                </div>

                {/* Email Input */}
                <div className='mb-4'>
                    <Input
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,
                                message: "Please Enter a valid email"
                            }
                        })}
                    />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>

                {/* Phone Input */}
                <div className='mb-4'>
                    <Input 
                        label='Phone'
                        id='phone'
                        type='tel'
                        {...register('phone', {
                            required: 'Phone is required',
                            pattern: {
                                value: /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
                                message: 'Please enter a valid phone number'
                            }
                        })}
                        placeholder='Enter your phone number'
                    />
                    {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                </div>

                {/* Password Input */}
                <div className='mb-4 relative'>
                    <Input
                        label='Password'
                        id='password'
                        type={passwordVisible ? 'text' : 'password'}
                        {...register('password', { required: 'Password is required',
                            minLength:{
                                value:8,
                                message:'Password must be at least 8 characters long',
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: 'Password must include letters and numbers',
                            }
                         })}
                        placeholder='Enter your password'
                    />
                    <Button 
                        type='button'  // Important: Set type as "button" to prevent form submission
                        onClick={togglePasswordVisibility}
                        bgColor='transparent'
                        textColor='black'
                        className="absolute top-1/2 transform -translate-y-0.1 right-2 text-gray-500"
                    >
                        {passwordVisible ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                    </Button>
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                </div>

                {/* Confirm Password Input */}
                <div className='mb-4 relative'>
                    <Input
                        label='Confirm Password'
                        id='confirmPassword'
                        
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: value => value === password || "Passwords do not match"
                        })}
                        placeholder='Confirm your password'
                    />
                    <Button 
                        type='button'  // Important: Set type as "button" to prevent form submission
                        onClick={toggleConfirmPasswordVisibility}
                        bgColor='transparent'
                        textColor='gray'
                        className="absolute top-1/2 transform -translate-y-0.1 right-2 text-gray-500"
                    >
                        {confirmPasswordVisible ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                    </Button>
                    {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                </div>
                
                {/* Submit Button */}
                <div className="mb-6">
                    <Button 
                        type='submit'
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                       {isSubmitting ? 'Registering' : 'Create Account'}
                    </Button>
                </div>

                {/* Link to Login */}
                <div className='flex justify-center items-center'>
                    <p className='mr-2'>Already have an account?</p>
                    <Link to='/login' className="text-blue-500 hover:underline">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
