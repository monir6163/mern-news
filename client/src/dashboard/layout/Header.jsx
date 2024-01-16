import ProfileLogo from "../../assets/admin.png";
const Header = () => {
  return (
    <div className="pl-4 fixed w-[calc(100vw-286px)] top-4 z-50">
      <div className="w-full rounded h-[70px] flex justify-between items-center p-4 bg-white">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
        />
        <div className="mr-4">
          <div className="flex gap-x-2">
            <div className="flex flex-col justify-center items-end">
              <span>Monir Hossain</span>
              <span>
                <b>Role:</b> admin
              </span>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src={ProfileLogo}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
