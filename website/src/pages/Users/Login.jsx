import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";
import Cookies from "js-cookie";

const Login = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { setUser: login } = useAuth();

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const resp = await axios.post("/api/users/authenticate", user);

      login(resp.data);
      Cookies.set("user", JSON.stringify(resp.data));

      toast("User logged in successfully");
      navigate(`/profile`);
    } catch (error) {
      toast.error(error?.response?.data?.error?.message || "An error occurred");
    }
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="font-roboto text-2xl text-center text-black mb-8">
          Welcome Back
        </h1>
        <form onSubmit={submitForm}>
          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="email" className="text-[#5a7184]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter Email"
              className="placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
            />
          </div>

          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="password" className="text-[#5a7184]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter Password"
              className="placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white font-bold  py-4 px-8 my-6 w-full rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
