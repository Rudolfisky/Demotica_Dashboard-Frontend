import React from 'react';

import LoginButton from './login-button';
import Temp from './Temp';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationChecker = () => {
  const { isAuthenticated } = useAuth0();
  console.log("auth time");

  return isAuthenticated ? <Temp /> : <LoginButton />;
};

export default AuthenticationChecker;