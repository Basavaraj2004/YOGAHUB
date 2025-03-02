import React, { useState } from 'react';
import styles from './PracticeVideos.module.css';
import vid1 from './images/vid-1.mp4';
import vid2 from './images/vid-2.mp4';
import vid3 from './images/vid-3.mp4';
import vid4 from './images/vid-4.mp4';
// import vid5 from './images/vid-5.mp4';
import vid6 from './images/vid-6.mp4';
import vid7 from './images/vid-7.mp4';
import vid8 from './images/vid-8.mp4';
import vid9 from './images/vid-9.mp4';

const videosList = [
  { video: vid1, title: 'Why Start a Home Yoga Practice', description: 'Discover the numerous benefits of starting a home yoga practice with this engaging video. We explore how yoga can be easily incorporated into your daily routine, providing you with the flexibility to practice at your own pace and convenience. Learn about the physical and mental health advantages, such as increased strength, flexibility, and stress reduction.' },
  { video: vid2, title: 'The power of Pause in Yoga', description: 'Delve into the transformative power of pauses in yoga practice with this insightful video. Understand how intentional pauses between poses can enhance your physical and mental awareness, allowing you to connect deeply with your body and breath. This video explains the science behind the benefits of pauses, including improved muscle recovery, increased mindfulness, and better stress management.' },
  { video: vid3, title: 'Yoga and Mindfulness for Teenagers', description: 'This video is designed to introduce teenagers to the benefits of yoga and mindfulness. It explores how these practices can help manage stress, improve concentration, and enhance emotional resilience during the challenging adolescent years. Through relatable examples and easy-to-follow instructions, teenagers will learn various yoga poses and mindfulness techniques that can be practiced anywhere, anytime.' },
  { video: vid4, title: 'Yoga for All Ages and Abilities', description: 'Embrace the inclusive nature of yoga with this comprehensive video, which demonstrates that yoga truly is for everyone, regardless of age or physical ability. Featuring modifications and variations for various poses, this video ensures that all viewers can participate and benefit from yoga practice.' },
  // { video: vid5, title: 'The Impact of Silent Meditation', description: 'Explore the profound impact of silent meditation on your mind and body in this enlightening video. Silent meditation, or Vipassana, is a practice that encourages deep introspection and heightened awareness. Learn about the various techniques and principles behind this ancient practice, and how it can lead to greater mental clarity, emotional stability, and overall well-being' },
  { video: vid6, title: 'Yoga Philosophy and Meditation', description: 'Immerse yourself in the rich philosophy of yoga and its deep connection with meditation through this captivating video. Explore the foundational principles of yoga philosophy, such as the Yamas and Niyamas, and understand how these ethical guidelines can enhance your practice and everyday life' },
  { video: vid7, title: 'Diet of Yogis Sattvic Yogic Diet', description: 'Uncover the secrets of the Sattvic diet, a traditional yogic dietary practice that promotes health, clarity, and spiritual growth. This video explores the principles of the Sattvic diet, which emphasizes fresh, natural, and minimally processed foods that are believed to enhance physical and mental well-being. Learn about the types of foods included in the Sattvic diet, such as fruits, vegetables, whole grains, nuts, and seeds, and their specific benefits.' },
  { video: vid8, title: 'Yoga for All Ages For Flexibility', description: 'This video is a comprehensive guide to improving flexibility through yoga, suitable for individuals of all ages. Flexibility is a key component of physical health, and yoga offers a gentle yet effective way to enhance it. The video features a series of yoga poses and sequences designed to stretch and strengthen various muscle groups, improve joint mobility, and prevent injuries.' },
  { video: vid9, title: 'The Impact of Yoga Meditation', description: 'Discover the transformative effects of combining yoga and meditation in this insightful video. By integrating mindful meditation with yoga practice, you can achieve a deeper connection between your mind and body, leading to enhanced mental clarity, emotional balance, and physical health. The video explores various meditation techniques that complement yoga, such as breath awareness, visualization, and mantra meditation.' },
];

const PracticeVideos = () => {
  const [mainVideo, setMainVideo] = useState(videosList[0]);

  const handleVideoClick = (video) => {
    setMainVideo(video);
  };

  return (
  <>
     <h3 className={styles.title}>Our Videos</h3>
      <div className={styles.container}>
        <div className={styles.mainVideoContainer}>
          <video src={mainVideo.video} loop controls className={styles.mainVideo} />
          <h3 className={styles.mainVidTitle}>{mainVideo.title}</h3>
          <p className={styles.mainVidDescription}>{mainVideo.description}</p>
        </div>
        <div className={styles.videoListWrapper}>
          <h3 className={styles.listHeader}>Recommended Videos</h3>
          <div className={styles.videoListContainer}>
            {videosList.map((video, index) => (
              <div
              key={index}
              className={`${styles.list} ${mainVideo.title === video.title ? styles.active : ''}`}
              onClick={() => handleVideoClick(video)}
              >
                <video src={video.video} className={styles.listVideo} />
                <h3 className={styles.listTitle}>{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
  </>
  );
};

export default PracticeVideos;
