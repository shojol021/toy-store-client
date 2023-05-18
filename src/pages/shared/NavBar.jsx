import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
        .then(() => console.log('Logged Out'))
        .catch(error => console.log(error))
        navigate('/login')
    }
    const tabs = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Toys</Link></li>
        {user ?
            <>
                <li><Link to='/'>My Toys</Link></li>
                <li><Link to='/'>Add A Toy</Link></li>
            </> : <></>
        }
        <li><Link to='/'>Blog</Link></li>
    </>
    return (
        <div className="navbar bg-cyan-200 px-12 h-[80px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden bg-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-blue-100">
                        {tabs}
                    </ul>
                </div>
                <Link to='/'><img src={logo} className='w-24' alt="" /></Link>
                {/* <a className="btn btn-ghost normal-case text-xl">RoboPlay</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {tabs}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <button onClick={handleLogOut} className="btn btn-error">Logout</button> :
                    <div className='space-x-4'><Link to='/login'><button className="btn btn-primary w-24">Login</button></Link>
                    <Link to='/register'><button className="btn btn-primary w-24">Register</button></Link></div>}
            </div>
            {user ?
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-6" title={user?.displayName}>
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label> : <></>
            }

        </div>
    );
};

export default Header;
