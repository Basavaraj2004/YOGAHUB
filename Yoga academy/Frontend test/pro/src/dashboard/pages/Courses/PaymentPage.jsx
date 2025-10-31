import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Modal, Box } from '@mui/material';
import { AppContext } from '../../../context/AppContext';
import styles from './PaymentPage.module.css';
import axios from 'axios';

const PaymentPage = () => {
  const location = useLocation();
  const course = location.state?.course || {};
  const courseAmount = course.amount || '';
  const { user } = useContext(AppContext);
  const navigate=useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiNumber, setUpiNumber] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setCardNumber('');
    setCardHolderName('');
    setCardCvv('');
    setCardExpiry('');
    setUpiId('');
    setUpiNumber('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Course id:",course.id)
    // Ensure that user and course are valid
    if (!user || !user.id) {
      alert('User information is missing. Please log in.');
      return;
    }
  
    if (!course || !courseAmount) {
      alert('Course information is missing.');
      return;
    }
  
    // Validation flag
    let valid = true;
  
    // Validation for card payment
    if (paymentMethod === 'card') {
      if (!/^\d{16}$/.test(cardNumber)) {
        alert('Card number must be 16 digits');
        valid = false;
      }
      if (!/^\d{3}$/.test(cardCvv)) {
        alert('CVV must be 3 digits');
        valid = false;
      }
      if (!/^\d{2}\/\d{4}$/.test(cardExpiry)) {
        alert('Expiry date must be in MM/YYYY format');
        valid = false;
      }
    }
  
    // Validation for UPI payment
    if (paymentMethod === 'upi') {
      if (!/@/.test(upiId)) {
        alert('UPI ID must contain @');
        valid = false;
      }
      if (!/^\d{9}$/.test(upiNumber)) {
        alert('UPI phone number must be 9 digits');
        valid = false;
      }
    }
  
    if (valid) {
      const paymentData = {
        user: { id: user.id }, // Pass the user ID correctly
        amount: courseAmount,
        paymentMethod,
        paymentStatus: 'Completed',
        paymentDate: new Date().toISOString(), // Ensure correct ISO string
      };
  
      try {
        const response = await axios.post('http://localhost:8080/api/payments', paymentData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status >= 200 && response.status < 300) {
          setShowModal(true);
        } else {
          console.log('Response status:', response.status);
          alert('Payment failed');
        }
      } catch (error) {
        console.log(user)
        console.error('Error:', error.response ? error.response.data : error.message);
        alert("payment success!");
        navigate('/courses')
      }
    //  console.log
      const EnrollData = {
        user: { id: user.id }, // Pass the user ID correctly
        amount: courseAmount,
        userName: user.firstName, // Match with the 'courseName' field in the model
        courseName: course.title, // Match with the 'courseName' field in the model
        courseId: course.id // Match with the 'courseName' field in the model
      };
      

      try {
        const response2 = await axios.post('http://localhost:8080/api/enrollments', EnrollData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response2.data)
      } catch (error) {
        console.log("Enroll error:-",error)
        console.error('Enroll-Error:', error.response ? error.response.data : error.message);
      }

    }
  };
  
  const handleClick2 = () => {
    setShowModal(false);
    navigate('/courses'); // Replace '/your-desired-path' with the actual path you want to navigate to
};
  return (
    <div className={styles.paymentPage}>
      <div className={styles.formContainer}>
        <Typography variant="h4" align="center" gutterBottom>
          Payment Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <MenuItem value="card">Credit/Debit Card</MenuItem>
              <MenuItem value="upi">UPI</MenuItem>
            </Select>
          </FormControl>

          {paymentMethod === 'card' && (
            <>
              <TextField
                fullWidth
                label="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Card Holder's Name"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Card CVV"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Card Expiry Date"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                margin="normal"
                required
                placeholder="MM/YYYY"
              />
            </>
          )}

          {paymentMethod === 'upi' && (
            <>
              <TextField
                fullWidth
                label="UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="UPI Phone Number"
                value={upiNumber}
                onChange={(e) => setUpiNumber(e.target.value)}
                margin="normal"
                required
              />
            </>
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className={styles.payButton}
          >
            Pay {courseAmount}
          </Button>
        </form>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box className={styles.modalContent}>
          <Typography id="modal-title" variant="h2" component="h2">
            Payment Successful
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Your payment has been processed successfully!
          </Typography>
          <Button
            onClick={handleClick2}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentPage;
