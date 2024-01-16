import { FaImage } from "react-icons/fa";
export const Profile = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 mt-5 w-full">
      <div className="bg-white p-6 rounded flex justify-center items-center">
        <div>
          <label
            htmlFor="profile_img"
            className={`w-[150px] h-[150px] rounded text-[#404040] gap-2 justify-center items-center flex flex-col cursor-pointer border-2 border-dashed`}
          >
            <div className="flex justify-center items-center flex-col gap-y-2">
              <span className="text-2xl">
                <FaImage />
              </span>
              <span>Select Image</span>
            </div>
          </label>
          <input
            type="file"
            name="profile_img"
            id="profile_img"
            className="hidden"
          />
        </div>
        <div className="flex flex-col gap-y-1 text-[#404040] justify-center items-start ml-5">
          <span className="text-sm"> Name: John Doe</span>
          <span className="text-sm">Email: monir@gmail.com</span>
          <span className="text-sm">Category: All</span>
        </div>
      </div>
      <div className="bg-white px-6 py-4 text-[#404040]">
        <h2 className="text-center pb-3">Change Passowrd</h2>
        <form>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="flex flex-col gap-y-2 mb-5">
              <label
                htmlFor="old_password"
                className="font-medium text-slate-600"
              >
                Old Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="old_password"
                placeholder="Write Old Password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label
                htmlFor="new_password"
                className="font-medium text-slate-600"
              >
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="new_password"
                placeholder="Write New Password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
              >
                Update Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
