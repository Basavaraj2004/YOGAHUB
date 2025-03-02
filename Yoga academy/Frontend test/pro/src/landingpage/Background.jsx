import React from 'react';
import styles from './Background.module.css';
import video3 from '../assets/video3.mp4';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image4 from '../assets/image4.jpeg';

const Background = ({ playStatus, heroCount }) => {
    return (
        <>
            <video
                className={`${styles.background} ${playStatus ? styles.visible : ''}`}
                autoPlay
                loop
                muted
            >
                <source src={video3} type="video/mp4" />
            </video>
            <img
                src={image1}
                className={`${styles.background} ${!playStatus && heroCount === 0 ? styles.visible : ''}`}
                alt=""
            />
            <img
                src={image2}
                className={`${styles.background} ${!playStatus && heroCount === 1 ? styles.visible : ''}`}
                alt=""
            />
            <img
                src={image4}
                className={`${styles.background} ${!playStatus && heroCount === 2 ? styles.visible : ''}`}
                alt=""
            />
        </>
    );
};

export default Background;
