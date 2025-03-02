import React from 'react';
import "./About.css";
import images from '../../constants/images';
import {FaPaperPlane} from "react-icons/fa";

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui eum at unde ipsa quibusdam sunt incidunt voluptates dicta ab provident doloremque perferendis ad voluptatem mollitia amet magnam, hic aliquam cupiditate blanditiis quas eos neque saepe? Quas expedita cupiditate et sint nesciunt, ipsum eos reiciendis cumque. At provident ab veritatis.</p>
                    <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nobis laudantium nesciunt maxime tenetur illo.</p>
                    <br></br>
                    <a href = "/" className='btn header-btn btn-blue'>
                        <FaPaperPlane /> <span>get started</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About