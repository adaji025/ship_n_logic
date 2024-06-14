import { useNavigate } from "react-router-dom";
import { Divider, Menu, Pagination, Select, Table } from "@mantine/core";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";

interface IProps {
  data: {
    permission: string;
    name: string;
    email: string;
    date_added: string;
    status: string;
  }[];
}

const AdminTable = ({ data }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Permission
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Name
              </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Email
              </Table.Th>

              <Table.Th className="font-medium">Date Added</Table.Th>
              <Table.Th className="font-medium">Status </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.permission}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.name}
                </Table.Td>

                <Table.Td className="whitespace-nowrap">
                  {element.email}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.date_added}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button
                    className={`px-2 py-1 rounded-2xl capitalize min-w-[94px] bg-primary-green/5 font-medium ${
                      element.status === "active"
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
                      <button>
                        <SlOptionsVertical />
                      </button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>Menu</Menu.Label>
                      <Divider />
                      <Menu.Item
                        leftSection={<FaRegUser color="#333333" />}
                        onClick={() => navigate("/admin-details")}
                      >
                        View Admin
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

export default AdminTable;
