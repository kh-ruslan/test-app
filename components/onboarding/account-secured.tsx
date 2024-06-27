import { CircleCheckBig } from 'lucide-react';
import {
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from '@shibaone/shibhubui';

interface AccountSecuredProps {
  setStep: (step: string) => void;
}

const AccountSecured = ({ setStep }: AccountSecuredProps) => {
  return (
    <>
      <DialogHeader className="mb-14 sm:mb-7">
        <div className="flex items-center gap-4 mb-1">
          <CircleCheckBig size={16} />

          <DialogTitle>Account Secured</DialogTitle>
        </div>
        <DialogDescription className="col-span-2">
          If you change device or lose account access you will need your{' '}
          <br className="hidden sm:block" />
          24-word seed phrase.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button onClick={() => setStep('seed-phrase')}>
          View your Seed Phrase
        </Button>

        <DialogClose asChild>
          <Button variant="outline">Skip</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default AccountSecured;
