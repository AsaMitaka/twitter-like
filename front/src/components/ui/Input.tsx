import { FC } from 'react';

interface InputProps {
  disabled?: boolean;
  isRounded?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  value: string;
}

const Input: FC<InputProps> = ({ disabled, isRounded, onChange, placeholder, value }) => {
  return (
    <input
      className={`
        bg-neutral-200
        border-1
        border-sky-500
        outline-none
        text-black
        text-lg
        transition
        p-2
        w-full
        ${isRounded ? 'rounded-full' : 'rounded-md'}
        focus:border-sky-200
        disabled:opacity-50
    `}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

export default Input;
