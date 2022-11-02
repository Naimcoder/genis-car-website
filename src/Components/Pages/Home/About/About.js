import React from 'react';
import part from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";
const About = () => {
    return (
   <div>
    <div className="hero my-20">
     <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
       <img src={person} alt="" className='w-4/5 h-full' />
      <img className=' absolute w-3/5 right-5 top-1/2 border-8 border-white' src={part} alt="" />
    </div>
      <div className='w-1/2'>
        <h3 className=" text-orange-700 text-2xl font-bold">About Us</h3>
        <h1 className='my-5 text-5xl font-bold'>We are qualified <br /> & of experience in this field</h1>
        <p className="py-6 text-base font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p className="py-6 text-base font-normal">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
       <button className="btn btn-warning">Get Started</button>
     </div>
   </div>
</div>
</div>
    );
};

export default About;