import { cn } from '@/lib/utils';
import { Logo } from '@shibaone/shibhubui';

const LoginFooter = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex justify-center items-center gap-x-2', className)}>
      <span className="text-[10px]">Self Custodial Login</span>
      <Logo variant="alternative" className="w-[70px] h-[21px]" />
    </div>
  );
};

export default LoginFooter;
