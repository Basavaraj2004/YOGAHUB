import React from 'react';
import styles from './Livestream.module.css';
import AiAssistant from '../../../AI/AiAssistant';

const Livestream = () => {
  const streams = [
    {
      id: 1,
      title: 'Yoga for Beginners',
      url: 'https://www.youtube.com/embed/yqeirBfn2j4?si=5g8wzK3JSRv4i_W_',
      description: 'Join our Yoga for Beginners session and start your journey.'
    },
    {
      id: 2,
      title: 'Advanced Yoga Techniques',
      url: 'https://www.youtube.com/embed/higAEnYNl-k?si=f9OqyGxuGkNOPWk6 ',
      description: 'Enhance your practice with advanced techniques.'
    },
    {
      id: 3,
      title: 'Meditation and Relaxation',
      url: 'https://www.youtube.com/embed/8Tb2bqt398k?si=fUAf0A7riZJizigh',
      description: 'Calm your mind with our guided meditation session.'
    },
    {
      id: 4,
      title: 'Power Yoga',
      url: 'https://www.youtube.com/embed/_DJWhx_NAQc?si=wJw0QLOagtO_EgsC',
      description: 'Boost your energy with our Power Yoga session.'
    },
    {
      id: 5,
      title: 'Yoga for Flexibility',
      url: 'https://www.youtube.com/embed/t6gAkLO7gUY?si=lxKakUQOg1GDHb3A',
      description: 'Increase your flexibility with these yoga poses.'
    },
    {
      id: 6,
      title: 'Yoga for Stress Relief',
      url: 'https://www.youtube.com/embed/jtYZDrYL634?si=vDyFYAXDvUI598S6',
      description: 'Relieve stress with calming yoga practices.'
    }
  ];

  return (
    <div className={styles.livestreamsWrapper}>
      <h2 className={styles.livestreamsTitle}>Yoga Academy Live Streams</h2>
      <div className={styles.livestreamsContent}>
        {streams.map((stream, index) => (
          <div
            key={stream.id}
            className={`${styles.livestream} ${index % 2 === 0 ? styles.livestreamLeft : styles.livestreamRight}`}
          >
            <h3 className={styles.livestreamTopic}>{stream.title}</h3>
            <div className={styles.livestreamVideo}>
              <iframe
                src={stream.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={stream.title}
              ></iframe>
            </div>
            <p className={styles.livestreamDescription}>{stream.description}</p>
          </div>
        ))}
      </div>
      <AiAssistant/>
    </div>
  );
};

export default Livestream;
