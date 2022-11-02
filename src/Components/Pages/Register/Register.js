import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Context/UserContex';
import Swal from 'sweetalert2'

const Register = () => {
const {createUser,signInGithub,signInGoogle}=useContext(AuthContext)
const handleSubmit=(event)=>{
 event.preventDefault()
 const from =event.target;
 const email= from.email.value;
 const name= from.name.value;
 const password=from.password.value;
 console.log(email,name,password)
 createUser(email,password)
 .then((result)=>{
  const user= result.user
  console.log(user)
  Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
from.reset()
 })
 .catch((error)=>{
  console.log(error)
 })
}




const handleGoogleSign=()=>{
  signInGoogle()
  .then((result)=>{
   const  user= result.user
   console.error(user)
  })
  .catch(error=>{
    console.error(error)
  })
}

const handleGithubSign=()=>{
    signInGithub()
  .then(result=>{
    const user= result.user
    console.log(user)
  })
  .catch(error=>{
    console.error(error)
  })
}




    return (
<div>
    <div className="hero w-full my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center w-3/4 lg:text-left">
       <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 py-8">
      <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl py-3 font-bold text-center">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered text-xl" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered text-xl" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered text-xl" required/>
        </div>
        <div className="form-control mt-6">
          <button type='submit'  className="btn hover:bg-blue-500 bg-blue-600 outline-0 border-0 text-white">Sign Up</button>
        </div>
      </form>
       <p className="pb-4 text-center font-medium text-base">Or Sign In with</p>
      <div className='flex justify-center font-medium text-3xl'>
      <p onClick={handleGoogleSign} className='mr-5 h-12 w-12  bg-slate-300 rounded-full text-blue-500 flex justify-center items-center'> <FaGoogle></FaGoogle> </p>
      <span className='mr-5 h-12 w-12  bg-slate-300 rounded-full text-blue-500 flex justify-center items-center'> <FaFacebookF></FaFacebookF> </span>
      <p onClick={handleGithubSign} className='h-12 w-12 bg-slate-300 rounded-full text-black flex justify-center items-center'><FaGithub></FaGithub></p>
        </div>
        <p className="py-4 text-center label-text-alt link link-hover font-medium text-base">Already have an account Please? <Link to='/login' className='text-orange-600'>Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;