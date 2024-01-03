import { useCallback, useState } from 'react';
import Modal from './Modal';
import Input from '../ui/Input';

const SignInModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClose = useCallback(() => {
    if (isLoading) return;

    setIsOpen(false);
  }, [isLoading, setIsOpen]);

  const handleOnSubmit = useCallback(async () => {
    try {
      setLoading(true);
      if (email.length < 5 && password.length < 5) return;
      console.log('Email', email, 'Password', password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [email, password, setLoading]);

  const bodyContent = (
    <div className="flex flex-col">
      <Input
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email}
      />
      <br />
      <Input
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        value={password}
      />
    </div>
  );

  const footerContent = (
    <div className="text-black dark:text-white">
      <p>If u dont have a account</p>
    </div>
  );

  return (
    <Modal
      actionLabel="SignIn"
      body={bodyContent}
      footer={footerContent}
      label="Sign In"
      isOpen={isOpen}
      onClose={handleOnClose}
      onSubmit={handleOnSubmit}
    />
  );
};

export default SignInModal;
