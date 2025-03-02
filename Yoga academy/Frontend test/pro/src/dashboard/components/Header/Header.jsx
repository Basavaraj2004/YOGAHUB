import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>Experience Yoga Embrace Bliss</h1>
                <p className='text-lead'>The Academy for inner growth, where you evolve your authentic, true self through yoga & ayurveda</p>
                {/* <a href = "/" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>get started</span>
                </a> */}
            </div>
        </div>
    </header>
  )
}

export default Header