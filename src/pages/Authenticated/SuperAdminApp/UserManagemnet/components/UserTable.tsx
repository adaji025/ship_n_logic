import { useNavigate } from "react-router-dom";
import { Divider, Menu, Pagination, Select, Table } from "@mantine/core";
import { SlOptionsVertical } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiUserX } from "react-icons/bi";
import { DiscountIcon } from "../../../../../components/Authenticated/Svg";

interface IProps {
  data: {
    name: string;
    company_name: string;
    email: string;
    exception_alert_email: string;
    date_joined: string;
    status: string;
  }[];
}

const UserTable = ({ data }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Name
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Company Name
              </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Email
              </Table.Th>
              <Table.Th className="font-medium">Exception Alert Mail </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Customer Name{" "}
              </Table.Th>
              <Table.Th className="font-medium">Date Joined</Table.Th>
              <Table.Th className="font-medium">Status </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.name}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.company_name}
                </Table.Td>

                <Table.Td className="whitespace-nowrap">
                  {element.email}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.exception_alert_email}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.date_joined}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.status}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button
                    className={`px-2 py-1 rounded-2xl capitalize min-w-[94px] bg-primary-green/5 font-medium ${
                      element.status === "verified"
                        ? "text-[#0A9310]"
                        : "text-[#F79E1B]"
                    }`}
                  >
                    {element.status}
                  </button>
                </Table.Td>
                <Table.Td>
                  <Menu shadow="xs">
                    <Menu.Target>
                      <button className="">
                        <SlOptionsVertical />
                      </button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>Menu</Menu.Label>
                      <Divider />
                      <Menu.Item
                        leftSection={
                          <IoDocumentTextOutline size={20} color="#2A76C3" />
                        }
                        onClick={() => navigate("/user-information")}
                      >
                        View Business Information
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<DiscountIcon />}
                        // onClick={() => navigate("/shipping-labels")}
                      >
                        Apply Discount
                      </Menu.Item>
                      <Menu.Item
                        color="#A25004"
                        leftSection={<BiUserX size={20} color="#A25004" />}
                      >
                        Disable Account
                      </Menu.Item>
                      <Menu.Item
                        color="#A25004"
                        leftSection={<BiUserX size={20} color="#A25004" />}
                      >
                        Permanently Delete User
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <div className="flex gap-5 justify-center mt-10">
        <Pagination total={10} />
        <div className="flex gap-2 items-center">
          <div>PerPage</div>
          <Select
            className="w-[70px]"
            data={[
              { value: "5", label: "5" },
              { value: "15", label: "15" },
              { value: "25", label: "25" },
              { value: "50", label: "50" },
            ]}
            placeholder="15"
          />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
