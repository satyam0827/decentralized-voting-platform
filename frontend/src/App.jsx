import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Vote from './pages/Vote';
// import AuthenticateUser from "./pages/AuthenticateUser"

// import { createCandidateAccount } from '../../votingInit/main.mjs';
function App() {
  
  // const [candidateWallet, setCandidateWallet] = useState();
  // const updateCandidateWallet = () => {
  //   let wallet = createCandidateAccount()

  //   console.log(wallet, "wallet generated")
  //   setCandidateWallet(wallet);
  // };
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Vote' element={<Vote />} />
        {/* <Route path='/auth' element={<AuthenticateUser />} /> */}
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;


{/* <div>
<p>Current Wallet: {candidateWallet === undefined ? "no wallet generateds" : candidateWallet.publicKey()}</p>
<button onClick={() => updateCandidateWallet()}>
        Set Wallet Address
      </button>
</div> */}