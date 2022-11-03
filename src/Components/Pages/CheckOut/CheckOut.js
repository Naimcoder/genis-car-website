import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import checkImg from '../../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../../Context/UserContex';

const CheckOut = () => {
    const {_id,title,price}= useLoaderData()
    const {user}= useContext(AuthContext)

    const handleCheckOrder=(event)=>{
        event.preventDefault()
        const from= event.target;
        const name= `${from.firstName.value} ${from.lastName.value}`;
        const email= user?.email || 'unRegistered'
        const phone = from.phone.value;
        const message = from.message.value

      const order = {
        service:_id,
        servicesName:title,
        price,
        customer:name,
        email,
        phone,
        message
     }

      fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
             toast.success('Your Information successfully!')
             from.reset()
            }
        })
        .catch(err=>console.log(err))
    }

  
    return (
        <div>
            <div className='pb-20'>
              <img className='w-full relative' src={checkImg} alt="" />
               <h2 className='text-white font-bold text-5xl absolute pl-10 top-1/3'>Check Out /{title}</h2>
            </div>
            <form onSubmit={handleCheckOrder} className='bg-slate-300 my-8 rounded'>
                <h2 className='text-4xl'>You Are About To Order {title}</h2>
                <h3 className='text-3xl'>Price:${price}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
               <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Your Message" required></textarea>
                <button type='submit' className='btn'>Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;