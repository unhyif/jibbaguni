import { useAuth } from '@hooks/useAuth';
import { useVisitLog } from '@hooks/useVisitLog';
import { transactionTypes } from '@constants/schema';
import { userProfileAtom } from '@recoil/states';
import { useRecoilValue } from 'recoil';

interface ButtonsProps {}

const Buttons = (props: ButtonsProps) => {
  const user = useRecoilValue(userProfileAtom);
  const { signUp, signIn, signOut } = useAuth();
  const { insert, update, remove } = useVisitLog();

  // TODO: random email
  const handleSignUp = () => signUp('a@naver.com', '123456');
  const handleSignIn = () => signIn('a@naver.com', '123456');
  const handleSignOut = () => signOut();

  const handleInsert = () =>
    insert({
      transactionType: transactionTypes.MONTHLY_RENT,
      price: 10000,
      hasElevator: true,
    });
  const handleUpdate = () =>
    update(2, { price: 20000, supplyArea: 7.5, hasElevator: false });
  const handleRemove = () => remove(2);

  return (
    <>
      <h1>{user?.id}</h1>
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleInsert}>Insert</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Delete</button>
    </>
  );
};

export default Buttons;
