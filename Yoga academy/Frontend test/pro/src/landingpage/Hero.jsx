import React from 'react';
import styles from './Hero.module.css';
import arrow_btn from '../assets/arrow_btn.png';
import play_icon from '../assets/play_icon.png';
import pause_icon from '../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className={styles.heroExplore}>
        <p>Explore the features</p>
        <img src={arrow_btn} alt="Explore" />
      </div>
      <div className={styles.heroDotPlay}>
        <ul className={styles.heroDots}>
          <li
            onClick={() => setHeroCount(0)}
            className={`${styles.heroDot} ${heroCount === 0 ? styles.heroDotOrange : ''}`}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={`${styles.heroDot} ${heroCount === 1 ? styles.heroDotOrange : ''}`}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={`${styles.heroDot} ${heroCount === 2 ? styles.heroDotOrange : ''}`}
          ></li>
        </ul>
        <div className={styles.heroPlay}>
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause"
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
