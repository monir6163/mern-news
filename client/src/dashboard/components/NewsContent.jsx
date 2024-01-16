import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsContent = () => {
  return (
    <>
      <div className="px-4 py-3 flex gap-x-3">
        <select
          name=""
          id=""
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
        >
          <option value="">Select Type</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
        <input
          type="text"
          placeholder="Search by title"
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
        />
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
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
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
      <div className="flex justify-end px-8 gap-x-3 pb-2 text-slate-600">
        <div className="flex justify-center items-center">
          <p className="px-4 py-3 font-semibold text-sm">News Par Page</p>
          <select
            id="page"
            name="page"
            className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
        <p className="px-6 py-3 text-sm font-semibold text-slate-600">
          1-10 of 100
        </p>
        <div className="flex items-center gap-x-3">
          <button className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10">
            Prev
          </button>
          <button className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsContent;
