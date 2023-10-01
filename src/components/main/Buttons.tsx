'use client';

import { useAuth } from '@hooks/useAuth';

interface ButtonsProps {}

const Buttons = (props: ButtonsProps) => {
  const { signUp, signIn, signOut } = useAuth();

  const handleSignUp = () => signUp('b@naver.com', '123456');
  const handleSignIn = () => signIn('b@naver.com', '123456');
  const handleSignOut = () => signOut();

  return (
    <>
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default Buttons;
