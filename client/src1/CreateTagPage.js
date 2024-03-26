// CreateTagPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

import logo from './images/vera logo- landscape.png';
import proicon from './images/Vector.png';
import searchIcon from './images/search icon.svg';
import walleticon from './images/wallet.svg';
import profileicon from './images/profile icon.svg';
import createtagicon from './images/create icon.svg';
import taggedmediaicon from './images/tagged media icon.svg';
import upgradeicon from './images/upgrade stars.svg';
import learnicon from './images/learn icon.svg';
import helpicon from './images/help icon.svg';
import settingicon from './images/settings icon.svg';
import languageicon from './images/language icon.svg';
import logouticon from './images/logout icon.svg';
import Notificationicon from './images/notification icon.svg';
import closeicon from './images/Cancel icon.svg';
import emptybox from './images/empty dash box image.png';


const CreateTagPage = () => {
//   const [tagName, setTagName] = useState('');

//   const handleTagCreation = () => {
//     // Placeholder function for tag creation
//     console.log(`Creating tag with name: ${tagName}`);
//     // Implement actual logic for tag creation, e.g., API call
    
//   };


  const [searchTerm, setSearchTerm] = useState('');

const handleSearch = () => {
  console.log(`Searching for: ${searchTerm}`);
  // Implement your search logic here
};


const navigateToMediaUpload = () => {
    useNavigate.push('/media-upload');
  };

  
const navigateToExplore = () => {
  useNavigate.push('/explore');
};


const nagivateToProButton = () => {
    useNavigate.push('/pro-button');
  };

  const nagivateToWallet = () => {
    useNavigate.push('/wallet');
  };


  const [dropdownOpen, setDropdownOpen] = useState(false);

const handleClick = () => {
  setDropdownOpen(!dropdownOpen);
};
  return (
    <div>

            <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />

            <div className="search-container">
                <input type="text" className="search-text"  placeholder="Search for videos, images & audio"  value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <button className='search-icon-container' onClick={handleSearch}>
                <img src={searchIcon} alt="Search" />
                </button>
            </div>


            <button className="create-tag-button" onClick={navigateToMediaUpload}>Create Tag</button>



            <button className="explore-button" onClick={navigateToExplore}>
                Explore
            </button>

             <button className="go-pro-button" onClick={nagivateToProButton}>
                    <div className="icon-container">
                        <div className="gradient"> <img src={proicon} alt="proicon"  /> </div>
                    </div>
                    <div className="text">Go Pro</div>
            </button>

            <button className="wallet-button" onClick={nagivateToWallet}>
            <div className="icon-container">
                <div className="icon"> <img src={walleticon} alt="wallet"  /> </div>
            </div>
            </button>



                <div className="profile-button" onClick={handleClick}>
                <div className="dropdown-menu" style={{ display: dropdownOpen ? 'block' : 'none' }}>
                    
                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={profileicon} alt="profile"  /> </div>
                          <div className='textp'>Profile </div> 
                    </div>

                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={createtagicon} alt="createtagicon"  /> </div>
                          <div className='textp'>Create Tag </div> 
                    </div>

                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={taggedmediaicon} alt="taggedmediaicon"  /> </div>
                          <div className='textp'>Tagged Media </div> 
                    </div>


                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={upgradeicon} alt="upgradeicon"  /> </div>
                          <div className='textp'>Upgrade </div> 
                    </div>

                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={learnicon} alt="learnicon"  /> </div>
                          <div className='textp'> Learn </div> 
                    </div>

                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={helpicon} alt="helpicon"  /> </div>
                          <div className='textp'>Help Center </div> 
                    </div>

                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={settingicon} alt="settingicon"  /> </div>
                          <div className='textp'>Settings </div> 
                    </div>

                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={languageicon} alt="languageicon"  /> </div>
                          <div className='textp'>language</div> 
                    </div>
                    
                    <div className="dropdown-button  icon-container icon ">
                         <div className=''> <img src={logouticon} alt="logouticon"  /> </div>
                          <div className='textp'>Logout</div> 
                    </div>

                </div>
                </div>


                <div className="notifications-button">
            <div className="icon-container">
                <img src={Notificationicon} alt="notification"  /> 
               
                </div>
            </div>


            </div>

            <div className="line"></div>

    <div className="container">
            <div className="welcome-text">Welcome to V.E.R.A. Your very own Verification Engine for Real Assets. Upload a media file to start tagging.</div>
            <button className="icon-container">
                <div className="icon">
                    <img src={closeicon} alt="closeIcon"  />
                </div>
            </button>
</div>

                <div className="containerimage">
                <img src={emptybox} alt="emptybox"  /> 

                <div className="textimage">
                    Hey, it looks like you don’t have any tagged media files.
                    <br/>
                    Hit the <span className="highlight">Create tag</span> button to tag new media.
                </div>
                </div>

            </div>

  
  );
};

export default CreateTagPage;
