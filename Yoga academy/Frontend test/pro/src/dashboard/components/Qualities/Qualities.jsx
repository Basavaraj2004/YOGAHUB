import React from 'react';
import sections from '../../constants/data';
import {FaPaperPlane} from "react-icons/fa";
import "./Qualities.css";
import { Link } from 'react-router-dom';

const Qualities = () => {
  return (
    <section className='qualities section-p bg-md-black' id = "qualities">
        <div className='container'>
            <div className='qualities-content grid'>
                <div className='content-left'>
                    <div className='section-t text-center'>
                        <h3>Our LiveStream Sessions</h3>
                        <p className='text'>Join our live yoga sessions from the comfort of your home. Experience real-time guidance from our experts.</p>
                    </div>

                    <div className='item-list grid text-white'>
                        {
                            sections.qualities.map(quality => {
                                return (
                                    <div className='item flex' key = {quality.id}>
                                        <div className='item-icon flex flex-center'>
                                            {quality.icon}
                                        </div>
                                        <div className='item-text'>
                                            <h3 className='item-title fs-25'>{quality.title}</h3>
                                            <p className='text'>{quality.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br></br>
                    <Link to = "/livestream" className='btn header-btn btn-blue'>
                        <FaPaperPlane /> <span>Enjoy All Live Streams</span>
                    </Link>
                </div>

                <div className='content-right'>
                    <iframe width="560" height="415" src="https://www.youtube.com/embed/jmPcXCzNUmw?si=SVFKZFkTQ5-6eniB" title="YouTube video player" frameborder="50"></iframe>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Qualities
