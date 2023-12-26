import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Header = () => {
  return (
    <nav className="shadow-sm mb-1 ">
      <div className="flex bg-gray-200 py-2 px-[5%] text-xs box-border justify-between text-gray-500">
        <p className="flex items-center gap-1">
          <CiLocationOn /> Chittagong
        </p>

        <div className="flex gap-12 ">
          <p className="flex items-center">
            <CiPhone /> +88015-000-00000
          </p>

          <p className="flex items-center gap-1">
            <CiMail />
            single-vendor@ecommerce.com
          </p>
        </div>
      </div>

      <div className="flex justify-between bg-white py-4 px-[5%]">
        <div className="flex gap-6 items-center">
          <p className="font-semibold	text-lg hover:bg-gray-200 hover:px-1 hover:rounded">
            Logo{" "}
          </p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded ">
            Home
          </p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded">
            Offer
          </p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 hover:p-1 hover:rounded">
            All Products
          </p>
        </div>

        <div className="flex gap-2 text-sm">
          <div className="relative ">
            <input className="border-gray-600 border-2 rounded h-7  focus:border-gray-500 pl-6 box-border " />
            <div className="absolute inset-y-0 flex items-center left-1 ">
              <AiOutlineSearch size={20} className="text-gray-600" />
            </div>
          </div>
          <div className="flex relative items-center">
            <IoCartOutline size={24} />
          </div>
          <div className="flex relative items-center">
            <MdOutlineFavoriteBorder size={24} />
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 text-white font-semibold hover:bg-blue-400 "
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
