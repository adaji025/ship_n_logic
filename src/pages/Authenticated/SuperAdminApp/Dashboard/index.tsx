import Header from "./components/Header";
import RateArrow from "../../../../assets/svg/dashboard/rate-arrow.svg";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  DeliveryIcon,
  DollarIcon,
} from "../../../../components/Authenticated/Svg";
import ApexChart from "./components/BarCharts";
import { Menu, Popover } from "@mantine/core";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Calendar } from "@mantine/dates";
import { IoChevronDownSharp } from "react-icons/io5";
import PurchaseTable from "./components/PurchaserTable";

const data = [
  {
    name: "Gretchen Mango",
    email: "gretchenmango@gmail.com",
    label: "500",
    total_exp: "$30,000",
    date_joined: "11/05/2024",
  },
  {
    name: "Gretchen Mango",
    email: "gretchenmango@gmail.com",
    label: "500",
    total_exp: "$30,000",
    date_joined: "11/05/2024",
  },
  {
    name: "Gretchen Mango",
    email: "gretchenmango@gmail.com",
    label: "500",
    total_exp: "$30,000",
    date_joined: "11/05/2024",
  },
  {
    name: "Gretchen Mango",
    email: "gretchenmango@gmail.com",
    label: "500",
    total_exp: "$30,000",
    date_joined: "11/05/2024",
  },
  {
    name: "Gretchen Mango",
    email: "gretchenmango@gmail.com",
    label: "500",
    total_exp: "$30,000",
    date_joined: "11/05/2024",
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <Header />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-10">
        <div className=" w-full bg-white p-5">
          <div className="flex justify-end relative">
            <div className="flex gap-2 p-2 rounded-md font-semibold text-xs text-primary-green bg-[#1571450D]/5">
              <div className="">3.3%</div>
              <img src={RateArrow} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center h-[56px] w-[56px] text-primary rounded-full bg-light">
              <DeliveryIcon />
            </div>
            <div>
              <h2 className="text-xl font-medium">2,546</h2>
              <div className="text-dark-gray text-sm mt-1">
                Total Shipping Label purchased
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full bg-white p-5">
          <div className="flex justify-end ">
            <div className="flex gap-2 p-2 rounded-md font-semibold text-xs text-primary-green bg-[#1571450D]/5">
              <div className="">3.3%</div>
              <img src={RateArrow} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center h-[56px] w-[56px] text-primary rounded-full bg-light">
              <BsCurrencyDollar size={26} />
            </div>
            <div>
              <h2 className="text-xl font-medium">$546</h2>
              <div className="text-dark-gray text-sm mt-1">
                Total Expenditure
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full bg-white p-5">
          <div className="flex justify-end ">
            <div className="flex gap-2 p-2 rounded-md font-semibold text-xs text-primary-green bg-[#1571450D]/5">
              <div className="">3.3%</div>
              <img src={RateArrow} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-light">
              <DollarIcon />
            </div>
            <div>
              <h2 className="text-xl font-medium">$20,000</h2>
              <div className="text-dark-gray text-sm mt-1">Total Profit</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-5 rounded-md bg-white w-full overflow-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
          <div className="text-xs">
            <div className="font-semibold">Financial Summary</div>
            <div className="font-bold mt-1">$13,000</div>
          </div>
          <div className="flex justify-end gap-5 md:gap-10">
            <Menu shadow="xs" width={100}>
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-5">
                  <div>Custom</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Yearly</Menu.Item>
                <Menu.Item>Monthly</Menu.Item>
                <Menu.Item>Custom</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Popover withArrow shadow="md">
              <Popover.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-5">
                  <div>05/2024</div>
                  <MdOutlineCalendarMonth />
                </button>
              </Popover.Target>
              <Popover.Dropdown>
                <Calendar />
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
        <ApexChart />
      </div>
      <PurchaseTable data={data} />
    </div>
  );
};

export default AdminDashboard;
