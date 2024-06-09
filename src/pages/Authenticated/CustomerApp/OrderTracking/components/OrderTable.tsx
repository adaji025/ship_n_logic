import { useNavigate } from "react-router-dom";
import { Divider, Menu, Pagination, Select, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SlOptionsVertical } from "react-icons/sl";
import { BiFile } from "react-icons/bi";
import { BsAt } from "react-icons/bs";

import DownloadLabels from "../../ShippingLabels/components/DownloadLabels";

interface IProps {
  data: {
    tracking_no: string;
    orderId: string;
    date: string;
    shipping_service: string;
    address: string;
    customer_name: string;
    cost: string;
    initial_cost: string;
    status: string;
  }[];
}

const OrderTable = ({ data }: IProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  return (
    <div>
      <DownloadLabels close={close} opened={opened} />
      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Tracking Number
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Order ID
              </Table.Th>
              <Table.Th className="font-medium">Date</Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Shipping Service
              </Table.Th>
              <Table.Th className="font-medium">Address </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Customer Name{" "}
              </Table.Th>
              <Table.Th className="font-medium">Cost </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Shipping label status{" "}
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.tracking_no}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.orderId}
                </Table.Td>

                <Table.Td className="whitespace-nowrap">
                  {element.date}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.shipping_service}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.address}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.customer_name}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div>{element.cost}</div>
                    <div className="text-xs line-through">
                      {element.initial_cost}
                    </div>
                  </div>
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button
                    className={`px-2 py-1 rounded-2xl capitalize min-w-[94px] bg-primary-green/5 font-medium ${
                      element.status === "delivered"
                        ? "text-[#0A9310]"
                        : "text-[#2A76C3]"
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
                      <Menu.Item onClick={open} leftSection={<BiFile size={20} />}>
                        View Shipping Label
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<BsAt size={20} />}
                        onClick={() => navigate("/shipping-labels")}
                      >
                        Email: annamiller@gmail.com
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

export default OrderTable;
