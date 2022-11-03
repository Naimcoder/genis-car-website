import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContex';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location= useLocation() 

    if (loading) {
        return <h3>loading.....</h3>
    }
    
    if (user) {
       return children 
    }
    return <Navigate state={{from:location}}replace></Navigate>
};

export default PrivateRouter;