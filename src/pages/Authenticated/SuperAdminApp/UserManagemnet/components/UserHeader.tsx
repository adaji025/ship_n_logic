import { Avatar } from "@mantine/core";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/features/modalSlice";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import Notification from "./Notification";

const Header = () => {
  const dispatch = useDispatch();
  const open = () => dispatch(openModal());
  return (
    <div className="flex w-full justify-between items-center gap-5 h-[80px] ">
      <div className="flex flex-1 gap-2 items-center">
        <CgMenuLeftAlt
          className="cursor-pointer lg:hidden"
          size={20}
          onClick={open}
        />
        <div className=" gap-2 items-center hidden sm:flex">
          <HiOutlineChevronLeft />
          <div className="text-xl font-medium capitalize ">Anna Miller</div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <div className="flex items-center gap-4 border px-10 py-1 rounded-md bg-white text-[#D43908] font-medium">
          Disable Account
        </div>
        <Notification />
        <div className="flex items-center gap-5">
          <Avatar size="md" />
          <IoChevronForward />
        </div>
      </div>
    </div>
  );
};

export default Header;
