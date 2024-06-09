import { TextInput, Menu } from "@mantine/core";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import OrderTable from "./components/OrderTable";

const OrderTracking = () => {
  const data = [
    {
      tracking_no: "12GTD35",
      orderId: "GFJS571",
      date: "30/04/2024",
      shipping_service: "UPS Ground",
      address: "Main Street, Los Angeles",
      customer_name: "Anna Miller",
      cost: "$288.00",
      initial_cost: "$320.00",
      status: "delivered",
    },
    {
      tracking_no: "12GTD35",
      orderId: "GFJS571",
      date: "30/04/2024",
      shipping_service: "UPS Ground",
      address: "Main Street, Los Angeles",
      customer_name: "Anna Miller",
      cost: "$288.00",
      initial_cost: "$320.00",
      status: "delivered",
    },
    {
      tracking_no: "12GTD35",
      orderId: "GFJS571",
      date: "30/04/2024",
      shipping_service: "UPS Ground",
      address: "Main Street, Los Angeles",
      customer_name: "Anna Miller",
      cost: "$288.00",
      initial_cost: "$320.00",
      status: "in transit",
    },
    {
      tracking_no: "12GTD35",
      orderId: "GFJS571",
      date: "30/04/2024",
      shipping_service: "UPS Ground",
      address: "Main Street, Los Angeles",
      customer_name: "Anna Miller",
      cost: "$288.00",
      initial_cost: "$320.00",
      status: "in transit",
    },
  ];
  return (
    <div>
      <Header />

      <div className="flex justify-end mb-4">
        <button className="sm:hidden border text-primary border-primary/40 py-2 px-5 rounded-xl text-sm font-medium">
          Export as CSV
        </button>
      </div>

      <div className="md:hidden">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Tracking Number"
            className="py-3 px-5 outline-none max-w-[350px] text-xs w-full rounded-l-full bg-primary/10"
          />
          <button className="text-white rounded-r-full py-2 px-5 text-xs bg-primary">
            Track
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 justify-between mt-5 md:mt-[unset]">
        <div className="flex items-center gap-5">
          <h4 className="font-medium">Orders</h4>
          <TextInput
            leftSection={<CiSearch />}
            placeholder="Search"
            radius="xl"
            className="bg-transparent"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-5">
          <div className="flex gap-2 sm:gap-5">
            <Menu shadow="xs">
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-3 sm:gap-5">
                  <div>Status: All</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Immediate payment purchase</Menu.Item>
                <Menu.Item>Monthly Invoicing</Menu.Item>
                <Menu.Item>Bill to receiver account</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="xs" width={150}>
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-3 sm:gap-5">
                  <div>Newest to Oldest</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Newest</Menu.Item>
                <Menu.Item>Oldest </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>

          <div className="flex items-center ml-auto  justify-center w-max px-5 py-2 bg-primary/5 font-medium text-primary rounded-xl">
            <GoTag />
            <div>Buy shipping label</div>
          </div>
        </div>
      </div>

      <OrderTable data={data} />
    </div>
  );
};

export default OrderTracking;
