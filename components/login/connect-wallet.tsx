import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Separator,
} from '@shibaone/shibhubui';

const ConnectWallet = () => {
  const walletItemCn =
    'cursor-pointer flex gap-2 items-center text-sm font-medium';

  return (
    <>
      <DialogHeader className="mb-16 sm:mb-0">
        <DialogTitle>Connect to wallet</DialogTitle>
      </DialogHeader>

      <p className="text-muted-text text-sm font-medium">Recommended:</p>

      <div className={walletItemCn}>
        <img width={28} height={28} src="/coinbase.png" alt="coinbase" />
        Coinbase
      </div>
      <div className={walletItemCn}>
        <img
          width={28}
          height={28}
          src="/rainbow-wallet.png"
          alt="rainbow-wallet"
        />
        Rainbow Wallet
      </div>
      <div className={walletItemCn}>
        <img
          width={28}
          height={28}
          src="/rabby-wallet.png"
          alt="rabby-wallet"
        />
        Rabby Wallet
      </div>
      <div className={walletItemCn}>
        <img
          width={28}
          height={28}
          src="/wallet-connect.png"
          alt="wallet-connect"
        />
        WalletConnect
      </div>
      <div className={walletItemCn}>
        <img width={28} height={28} src="/metamask.png" alt="metamask" />
        MetaMask
      </div>

      <DialogFooter>
        <Separator />

        <div className="flex justify-between items-baseline">
          <span className="text-xs text-muted-text">New to Ethereum?</span>
          <span className="text-sm font-medium cursor-pointer">Learn More</span>
        </div>
      </DialogFooter>
    </>
  );
};

export default ConnectWallet;
