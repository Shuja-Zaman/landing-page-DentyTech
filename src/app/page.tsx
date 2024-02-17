import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import { Youtube, Facebook, Instagram } from 'lucide-react'


const Home = () => {
  return (
    <>
    <div className="main bg-white h-full w-full bg-blue-300">
      <Navbar></Navbar>

      <div className="title md:text-8xl text-3xl uppercase flex items-center justify-center mt-48 relative">
        <h1 className='tracking-widest'>Our Advantages</h1>
        <Image className='img1 img object-cover rounded-3xl' alt='img missing' src={'/img4.jpg'} height={350} width={270}/>
        <Image className='img2 img object-cover rounded-3xl' alt='img missing' src={'/img.jpg'} height={350} width={270}/>
        <Image className='img3 img object-cover rounded-3xl' alt='img missing' src={'/img2.jpg'} height={350} width={270}/>
        <Image className='img4 img object-cover rounded-3xl' alt='img missing' src={'/img3.jpg'} height={350} width={270}/>        
      </div>

    </div>

  <div className='flex justify-between items-center px-4 h-full'>
  <div className=''>
    <div><span className='text-3xl text-orange-400'>.</span></div>
    <div className=''><h3>Your Smile, Our Passion</h3></div>
  </div>
  <div>
    <div className='flex gap-3 items-center justify-center'><Youtube /> <Facebook/> <Instagram/></div>
    <div><h3>Best Startup of 2023</h3></div>
  </div>
  </div>
  </>
  )
}

export default Home