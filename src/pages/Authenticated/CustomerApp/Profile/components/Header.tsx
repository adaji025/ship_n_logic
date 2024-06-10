import { Avatar } from "@mantine/core";
import NotificationIcon from "../../../../../assets/svg/notification.svg";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/features/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  const open = () => dispatch(openModal());
  return (
    <div className="flex w-full justify-between items-center gap-5 h-[100px] ">
      <div className="flex flex-1 gap-2 items-center">
        <div>
          <div className="flex gap-2 items-center">
            <CgMenuLeftAlt
              className="cursor-pointer lg:hidden"
              size={24}
              onClick={open}
            />
            <div className="text-xl font-medium capitalize hidden sm:block">
              Profile
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
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
