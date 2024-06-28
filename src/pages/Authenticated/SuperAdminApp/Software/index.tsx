import Header from "./components/Header";
import Sage300 from "../../../../assets/svg/labels/ups.svg";
import { Switch } from "@mantine/core";

const Software = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 p-5 bg-white rounded-md max-w-[560px]">
        <div className="sm:w-[90%] mx-auto grid gap-5">
          <div className="font-medium text-sm">Authorized Software</div>
          <div className="flex justify-between gap-10">
            <div className="flex items-center gap-2">
              <img src={Sage300} alt="" />
              <div className="text-sm text-[#4F4F4F]">Sage 300</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex justify-between gap-10">
            <div className="flex items-center gap-2">
              <img src={Sage300} alt="" />
              <div className="text-sm text-[#4F4F4F]">Sage 300</div>
            </div>
            <Switch />
          </div>
          <div className="flex justify-between gap-10">
            <div className="flex items-center gap-2">
              <img src={Sage300} alt="" />
              <div className="text-sm text-[#4F4F4F]">Sage 300</div>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
