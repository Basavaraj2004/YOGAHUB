import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Events.module.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    imgSrc: '',
    date: '',
    description: '',
    location: '',
    price: '',
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/programs');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/programs/${id}`);
      fetchEvents(); // Refresh the event list after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleAddNewEvent = async () => {
    try {
      await axios.post('http://localhost:8080/api/programs', newEvent);
      setNewEvent({
        title: '',
        imgSrc: '',
        date: '',
        description: '',
        location: '',
        price: '',
      });
      setIsAdding(false);
      fetchEvents(); // Refresh the event list after adding a new event
    } catch (error) {
      console.error('Error adding new event:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.eventsContainer}>
      <h1 className={styles.eventsHeader}>Our Programs</h1>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventImageWrapper}>
              <img
                src={event.imgSrc}
                alt={event.title}
                className={styles.eventImage}
              />
            </div>
            <div className={styles.eventDetails}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.info}>{event.location}</p>
              <p className={styles.price}>{event.price}</p>
              <p className={styles.eventDateTime}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.addButtonWrapper}>
        <button
          className={styles.addButton}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? 'Cancel' : 'Add New Program'}
        </button>
      </div>
      {isAdding && (
        <div className={styles.addEventForm}>
          <h2>Add New Program</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddNewEvent();
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newEvent.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="imgSrc"
              placeholder="Image URL"
              value={newEvent.imgSrc}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={newEvent.date}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newEvent.description}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newEvent.location}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newEvent.price}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Add Program
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Events;
