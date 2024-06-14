import { Avatar, Button, Menu } from "@mantine/core";
import { IoChevronForward } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/features/modalSlice";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useDisclosure } from "@mantine/hooks";
import { FaRegUser } from "react-icons/fa";
import Notification from "../../../../../components/Authenticated/Notification";
import CreateAdmin from "./CreateAdmin";

const Header = () => {
  const [opened, { open: openDisableAccount, close }] = useDisclosure();

  const dispatch = useDispatch();
  const open = () => dispatch(openModal());
  const navigate = useNavigate();

  return (
    <Fragment>
      <CreateAdmin close={close} opened={opened} />
      <div className="flex w-full justify-between items-center gap-5 h-[80px] ">
        <div className="flex flex-1 gap-2 items-center">
          <CgMenuLeftAlt
            className="cursor-pointer lg:hidden"
            size={20}
            onClick={open}
          />
          <div className=" gap-2 items-center hidden sm:flex">
            <div className="text-xl font-medium capitalize">
              Admin Management
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-10">
          <Button className="bg-primary px-8" onClick={openDisableAccount}>
            Admin Management
          </Button>
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
