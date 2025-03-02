import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [showMarkedReviews, setShowMarkedReviews] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const handleShowReviews = () => {
    setShowReviews(true);
  };

  const handleHideReviews = () => {
    setShowReviews(false);
  };

  const handleShowMarkedReviews = () => {
    setShowMarkedReviews(true);
  };

  const handleHideMarkedReviews = () => {
    setShowMarkedReviews(false);
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/reviews/${id}`);
      setReviews(reviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleMarkReview = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, marked: !review.marked } : review
      )
    );
  };

  return (
    <div className="review-page">
      <div className="admin-info">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel of the Yoga Academy. Here, you can manage the feedback from our students. Click the buttons below to view all reviews or marked reviews.</p>
      </div>
      <div className={`buttons-container ${showReviews || showMarkedReviews ? 'hidden' : ''}`}>
        <button className="see-reviews-btn" onClick={handleShowReviews}>
          See Reviews
        </button>
        <button className="see-reviews-btn" onClick={handleShowMarkedReviews}>
          Marked Reviews
        </button>
      </div>
      {showReviews && (
        <div className="reviews-popup">
          <div className="reviews-header">
            <h2>Student Reviews</h2>
            <button className="close-btn" onClick={handleHideReviews}>
              Close
            </button>
          </div>
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <h3>{review.username}</h3>
                <p>{review.review}</p>
                <button className="icon-btn delete-btn" onClick={() => handleDeleteReview(review.id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
                <button className="icon-btn mark-btn" onClick={() => handleMarkReview(review.id)}>
                  <i className={`fas fa-star ${review.marked ? 'marked' : ''}`}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {showMarkedReviews && (
        <div className="reviews-popup">
          <div className="reviews-header">
            <h2>Marked Reviews</h2>
            <button className="close-btn" onClick={handleHideMarkedReviews}>
              Close
            </button>
          </div>
          <div className="reviews-container">
            {reviews
              .filter((review) => review.marked)
              .map((review) => (
                <div key={review.id} className="review-card">
                  <h3>{review.username}</h3>
                  <p>{review.review}</p>
                  <button className="icon-btn delete-btn" onClick={() => handleDeleteReview(review.id)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className="icon-btn mark-btn" onClick={() => handleMarkReview(review.id)}>
                    <i className={`fas fa-star ${review.marked ? 'marked' : ''}`}></i>
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
