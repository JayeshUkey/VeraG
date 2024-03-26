// PaymentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Switch } from 'react-router-dom';


const PaymentPage = () => {
  const history = useNavigate();

  const handlePayFees = () => {
    // Placeholder function for handling payment
    console.log('Payment processed successfully');
    // Redirect to a confirmation page or another relevant page
    history.push('/confirmation');
  };

  const handleBack = () => {
    // Redirect back to review page
    history.goBack();
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Review your information and click "Pay Fees" to proceed with payment.</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handlePayFees}>Pay Fees</button>
    </div>
  );
};

export default PaymentPage;
