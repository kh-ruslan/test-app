import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenWalletAddress({
  address,
  startCharCount = 4,
  endCharCount = 4,
}: {
  address: string;
  startCharCount?: number;
  endCharCount?: number;
}) {
  return `${address.substring(0, startCharCount)}...${address.substring(address.length - endCharCount)}`;
}
