import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import {
  CopyButton,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  Button,
  Checkbox,
} from '@shibaone/shibhubui';

const SEED_PHRASE =
  'word forest mime pink feast husband fish blue word forest mime pink feast husband fish blue word forest mime pink feast husband fish blue';

interface SeedPhraseProps {
  setStep: (step: string) => void;
}

const SeedPhraseBox = ({ seedPhrase }: { seedPhrase: string }) => (
  <ul className="grid grid-cols-3 sm:grid-cols-4 gap-2">
    {seedPhrase.split(' ').map((word, i) => (
      <li
        key={word + i}
        className="flex items-center justify-between text-xs sm:text-sm"
      >
        <span className="w-[22px] text-center">{i + 1}.</span>
        <span className="w-[80px] h-[38px] sm:h-10 p-2.5 rounded-md border border-input font-medium sm:font-semibold">
          {word}
        </span>
      </li>
    ))}
  </ul>
);

const SeedPhrase = ({ setStep }: SeedPhraseProps) => {
  const [showPhrase, setShowPhrase] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <DialogHeader className="sm:mb-7">
        <DialogTitle className="mb-1">Save your Seed Phrase</DialogTitle>
        <DialogDescription>
          The seed phrase is used in case you lose access to your account. Write
          it down, copy to your clipboard and keep it somewhere safe. Required
          for account or asset recovery.
        </DialogDescription>
      </DialogHeader>

      <div className="border rounded-lg p-4 pr-2 w-[calc(100%+18px)] self-center">
        <span className="flex items-center justify-end gap-2 mb-2.5 mr-2">
          Copy to clipboard <CopyButton value={SEED_PHRASE} />
        </span>

        {showPhrase ? (
          <SeedPhraseBox seedPhrase={SEED_PHRASE} />
        ) : (
          <div className="w-full h-[200px] border rounded-lg flex items-center justify-center">
            <EyeOff size={16} className="text-neutral-500" />
          </div>
        )}
      </div>

      <DialogFooter className="flex items-center">
        <Button
          onClick={() => setShowPhrase((prev) => !prev)}
          className="w-full"
        >
          {showPhrase ? (
            <>
              Hide Seed Phrase <EyeOff size={16} className="ml-2" />
            </>
          ) : (
            <>
              Reveal Seed Phrase
              <Eye size={16} className="ml-2" />
            </>
          )}
        </Button>

        <Checkbox
          checked={checked}
          onCheckedChange={() => setChecked((prev) => !prev)}
          label="I’ve backed up my Seed Phrase"
          labelClassName="font-medium"
        />
      </DialogFooter>
    </>
  );
};

export default SeedPhrase;
