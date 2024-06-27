import { CircleCheckBig } from 'lucide-react';
import {
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  Button,
} from '@shibaone/shibhubui';

interface PasswordAddedProps {
  setStep: (step: string) => void;
}

const PasswordAdded = ({ setStep }: PasswordAddedProps) => {
  return (
    <>
      <DialogHeader className="mb-14 sm:mb-7">
        <div className="flex items-center gap-4 mb-1">
          <CircleCheckBig size={16} />

          <DialogTitle>Password added</DialogTitle>
        </div>
        <DialogDescription>
          Add Google Auth code to restore the password in case you forget it!
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button onClick={() => setStep('auth-app')}>
          Set up Google Authenticator
        </Button>
        <Button onClick={() => setStep('account-secured')} variant="outline">
          Skip
        </Button>
      </DialogFooter>
    </>
  );
};

export default PasswordAdded;
