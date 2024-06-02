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
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Authenticated/CustomerApp/Dashboard";

const Authenticated = () => {
  const [opened, { toggle }] = useDisclosure();
  const [showNav, { close, open }] = useDisclosure(false);

  return (
    <Fragment>
      <Drawer opened={showNav} onClose={close} title="Authentication">
        <SideNav opened={opened} close={close} />
      </Drawer>
      <div className="flex items-start bg-[#F8F9FD]">
        <div
          className={`hidden lg:flex flex-col sticky pb-7 top-0 min-h-screen bg-white w-full px-5 duration-300 ${
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
          <div className="hidden lg:grid gap-4 mt-5 flex-1 h-full">
            <SideNav opened={opened} close={close} />
          </div>
        </div>

        <div className="w-full min-h-screen px-5 lg:px-10 pb-10">
          <Header open={open} title="Dashboard" />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default Authenticated;
