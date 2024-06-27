import { useState } from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@shibaone/shibhubui';

interface ResetByGoogleAuthProps {
  setStep: (step: string) => void;
}

const ResetByGoogleAuth = ({ setStep }: ResetByGoogleAuthProps) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    console.log(otp);
    setStep('create-password');
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Enter code</DialogTitle>

        <DialogDescription>
          Open your Google Authenticator app and insert the code to reset your
          password
        </DialogDescription>
      </DialogHeader>

      <div className="flex justify-center my-4">
        <InputOTP onChange={(v) => setOtp(v)} maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <DialogFooter>
        <Button
          disabled={otp.length !== 6}
          className="mt-2"
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </DialogFooter>
    </>
  );
};

export default ResetByGoogleAuth;
