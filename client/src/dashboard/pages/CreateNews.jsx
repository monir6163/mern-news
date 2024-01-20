import JoditEditor from "jodit-react";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

const CreateNews = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">
          <span className="text-blue-500">Add</span> News
        </h2>
        <Link
          to="/dashboard/news"
          className="text-white px-3 py-[6px] bg-purple-500 hover:bg-purple-600 rounded-md transition duration-200"
        >
          News
        </Link>
      </div>
      <div className="p-4">
        <form>
          <div className="flex flex-col gap-y-2 mb-5">
            <label htmlFor="title" className="font-medium text-slate-600">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Write Title"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            />
          </div>
          <div className="mb-5">
            <div>
              <label
                htmlFor="image"
                className={`w-full h-[180px] rounded text-[#404040] gap-2 justify-center items-center flex flex-col cursor-pointer border-2 border-dashed`}
              >
                <div className="flex justify-center items-center flex-col gap-y-2">
                  <span className="text-2xl">
                    <MdCloudUpload />
                  </span>
                  <span>Select Image</span>
                </div>
              </label>
              <input type="file" name="image" id="image" className="hidden" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-5">
            <div className="flex justify-start items-center gap-x-2">
              <h2>Description</h2>
              <span
                onClick={() => setShow(true)}
                className="text-2xl cursor-pointer hover:text-green-500 transition duration-200"
              >
                <MdCloudUpload />
              </span>
            </div>
            <JoditEditor
              name="description"
              id="description"
              className="bg-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
            >
              Add News
            </button>
          </div>
        </form>
      </div>
      {show && <Gallery setShow={setShow} images={[]} />}
    </div>
  );
};

export default CreateNews;
