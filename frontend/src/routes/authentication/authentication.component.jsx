import SignUp from '../../components/sign-up-form/sign-up-form.component';

import SignIn from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles.jsx';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

export const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};
