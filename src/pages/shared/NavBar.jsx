import { Link } from 'react-router-dom';
import man from '../../assets/man.jpg'
import logo from '../../assets/logo.png'


const Header = () => {
    const user = 1;
    const tabs = <>
        <li><a>Home</a></li>
        {user ?
            <>
                <li><a>My Toys</a></li>
                <li><a>Add Toy</a></li>
            </> : <></>
        }
        <li><a>Blog</a></li>
    </>
    return (
        <div className="navbar bg-blue-100 px-12 h-[80px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden bg-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-blue-100">
                        {tabs}
                    </ul>
                </div>
                <img src={logo} className='w-24' alt="" />
                {/* <a className="btn btn-ghost normal-case text-xl">RoboPlay</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {tabs}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <button className="btn btn-error">Logout</button> :
                    <Link><button className="btn btn-primary">Login</button></Link>}
            </div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-6">
                <div className="w-10 rounded-full">
                    <img src={man} />
                </div>
            </label>
        </div>
    );
};

export default Header;
