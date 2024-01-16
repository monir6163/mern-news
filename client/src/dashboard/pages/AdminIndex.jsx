import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminIndex = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-5 gap-x-4">
        <div className="flex justify-between items-center flex-col w-full p-8 gap-y-2 bg-white text-slate-700 rounded-md">
          <span className="text-xl font-bold">50</span>
          <span className="text-sm font-semibold">Total News</span>
        </div>
        <div className="flex justify-between items-center flex-col w-full p-8 gap-y-2 bg-white text-slate-700 rounded-md">
          <span className="text-xl font-bold">20</span>
          <span className="text-sm font-semibold">Pending News</span>
        </div>
        <div className="flex justify-between items-center flex-col w-full p-8 gap-y-2 bg-white text-slate-700 rounded-md">
          <span className="text-xl font-bold">30</span>
          <span className="text-sm font-semibold">Active News</span>
        </div>
        <div className="flex justify-between items-center flex-col w-full p-8 gap-y-2 bg-white text-slate-700 rounded-md">
          <span className="text-xl font-bold">40</span>
          <span className="text-sm font-semibold">Deactive News</span>
        </div>
        <div className="flex justify-between items-center flex-col w-full p-8 gap-y-2 bg-white text-slate-700 rounded-md">
          <span className="text-xl font-bold">10</span>
          <span className="text-sm font-semibold">Writers</span>
        </div>
      </div>
      <div className="bg-white p-4 mt-5 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-medium">
            <span className="text-blue-500 font-semibold">Recent</span> News
          </h2>
          <Link
            to=""
            className="text-white px-3 py-[6px] bg-purple-500 hover:bg-purple-600 rounded-md transition duration-200"
          >
            View All
          </Link>
        </div>
        <div className="relative overflow-x-auto p-4">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-gray-700 bg-gray-50 uppercase">
              <tr>
                <th className="px-7 py-3">No</th>
                <th className="px-7 py-3">Title</th>
                <th className="px-7 py-3">Image</th>
                <th className="px-7 py-3">Category</th>
                <th className="px-7 py-3">Description</th>
                <th className="px-7 py-3">Date</th>
                <th className="px-7 py-3">Status</th>
                <th className="px-7 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>
                  <td className="px-6 py-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4">Travel</td>
                  <td className="px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </td>
                  <td className="px-6 py-4">12/12/2021</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-500 cursor-pointer text-white rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-x-3 justify-start items-center text-white">
                      <Link className="bg-green-500 p-[6px] rounded hover:shadow-lg hover:bg-green-500/50">
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
    </div>
  );
};

export default AdminIndex;
