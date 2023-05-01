import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './RRouterProvider';
import { FcSearch } from "react-icons/fc";



const Header = () => {
    let {logOutt, user} = useContext(AuthContext);

    const logOut = ()=>{
   return logOutt()
    }

    return (
        <div>
            <div className="navbar bg-base-100 bg-stone-200 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/login'>Login</Link></li>
                            <li><a>Portfolio</a></li>
                            <li><Link to='/register'>Register</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='mx-auto'>
                    <input className='py-3 rounded-xl' type="search" placeholder='search your destination' name="" id="" />
                    <button className='btn btn-secondary'><FcSearch className='text-2xl'/></button>
                </div>

                <div className="navbar-center font-semibold text-2xl gap-3">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link >Destination</Link>
                   {user && <button className='btn' onClick={logOut}>LogOut</button>}
                    {!user && <Link to='/login'><button className='btn btn-secondary'>Login</button></Link>}
                </div>

            </div>
        </div>
    );
};

export default Header;