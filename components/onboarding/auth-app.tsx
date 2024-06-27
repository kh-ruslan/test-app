import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import {
  CopyButton,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Typography,
} from '@shibaone/shibhubui';

interface AuthAppProps {
  setStep: (step: string) => void;
}

const AuthApp = ({ setStep }: AuthAppProps) => {
  const [otp, setOtp] = useState('');

  return (
    <>
      <DialogHeader>
        <div className="flex items-center gap-4">
          <ArrowLeft
            size={16}
            className="cursor-pointer"
            onClick={() => setStep('password-added')}
          />

          <DialogTitle>Set up Google Authenticator</DialogTitle>
        </div>

        <DialogDescription>
          Please take a few seconds to secure your account.
        </DialogDescription>
      </DialogHeader>

      <ol className="text-sm text-muted-text list-decimal -mt-2">
        <li className="ml-4">
          Download the{' '}
          <Link
            className="text-theme-primary"
            target="_blank"
            rel="nofollow noopener"
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
          >
            Google Authenticator app
          </Link>{' '}
          <span className="hidden sm:inline">
            on your smartphone on all screens.
          </span>
        </li>

        <div className="flex sm:hidden my-2.5">
          <Link
            target="_blank"
            rel="nofollow noopener"
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
          >
            <Image
              src="/google-play.png"
              width={166}
              height={48}
              alt="google play"
              className="mr-5"
            />
          </Link>

          <Link
            target="_blank"
            rel="nofollow noopener"
            href="https://apps.apple.com/us/app/google-authenticator/id388497605"
          >
            <Image
              src="/app-store.png"
              width={166}
              height={48}
              alt="app store"
            />
          </Link>
        </div>

        <li className="ml-4">
          In Google Authenticator, click on the “ + “ icon to add a new account
          and either scan the QR code below.
        </li>

        <div className="flex flex-col items-center mt-3 sm:mt-10 gap-2">
          <Image
            src="/google-auth.png"
            width={160}
            height={160}
            alt="auth-qr-code"
            className="sm:hidden"
          />
          <Image
            src="/google-auth.png"
            width={240}
            height={240}
            alt="auth-qr-code"
            className="hidden sm:block"
          />
          <p className="text-sm text-muted-text">or enter this Set up key:</p>
          <div className="flex items-center gap-2">
            <Typography
              variant="body1"
              className="inline text-base text-foreground"
            >
              hereisthelinktopasteinthegoogleauth
            </Typography>

            <CopyButton value="hereisthelinktopasteinthegoogleauth" />
          </div>
        </div>

        <li className="ml-4 mt-3 sm:mt-6">
          Enter the 6 digit code from your Google Authenticator
        </li>

        <div className="flex justify-center mt-3">
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
      </ol>

      <DialogFooter>
        <Button
          disabled={otp.length !== 6}
          className="mt-2"
          onClick={() => setStep('account-secured')}
        >
          Verify
        </Button>

        <Button onClick={() => setStep('account-secured')} variant="outline">
          Skip
        </Button>
      </DialogFooter>
    </>
  );
};

export default AuthApp;
