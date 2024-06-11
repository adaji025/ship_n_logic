import RateArrow from "../../../../assets/svg/dashboard/rate-arrow.svg";
import UserIcon from "../../../../assets/svg/dashboard/user.svg";
import OrderIcon from "../../../../assets/svg/dashboard/bag.svg";
import ExpIcon from "../../../../assets/svg/dashboard/exp.svg";
import ApexChart from "./components/BarCharts";
import { Menu, Popover } from "@mantine/core";
import { IoChevronDownSharp } from "react-icons/io5";
import { Calendar } from "@mantine/dates";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Header from "./components/Header";
// import DashboardTable from "./components/Table";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        <div className=" w-full bg-white p-5">
          <div className="flex justify-end ">
            <div className="flex gap-2 p-2 rounded-md font-semibold text-xs text-primary-green bg-[#1571450D]/5">
              <div className="">3.3%</div>
              <img src={RateArrow} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-light">
              <img src={UserIcon} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-medium">2,546</h2>
              <div className="text-dark-gray text-sm mt-1">Total Customers</div>
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
              <img src={OrderIcon} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-medium">546</h2>
              <div className="text-dark-gray text-sm mt-1">Total Orders</div>
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
              <img src={ExpIcon} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-medium">$20,000</h2>
              <div className="text-dark-gray text-sm mt-1">
                Total Expenditure
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-5 rounded-md bg-white w-full overflow-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
          <div className="text-xs">
            <div className="font-semibold">Total expenditure</div>
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

      <div className="mt-5 p-5 rounded-md bg-white w-full overflow-auto">
        <div className="flex gap-5 sm:items-center justify-between mb-5">
          <div className="font-semibold">Top Delivery based on location</div>
          <div className="flex gap-10">
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

        <div className="mt-5 grid grid-cols-3 w-full">
          <div className="grid gap-5 text-sm">
            <div className="font-medium text-dark-gray text-base">Location</div>
            <div>Hawaii</div>
            <div>New York</div>
            <div>Los Angeles</div>
          </div>
          <div className="flex justify-center gap-5 text-sm">
            <div className="grid gap-5">
              <div className="font-medium text-dark-gray text-base">
                Shipping Labels Purchased
              </div>
              <div>135</div>
              <div>123</div>
              <div>100</div>
            </div>
          </div>
          <div className="flex  justify-end gap-5 text-sm">
            <div className="grid gap-5">
              <div className="font-medium text-dark-gray text-base">
                Expenses
              </div>
              <div>$20,000</div>
              <div>$20,000</div>
              <div>$20,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
