import { ArrowRight, Lock } from 'lucide-react';
import {
  Button,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  IconButton,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Logo,
} from '@shibaone/shibhubui';

interface WelcomeProps {
  setStep: (step: string) => void;
}

const Welcome = ({ setStep }: WelcomeProps) => {
  return (
    <>
      <DialogHeader className="flex flex-row gap-x-2 items-center mb-16 sm:mb-0">
        <DialogTitle>
          Welcome to <span className="sm:hidden">Shibahub</span>
        </DialogTitle>
        <Logo variant="default" className="hidden sm:block w-[155px] h-10" />
      </DialogHeader>

      <div className="grid gap-3.5 grid-flow-row sm:grid-cols-2">
        <Card onClick={() => setStep('tour')}>
          <CardHeader className="flex flex-row items-baseline">
            <Typography component="h4" variant="heading4" className="grow">
              Take the Tour
            </Typography>
            <IconButton
              variant="outline"
              icon={<ArrowRight size={16} />}
              size="xs"
            ></IconButton>
          </CardHeader>
          <CardContent className="leading-7">
            <span className="text-theme-primary ">Learn more</span> about Shib
            Hub features
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-baseline">
            <Typography component="h4" variant="heading4" className="grow">
              Discover Defi
            </Typography>
            <IconButton
              variant="outline"
              icon={<ArrowRight size={16} />}
              size="xs"
            ></IconButton>
          </CardHeader>
          <CardContent className="leading-7">
            <span className="text-theme-primary">Explore</span> dapps and earn
            opportunities.
          </CardContent>
        </Card>

        <div className="sm:col-span-2">
          <Card onClick={() => setStep('secure-account')}>
            <CardHeader className="flex flex-row gap-x-4 items-baseline">
              <Lock size={16} />
              <Typography component="h4" variant="heading4" className="grow">
                Secure your account
              </Typography>
              <IconButton
                variant="outline"
                icon={<ArrowRight size={16} />}
                size="xs"
              ></IconButton>
            </CardHeader>
            <CardContent className="leading-7">
              Pair a robust password with an authenticator for
              <br /> top-tier security.
            </CardContent>
          </Card>
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default Welcome;
