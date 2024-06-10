import { Button, Menu, TextInput } from "@mantine/core";
import Header from "./components/Header";
import { IoChevronDownSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const Invoice = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-5 justify-end mb-4">
        <Button className="md:hidden px-10 bg-primary ">
          Make bulk Payment
        </Button>
        <button className="md:hidden border text-primary border-primary/40 py-2 px-5 rounded-xl text-sm font-medium">
          Export as CSV
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 justify-between mt-5 md:mt-[unset]">
        <div className="flex items-center gap-5">
          <TextInput
            leftSection={<CiSearch />}
            placeholder="Search"
            radius="xl"
            className="bg-transparent w-full sm:w-[unset]"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-5">
          <button className="flex justify-between items-center gap-5 border px-3 py-2 rounded-md">
            <div>May, 2024</div>
            <SlCalender />
          </button>
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
        </div>
      </div>
    </div>
  );
};

export default Invoice;
