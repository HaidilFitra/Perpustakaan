import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ilustrasi from "../../../assets/images/ilustrasi.png";
import logo from "../../../assets/images/literalink-logo-.svg";
import { login } from "../../../services/Auth.service";
import toast from "react-hot-toast";

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(''); // Clear any previous error messages

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      setIsLoading(false);
      if (status) {
        localStorage.setItem("token", res);
        sessionStorage.setItem("loginSuccess", "true");
        window.location.href = '/';
      } else {
        toast.error("Invalid email or password. Please try again.");
      }
    });
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center">
          <img src={ilustrasi} alt="illustration" className="w-3/4" />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-sky-600 text-center">Login To App</h2>
          <div className="flex justify-center mb-4">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </div>

          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                className="w-full p-2 mt-1 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="johnD@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                className="w-full p-2 mt-1 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-sky-500 hover:text-sky-600">Forget Password?</a>
            </div>

            <button
              type="submit"
              className={`w-full px-4 py-2 text-white bg-sky-400 rounded-full hover:bg-sky-500 transition-colors duration-300 focus:outline-none ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to={"/register"}>
                <button className="text-sky-500 hover:text-sky-600">Register</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;