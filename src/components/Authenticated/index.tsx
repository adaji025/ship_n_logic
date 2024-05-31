import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/svg/logo.svg";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Authenticated = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className="flex items-start bg-[#F8F9FD]">
      <div
        className={`static top-0 min-h-screen  bg-white w-full px-5 duration-300 ${
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
           {opened && <MdKeyboardDoubleArrowRight
              className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
              onClick={toggle}
            />}
           {!opened && <MdKeyboardDoubleArrowLeft
              className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
              onClick={toggle}
            />}
          </>
        </div>
        <div className="grid gap-4 mt-5">
          <div className="flex justify-between">hoello</div>
          <div>hoello</div>
          <div>hoello</div>
        </div>
      </div>

      <div>
        <div>header</div>
        <div>main</div>
      </div>
    </div>
  );
};

export default Authenticated;
