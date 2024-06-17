import { Pagination, Select, Table } from "@mantine/core";
import { RiErrorWarningLine } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import SupportDetails from "./SupportDetails";
import Reply from "./Reply";

interface IProps {
  data: {
    support_id: string;
    date_submitted: string;
    user: string;
    email: string;
    category: string;
    status: string;
  }[];
}

const SupportTable = ({ data }: IProps) => {
  const [opened, { open, close }] = useDisclosure();
  const [showReply, { open: openShowReply, close: closeShowReply }] =
    useDisclosure();

  return (
    <div className="mt-10">
      <SupportDetails
        opened={opened}
        close={close}
        openShowReply={openShowReply}
      />
      <Reply close={closeShowReply} opened={showReply} />
      <div className="overflow-x-auto text-sm">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Support ID
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Date submitted
              </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                User
              </Table.Th>
              <Table.Th className="font-medium">Email</Table.Th>
              <Table.Th className="font-medium">Category</Table.Th>
              <Table.Th className="font-medium">Status </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="bg-white text-dark-200">
            {data.map((element, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  {element.support_id}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.date_submitted}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.user}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.email}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.category}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  <button
                    className={`px-2 py-1 rounded-2xl capitalize min-w-[94px] bg-primary-green/5 font-medium ${
                      element.status === "Resolved"
                        ? "text-[#0A9310]"
                        : "text-[#F79E1B]"
                    }`}
                  >
                    {element.status}
                  </button>
                </Table.Td>
                <Table.Td>
                  <RiErrorWarningLine size={20} onClick={open} className="cursor-pointer" />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-center mt-10 overflow-auto">
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

export default SupportTable;
