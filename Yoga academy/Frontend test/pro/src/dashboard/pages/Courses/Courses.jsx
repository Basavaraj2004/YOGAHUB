import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Courses.module.css';
import WriteReview from '../WriteReview';
import { AppContext } from '../../../context/AppContext';
import AiAssistant from '../../../AI/AiAssistant';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourseUpdates, setSelectedCourseUpdates] = useState(null);
  const [curCourseId, setCurCourseId] = useState(null); // Use course ID as state
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('There was an error fetching the courses!', error);
        setError('Failed to load courses. Please try again later.');
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (user && user.id) {
      fetchEnrolledCourses(user.id);
    } else {
      console.error('User or user ID is not defined');
    }
  }, [user]);

  const fetchEnrolledCourses = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/enrollments?userId=${userId}`);
      const enrolledCoursesData = response.data.map(enroll => enroll.courseId); // Adjust according to your API response
      setEnrolledCourses(enrolledCoursesData);
    } catch (error) {
      console.error('There was an error fetching the enrolled courses!', error);
      setError('Failed to load enrolled courses. Please try again later.');
    }
  };
  

  const handleEnrollNow = (course) => {
    navigate('/payment', { state: { course } });
  };

  const handleViewUpdates = async (course) => { 
    navigate('/progress', { state: { course } });

    // try {
    //   console.log("CurcourseId:",curCourseId)
    //   setCurCourseId(course.id); // Set curCourseId with the selected course ID immediately
    //   const response = await axios.get(`http://localhost:8080/api/courses/${course.id}/updates`);
    //   setSelectedCourseUpdates({ courseId: course.id, updates: response.data });
    // } catch (error) {
    //   console.error('There was an error fetching the course updates!', error);
    // }
  };
  
  const handleSearchChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
    
    if (input.length > 0) {
      const filteredSuggestions = courses
      .filter(course => course.title.toLowerCase().includes(input.toLowerCase()))
      .map(course => course.title);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
  };
  
  const handleFilterPriceChange = (event) => {
    setFilterPrice(event.target.value);
  };
  
  const filteredCourses = courses.filter(course => {
    const courseAmount = course.amount; // Assuming course.amount is in rupees
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPrice ? courseAmount <= parseInt(filterPrice, 10) : true)
    );
  });
  
  return (
    <div className={styles.coursesPage}>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Our Courses</h1>
          <p>Explore a variety of courses to meet your needs.At our university, we pride ourselves on offering a broad spectrum of courses designed to meet the diverse interests and career aspirations of our students. Whether you're pursuing an undergraduate degree, looking to advance your career with postgraduate studies, or seeking professional development opportunities, our comprehensive programs provide the foundation and expertise you need to succeed.</p>
        </div>
      </header>
       
      <div className={styles.fixedbackground}></div>


      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by course name"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
            />
          {showSuggestions && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <select
          value={filterPrice}
          onChange={handleFilterPriceChange}
          className={styles.priceFilter}
          >
          <option value="">Filter by price</option>
          <option value="1000">Up to ₹1000</option>
          <option value="2000">Up to ₹2000</option>
          <option value="3000">Up to ₹3000</option>
          <option value="4000">Up to ₹4000</option>
        </select>
      </div>

      <div className={styles.courses}>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <h2 className={styles.courseHeading}>Professional Courses</h2>
            <div className={styles.gridContainer}>
              {filteredCourses.map((course) => (
                <div className={styles.card} key={course.id}>
                  <img src={course.image} alt={course.title} className={styles.cardImage} />
                  <div className={styles.cardContent}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <p className={styles.amount}>Fee: ₹{course.amount}</p>
                    <button
                      className={styles.enrollButton}
                      onClick={() => handleEnrollNow(course)}
                      disabled={enrolledCourses.includes(course.id)}
                    >
                      {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
                    </button>
                    {enrolledCourses.includes(course.id) && (
                      <button
                        className={styles.updateButton}
                        onClick={() => handleViewUpdates(course)}
                      >
                        Go to course
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedCourseUpdates && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.updateModal}>
            <h2>{courses.find(course => course.id === curCourseId)?.title || 'Course Updates'}</h2>
            <p>{selectedCourseUpdates.updates}</p>
            <button onClick={() => navigate('/progress', { state: { courseId: curCourseId } })}>My Progress</button>
            <button onClick={() => setSelectedCourseUpdates(null)}>Close</button>
          </div>
        </>
      )}
      <AiAssistant/>
    </div>
  );
};

export default Courses;
