import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/config";
import StoreContext from "../../context/storeContext";
export const Writers = () => {
  const { state } = useContext(StoreContext);
  const [writers, setWriters] = useState([]);
  const get_all_writers = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/news/get/writers`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      setWriters(data?.writers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_all_writers();
  }, []);
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">
          <span className="text-blue-500">All</span> Writers
        </h2>
        <Link
          to="/dashboard/addwriter"
          className="text-white px-3 py-[6px] bg-purple-500 hover:bg-purple-600 rounded-md transition duration-200"
        >
          Add Writers
        </Link>
      </div>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700 bg-gray-50 uppercase">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">Repoter</th>
              <th className="px-7 py-3">Image</th>
              <th className="px-7 py-3">Category</th>
              <th className="px-7 py-3">Email</th>
              <th className="px-7 py-3">Role</th>
              <th className="px-7 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {writers?.map((item, index) => (
              <tr className="bg-white border-b" key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item["name"]}</td>
                <td className="px-6 py-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </td>
                <td className="px-6 py-4">{item["category"]}</td>
                <td className="px-6 py-4">{item["email"]}</td>
                <td className="px-6 py-4">{item["role"]}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-3 justify-start items-center text-white">
                    <Link
                      to={`/dashboard/writer/${item["_id"]}`}
                      className="bg-green-500 p-[6px] rounded hover:shadow-lg hover:bg-green-500/50"
                    >
                      <FaEye />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
