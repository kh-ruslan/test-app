'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Button,
  Logo,
} from '@shibaone/shibhubui';
import LoginForm from './login-form';
import VerifyEmail from './verify-email';
import LoggingIn from './logging-in';
import ConnectWallet from './connect-wallet';
import EnterPassword from './enter-password';
import ResetByGoogleAuth from './reset-password/reset-by-google-auth';
import CreatePassword from './reset-password/create-password';
import PasswordChanged from './reset-password/password-changed';
import ResetBySeedPhrase from './reset-password/reset-by-seed-phrase';
import LoginContext from '../context';

const Login = () => {
  const [step, setStep] = useState('login-form');
  const [userEmail, setUserEmail] = useState('');

  return (
    <Dialog onOpenChange={(open) => open && setStep('login-form')}>
      <DialogTrigger asChild>
        <Button variant="theme-primary">Join/Login</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="sm:hidden">
          <Logo variant="default" className="w-[155px] h-10" />
        </DialogHeader>
        <LoginContext.Provider value={{ userEmail, setUserEmail }}>
          {step === 'login-form' && <LoginForm setStep={setStep} />}
          {step === 'verify-email' && <VerifyEmail setStep={setStep} />}
          {step === 'logging-in' && <LoggingIn />}
          {step === 'connect-wallet' && <ConnectWallet />}
          {step === 'enter-password' && <EnterPassword setStep={setStep} />}
          {step === 'reset-by-google-auth' && (
            <ResetByGoogleAuth setStep={setStep} />
          )}
          {step === 'reset-by-seed-phrase' && (
            <ResetBySeedPhrase setStep={setStep} />
          )}
          {step === 'create-password' && <CreatePassword setStep={setStep} />}
          {step === 'password-changed' && <PasswordChanged />}
        </LoginContext.Provider>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
