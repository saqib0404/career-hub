import React from 'react'
import logo from "../../../assets/logo/CareerHub.png"

function Header() {
    return (
        <div className="navbar md:px-20 bg-[#F0F0FF]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                        <li><a>Statistics</a></li>
                        <li><a>Applied Jobs</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl md:w-4/12">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Statistics</a></li>
                    <li><a>Applied Jobs</a></li>
                    <li><a>Blogs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn cmn-btn">Apply Now</a>
            </div>
        </div>
    )
}

export default Header