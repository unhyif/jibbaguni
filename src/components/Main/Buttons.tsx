'use client';

import { useAuth } from '@hooks/useAuth';

interface ButtonsProps {}

const Buttons = (props: ButtonsProps) => {
  const { signUp, signIn, signOut } = useAuth();

  // TODO: random email
  const handleSignUp = () => signUp('a@naver.com', '123456');
  const handleSignIn = () => signIn('a@naver.com', '123456');
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
