import { Link } from "react-router-dom";
export const AddWriter = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">
          <span className="text-blue-500">Add</span> Writers
        </h2>
        <Link
          to="/dashboard/news/create"
          className="text-white px-3 py-[6px] bg-purple-500 hover:bg-purple-600 rounded-md transition duration-200"
        >
          Writers
        </Link>
      </div>
      <div className="p-4">
        <form>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="flex flex-col gap-y-2 mb-5">
              <label htmlFor="name" className="font-medium text-slate-600">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
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
                name="category"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              >
                <option value="">Select Category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
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
                id="password"
                name="password"
                placeholder="Write Password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
              >
                Add Writer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
