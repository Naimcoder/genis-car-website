import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-500">Service</p>
                <h1 className="my-5 font-semibold text-5xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
                {services.map(service=><ServicesCard key={service._id} services={service}></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;