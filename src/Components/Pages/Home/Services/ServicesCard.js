import React from 'react';
import { FaArrowRight,} from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({services}) => {
    const{_id,img,title,price}=services
    return (
<div>
    <div className="overflow-hidden transition-shadow duration-300  bg-gray-50 rounded p-5">
          <a href="/" aria-label="Article">
            <img 
              src={img}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{title}</p>
            </a>
            <div className='flex justify-between items-center'>
            <div>
                <p className='text-xl font-semibold text-orange-500'>Price: ${price}</p>
            </div>
            <div>
                {/* <button className='btn btn-warning text-lg'>Buy Now</button> */}
                <Link to={`/checkout/${_id}`} className='text-orange-500 text-2xl font-light h-10 w-10 flex justify-center items-center bg-slate-300 rounded'>  <FaArrowRight></FaArrowRight></Link>
               
            </div>
          </div>
          </div>
          
        </div>
</div>
    );
};

export default ServicesCard;