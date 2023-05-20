import { Link } from 'react-router-dom';
import robotLogin from '../../assets/robotLogin.jpg'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from './SocialLogin';
import useTitle from '../../hooks/pageTitle';

const Login = () => {
    useTitle("Login")
    const { login, resetPassword } = useContext(AuthContext)
    const emailRef = useRef(null)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

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

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(email == ''){
            setError('Please input email address first')
            return
        }
        resetPassword(email)
        .then(() => {
            setSuccess(`A password reset mail sent to ${email}`)
        })
        .catch((error) => {
            console.log(error)
            setError(error.message)
        } )
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${robotLogin})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content pe-96">
                <div className="max-w-xl">
                    <h1 className="mb-5 px-12 text-5xl font-bold">Login Now!</h1>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-blue-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required placeholder="email" name='email' className="input input-bordered text-gray-500" ref={emailRef} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required placeholder="password" name='password' className="input input-bordered text-gray-500" />
                                <label className="label">
                                    <a href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='text-error'>{error && error}</div>
                            <div className='text-success'>{success && success}</div>

                            <div className="form-control">
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