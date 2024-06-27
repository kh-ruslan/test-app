import { useEffect } from 'react';
import {
  DialogHeader,
  DialogDescription,
  DialogFooter,
  Button,
  DialogTitle,
} from '@shibaone/shibhubui';
import { ArrowLeft } from 'lucide-react';
import CountdownTimer from '../countdown-timer';

interface VerifyEmailProps {
  setStep: (step: string) => void;
}

const VerifyEmail = ({ setStep }: VerifyEmailProps) => {
  // Only for test, remove when login flow is ready
  useEffect(() => {
    setTimeout(() => setStep('enter-password'), 5000);
  }, [setStep]);

  return (
    <>
      <DialogHeader className="mb-6 sm:mb-0">
        <div className="flex items-center gap-4">
          <ArrowLeft
            size={16}
            className="cursor-pointer"
            onClick={() => setStep('login-form')}
          />

          <DialogTitle>Verify your email</DialogTitle>
        </div>
        <DialogDescription>
          We&#39;ve emailed a login link to email@example.com.
          <br />
          Check your spam folder.
        </DialogDescription>
      </DialogHeader>

      <p className="text-5xl font-extrabold text-center my-2">777</p>

      <p className="text-center text-sm">
        This code will expire in <CountdownTimer initialTime={180} />.
        <br />
        No email received? Click below to resend the code.
      </p>

      <DialogFooter>
        <Button variant="outline">Resend Email</Button>
      </DialogFooter>
    </>
  );
};

export default VerifyEmail;
