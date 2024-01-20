/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdClose, MdCloudUpload } from "react-icons/md";
const Gallery = ({ setShow, images }) => {
  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[9999]">
      <div className="w-full h-full relative">
        <div className="bg-gray-400 opacity-80 w-full h-full left-0 top-0 absolute z-[998]"></div>
        <div className="absolute rounded-sm w-[50%] h-[85vh] p-3 z-[999] bg-white overflow-y-auto left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="pb-3 flex justify-between items-center">
            <h2 className="text-xl font-medium">Gallery</h2>
            <span
              onClick={() => setShow(false)}
              className="text-2xl cursor-pointer hover:text-red-500 transition duration-200"
            >
              <MdClose />
            </span>
          </div>
          <div className="mb-5">
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
          <div className="grid grid-cols-4 gap-x-2 text-center">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
