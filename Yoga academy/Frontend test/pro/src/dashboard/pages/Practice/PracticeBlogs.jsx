import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./PracticeBlogs.module.css";
import blog3 from './images/blog3.jpg';
import blog4 from './images/blog4.jpg';
import blog5 from './images/blog5.jpg';
import blog6 from './images/blog6.jpg';
import blog7 from './images/blog7.jpg';
import blog8 from './images/blog8.jpg';
import blog9 from './images/blog9.jpg';

const blogs = [
  {
    title: "Why Start a Home Yoga Practice",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog3,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  },
  {
    title: "The power of Pause in Yoga",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog4,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  },
  {
    title: "Yoga and Mindfulness for Kids",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog5,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  },
  {
    title: "Yoga for All Ages and Abilities",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog6,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  },
  {
    title: "The Impact of Silent Meditation",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog7,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  },
  {
    title: "Yoga Philosophy and Meditation",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog8,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  },
  {
    title: "Diet of Yogis Sattvic Yogic Diet",
    date: "19/7/2024",
    description: "Among other things, by including yoga to reduce stress and anxiety into your routine, you can..",
    image: blog9,
    link: "https://theyogainstitute.org/why-start-a-home-yoga-practice"
  }
];

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3, // Adjust number of items visible for larger screens
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2, // Adjust number of items visible for desktop screens
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1, // Single item per slide for tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Single item per slide for mobile screens
    },
  };

  const Blog = ({ title, date, description, image, link }) => (
    <div className={styles.card}>
      <img className={styles.blogImage} src={image} alt="blog" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
      <p>
        <button 
          className={styles.readMoreButton} 
          onClick={() => window.open(link, "_blank")}
        >
          Read More
        </button>
      </p>
    </div>
  );
  
  const PracticeBlogs = () => {
    const blogComponents = blogs.map((item, index) => (
      <Blog
        key={index}
        title={item.title}
        date={item.date}
        description={item.description}
        image={item.image}
        link={item.link}
      />
    ));
  
    return (
      <div>
        <h1 className={styles.header}>Blog Carousel</h1>
        <Carousel showDots={true} responsive={responsive}>
          {blogComponents}
        </Carousel>
      </div>
    );
  };
  
  export default PracticeBlogs;