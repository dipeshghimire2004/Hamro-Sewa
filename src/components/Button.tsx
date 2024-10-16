import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string; // Custom prop
  textColor?: string; // Custom prop
  className?: string; // Additional className
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  bgColor = 'bg-blue-600', // Default background color
  textColor = 'text-white', // Default text color
  className = '',
  ...props
}) => {
  // These custom props won't be passed to the native button element
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
