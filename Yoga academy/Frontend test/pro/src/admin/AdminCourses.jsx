import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web';
import styles from './AdminCourses.module.css';

function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: '',
    image: '',
    description: '',
    amount: '',
    updates: '' // Added updates field
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showAddAnimation, setShowAddAnimation] = useState(false);
  const [showDeleteAnimation, setShowDeleteAnimation] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/courses');
      console.log(response.data); // Log the response to see its structure
      if (Array.isArray(response.data)) {
        setCourses(response.data);
      } else {
        console.error('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/courses', newCourse);
      fetchCourses(); // Refresh courses list
      setIsFormVisible(false); // Hide form after submission
      setNewCourse({
        title: '',
        image: '',
        description: '',
        amount: '',
        updates: '' // Reset updates field
      });
      setShowAddAnimation(true);
      setTimeout(() => setShowAddAnimation(false), 3000); // Hide animation after 3 seconds
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/courses/${id}`);
      if (response.status === 200) {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id)); // Remove course from state
        setShowDeleteAnimation(true);
        setTimeout(() => setShowDeleteAnimation(false), 3000); // Hide animation after 3 seconds
      } else {
        console.error('Failed to delete course:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const addAnimationProps = useSpring({
    opacity: showAddAnimation ? 1 : 0,
    transform: showAddAnimation ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 500 }
  });

  const deleteAnimationProps = useSpring({
    opacity: showDeleteAnimation ? 1 : 0,
    transform: showDeleteAnimation ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 500 }
  });

  return (
    <div className={styles.adminCoursesPage}>
      {(showAddAnimation || showDeleteAnimation) && (
        <div className={styles.blurBackground}>
          {/* Blur background */}
        </div>
      )}
      <header className={styles.header}>
        <h1>Courses</h1>
      </header>

      <div className={styles.courses}>
        <div className={styles.gridContainer}>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course) => (
              <div className={styles.card} key={course.id}>
                <img src={course.image} alt={course.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p className={styles.amount}>Fee: {course.amount}</p>
                  <p className={styles.updates}>{course.updates}</p> {/* Display updates */}
                  <button 
                    className={styles.deleteButton} 
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>

        <button className={styles.addButton} onClick={() => setIsFormVisible(true)}>Add a new Course</button>

        {isFormVisible && (
          <div className={styles.formOverlay}>
            <form className={styles.courseForm} onSubmit={handleFormSubmit}>
              <h2>Add New Course</h2>
              <label>
                Title:
                <input type="text" name="title" value={newCourse.title} onChange={handleInputChange} required />
              </label>
              <label>
                Image URL:
                <input type="text" name="image" value={newCourse.image} onChange={handleInputChange} required />
              </label>
              <label>
                Description:
                <textarea name="description" value={newCourse.description} onChange={handleInputChange} required />
              </label>
              <label>
                Fee:
                <input type="number" name="amount" value={newCourse.amount} onChange={handleInputChange} required />
              </label>
              <label>
                Updates:
                <textarea name="updates" value={newCourse.updates} onChange={handleInputChange} /> {/* Added updates input */}
              </label>
              <button type="submit">Add Course</button>
            </form>
          </div>
        )}

        {showAddAnimation && (
          <animated.div style={addAnimationProps} className={`${styles.notification} ${styles.addNotification}`}>
            New Course Added!
          </animated.div>
        )}

        {showDeleteAnimation && (
          <animated.div style={deleteAnimationProps} className={`${styles.notification} ${styles.deleteNotification}`}>
            Course Deleted!
          </animated.div>
        )}
      </div>
    </div>
  );
}

export default AdminCourses;