import { Menu } from "@mantine/core";
import Header from "./components/Header";
import { useState } from "react";
import { IoChevronDownSharp, IoSettingsOutline } from "react-icons/io5";
import OrderIDComp from "./components/OrderIDComp";
import CustomerOrderComp from "./components/CustomerOrderComp";

const ShippingLabels = () => {
  const [checked, setChecked] = useState("order id");
  return (
    <div>
      <Header />
      <div className="flex w-full flex-col md:flex-row mt-5 justify-between gap-5 md:gap-10 md:items-center">
        <div className="flex gap-5 items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setChecked("order id")}
          >
            <div
              className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                checked === "order id" ? "border-primary" : ""
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full  ${
                  checked === "order id" ? "bg-primary" : ""
                }`}
              ></div>
            </div>
            <div>Order Id</div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setChecked("customer order")}
          >
            <div
              className={`h-4 w-4 rounded-full border flex items-center justify-center  ${
                checked === "customer order" ? "border-primary" : ""
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full  ${
                  checked === "customer order" ? "bg-primary" : ""
                }`}
              ></div>
            </div>
            <div>Custom Order</div>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row justify-end gap-3 md:gap-10">
          <Menu shadow="xs">
            <Menu.Target>
              <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-3 sm:gap-5">
                <div>Monthly Invoicing</div>
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
                <div className="flex items-center gap-1">
                  <IoSettingsOutline />
                  <div>Newest to Oldest</div>
                </div>
                <IoChevronDownSharp />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Newest</Menu.Item>
              <Menu.Item>Oldest</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>

      <div className="max-w-[527px] mx-auto p-10 bg-white mt-10 rounded-[20px]">
        {checked === "order id" && <OrderIDComp />}
        {checked === "customer order" && <CustomerOrderComp />}
      </div>
    </div>
  );
};

export default ShippingLabels;
