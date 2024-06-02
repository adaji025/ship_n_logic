import { Table } from "@mantine/core";

const DashboardTable = () => {
  const data = [
    {
      location: "Hawaii",
      labels: 135,
      expenses: "$20,000",
    },
    {
      location: "New York",
      labels: 125,
      expenses: "$20,000",
    },
    {
      location: "Los Angeles",
      labels: 115,
      expenses: "$200,000",
    },
  ];
  return (
    <div>
      <Table className="table-fixed">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Location</Table.Th>
            <Table.Th>Shipping Labels Purchased</Table.Th>
            <Table.Th className="text-right">Expenses</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((element) => (
            <Table.Tr key={element.location}>
              <Table.Td>{element.location}</Table.Td>
              <Table.Td>{element.labels}</Table.Td>
              <Table.Td className="text-right">{element.expenses}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default DashboardTable;
