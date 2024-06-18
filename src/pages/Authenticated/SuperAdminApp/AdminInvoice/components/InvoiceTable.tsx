import { Menu, Pagination, Select, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import InvoiceDetails from "./InvoiceDetails";
import Payment from "../../../CustomerApp/ShippingLabels/components/Payement";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegFileAlt } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: {
    name: string;
    email: string;
    company_name: string;
    label_purchased: string;
    paid: string;
    outstanding: string;
    status: string;
  }[];
}

const InvoiceTable = ({ data }: IProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [showModal, { close: closeModal, open: openModal }] =
    useDisclosure(false);
    const navigate = useNavigate()

  return (
    <div>
      <InvoiceDetails close={close} opened={opened} openModal={openModal} />
      <Payment opened={showModal} close={closeModal} />

      <div className="overflow-x-auto text-sm mt-10">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Name
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Email
              </Table.Th>
              <Table.Th className="font-medium">Company Name</Table.Th>
              <Table.Th className="font-medium">Label Purchased</Table.Th>
              <Table.Th className="font-medium ">Paid</Table.Th>
              <Table.Th className="font-medium ">Outstanding</Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Status{" "}
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.name}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.email}
                </Table.Td>

                <Table.Td className="whitespace-nowrap">
                  {element.company_name}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.label_purchased}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.paid}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.outstanding}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button
                    className={`px-2 py-1 rounded-2xl capitalize min-w-[94px] bg-primary-green/5 font-medium ${
                      element.status === "Unpaid"
                        ? "text-[#F79E1B]"
                        : "text-[#0A9310]"
                    }`}
                  >
                    {element.status}
                  </button>
                </Table.Td>
                <Table.Td className="cursor-pointer">
                  <Menu>
                    <Menu.Target>
                      <button>
                        <SlOptionsVertical size={16} />
                      </button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<FaRegFileAlt />} onClick={open}>
                        View Invoice details
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<RiErrorWarningLine />}
                        onClick={() => navigate("/user-information")}
                      >
                        View company information
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
        <Pagination total={10} />
        <div className="flex gap-2 items-center justify-center">
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

export default InvoiceTable;
