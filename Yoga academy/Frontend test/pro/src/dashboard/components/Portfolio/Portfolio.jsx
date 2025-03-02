import React from 'react';
import "./Portfolio.css";
import sections from '../../constants/data';
import {FaPaperPlane} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Portfolio = () => {
  return (
    <section className='portfolio section-p bg-dark' id = "portfolio">
        <div className='container'>
            <div className='portfolio-content'>
                <div className='section-t text-center'>
                    <h3>Our Yoga Practices</h3>
                    <p className='text'>Explore a variety of yoga styles designed to suit all levels of practitioners to enhance your physical and mental well-being!</p>
                </div>

                <div className='item-list text-center text-white grid'>
                    {
                        sections.portfolio.map(portfolio => {
                            return (
                                <div className='item flex flex-center flex-column translate-effect' key = {portfolio.id} style = {{
                                    background: `url(${portfolio.image})`
                                }}>
                                    <div className='item-title fs-25 fw-6'>{portfolio.title}</div>
                                    <div className='text text-white'>{portfolio.text}</div>
                                </div>
                            )
                        })
                    }
                <br></br>
                <Link to = "/practice" className='btn header-btn btn-blue'>
                        <FaPaperPlane /> <span>Practice More</span>
                    </Link> 
                </div>
                  
                
            </div>
        </div>
    </section>
  )
}

export default Portfolio
