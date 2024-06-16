import { Menu, TextInput } from "@mantine/core";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import LabelTable from "./components/LabelTable";

const data = [
  {
    tracking_no: "12GTD35",
    date_purchased: "30/04/2024",
    shipping_service: "UPS Ground",
    sold_to: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    shipped_to: "Anna Miller",
    status: "In Transit",
  },
  {
    tracking_no: "12GTD35",
    date_purchased: "30/04/2024",
    shipping_service: "UPS Ground",
    sold_to: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    shipped_to: "Anna Miller",
    status: "In Transit",
  },
  {
    tracking_no: "12GTD35",
    date_purchased: "30/04/2024",
    shipping_service: "UPS Ground",
    sold_to: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    shipped_to: "Anna Miller",
    status: "In Transit",
  },
  {
    tracking_no: "12GTD35",
    date_purchased: "30/04/2024",
    shipping_service: "UPS Ground",
    sold_to: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    shipped_to: "Anna Miller",
    status: "In Transit",
  },
];

const AdminShippingLabel = () => {
  return (
    <div>
      <Header />

      <div className="mt-5 flex gap-5 flex-col md:flex-row justify-between">
        <div className="flex">
          <div className="flex items-center gap-5">
            <TextInput
              leftSection={<CiSearch />}
              placeholder="Search"
              radius="xl"
              className="bg-transparent"
            />

            <Menu shadow="xs">
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-3 sm:gap-5">
                  <div>Status: All Labels</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Immediate payment purchase</Menu.Item>
                <Menu.Item>Monthly Invoicing</Menu.Item>
                <Menu.Item>Bill to receiver account</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Tracking Number"
            className="py-2.5 px-5 outline-none max-w-[350px] text-xs w-full rounded-l-full bg-primary/10"
          />
          <button className="text-white rounded-r-full py-1 px-5 text-xs bg-primary">
            Track
          </button>
        </div>
      </div>

      <LabelTable data={data} />
    </div>
  );
};

export default AdminShippingLabel;
