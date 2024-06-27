'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Welcome from './welcome';
import Tour from './tour';
import SecureAccount from './secure-account';
import AuthApp from './auth-app';
import AccountSecured from './account-secured';
import FindPeople from './find-people';
import PasswordAdded from './password-added';
import SeedPhrase from './seed-phrase';
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  IconButton,
  Logo,
} from '@shibaone/shibhubui';

const Onboarding = () => {
  const [step, setStep] = useState('welcome');

  return (
    <Dialog onOpenChange={(open) => open && setStep('welcome')}>
      <DialogTrigger asChild>
        <div className="w-fit flex items-center bg-warning-50 gap-6 rounded-lg px-2 py-1 cursor-pointer">
          <p>👋 Take our tour and get an overview of the Shib Ecosystem.</p>
          <IconButton
            variant="outline"
            size="xs"
            icon={<ArrowRight size={16} />}
          ></IconButton>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg overflow-y-auto overflow-x-hidden border-none sm:border">
        <DialogHeader className="sm:hidden">
          <Logo variant="default" className="w-[155px] h-10" />
        </DialogHeader>
        {step === 'welcome' && <Welcome setStep={setStep} />}
        {step === 'tour' && <Tour setStep={setStep} />}
        {step === 'secure-account' && <SecureAccount setStep={setStep} />}
        {step === 'password-added' && <PasswordAdded setStep={setStep} />}
        {step === 'auth-app' && <AuthApp setStep={setStep} />}
        {step === 'account-secured' && <AccountSecured setStep={setStep} />}
        {step === 'seed-phrase' && <SeedPhrase setStep={setStep} />}
        {step === 'find-people' && <FindPeople />}
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;
