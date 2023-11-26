import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ canActivate }) => {
  useEffect(() => {
    if (!canActivate) {
      alert('You are not authenticated');
    }
  }, [canActivate]);

  if (!canActivate) {
    return <Navigate to="/entry" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;