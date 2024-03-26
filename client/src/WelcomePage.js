// WelcomePage.js
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import image from './images/login_image.jpg';
import image1 from './images/image.png';

const WelcomePage = () => {
  const history = useNavigate();

  const handleAcceptTerms = () => {
    // Placeholder function for handling terms acceptance
    console.log('Terms accepted');
    // Redirect to create tag page after accepting terms
    history.push('/create-tag');
  };

  const handleCancelTerms = () => {
    // Handle cancellation of sign-up process (e.g., clear any partially filled data)
    // Redirect to the home page or another appropriate route
    history.push('/create-tag');
  };


  return (
    <div className="app-container">
    <div style={{display: 'flex'}}>

    <img src={image} alt="sidsimage" style={{marginRight: '150px', width: '720px', height: '750px'}} />

    <div className="form-container">
        
            
    <div className="logo-container">
  <img className="VeraLogoMark" alt='logo' src={image1} />
</div>


<p className="title">Welcome to V.E.R.A.</p>

<div className="terms">
  <span className="terms-text">
    By connecting your wallet and using V.E.R.A., you agree to our 
    <span className="terms-link">Terms of Service</span> 
    and 
    <span className="terms-link">Privacy Policy</span>
  </span>
</div>

<div className="buttonsAC">
  <button className='cancelbutton cancel accepttext' onClick={handleCancelTerms}>Cancel</button>
  <button className='acceptbutton accepttext' onClick={handleAcceptTerms}>Accept</button>
</div>



    </div>
      </div>
      </div>
   

  );
};

export default WelcomePage;
