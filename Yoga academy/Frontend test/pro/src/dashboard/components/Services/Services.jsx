import React from 'react';
import "./Services.css";
import sections from "../../constants/data";
import SingleService from './SingleService';
import {FaPaperPlane} from "react-icons/fa";
import {BsArrowRightCircle} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className='services section-p bg-dark' id = "services">
        <div className='container'>
            <div className='services-content'>
                <div className='section-t text-center'>
                    <h3>Our Courses</h3>
                    <p className='text'>Explore our Yoga Courses and Enjoy the flexibility of practicing yoga wherever you are!</p>
                </div>
                <svg width = "1em" height = "1em">
                    <linearGradient id = "blue-gradient" x1 = "100%" y1 = "100%" x2 = "0%" y2 = "0%">
                        <stop stopColor = "#55b3d5" offset="0%" />
                        <stop stopColor = "#5764de" offset = "100%" />
                    </linearGradient>
                </svg>

                <div className='item-list grid text-white text-center'>
                    {
                        sections.services.map(service => {
                            return (
                                <SingleService service = {service} key = {service.id} />
                            )
                        })
                    }
                    {/* <a href = "/" className='btn header-btn btn-blue'>
                        <FaPaperPlane /> <span>get started</span>
                    </a>  */}
                </div>
                    <br></br>
                    <Link to = "/courses" className='btn header-btn btn-blue'>
                        <span>Learn All Courses</span>
                        &nbsp;&nbsp;
                        <BsArrowRightCircle size = {30} />
                    </Link> 
            </div>
        </div>
    </section>
  )
}

export default Services