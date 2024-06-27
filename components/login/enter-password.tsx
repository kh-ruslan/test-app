import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Button,
} from '@shibaone/shibhubui';

interface EnterPasswordProps {
  setStep: (step: string) => void;
}

const formSchema = z.object({
  password: z.string(),
});

const EnterPassword = ({ setStep }: EnterPasswordProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <DialogHeader className="mb-16 sm:mb-0">
        <DialogTitle>Enter your password</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
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
          Continue
        </Button>

        <div className="mt-1">
          <p className="text-xs text-muted-text text-center mb-1">
            Forgot password? Restore your account with
          </p>
          <p className="flex justify-center items-baseline gap-3 text-sm font-medium">
            <span
              className="cursor-pointer"
              onClick={() => setStep('enter-code')}
            >
              Google Authenticator
            </span>
            <span className="text-xs text-muted-text">or</span>
            <span
              className="cursor-pointer"
              onClick={() => setStep('enter-seed-phrase')}
            >
              24 word seed phrase
            </span>
          </p>
        </div>
      </DialogFooter>
    </>
  );
};

export default EnterPassword;
