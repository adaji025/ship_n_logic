import { Menu, TextInput } from "@mantine/core";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import UserTable from "./components/UserTable";

const UserManagement = () => {
  const data = [
    {
      name: "Anna Miller",
      company_name: "VistaPeak Tecnologies",
      email: "Email",
      exception_alert_email: "Exception Alert Mail",
      date_joined: "30/04/2024",
      status: "verified",
    },
    {
      name: "Anna Miller",
      company_name: "VistaPeak Tecnologies",
      email: "Email",
      exception_alert_email: "Exception Alert Mail",
      date_joined: "30/04/2024",
      status: "verified",
    },
    {
      name: "Anna Miller",
      company_name: "VistaPeak Tecnologies",
      email: "Email",
      exception_alert_email: "Exception Alert Mail",
      date_joined: "30/04/2024",
      status: "pending",
    },
    {
      name: "Anna Miller",
      company_name: "VistaPeak Tecnologies",
      email: "Email",
      exception_alert_email: "Exception Alert Mail",
      date_joined: "30/04/2024",
      status: "verified",
    },
  ];
  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row gap-5 justify-between mt-5 md:mt-[unset]">
        <div className="flex items-center gap-5">
          <h4 className="font-medium">Users</h4>
          <TextInput
            leftSection={<CiSearch />}
            placeholder="Search"
            radius="xl"
            className="bg-transparent w-full sm:w-[unset]"
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

      <UserTable data={data} />
    </div>
  );
};

export default UserManagement;
