// services/WalletService.js
const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        return accounts[0];
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
      return null;
    }
  };
  
  export default { connectWallet };