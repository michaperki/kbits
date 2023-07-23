// components/WalletConnection.js
import { useState } from "react";
import WalletService from "../services/walletService";

const WalletConnection = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnectWallet = async () => {
    try {
      const address = await WalletService.connectWallet();
      if (address) {
        setWalletAddress(address);
      }
    } catch (error) {
      // Handle wallet connection error
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
      <div>{walletAddress}</div>
    </div>
  );
};

export default WalletConnection;
