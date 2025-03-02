// src/admin/AdminDashboard.jsx
import React, { useState, useEffect, useContext } from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { courseCount, programCount, userCount,setCourseCount,setProgramCount,setUserCount } = useContext(AppContext)

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response1 = await axios.get('http://localhost:8080/api/courses');
        setCourseCount(response1.data.length);
        const response2 = await axios.get('http://localhost:8080/api/programs');
        setProgramCount(response2.data.length);
        const response3 = await axios.get('http://localhost:8080/api/enrollments/all');
        setUserCount(response3.data.length);
        console.log(response3.data.length)
        
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };
    fetchCounts();
  }, [setCourseCount, setProgramCount, setUserCount]);
  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <ul>
          <li>
            <Link to="/events">Programs</Link>
          </li>
          <li>
            <Link to="/admincourses">Courses</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/enrollments">Enrollments</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="admin-body">
        <h1>Welcome to Yoga Academy Admin Dashboard</h1>
        <div className="admin-stats">
          <div className="stat-box">
            <h2>{userCount}</h2>
            <p>Total Students</p>
          </div>
          <div className="stat-box">
            <h2>{courseCount}</h2>
            <p>Active Classes</p>
          </div>
          <div className="stat-box">
            <h2>{programCount}</h2>
            <p>Our Programs</p>
          </div>
        </div>
        <div className="admin-news">
          <h2>Recent Activities</h2>
          <ul>
            <li>New student enrollment in Hatha Yoga class</li>
            <li>Scheduled Vinyasa Yoga workshop</li>
            <li>Updated instructor availability</li>
          </ul>
        </div>
        <div className="admin-news">
          <h2>Announcements</h2>
          <p>
            Don't miss our upcoming Full Moon Yoga session on August 1st. Join us for a special meditation retreat on August 15th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
