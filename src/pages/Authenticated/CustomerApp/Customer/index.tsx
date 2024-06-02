import { Menu, TextInput } from "@mantine/core";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";

const CustomerData = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
        <div className="flex gap-5 items-center">
          <div className="text-sm font-medium capitalize">Customer</div>
          <TextInput
            leftSection={<CiSearch />}
            radius="xl"
            className="bg-transparent"
            placeholder="Search"
          />
        </div>
        <div>
          <div className="flex justify-end gap-5 md:gap-10">
            <Menu shadow="xs" width={100}>
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-5">
                  <div>Status: All</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Yearly</Menu.Item>
                <Menu.Item>Monthly</Menu.Item>
                <Menu.Item>Custom</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="xs" width={100}>
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-5">
                  <div>Newest to Oldest</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Yearly</Menu.Item>
                <Menu.Item>Monthly</Menu.Item>
                <Menu.Item>Custom</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>

      <div className="mt-5"></div>
    </div>
  );
};

export default CustomerData;
