import { Avatar, Menu } from "@mantine/core";
import NotificationIcon from "../../../../../assets/svg/notification.svg";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/features/modalSlice";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const open = () => dispatch(openModal());
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between items-center gap-5 h-[80px] ">
      <div className="flex flex-1 gap-2 items-center">
        <CgMenuLeftAlt
          className="cursor-pointer lg:hidden"
          size={20}
          onClick={open}
        />
        <div className="text-xl font-medium capitalize hidden sm:block">
          Dashboard
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
          <Menu shadow="xs">
            <Menu.Target>
              <button>
                <IoChevronForward />
              </button>
            </Menu.Target>
            <Menu.Dropdown className="mt-2">
              <Menu.Item
                leftSection={<FaRegUser color="#333333" />}
                onClick={() => navigate("/profile")}
              >
                View profile
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
