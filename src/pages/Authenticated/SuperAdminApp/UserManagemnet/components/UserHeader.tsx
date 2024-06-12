import { Avatar, Menu } from "@mantine/core";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/features/modalSlice";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import DisableAccount from "../../../../../components/Authenticated/Confirmation";
import { useDisclosure } from "@mantine/hooks";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [opened, { open: openDisableAccount, close }] = useDisclosure();

  const dispatch = useDispatch();
  const open = () => dispatch(openModal());
  const navigate = useNavigate();
  
  return (
    <Fragment>
      <DisableAccount
        btnText="disable"
        close={close}
        handleClick={() => {}}
        opened={opened}
      />
      <div className="flex w-full justify-between items-center gap-5 h-[80px] ">
        <div className="flex flex-1 gap-2 items-center">
          <CgMenuLeftAlt
            className="cursor-pointer lg:hidden"
            size={20}
            onClick={open}
          />
          <div className=" gap-2 items-center hidden sm:flex">
            <HiOutlineChevronLeft
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <div className="text-xl font-medium capitalize">Anna Miller</div>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-10">
          <button
            className="flex items-center gap-4 border px-10 py-1 rounded-md bg-white text-[#D43908] font-medium"
            onClick={openDisableAccount}
          >
            Disable Account
          </button>
          <Notification />
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
    </Fragment>
  );
};

export default Header;
