import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg'

const Register = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${login})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 px-28 text-5xl font-bold">Register Now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-blue-100">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered w-56" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered w-56" />
                                </div>

                            </div>

                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered w-56" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="re-type password" name='password' className="input input-bordered w-56" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='text-gray-500'>Already have an account?
                                <Link to='/login'><span className='font-bold text-blue-500'> Login</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;