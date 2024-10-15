import React from 'react'
import { ButtonHTMLAttributes,FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:React.ReactNode;
  type?:'button' | 'submit' | 'reset';
  bgColor?:string;
  textColor?:string;
  className?:string;
}

const Button:FC<ButtonProps> = ({
    children,
    type='button',
    bgColor="bg-blue-500",
    textColor="white",
    className='',
    ...props
}) => {
  return (
    <button className={`py-3 px-4 rounded-lg ${bgColor} ${textColor} ${className}`}
     {...props}
    >
      {children}
    </button>
  )
}

export default Button