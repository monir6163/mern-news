import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../config/config";
const Login = () => {
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(`${baseUrl}/api/login`, state);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[370px] text-slate-300 shadow-md">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          <div className="w-full flex justify-center items-center">
            <img src="/news-logo.png" alt="logo" />
          </div>
          <div className="mt-2 w-full border-b-2 border-slate-200"></div>
          <form onSubmit={loginHandler}>
            <div className="flex flex-col gap-y-2 mt-5">
              <label htmlFor="email" className="font-medium text-slate-600">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Write Email"
                value={state.email}
                required
                onChange={inputHandler}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <label htmlFor="password" className="font-medium text-slate-600">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Write Password"
                required
                onChange={inputHandler}
                value={state.password}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-slate-500 text-white py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
