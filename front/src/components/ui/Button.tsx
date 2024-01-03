import { FC } from 'react';

interface ButtonProps {
  actionLabel: string;
  big?: boolean;
  minWidth?: boolean;
  onClick?: () => void;
  outline?: boolean;
  rounded?: boolean;
}

const Button: FC<ButtonProps> = ({ actionLabel, big, minWidth, onClick, outline, rounded }) => {
  return (
    <button
      className={`
      px-3 py-2 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed
      ${big ? 'w-full justify-center font-bold text-xl' : 'min-w-[6rem] max-w-full'} 
      ${minWidth ? 'bg-sky-500 justify-center hover:bg-sky-600' : ''} 
      ${
        outline
          ? 'text-sky-500 bg-white border-2 text-black border-black hover:bg-gray-100'
          : 'border-2 border-sky-500 bg-sky-500 text-white'
      }
      ${rounded ? 'rounded-full' : ''}

      `}
      onClick={onClick}>
      {actionLabel}
    </button>
  );
};

export default Button;
