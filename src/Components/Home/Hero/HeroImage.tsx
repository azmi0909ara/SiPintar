"use client"
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const HeroImage = () => {
  return <Tilt>
    <div className='hidden lg:block z-0'>
      <Image src="/images/hero.png" width={1800} height={1350} alt='Hero'/>
    </div>
  </Tilt>
}

export default HeroImage