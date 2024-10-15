import React, { useId } from 'react';
import { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;  // Marking label as optional
  className?: string;
}

const Input:FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', type = 'text', ...props }, ref) => {
    const id = useId();

    return (
      <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}

        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 
            border border-gray-200 w-full ${className}`}
          ref={ref}
          id={id}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
