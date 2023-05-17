import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg'

const Login = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${login})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 px-12 text-5xl font-bold">Login Now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-blue-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-gray-500'>New to RoboPlay?
                                <Link to='/register'><span className='font-bold text-blue-500'> Register</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;