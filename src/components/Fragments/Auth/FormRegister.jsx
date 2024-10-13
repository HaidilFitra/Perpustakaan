import React, { useRef, useState } from "react";
import ilustrasi from "../../../assets/images/ilustrasi.png";
import logo from "../../../assets/images/literalink-logo-.svg";
import { Link } from "react-router-dom";
import { Register } from "../../../services/Auth.service";
import toast from "react-hot-toast";


const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    NamaLengkap: "",
    alamat: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value } = e.target
    setFormData({
      ...formData,[name] : value
    })
  }
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData
    }
    setIsLoading(true);
    // console.log('form data : ' , dataToSubmit);
    Register(dataToSubmit, (success, data) => {
      if (success) {
          setTimeout(() => {
              sessionStorage.setItem("registerSuccess", "true")
              window.location.href = '/login';
          }, 1000);
      } else {
          toast.error("Registration failed!");
          // console.error("Registration failed", data);
      }
  });
  }
   
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center">
          <img src={ilustrasi} alt="illustration" className="w-3/4" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-sky-500 text-center">
            Register To App
          </h2>
          <div className="flex justify-center mb-4">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-sky-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="John D"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="johnD@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="NamaLengkap"
                value={formData.NamaLengkap}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700">
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="123 Main St"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 text-white bg-sky-500 rounded-full hover:bg-sky-600 transition-colors duration-300 focus:outline-none"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login">
                <button className="text-sky-500 hover:text-sky-600">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormRegister;
