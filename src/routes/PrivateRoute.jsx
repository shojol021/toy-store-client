import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <progress className="progress w-56" />
      </div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivateRoute;