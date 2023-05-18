import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const user = useContext(AuthContext)
    console.log(user)

    if (user.user) {
        return children
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;