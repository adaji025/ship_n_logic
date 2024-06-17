import { Menu, TextInput } from "@mantine/core";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import SupportTable from "./components/SupportTable";

const data = [
  {
    support_id: "12GTD35",
    date_submitted: "30/04/2024",
    user: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    category: "Shipping Label",
    status: "Resolved",
  },
  {
    support_id: "12GTD35",
    date_submitted: "30/04/2024",
    user: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    category: "Shipping Label",
    status: "Resolved",
  },
  {
    support_id: "12GTD35",
    date_submitted: "30/04/2024",
    user: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    category: "Shipping Label",
    status: "Resolved",
  },
  {
    support_id: "12GTD35",
    date_submitted: "30/04/2024",
    user: "Claire Anthony",
    email: "gretchenmango@gmail.com",
    category: "Shipping Label",
    status: "Pending",
  },
];

const Support = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:mt-5">
        <TextInput
          leftSection={<CiSearch />}
          placeholder="Search"
          radius="xl"
          className="bg-transparent max-w-[353px] w-full"
        />
        <div className="flex justify-end sm:justify-start w-full">
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

      <SupportTable data={data} />
    </div>
  );
};

export default Support;
