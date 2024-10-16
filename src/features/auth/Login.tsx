import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Input, Button } from '../../components/index';  // Assuming you have Input and Button components

type FormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Add logic to handle login here, e.g., call an API
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
          <button
            type="button"  // Prevent form submission when clicking the visibility toggle
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 transform -translate-y-0.1 right-2 text-gray-500"
          >
            {passwordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </button>
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
  );
};

export default Login;
