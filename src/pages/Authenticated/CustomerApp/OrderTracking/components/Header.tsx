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
            <div className="flex gap-3">
              <div className="text-xl font-medium capitalize hidden xl:block">
                Order History
              </div>
              <div className="md:flex justify-center hidden">
                <input
                  type="text"
                  placeholder="Tracking Number"
                  className="py-2.5 px-5 outline-none max-w-[350px] text-xs w-full rounded-l-full bg-primary/10"
                />
                <button className="text-white rounded-r-full py-1 px-5 text-xs bg-primary">
                  Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <button className="hidden sm:inline-block border text-primary border-primary/40 py-2 px-5 rounded-xl text-sm font-medium">
          Export as CSV
        </button>
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
