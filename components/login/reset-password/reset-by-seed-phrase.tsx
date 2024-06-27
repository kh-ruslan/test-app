import { useState } from 'react';
import {
  Textarea,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@shibaone/shibhubui';

interface ResetBySeedPhraseProps {
  setStep: (step: string) => void;
}

const ResetBySeedPhrase = ({ setStep }: ResetBySeedPhraseProps) => {
  const [seedPhrase, setSeedPhrase] = useState('');

  const handleSubmit = () => {
    console.log(seedPhrase);
    setStep('create-password');
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Enter your Seed Phrase</DialogTitle>

        <DialogDescription>
          Your Seed Phrase consists of 24 words. Enter the words separated by a
          space or paste the phrase below.
        </DialogDescription>
      </DialogHeader>

      <Textarea
        onChange={(e) => setSeedPhrase(e.target.value)}
        placeholder="Insert here.."
      />

      <DialogFooter>
        <Button disabled={!seedPhrase} className="mt-2" onClick={handleSubmit}>
          Confirm
        </Button>
      </DialogFooter>
    </>
  );
};

export default ResetBySeedPhrase;
