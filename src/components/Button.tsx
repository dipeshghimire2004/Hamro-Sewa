import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string; 
  textColor?: string; 
  className?: string; 
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  bgColor = 'bg-blue-600',
  textColor = 'text-white', 
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2  rounded-full ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
