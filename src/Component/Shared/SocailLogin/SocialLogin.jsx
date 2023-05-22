import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleLogin = ()=> {
        googleSignIn()
        .then(result => {
            const user = result.user 
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">Or</div>

        <div className="text-center">
        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
            G
        </button>
        </div>

        </div>
    );
};

export default SocialLogin;