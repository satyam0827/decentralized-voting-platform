import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css";
import Vote from "./Vote"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const navigate = useNavigate();

  // Function to handle connecting to the Diam Wallet
//   const handleConnectWallet = async () => {
//     if (window.diam) {
//       try {
//         // Use Diam Wallet's provider
//         const provider = new ethers.providers.Web3Provider(window.diam);
//         await provider.send("eth_requestAccounts", []);  // Prompt user to connect the wallet

//         const signer = provider.getSigner();
//         const address = await signer.getAddress();

//         setWalletAddress(address);  // Store the wallet address
//         console.log('Connected to Diam wallet:', address);
//       } catch (error) {
//         console.error('Error connecting to the Diam wallet:', error);
//       }
//     } else {
//       alert('No Diam Wallet found. Please install the Diam extension.');
//     }
//   };

const handleConnectWallet = async () => {
    let public_address = '';
    if (!window.diam) {
        toast.error('Please install Diam Wallet extension.');
        return;
    }
    window.diam
        .connect()
        .then((result) => {
            toast.success(`Wallet connected succesfully`);
            public_address = result.message[0];
            localStorage.setItem('public_address', public_address);
            navigate(`/vote?public_address=${public_address}`);
        })
        .catch((error) => console.error(`Error: ${error}`));
};

  return (
    <div className="homepage-container">
      <div className="wallet-box">
        {walletAddress ? (
       
          <Vote walletAddress={walletAddress} />
        ) : (
          <>
            <h2>Welcome to the DiamPoll</h2>
            <p>Please connect to your Diam wallet to participate in voting.</p>
            <button className="connect-wallet-button" onClick={handleConnectWallet}>
              Connect to Diam Wallet
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Homepage;