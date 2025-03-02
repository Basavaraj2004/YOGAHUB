import React from 'react';
import {Link} from 'react-router-dom';
import "./Features.css";
import sections from '../../constants/data';
import SingleFeatures from './SingleFeatures';
import {FaPaperPlane} from "react-icons/fa";

const Features = () => {
  return (
    <section className='features section-p bg-black' id = "features">
        <div className='container'>
            <div className='features-content'>
            <div className='section-t text-center'>
                    <h3>Our Programs</h3>
                    <p className='text'>Explore our comprehensive list of yoga activities and events conducted periodically!</p>
                </div>
                <div className='item-list text-white'>
                    {
                        sections.features.map(feature => {
                            return (
                                <SingleFeatures key = {feature.id} {...feature} />
                            )
                        })
                    }
                </div>
                    <Link to = "/programs" className='btn header-btn btn-blue'>
                        <FaPaperPlane /> <span>Explore All Programs</span>
                    </Link>
            </div>
        </div>
    </section>
  )
}

export default Features
