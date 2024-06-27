import { Search } from 'lucide-react';
import {
  Avatar,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  InputField,
  Separator,
} from '@shibaone/shibhubui';

const FAKE_USERS = [
  {
    id: 1,
    name: 'CryptoQueen',
    avatar: 'https://avatar.iran.liara.run/public/1',
    following: false,
  },
  {
    id: 2,
    name: 'DeFiDiva92',
    avatar: 'https://avatar.iran.liara.run/public/100',
    following: true,
  },
  {
    id: 3,
    name: 'Shib Official',
    avatar: 'https://avatar.iran.liara.run/public/20',
    following: false,
  },
  {
    id: 4,
    name: 'DeFiDiva92',
    avatar: 'https://avatar.iran.liara.run/public/90',
    following: false,
  },
  {
    id: 5,
    name: 'BlockChainBard',
    avatar: 'https://avatar.iran.liara.run/public/15',
    following: false,
  },
  {
    id: 6,
    name: 'NFTExplorerX',
    avatar: 'https://avatar.iran.liara.run/public/54',
    following: false,
  },
  {
    id: 7,
    name: 'CryptoQueen',
    avatar: 'https://avatar.iran.liara.run/public/1',
    following: false,
  },
  {
    id: 8,
    name: 'DeFiDiva92',
    avatar: 'https://avatar.iran.liara.run/public/100',
    following: false,
  },
  {
    id: 9,
    name: 'Shib Official',
    avatar: 'https://avatar.iran.liara.run/public/20',
    following: false,
  },
  {
    id: 10,
    name: 'DeFiDiva92',
    avatar: 'https://avatar.iran.liara.run/public/90',
    following: false,
  },
  {
    id: 11,
    name: 'BlockChainBard',
    avatar: 'https://avatar.iran.liara.run/public/15',
    following: false,
  },
  {
    id: 12,
    name: 'NFTExplorerX',
    avatar: 'https://avatar.iran.liara.run/public/54',
    following: false,
  },
];

const FindPeople = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Find people to follow</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col overflow-hidden sm:overflow-auto p-0.5">
        <div className="flex justify-between my-5">
          <span>Follow 5 users</span>
          <span>1/5</span>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-text" />
          <InputField
            type="search"
            placeholder="Search by name.."
            className="pl-8 h-9"
          />
        </div>

        <ul className="flex flex-col mt-5 h-auto sm:h-[336px] overflow-y-scroll">
          {FAKE_USERS.map(({ id, avatar, name, following }) => (
            <li
              key={id}
              className="flex justify-between items-center h-14 p-2 hover:bg-neutral-100"
            >
              <div className="flex gap-4 items-center">
                <Avatar src={avatar} />

                <span>{name}</span>
              </div>
              {following ? (
                <span className="text-theme-primary text-sm font-medium pr-2.5">
                  Following
                </span>
              ) : (
                <Button variant="link">Follow</Button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Separator className="relative w-[calc(100%+48px)] -left-[24px]" />

      <DialogFooter className="relative grow-0">
        <Button className="mt-2">Continue</Button>

        <DialogClose asChild>
          <Button variant="outline">Skip</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default FindPeople;
