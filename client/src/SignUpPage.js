// SignUpPage.js
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import image from './images/login_image.jpg';
import image1 from './images/image.png';
import icon1 from './images/coinbase logo.svg';
import icon2 from './images/metamask logo.svg';
import icon3 from './images/connect wallet logo.svg';

const SignUpPage = () => {
  const history = useNavigate();

  const handleWalletSignUp = (walletType) => {
    // Placeholder function for wallet authentication
    console.log(`Signing up with ${walletType}`);
    // Simulated successful authentication
    history.push('/welcome');
  };

  return (

    <div className="app-container">
    <div style={{display: 'flex'}}>

    <img src={image} alt="Descriptive text" style={{marginRight: '150px', width: '720px', height: '750px'}} />

      <div className="form-container">
            
      <div className="logo-container">
  <img className="VeraLogoMark" alt='logo' src={image1} />
</div>


        <p className="title">Connect to V.E.R.A.</p>



        <div className="sign-up-label">
        Connect to your wallet, if you don’t have on you  <br />will be prompted to create a new one
        </div>

 <div className="button-container">
                <button className="button-inner-container" onClick={() => handleWalletSignUp('MetaMask')}> 
            <div className="button-icon-container">
                <img src={icon2} alt="MetaMask Icon" className="button-icon" /> 
            </div>
            <div className="button-text">MetaMask</div>
            </button>

            <button className="button-inner-container" onClick={() => handleWalletSignUp('Coinbase Wallet')}>
            <div className="button-icon-container">
                <img src={icon1} alt="Coinbase Wallet Icon" className="button-icon" /> 
            </div>
            <div className="button-text">Coinbase Wallet</div>
            </button>

                <button className="button-inner-container" onClick={() => handleWalletSignUp('WalletConnect')}> 
                <div className="button-icon-container">
                <img src={icon3} alt="WalletConnect Icon" className="button-icon" /> 
                </div>
                <div className="button-text">WalletConnect</div>
                </button>
                                        

    </div>




<p className="sign-up-label">
        View more wallets 
        </p>

        </div>
      </div>
      </div>
   

       
     


  );
};

export default SignUpPage;
