import React from 'react';
import PracticeBlogs from './PracticeBlogs';
import PracticeVideos from './PracticeVideos';
import PracticePics from './PracticePics';
import WriteReview from '../WriteReview';
import styles from './Practice.module.css';
import PracticeTestimonials from './PracticeTestimonials';
import AiAssistant from '../../../AI/AiAssistant';

const Practice = ({user}) => {

  return (
    <>
    <div className={styles.all}>
      <PracticeBlogs/>
      <br></br>
      <PracticeVideos/>
      <br></br>
      <PracticePics/>
    </div>
    <PracticeTestimonials/>
    <WriteReview username={user}/>
    <AiAssistant/>
    </>
  );
};

export default Practice;

