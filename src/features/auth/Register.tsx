import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, Button } from '../../components/index'
import { Link } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    // Toggle password visibility for the password field
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Toggle password visibility for the confirm password field
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    type FormInputs = {
        name: string
        email: string
        phone: number
        password: string
        confirmPassword: string
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>()
    
    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
    
    const password = watch('password');

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h2>

                {/* Name Input */}
                <div className='mb-4'>
                    <Input 
                        label='Name'
                        id='name'
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        placeholder='Enter your name'
                        className="border border-gray-300 rounded-md w-full p-2"
                    />
                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
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
                        className='border border-gray-300 rounded-md w-full p-2'
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
                        className='border border-gray-300 rounded-md w-full p-2'
                    />
                    {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                </div>

                {/* Password Input */}
                <div className='mb-4 relative'>
                    <Input
                        label='Password'
                        id='password'
                        type={passwordVisible ? 'text' : 'password'}
                        {...register('password', { required: 'Password is required' })}
                        placeholder='Enter your password'
                        className='border border-gray-300 rounded-md w-full p-2 pr-10'
                    />
                    <button 
                        type='button'  // Important: Set type as "button" to prevent form submission
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 transform -translate-y-0.1 right-2 text-gray-500"
                    >
                        {passwordVisible ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                    </button>
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
                        className='border border-gray-300 rounded-md w-full p-2 pr-10'
                    />
                    <button 
                        type='button'  // Important: Set type as "button" to prevent form submission
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute top-1/2 transform -translate-y-0.1 right-2 text-gray-500"
                    >
                        {confirmPasswordVisible ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                    </button>
                    {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                </div>
                
                {/* Submit Button */}
                <div className="mb-6">
                    <Button 
                        type='submit'
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Create Account
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
