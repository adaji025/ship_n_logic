import { Avatar } from "@mantine/core";
import NotificationIcon from "../../assets/svg/notification.svg";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";

interface IProps {
  title: string;
  open: () => void;
}

const Header = ({ title, open }: IProps) => {
  return (
    <div className="flex w-full justify-between items-center gap-5 h-[80px] ">
      <div className="flex flex-1 gap-2">
        <CgMenuLeftAlt className="cursor-pointer lg:hidden" size={20} onClick={open} />
        <div className="text-xl font-medium">{title}</div>
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
