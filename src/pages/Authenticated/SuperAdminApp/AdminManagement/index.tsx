import { IoChevronDownSharp } from "react-icons/io5";
import AdminTable from "./components/AdminTable";
import Header from "./components/Header";
import { Menu, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

const AdminManagement = () => {
  const data = [
    {
      permission: "Admin",
      name: "Gretchen Mango",
      email: "gretchenmango@gmail.com",
      date_added: "30/04/2024",
      status: "active",
    },
    {
      permission: "Admin",
      name: "Gretchen Mango",
      email: "gretchenmango@gmail.com",
      date_added: "30/04/2024",
      status: "active",
    },
    {
      permission: "Admin",
      name: "Gretchen Mango",
      email: "gretchenmango@gmail.com",
      date_added: "30/04/2024",
      status: "active",
    },
    {
      permission: "Super Admin",
      name: "Gretchen Mango",
      email: "gretchenmango@gmail.com",
      date_added: "30/04/2024",
      status: "suspended",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-5 justify-between mt-5 md:mt-[unset]">
        <div className="flex items-center gap-5">
          <TextInput
            leftSection={<CiSearch />}
            placeholder="Search"
            radius="xl"
            className="bg-transparent w-full sm:w-[374px]"
          />
        </div>

        <div className="flex flex-row justify-end gap-2 sm:gap-5">
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
      <AdminTable data={data} />
    </div>
  );
};

export default AdminManagement;
