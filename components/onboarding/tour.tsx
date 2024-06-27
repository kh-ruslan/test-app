import { ArrowLeft } from 'lucide-react';
import {
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  DialogClose,
  Typography,
} from '@shibaone/shibhubui';

const TOUR_ITEMS = [
  {
    title: 'Your Wallet',
  },
  {
    title: 'Explore Dapps',
  },
  {
    title: 'Shib Defi',
  },
  {
    title: 'NFT Marketplace',
  },
  {
    title: 'Social',
  },
];

interface TourProps {
  setStep: (step: string) => void;
}

const Tour = ({ setStep }: TourProps) => {
  return (
    <>
      <DialogHeader className="mb-2">
        <div className="flex items-center gap-4 mb-1">
          <ArrowLeft
            size={16}
            className="cursor-pointer"
            onClick={() => setStep('welcome')}
          />

          <DialogTitle>Take the Tour</DialogTitle>
        </div>
        <DialogDescription>
          Learn more about Shib Hub features
        </DialogDescription>
      </DialogHeader>

      <Carousel className="w-full sm:max-w-[calc(100%-96px)] mx-auto mb-5">
        <CarouselContent>
          {TOUR_ITEMS.map(({ title }) => (
            <CarouselItem key={title}>
              <Typography
                variant="heading4"
                component="h4"
                className="text-center mb-4"
              >
                {title}
              </Typography>
              <div className="w-full bg-theme-primary h-[318px] rounded-md"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
        <CarouselDots />
      </Carousel>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default Tour;
