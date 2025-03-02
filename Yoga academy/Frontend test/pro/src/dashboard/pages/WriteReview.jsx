import React, { useContext, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import './WriteReview.css';
import { AppContext } from '../../context/AppContext';

const WriteReview = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [review, setReview] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const { user } = useContext(AppContext);


  const handleInputChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('review:',user)
    try {
      const response = await axios.post('http://localhost:8080/api/reviews', {
        review,
        username:user.firstName,
      });
      if (response.status === 201) {
        setReview('');
        setIsFormVisible(false);
        setIsSuccessVisible(true);
        setTimeout(() => setIsSuccessVisible(false), 3000);
      }
    } catch (error) {
      alert('Please log in to give a review');
    }
  };

  return (
    <div className="write-review-container">
      <button className="write-review-btn" onClick={() => setIsFormVisible(true)}>
        Write a Review
      </button>
      {isFormVisible && (
        <div className="review-form-overlay">
          <form className="review-form" onSubmit={handleSubmit}>
            <h2>Write Your Review Here</h2>
            <textarea
              value={review}
              onChange={handleInputChange}
              rows="5"
              placeholder="Enter your review here..."
              required
            ></textarea>
            <button type="submit">Submit</button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setIsFormVisible(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <AnimatePresence>
        {isSuccessVisible && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            Review Submitted Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WriteReview;
