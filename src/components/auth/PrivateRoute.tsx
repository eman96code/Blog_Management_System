import { ReactNode } from "react";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  children:ReactNode,
  isAuthenticated: boolean,
  redirectPath: string,
}
const PrivateRoute=({children,isAuthenticated,redirectPath}:PrivateRouteProps)=> {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath}/>
  }
  return children
}

export default PrivateRoute;