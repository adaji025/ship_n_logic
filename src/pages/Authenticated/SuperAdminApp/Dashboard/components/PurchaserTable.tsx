import { Table } from "@mantine/core";

interface IProps {
  data: {
    name: string;
    email: string;
    label: string;
    total_exp: string;
    date_joined: string;
  }[];
}

const PurchaseTable = ({ data }: IProps) => {
  return (
    <div className="mt-10">
      <div className="font-medium">Top Shipping Label purchaser</div>
      <div className="overflow-x-auto text-sm mt-5">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-dark-gray font-medium">
              <Table.Th className="whitespace-nowrap font-medium">
                Name
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Email
              </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Shipping label purchased
              </Table.Th>
              <Table.Th className="font-medium whitespace-nowrap">
                Total Expenditure
              </Table.Th>
              <Table.Th className="whitespace-nowrap font-medium">
                Date joined
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
                  {element.label}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.total_exp}
                </Table.Td>
                <Table.Td className="whitespace-nowrap">
                  {element.date_joined}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default PurchaseTable;
