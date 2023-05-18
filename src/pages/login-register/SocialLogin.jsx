import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const {sighiInGoogle} = useContext(AuthContext)

    const handleGoogleLogin = () => {
        sighiInGoogle()
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider text-gray-500">OR login with</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-success">Google</button>
        </div>
    );
};

export default SocialLogin;