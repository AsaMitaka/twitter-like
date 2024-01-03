import { useCallback, useState } from 'react';
import Modal from './Modal';
import Textarea from '../ui/Textarea';
import { MdGifBox, MdOutlinePhoto } from 'react-icons/md';
import { COLORS } from '../../services/color';

const TweetModal = () => {
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClose = useCallback(() => {
    if (isLoading) return;

    setIsOpen(false);
  }, [isLoading, setIsOpen]);

  const handleOnSubmit = useCallback(async () => {
    try {
      setLoading(true);
      if (text.length < 1 || text.length > 240) return;
      console.log('Text', text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [text, setLoading]);

  const bodyContent = (
    <div className="flex flex-col">
      <Textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="What is happening?"
        value={text}
      />
    </div>
  );

  const footerContent = (
    <>
      <div className="flex items-center">
        <div className="mr-3 px-1 py-1 cursor-pointer rounded-full hover:bg-gray-200 hover:opacity-65">
          <MdOutlinePhoto size={24} color={COLORS.BLUE} />
        </div>
        <div className="mr-3 px-1 py-1 cursor-pointer rounded-full hover:bg-gray-200 hover:opacity-65">
          <MdGifBox size={24} color={COLORS.BLUE} />
        </div>
      </div>
    </>
  );

  return (
    <Modal
      actionLabel="tweet"
      body={bodyContent}
      footer={footerContent}
      label=""
      isOpen={isOpen}
      onClose={handleOnClose}
      onSubmit={handleOnSubmit}
    />
  );
};

export default TweetModal;
