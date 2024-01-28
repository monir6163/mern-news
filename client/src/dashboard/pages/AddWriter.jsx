import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config/config";
import StoreContext from "../../context/storeContext";
export const AddWriter = () => {
  const navigate = useNavigate();
  const { state } = useContext(StoreContext);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    category: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(`${baseUrl}/api/news/writer/add`, data, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      setLoader(false);
      setData({ name: "", category: "", email: "", password: "" });
      toast.success(res.data.message);
      navigate("/dashboard/writers");
    } catch (error) {
      toast.error(error.response.data.message);
      setLoader(false);
    }
  };
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">
          <span className="text-blue-500">Add</span> Writers
        </h2>
        {/* <Link
          to="/dashboard/news/create"
          className="text-white px-3 py-[6px] bg-purple-500 hover:bg-purple-600 rounded-md transition duration-200"
        >
          Writers
        </Link> */}
      </div>
      <div className="p-4">
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="flex flex-col gap-y-2 mb-5">
              <label htmlFor="name" className="font-medium text-slate-600">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={inputHandler}
                value={data.name}
                id="name"
                name="name"
                placeholder="Write Name"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label htmlFor="category" className="font-medium text-slate-600">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                onChange={inputHandler}
                value={data.category}
                name="category"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              >
                <option value="">Select Category</option>
                <option value="Education">Education</option>
                <option value="Insurance">Insurance</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
                <option value="Health">Health</option>
                <option value="Politics">Politics</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="flex flex-col gap-y-2 mb-5">
              <label htmlFor="email" className="font-medium text-slate-600">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                onChange={inputHandler}
                value={data.email}
                required
                id="email"
                name="email"
                placeholder="Write Email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label htmlFor="password" className="font-medium text-slate-600">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                onChange={inputHandler}
                value={data.password}
                id="password"
                name="password"
                placeholder="Write Password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loader}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
              >
                {loader ? "Loading..." : "Add Writer"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
