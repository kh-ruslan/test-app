import { CircleCheckBig } from 'lucide-react';
import {
  DialogClose,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@shibaone/shibhubui';

const PasswordChanged = () => {
  return (
    <>
      <DialogHeader className="mb-6">
        <div className="flex items-center gap-4 mb-1">
          <CircleCheckBig size={16} />

          <DialogTitle>Password changed</DialogTitle>
        </div>

        <DialogDescription>
          You have successfully reset your password.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default PasswordChanged;
