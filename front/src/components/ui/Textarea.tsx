import { ChangeEvent, FC } from 'react';

interface TextareaProps {
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  rows?: number;
  value: string;
}

const Textarea: FC<TextareaProps> = ({ disabled, onChange, placeholder, rows = 4, value }) => {
  return (
    <textarea
      className="w-full resize-none focus:outline-none border-b-[1.5px] border-transparent focus:border-sky-500 px-2 py-1 text-semibold text-lg"
      disabled={disabled}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      value={value}></textarea>
  );
};

export default Textarea;
