import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContex';
import OrderRow from './OrderRow';


const Order = () => {
    const {user}= useContext(AuthContext)
    const [orders,setOrders]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    } ,[user?.email])
    console.log(orders)
    
   const handleDeleted=id=>{
   
     const procced= window.confirm('Are you sure ! Your want to cancel Order')
     if (procced) {
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if (data.deletedCount) {
            toast.success('delete successfully!')
            const remenaing = orders.filter(ob=>ob._id !==id)
            setOrders(remenaing)
          }
        })
     }
   }
   const handleUpdated=id=>{
     console.log('hello')
    fetch(`http://localhost:5000/orders/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({status:'approved'})

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.modifiedCount>0) {
        //  toast.success('your Information updated')
      const remenaing= orders.filter(odr=>odr._id !== id)
      const approving= orders.find(odr=>odr._id === id)
      approving.status= 'Approved'
      const newOder= [...remenaing,approving]
      setOrders(newOder)
      }
     
    })
   }

         
    return (
        <div>
            <h2>You Have order {orders.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
    orders.map(od=><OrderRow key={od._id}order={od} handleDeleted={handleDeleted} handleUpdated={handleUpdated}></OrderRow>)
    }
    </tbody>    
  </table>
</div>
        </div>
    );
};

export default Order;