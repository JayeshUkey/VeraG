// MediaUploadPage.js
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
import backicon from './images/ion_chevron-up.svg';
import cancelicon from './images/Cancel icon.svg';



const MediaUploadPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');
  const [mediaType, setMediaType] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
    // Implement your search logic here
  };

  const navigateToMediaUpload = () => {
    navigate('/media-upload');
  };

  const navigateToExplore = () => {
    navigate('/explore');
  };

  const navigateToProButton = () => {
    navigate('/pro-button');
  };

  const navigateToWallet = () => {
    navigate('/wallet');
  };

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleContinue = () => {
    // Redirect to review page
    navigate('/review', { state: { fileName, description, mediaType } });
  };

  const goBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  // ... rest of your component code ...

  return (
    <div >
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

             <button className="go-pro-button" onClick={navigateToProButton}>
                    <div className="icon-container">
                        <div className="gradient"> <img src={proicon} alt="proicon"  /> </div>
                    </div>
                    <div className="text">Go Pro</div>
            </button>

            <button className="wallet-button" onClick={navigateToWallet}>
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


                        <div className="button-back">
                  <div className="back-button" onClick={goBack} >
                    
                    <div className=''> <img src={backicon} alt="backicon"  /> </div>

                  </div>
                </div>


                {/* 
                    <button className="back-button" >
                    <div className=''> <img src={backicon} alt="backicon"  /> </div>
                </button> */}


                <button className="cancel-button" onClick={goBack}>

                    {/* <div className="cancel-button-icon" /> */}
                  
                  <img src={cancelicon} alt="cancel" />
                </button>

                        
                    </div>

 <h2 className='mediatext'>Tag New Media </h2>
            <span className="required-fields">
              Required fields
            </span>
            <br />


          <div className="upload-media">
                   Upload Media
          </div>
          <div className="file-info">Image, Video or Audio
          file types supported: JPG, PNG, GIF, SVG, MP4, WEBM, WAV, AAC, MP3. Max size 10MB
          </div>
          <br />

          <div className="file-upload">
                <label htmlFor="file-upload" className="custom-file-upload">Add files</label>
            <input id="file-upload" type="file" style={{display: 'none'}} onChange={(e) => setFileName(e.target.value)} />
          </div>
          <br />


          <div className="file-name">File name *</div>
          <input className="custom-input" type="text" placeholder="File Name" onChange={(e) => setFileName(e.target.value)} />

          <br />

        <div className="description-container">
            <div className="description-title">Description</div>
            <div className="description-text">Add a short description of the media you are upload</div>
          </div>
          <textarea className="description-input" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />  

          
          <br />
              
              <div className="media-type-container">
              <div className="media-type-title">Media Type</div>
              <div className="media-type-text">What type of media file are you uploading? Supported media types: image, video and audio.</div>
            </div>
          <br />

            <div className="radio-button-container">
            <div className="radio-button-label">Image</div>
            <div className="radio-button">
            <input type="radio" name="mediaType" value="image" checked={mediaType === 'image'} onChange={() => setMediaType('image')} />
           </div>
          </div>

          <br />
          <div className="radio-button-container">
            <div className="radio-button-label">Audio</div>
            <div className="radio-button">
            <input type="radio" name="mediaType" value="audio" checked={mediaType === 'audio'} onChange={() => setMediaType('audio')} />
           </div>
          </div>
          <br />

          <div className="radio-button-container">
            <div className="radio-button-label">Video</div>
            <div className="radio-button">
            <input type="radio" name="mediaType" value="video" checked={mediaType === 'video'} onChange={() => setMediaType('video')} />
           </div>
          </div>

          <br />
          <button className="continue-button"onClick={handleContinue} >
          <span className="continue-button-text">Continue</span>
          </button>



      {/* Your navbar JSX code... */}
    </div>
  );
};

export default MediaUploadPage;