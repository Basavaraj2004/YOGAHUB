

import React, { useEffect, useState } from 'react'
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';

const Landing = () => {
 
  let heroData=[
    {text1:"Dive into",text2:"what you love!"},
    {text1:"Breath deeply",text2:"live peacefully"},
    {text1:"Unite your",text2:"Soul And Body"},
]
 
const [heroCount,setHeroCount]=useState(0);
const [playStatus,setPlayStatus]=useState(false);

useEffect(() => {
  let timeout;

  if (!playStatus) {
    timeout = setTimeout(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
  }

  return () => clearTimeout(timeout);
});


  return (
    <div>
       <Background playStatus={playStatus} heroCount={heroCount}/>
       <Navbar/>
       <Hero 
          setPlayStatus={setPlayStatus}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
          playStatus={playStatus}
       />
    </div>
  )
}

export default Landing
