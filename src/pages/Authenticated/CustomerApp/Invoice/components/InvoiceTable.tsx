import { Pagination, Select, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RiErrorWarningLine } from "react-icons/ri";
import InvoiceDetails from "./InvoiceDetails";
import Payment from "../../ShippingLabels/components/Payement";

interface IProps {
  data: {
    invoice_no: string;
    date_created: string;
    company: string;
    tracking_no: string;
    amount: string;
    status: string;
  }[];
}

const InvoiceTable = ({ data }: IProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [showModal, { close: closeModal, open: openModal }] =
    useDisclosure(false);

  return (
    <div>
      <InvoiceDetails close={close} opened={opened} openModal={openModal} />
      <Payment opened={showModal} close={closeModal} />

      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Invoice Number
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Date created
              </Table.Th>
              <Table.Th className="font-medium">Company</Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Shipping Service
              </Table.Th>
              <Table.Th className="font-medium">Tracking number </Table.Th>
              <Table.Th className="font-medium ">Amount</Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Status{" "}
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.invoice_no}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.date_created}
                </Table.Td>

                <Table.Td className="whitespace-nowrap">
                  {element.company}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.tracking_no}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.amount}
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
                <Table.Td className="cursor-pointer" onClick={open}>
                  <RiErrorWarningLine size={20} />
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

export default InvoiceTable;
