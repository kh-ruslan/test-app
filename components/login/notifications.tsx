import { BellRing } from 'lucide-react';
import {
  Switch,
  Button,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from '@shibaone/shibhubui';

const Notifications = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Test notifications</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="mb-6 sm:mb-0">
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>
            Receive incoming transaction and notification alerts.
          </DialogDescription>
        </DialogHeader>

        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Don’t miss a thing!
            </p>
            <p className="text-sm text-muted-text">
              Receive notifications for transactions, products, airdrops etc.
            </p>
          </div>
          <Switch defaultChecked={true} />
        </div>

        <DialogFooter>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Notifications;
