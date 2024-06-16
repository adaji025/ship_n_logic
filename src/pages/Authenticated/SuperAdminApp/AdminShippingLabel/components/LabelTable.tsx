import { useNavigate } from "react-router-dom";
import { Divider, Menu, Pagination, Select, Table } from "@mantine/core";
import { FaRegUser } from "react-icons/fa";
import SolarDocIcon from "../../../../../assets/svg/solar_document-broken.svg";

interface IProps {
  data: {
    tracking_no: string;
    date_purchased: string;
    shipping_service: string;
    sold_to: string;
    email: string;
    shipped_to: string;
    status: string;
  }[];
}

const LabelTable = ({ data }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Tracking Number
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Date purchased
              </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Shipping Service
              </Table.Th>
              <Table.Th className="font-medium">Sold To</Table.Th>
              <Table.Th className="font-medium">User Email</Table.Th>
              <Table.Th className="font-medium">Shipped To</Table.Th>
              <Table.Th className="font-medium">Status </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.tracking_no}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.date_purchased}
                </Table.Td>

                <Table.Td className="whitespace-nowrap">
                  {element.shipping_service}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.email}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.shipped_to}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button
                    className={`px-2 py-1 rounded-2xl capitalize min-w-[94px] bg-primary-green/5 font-medium ${
                      element.status === "In Transit"
                        ? "text-[#2A76C3]"
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
                        <img src={SolarDocIcon} />
                      </button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>Menu</Menu.Label>
                      <Divider />
                      <Menu.Item
                        onClick={() => navigate("/admin-details")}
                      >
                        Download Admin
                      </Menu.Item>
                      <Menu.Item
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

export default LabelTable;
