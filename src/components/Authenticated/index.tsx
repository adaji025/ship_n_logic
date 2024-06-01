import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/svg/logo.svg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import SideNav from "./SideNav";
import { Fragment } from "react";
import { Drawer } from "@mantine/core";
import Header from "./Header";

const Authenticated = () => {
  const [opened, { toggle }] = useDisclosure();
  const [showNav, { close, open }] = useDisclosure(true);

  return (
    <Fragment>
      <Drawer opened={showNav} onClose={close} title="Authentication">
        <SideNav opened={opened} />
      </Drawer>
      <div className="flex items-start bg-[#F8F9FD]">
        <div
          className={`hidden lg:block static top-0 min-h-screen  bg-white w-full px-5 duration-300 ${
            !opened ? "max-w-[270px]" : "max-w-[100px] pt-5"
          }`}
        >
          <div
            className={`flex justify-between items-center gap-2 border-b ${
              opened ? "flex-col" : "flow-row"
            }`}
          >
            <img
              src={Logo}
              alt=""
              className={`${opened ? "order-2" : "order-1"}`}
            />
            <>
              {opened && (
                <MdKeyboardDoubleArrowRight
                  className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
                  onClick={toggle}
                />
              )}
              {!opened && (
                <MdKeyboardDoubleArrowLeft
                  className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
                  onClick={toggle}
                />
              )}
            </>
          </div>
          <div className="hidden lg:grid gap-4 mt-5">
            <SideNav opened={opened} />
          </div>
        </div>

        <div className="w-full min-h-screen px-5 lg:px-10">
          <Header open={open} title="Dashboard" />
          <div>main</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Authenticated;
