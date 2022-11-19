import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
const Login = () => {
  const { logIn, popupSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const handleSignIn = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            logIn(email, password)
              .then((result) => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error("Invalid email or password");
              });
  }
  const handleGoogleLogIn = () => {
    popupSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
    })
    .catch(err=>console.log(err))
  }
    return (
      <div className="flex items-center min-h-screen p-4 bg-gray-100  lg:justify-center">
        <div className="w-2/5">
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form onSubmit={handleSignIn} className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-semibold text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <div>
                <p>
                  Don't have an account please{" "}
                  <Link to="/register" className="underline text-red-400">
                    Register
                  </Link>
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-red-600 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <Link
                    onClick={handleGoogleLogIn}
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  >
                    <span className="text-gray-800 group-hover:text-white">
                      <AiFillGoogleCircle className="text-[20px]" />
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                      Google
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;