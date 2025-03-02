import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Programs.module.css';
import ProgramsHeader from './ProgramsHeader';
import ProgramsTestimonials from './ProgramsTestimonials';
import ProgramsFooter from './ProgramsFooter';
import section_pic_programs from './images/section_pic_programs.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WriteReview from '../WriteReview';
import AiAssistant from '../../../AI/AiAssistant';

const Programs = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/programs'); // Adjust the URL as needed
        setEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
        setError('Failed to load programs. Please try again later.');
      }
    };

    fetchPrograms();
  }, []);

  useEffect(() => {
    const filtered = events.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPrice ? event.price <= filterPrice : true)
    );
    setFilteredEvents(filtered);
  }, [searchTerm, filterPrice, events]);

  useEffect(() => {
    if (searchTerm) {
      const matchedSuggestions = events
        .filter(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(event => event.title);
      setSuggestions(matchedSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, events]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterPriceChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleNotifyClick = () => {
    toast.success("You will be notified soon!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={styles.full}>
      <ToastContainer />
      <ProgramsHeader />
      <div className={styles.section}>
        <div className={styles.textContent}>
          <h1>More than just learning</h1>
          <p>
            Whether you want to revitalize your mind and body or take a break from your hectic lifestyle, 
            we have you covered. To bring in a new you or begin a new career path, explore our countless 
            life-changing programs, which have transformed millions of people over the last 10 decades.
          </p>
          <p>
            Every program has been designed to deliver organic and holistic results by incorporating 103 years 
            of legacy, research, and knowledge. Choose now from our innumerable courses to get started on your 
            journey of transformation!
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src={section_pic_programs} alt="Group of people performing yoga" />
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by program name"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          {showSuggestions && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
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
          <option value="100">Up to ₹100</option>
          <option value="200">Up to ₹200</option>
          <option value="300">Up to ₹300</option>
          <option value="400">Up to ₹400</option>
          <option value="500">Up to ₹500</option>
        </select>
      </div>

      <div className={styles.container}>
        {error ? (
          <p>{error}</p>
        ) : (
          filteredEvents.map((event, index) => (
            <div className={styles.itemContainer} key={index}>
              <div className={styles.imgContainer}>
                <img src={event.imgSrc} alt="Event" />
              </div>
              <div className={styles.bodyContainer}>
                <div className={styles.overlay}></div>
                <div className={styles.eventInfo}>
                  <p className={styles.title}>{event.title}</p>
                  <div className={styles.separator}></div>
                  <p className={styles.info}>{event.location}</p>
                  <p className={styles.price}>{event.price}</p>
                  <div className={styles.additionalInfo}>
                    <p className={styles.info}>
                      <i className="far fa-calendar-alt"></i>
                      {event.date}
                    </p>
                    <p className={`${styles.info} ${styles.description}`}>
                      {event.description}
                    </p>
                  </div>
                </div>
                <button className={styles.action} onClick={handleNotifyClick}>Notify Me</button>
              </div>
            </div>
          ))
        )}
      </div>
      <ProgramsTestimonials />
      <WriteReview username={user} />
      <ProgramsFooter />
      <AiAssistant/>
    </div>
  );
};

export default Programs;
