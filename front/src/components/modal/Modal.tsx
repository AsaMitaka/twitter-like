import { FC, useCallback } from 'react';
import Button from '../ui/Button';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  actionLabel: string;
  body: React.ReactElement;
  footer?: React.ReactNode;
  disabled?: boolean;
  label: string;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal: FC<ModalProps> = ({
  actionLabel,
  body,
  footer,
  disabled,
  label,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) return;

    return onSubmit();
  }, [disabled, onSubmit]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    return onClose();
  }, [disabled, onClose]);

  if (!isOpen) return null;

  return (
    <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white-800 bg-opacity-70 flex justify-center items-center">
      <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
        <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative p-10 flex flex-col gap-10 w-full bg-dark dark:bg-white outline-none focus:outline-none">
          <div className="flex items-center justify-between rounded-t">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-text">{label}</h1>
            <button className="p-1 ml-auto border-0 transition" onClick={handleClose} type="button">
              <AiOutlineClose
                className="hover:opacity-70 cursor-pointer focus:opacity-70"
                color="black dark:white"
                size={24}
              />
            </button>
          </div>
          <div className="relative flex-auto">{body}</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <div>{footer}</div>
              <Button actionLabel={actionLabel} onClick={handleSubmit} rounded />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
