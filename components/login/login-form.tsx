import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LoginFooter from './login-footer';
import LoginContext from '../context';
import {
  Separator,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  InputField,
  Button,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Logo,
} from '@shibaone/shibhubui';

interface LoginFormProps {
  setStep: (step: string) => void;
}

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

const LoginForm = ({ setStep }: LoginFormProps) => {
  const { setUserEmail } = useContext(LoginContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setUserEmail(values.email);
    setStep('verify-email');
  };

  return (
    <>
      <DialogHeader className="flex flex-row sm:gap-x-4 items-center mb-16 sm:mb-0">
        <Logo variant="short" className="w-10 h-10 hidden sm:block" />
        <DialogTitle>Join/Login</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputField
                    placeholder="name@gmail.com"
                    label="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="min-h-min" />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <DialogFooter>
        <Button
          disabled={!form.formState.isDirty}
          type="submit"
          form="login-form"
          className="w-full"
        >
          Continue with email
        </Button>

        <Separator className="text-center my-2">
          <span className="bg-background px-3 relative -top-3.5 text-sm font-medium">
            or
          </span>
        </Separator>

        <Button variant="outline" onClick={() => setStep('connect-wallet')}>
          Connect Wallet
        </Button>

        <LoginFooter />
      </DialogFooter>
    </>
  );
};

export default LoginForm;
