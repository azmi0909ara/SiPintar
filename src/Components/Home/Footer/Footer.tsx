import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center pb-8 border-b-[1.5px] border-white border-opacity-20 text-center">
        <Image src="/images/logo-SiPintar.png" alt="logo" width={100} height={100} />
        <p className="text-white text-opacity-50 mt-4">
          Teman Belajar Online Anak Indonesia
        </p>
      </div>
      <p className="text-center mt-4 text-base text-white">
        © {new Date().getFullYear()} E-Learning. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
