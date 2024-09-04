import React from 'react';
import img1 from "../../assets/images/about.jpg";
import img2 from "../../assets/images/img-1.jpg"

import img3 from "../../assets/images/img-2.jpg"


const About = () => {
  return (
    <>
    <div className=' max-w-2xl mx-auto lg:max-w-6xl'>
      <div className='my-10 flex justify-center relative mb-10'>
        <img src={img1} />
      <div className='absolute md:top-40 top-20'>
        <h2 className='text-5xl from-neutral-400 text-white'>About Us</h2>
        <p className='text-white text-center text-xl'>Who we are</p>
      </div>
      </div>
<div className='sm:flex align-middle justify-center gap-6 flex-row'>
  <div>
    <h2 className='text-3xl'>Our Vision</h2>
    <p className='text-justify text-gray-600 '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
  </div>
  <div>
    <h2 className='text-3xl'>Our Vision</h2>
    <p className='text-justify text-gray-600'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
  </div>
</div>
    </div>
    <div className='bg-gray-100 mt-11 py-10'>
    <div className='max-w-6xl mx-auto'>
<div className='flex align-middle justify-between'>
  <div>
    <h2>Who We Are</h2>
    <p>Pellentesque odio nisi, euismod pharetra a ultricies
    in diam. Sed arcu. Cras consequat</p>
    <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue.</p>
  </div>
  <div className='relative' >
    <img src={img2}/>
    <img src={img3}/>
  </div>
</div>
</div>
    </div>
    </>
  )
}

export default About