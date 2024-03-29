import { UserSignInDTO } from 'common/dto';
import { ButtonEnum, DataStatusEnum, InputEnum } from 'common/enums';
import { Button, Input, SignLayout } from 'components';
import { AuthContext } from 'context/auth';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useContext, useEffect, useState } from 'react';
import { signIn } from 'store/auth';
import jwtDecode from 'jwt-decode';

type SignInProps = {
  toggleModals: (value: boolean) => void;
}

const SignIn = ({ toggleModals }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useAppDispatch();
  const { status, tokens } = useAppSelector(store => store.auth);
  const { setAuth } = useContext(AuthContext);

  const checkUser = (e) => {
    e.preventDefault();

    const user: UserSignInDTO = {
      email, 
      password
    }
    
    dispatch(signIn(user));
  }
  
  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      sessionStorage.setItem('userId', jwtDecode(tokens.accessToken)['userId']);
      sessionStorage.setItem('accessToken', tokens.accessToken);
      sessionStorage.setItem('refreshToken', tokens.refreshToken);
      setAuth(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <SignLayout>
        <Input type={InputEnum.EMAIL} placeholder='Email' value={email} setValue={setEmail}/>
        <Input type={InputEnum.PASSWORD} placeholder='Password' value={password} setValue={setPassword}/>
        <Button variant={ButtonEnum.ACCENT} onClick={checkUser}> Sign in </Button>
        <Button variant={ButtonEnum.RESET} onClick={toggleModals}> or Sign up </Button>
      </SignLayout>
    </>
  )
}

export { SignIn }; 