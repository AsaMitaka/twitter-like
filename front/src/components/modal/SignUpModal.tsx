import { useCallback, useState } from 'react';
import Modal from './Modal';
import Input from '../ui/Input';

const SignUpModal = () => {
  const [username, setUsername] = useState('');
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
      if (username.length < 5 && email.length < 5 && password.length < 5) return;
      console.log('Username', username, 'Email', email, 'Password', password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [email, password, setLoading, username]);

  const bodyContent = (
    <div className="flex flex-col">
      <Input
        disabled={isLoading}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        value={username}
      />
      <br />
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
      <p>If u have an account </p>
    </div>
  );

  return (
    <Modal
      actionLabel="Sign Up"
      body={bodyContent}
      footer={footerContent}
      label="Sign Up"
      isOpen={isOpen}
      onClose={handleOnClose}
      onSubmit={handleOnSubmit}
    />
  );
};

export default SignUpModal;
