import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import SocialLogin from './SocialLogin';

const Register = () => {
    const {signUpEmail} = useContext(AuthContext)

    const [error, setError] = useState('')

    const handleSignup = (e) => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, photo, password, confirm)


        if(password.length<6){
            setError('At least 6 characters')
            return
        }
        else if(password !== confirm){
            setError("Password didn't match")
            return
        }

        signUpEmail(email, password)
        .then(res => {
            const loggedUser = res.user;
            updateProfile(loggedUser, {
                displayName: name, photoURL: photo
            })
            .then(() => {
                console.log('Profile updated!')
              }).catch((error) => {
                console.log(error)
              });
        })
        .catch(error => {
            console.log(error)
            if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                setError(`${email} already registered`)
            }
            else{
                setError(error.message)
            }
        })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${login})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 px-28 text-5xl font-bold">Register Now!</h1>
                    <form onSubmit={handleSignup} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-blue-100">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" required placeholder="name" name='name' className="input input-bordered w-56 text-gray-500" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" required placeholder="email" name='email' className="input input-bordered w-56 text-gray-500" />
                                </div>

                            </div>

                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" required placeholder="password" name='password' className="input input-bordered w-56 text-gray-500" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" required placeholder="re-type password" name='confirm' className="input input-bordered w-56 text-gray-500" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" required placeholder="photo url" name='photo' className="input input-bordered text-gray-500" />
                            </div>
                            <div className='text-error'>{error && error}</div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='text-gray-500'>Already have an account?
                                <Link to='/login'><span className='font-bold text-blue-500'> Login</span></Link>
                            </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;