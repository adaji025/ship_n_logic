import { Avatar } from "@mantine/core";
import NotificationIcon from "../../../../../assets/svg/notification.svg";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/features/modalSlice";
import { BiChevronLeft } from "react-icons/bi";

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
        <BiChevronLeft size={20} />
        <div className="text-xl font-medium capitalize hidden sm:block">
          Shipping Label Purchase
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <div className="flex items-center gap-4 border px-2 py-1 rounded-md">
          <div>USD</div>
          <IoChevronForward />
        </div>
        <div>
          <img src={NotificationIcon} alt="" />
        </div>
        <div>?</div>
        <div className="flex items-center gap-5">
          <Avatar size="md" />
          <IoChevronForward />
        </div>
      </div>
    </div>
  );
};

export default Header;
