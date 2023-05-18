import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { login } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleLogin = (e) => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Password is incorrect!')
                }
                else {
                    setError(error.message)
                }
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginImg})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 px-12 text-5xl font-bold">Login Now!</h1>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-blue-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required placeholder="email" name='email' className="input input-bordered text-gray-500" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required placeholder="password" name='password' className="input input-bordered text-gray-500" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='text-error'>{error && error}</div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-gray-500'>New to RoboPlay?
                                <Link to='/register'><span className='font-bold text-blue-500'> Register</span></Link>
                            </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;