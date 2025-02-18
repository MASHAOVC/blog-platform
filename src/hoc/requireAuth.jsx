import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.user.user.token);

  if (!auth) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};
