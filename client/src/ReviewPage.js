// ReviewPage.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ReviewPage = () => {
  const history = useNavigate();
  const location = useLocation();
  const { fileName, description, mediaType } = location.state;

  const handleContinue = () => {
    // Redirect to payment page
    history.push('/payment');
  };

  const handleBack = () => {
    // Redirect back to media upload page
    history.goBack();
  };

  return (
    <div>
      <h2>Review</h2>
      <p><strong>File Name:</strong> {fileName}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Media Type:</strong> {mediaType}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleContinue}>Continue to Payment</button>
    </div>
  );
};

export default ReviewPage;
