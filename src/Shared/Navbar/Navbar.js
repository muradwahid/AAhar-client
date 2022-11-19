import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { CiUser } from "react-icons/ci";
import logo from '../../assets/foody.png'
import { AuthContext } from '../../Contexts/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
    return (
      <nav>
        <div className="w-4/5 mx-auto flex justify-between items-center py-8">
          <div className="flex items-center gap-4 md:text-[30px] text-[20px]">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <Bars3Icon className="h-8" />
            ) : (
              <XMarkIcon className="h-8" />
            )}
          </div>
          <div
            className={`flex items-center gap-8 absolute left-0 text-center text-lg lg:static ${
              !open ? "top-[80px] flex-col gap-2 py-6 w-full" : "top-[-200px]"
            } text-gray-700 text-xl font-semibold`}
          >
            <NavLink className="hover:text-red-400" to="/">
              Home
            </NavLink>
            {user?.uid ? (
              <>
                <NavLink className="hover:text-red-400" to="/myreview">
                  My Review
                </NavLink>{" "}
                <NavLink className="hover:text-red-400" to="/addservice">
                  Add Service
                </NavLink>
              </>
            ) : null}

            <NavLink className="hover:text-red-400" to="/blog">
              Blog
            </NavLink>
            {user?.uid ? (
              <NavLink className="flex gap-4 items-center">
                {user?.displayName}
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  {user?.photoURL ? (
                    <img
                      onClick={() => setToggle(!toggle)}
                      className="rounded-full h-10 w-10"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <CiUser
                      onClick={() => setToggle(!toggle)}
                      className="rounded-full h-8 w-8 bg-red-500 text-white"
                    />
                  )}
                </div>
              </NavLink>
            ) : (
              <>
                <NavLink className="hover:text-red-400" to="/login">
                  Login
                </NavLink>
                <NavLink className="hover:text-red-400" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
        {toggle ? (
          <div className="absolute bg-red-500 rounded-xl  py-7 px-4 right-20 top-24 text-white">
            <Link
              onClick={logOut}
              className="font-semibold bg-slate-100 py-2 px-3 text-red-500 rounded-xl "
            >
              <button onClick={() => setToggle(!toggle)}>logout</button>
            </Link>
          </div>
        ) : null}
      </nav>
    );
};

export default Navbar;