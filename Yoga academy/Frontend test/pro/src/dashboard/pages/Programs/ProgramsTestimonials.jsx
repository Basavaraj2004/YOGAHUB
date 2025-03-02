import React from 'react';
import styles from './ProgramsTestimonials.module.css';
import customer_img_1 from './images/customer_img_1.jpg';
import customer_img_2 from './images/customer_img_2.jpg';
import customer_img_3 from './images/customer_img_3.jpg';
const ProgramsTestimonials = () => {
  const testimonials = [
    {
      name: "Haashini A",
      feedback: "Amazing yoga sessions! I feel so relaxed and rejuvenated.",
      imgSrc: customer_img_1
    },
    {
      name: "Deepak Leo",
      feedback: "The instructors are very knowledgeable and helpful.",
      imgSrc: customer_img_2
    },
    {
      name: "Basavaraj K",
      feedback: "Great community and excellent facilities.",
      imgSrc: customer_img_3
    }
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Beneficiaries Say</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonial} key={index}>
            <img src={testimonial.imgSrc} alt={testimonial.name} />
            <p className={styles.feedback}>{testimonial.feedback}</p>
            <p className={styles.name}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsTestimonials;
