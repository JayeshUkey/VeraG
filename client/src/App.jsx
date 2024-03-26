import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import WelcomePage from './WelcomePage';
import CreateTagPage from './CreateTagPage';
// import MediaUploadPage from './MediaUploadPage';
import ReviewPage from './ReviewPage';
import PaymentPage from './PaymentPage';
import MediaPage from './MediaPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/create-tag" element={<CreateTagPage />} />
        {/* <Route path="/media-upload" element={<MediaUploadPage />} /> */}
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/media" element={<MediaPage />} />
       
      
      </Routes>
    </Router>
  );
}

export default App;
