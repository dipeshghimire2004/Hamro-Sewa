import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, replace } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Input, Button } from '../../components/index';  // Assuming you have Input and Button components
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { useDispatch} from 'react-redux';
import { useAppDispatch } from '@/store/Hooks';
import {login} from './authSlice'
import Cookies from 'js-cookie'
import Breadcrumb from '../../components/Breadcrumb';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";


type FormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate=useNavigate();
  const dispatch=useAppDispatch();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> =async (data:FormInputs) => {
    // const {email, password}=data;
    try {
      const response= await axios.post('https://shop-co-backend-nine.vercel.app/api/auth/login',
        data,{
        headers:{
          'Content-type':'application/json'
        },
        // withCredentials:true,
      },)
     
          const token=response.data?.data.token;
          const decodeToken:{id:string; email:string} = jwtDecode(token);
        
        dispatch(
          login({
            userData:{
              id:decodeToken.id,
              email: decodeToken.email,
            },
            accessToken: token,
          })
        )

        toast.success("Login successfully!!")
          setTimeout(()=>{
            navigate('/', {replace:true})
          })
      }
    catch (error) {
      if(axios.isAxiosError(error)){
        toast.error(error.response?.data?.message || " Network Connection, Please try again!");
      }
      else{
        toast.error("An unexpected error occurred");
      }
    }
    // Add logic to handle login here, e.g., call an API
  };

  return (
    <div>
        <Breadcrumb/>
          <div className="flex justify-center items-center max-h-screen">
          
          <Toaster/>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

            {/* Email Input */}
            <div className="mb-4">
              <Input
                label="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,
                    message: 'Please enter a valid email',
                  },
                })}
                className="border border-gray-300 rounded-md w-full p-2"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <Input
                label="Password"
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
                className="border border-gray-300 rounded-md w-full p-2 pr-10"
              />
              <Button
                type="button"  // Prevent form submission when clicking the visibility toggle
                onClick={togglePasswordVisibility}
                bgColor='transparent'
                textColor=''
                className="absolute top-1/2 transform -translate-y-0.7 right-2 text-gray-500"
              >
                {passwordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </Button>
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="mb-6">
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </Button>
            </div>

            {/* Link to Register */}
            <div className="flex justify-center items-center">
              <p className="mr-2">Don't have an account?</p>
              <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
            </div>
          </form>
        </div>
    </div>
    
  );
};

export default Login;