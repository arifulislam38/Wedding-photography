import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const ProtectedPage = ({children}) => {

    const {loading, user} = useContext(AuthProvider);
    
    const location = useLocation();

    if(loading){
        return  <div>Loading......</div>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default ProtectedPage;