import React, { useState } from 'react';
import styles from './PracticePics.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'


library.add(faStar, faStarHalfAlt, faTimes, faStarRegular);

const products = [
  { id: 'p-1', img: img1, name: 'Hatha yoga', description: 'This is the physical and mental branch that aims to prime the body and mind.', stars: 4.5, reviews: 250 },
  { id: 'p-2', img: img2, name: 'Raja yoga', description: 'This branch involves meditation and strict adherence to a series of disciplinary steps known as the eight limbs of yoga.',  stars: 4.5, reviews: 250 },
  { id: 'p-3', img: img3, name: 'Karma yoga', description: 'This is a path of service that aims to create a future free from negativity and selfishness.',  stars: 4.5, reviews: 250 },
  { id: 'p-4', img: img4, name: 'Bakthi yoga', description: 'This aims to establish the path of devotion, a positive way to channel emotions and cultivate acceptance and tolerance.', stars: 4.5, reviews: 250 },
  { id: 'p-5', img: img5, name: 'Jnana yoga', description: 'This branch of yoga is about wisdom, the path of the scholar, and developing the intellect through study.', stars: 4.5, reviews: 250 },
  { id: 'p-6', img: img6, name: 'Tantra yoga', description: 'This is the pathway of ritual, ceremony, or consummation of a relationship.', stars: 4.5, reviews: 250 },
  { id: 'p-7', img: img7, name: 'Bikram yoga', description: 'People practice Bikram yoga, also known as hot yoga, in artificially heated rooms at a temperature of nearly 105oF and 40% humidity',  stars: 4.5, reviews: 250 },
  { id: 'p-8', img: img8, name: 'Ashtanga yoga', description: 'This type of yoga practice uses ancient yoga teachings. However, it became popular during the 1970s.',  stars: 4.5, reviews: 250 },
  { id: 'p-9', img: img9, name: 'Vini yoga', description: 'Viniyoga focuses on form over function, breath and adaptation, repetition and holding, and the art and science of sequencing.', stars: 4.5, reviews: 250 },
];

const PracticePics = () => {
  const [preview, setPreview] = useState(null);

  const openPreview = (product) => {
    setPreview(product);
  };

  const closePreview = () => {
    setPreview(null);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Practice Exercises</h3>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.product} onClick={() => openPreview(product)}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <div className={styles.price}>{product.price}</div>
          </div>
        ))}
      </div>
      {preview && (
        <div className={styles.productsPreview}>
          <div className={styles.preview} data-target={preview.id}>
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={closePreview} />
            <img src={preview.img} alt={preview.name} />
            <h3>{preview.description}</h3>
            <div className={styles.stars}>
              {[...Array(Math.floor(preview.stars))].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
              {preview.stars % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
              <span>({preview.reviews})</span>
            </div>
            <div className={styles.price}>{preview.price}</div>
            <div className={styles.buttons}>
              <a href="#" className={styles.buy}>Practice Later</a>
              <a href="#" className={styles.cart}>Save it</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticePics;
