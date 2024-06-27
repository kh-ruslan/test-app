import LoginFooter from './login-footer';
import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Logo,
} from '@shibaone/shibhubui';

const LoggingIn = () => {
  return (
    <>
      <DialogHeader className="mb-6 sm:mb-0">
        <DialogTitle>Logging in...</DialogTitle>
      </DialogHeader>

      <div className="flex justify-center mt-24 sm:my-6">
        <Logo variant="short" className="w-10 h-10 hidden sm:block" />
      </div>

      <DialogFooter>
        <LoginFooter />
      </DialogFooter>
    </>
  );
};

export default LoggingIn;
