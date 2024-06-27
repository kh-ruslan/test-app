import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Button,
  Input,
} from '@shibaone/shibhubui';

// Minimum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/,
);

const formSchema = z
  .object({
    password: z.string().regex(passwordValidation, {
      message: 'Your password is not valid',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match',
  });

interface CreatePasswordProps {
  setStep: (step: string) => void;
}

const CreatePassword = ({ setStep }: CreatePasswordProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setStep('password-changed');
  };

  return (
    <>
      <DialogHeader className="mb-8">
        <div className="flex items-center gap-4">
          <ArrowLeft
            size={16}
            className="cursor-pointer"
            onClick={() => setStep('enter-password')}
          />

          <DialogTitle>Create a new password</DialogTitle>
        </div>

        <DialogDescription>
          Create a strong password to login into your account from different
          devices.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form id="create-password-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-3">
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    label="Re-enter password"
                    placeholder="Re-enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="min-h-min" />
              </FormItem>
            )}
          />

          <div className="p-4 bg-warning-50 rounded-lg mt-3 mb-1">
            <p className="text-xs font-medium text-muted-text">
              The password can’t be shorter than 10 characters.
              <br />
              At least an uppercase character (A-Z).
              <br />
              At least a lowercase character (a-z).
              <br />
              At least a number (0-9).
              <br />
              At least a symbol (such as !, #, or %).
            </p>
          </div>
        </form>

        <DialogFooter>
          <Button
            type="submit"
            disabled={
              !form.formState.dirtyFields.password ||
              !form.formState.dirtyFields.confirmPassword
            }
            form="create-password-form"
            className="w-full mt-4"
          >
            Continue
          </Button>
        </DialogFooter>
      </Form>
    </>
  );
};

export default CreatePassword;
