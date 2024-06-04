import { Divider, Menu, Pagination, Select, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SlOptionsVertical } from "react-icons/sl";
import { GoTag } from "react-icons/go";
import Tracking from "./Track";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: {
    orderId: string;
    name: string;
    email: string;
    address: string;
    label: string;
    status: string;
  }[];
}

const CustomerTable = ({ data }: IProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  return (
    <div>
      <Tracking close={close} opened={opened} />
      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Order ID{" "}
              </Table.Th>
              <Table.Th className="font-medium">Name</Table.Th>
              <Table.Th className="font-medium">Email</Table.Th>
              <Table.Th className="font-medium">Address </Table.Th>
              <Table.Th className="font-medium">Label </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Shipping label status{" "}
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.orderId}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.name}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.email}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.address}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.label}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button className="px-2 py-1 rounded-2xl bg-primary-green/5 text-primary-green font-medium">
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
                      <Menu.Item onClick={open}>Tracking</Menu.Item>
                      <Menu.Item
                        leftSection={<GoTag />}
                        onClick={() => navigate("/shipping-labels")}
                      >
                        Buy shipping label
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <div className="flex justify-center mt-10">
        <Pagination total={10} />
        <div className="flex items-center border">
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

export default CustomerTable;
