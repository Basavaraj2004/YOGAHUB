import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './Progress.module.css';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';

const Progress = () => {
  const { user } = useContext(AppContext);
  const location = useLocation();
  const course = location.state?.course || {};
  const [selectedDay, setSelectedDay] = useState(1);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchTasksAndProgress = async () => {
      try {
        if (!user || !course.id) {
          console.error('User or course ID missing');
          return;
        }

        const response = await axios.get(`http://localhost:8080/api/tasks/course/${course.id}`);
        const tasksByDay = groupTasksByDay(response.data);
        setDays(tasksByDay);

        const storedCompletedTasks =
          JSON.parse(localStorage.getItem(`completedTasks_${user.id}_${course.id}`)) || [];
        setCompletedTasks(storedCompletedTasks);

        const totalTasks = response.data.length || 1; // prevent divide by 0
        const storedProgress = (storedCompletedTasks.length / totalTasks) * 100;
        setProgress(storedProgress);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        alert('Error fetching data.');
      }
    };

    fetchTasksAndProgress();
  }, [course, user]);

  const groupTasksByDay = (tasks) => {
    const daysMap = tasks.reduce((acc, task) => {
      if (!acc[task.day]) acc[task.day] = { day: task.day, tasks: [] };
      acc[task.day].tasks.push(task);
      return acc;
    }, {});
    return Object.values(daysMap).sort((a, b) => a.day - b.day);
  };

  const handleTaskCompletion = (taskId) => {
    if (!completedTasks.includes(taskId)) {
      const updatedCompletedTasks = [...completedTasks, taskId];
      setCompletedTasks(updatedCompletedTasks);

      const totalTasks = days.reduce((total, day) => total + day.tasks.length, 0) || 1;
      const newProgress = (updatedCompletedTasks.length / totalTasks) * 100;
      setProgress(newProgress);

      localStorage.setItem(`completedTasks_${user.id}_${course.id}`, JSON.stringify(updatedCompletedTasks));
      localStorage.setItem(`progress_${user.id}_${course.id}`, JSON.stringify(newProgress));
    }
  };

  const handleDaySelection = (day) => {
    const previousDayTasks = days.slice(0, day - 1).flatMap(d => d.tasks.map(task => task.id));
    const allTasksCompleted = previousDayTasks.every(taskId => completedTasks.includes(taskId));

    if (!allTasksCompleted) {
      setShowPopup(true);
    } else {
      setSelectedDay(day);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{course.title || 'Course Progress'}</h1>
      <p className={styles.batchNumber}>Batch Number: #001</p>

      <div className={styles.dayTabs}>
        {days.map(day => (
          <button
            key={day.day}
            className={`${styles.dayTab} ${selectedDay === day.day ? styles.active : ''}`}
            onClick={() => handleDaySelection(day.day)}
          >
            Day {day.day}
          </button>
        ))}
      </div>

      <div className={styles.curriculum}>
        {days.length === 0 && <p>No tasks available for this course yet.</p>}

        {days.find(day => day.day === selectedDay)?.tasks.map(task => (
          <div key={task.id} className={styles.task}>
            <h3>{task.title}</h3>
            {task.type === 'video' && (
              <div className={styles.videoWrapper}>
                <iframe src={task.content} title={task.title} allowFullScreen />
              </div>
            )}
            {task.type === 'practice' && <p className={styles.practice}>{task.content}</p>}
            {task.type === 'article' && (
              <a href={task.content} target="_blank" rel="noopener noreferrer" className={styles.article}>
                {task.content}
              </a>
            )}
            {task.type === 'quiz' && <p className={styles.quiz}>{task.content}</p>}

            <button
              className={styles.completeTaskBtn}
              onClick={() => handleTaskCompletion(task.id)}
              disabled={completedTasks.includes(task.id)}
            >
              {completedTasks.includes(task.id) ? 'Completed' : 'Complete Task'}
            </button>
          </div>
        ))}
      </div>

      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
      <p className={styles.progressText}>{Math.round(progress)}% Completed</p>

      {showPopup && (
        <div className={styles.popup}>
          <h2>Complete Previous Tasks</h2>
          <p>You must complete previous day’s tasks before continuing.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Progress;
