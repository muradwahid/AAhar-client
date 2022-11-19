import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=useContext(AuthContext)
    if (loading) {
        return <p>loading.....</p>
    }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;