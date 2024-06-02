import { Table } from "@mantine/core";

const CustomerTable = () => {
  const data = [
    {
      orderId: "12GTD35",
      name: "Gretchen Mango",
      email: "gretchenmango@gmail.com",
      address: "1234 Main Street, Los Angeles, CA 90001",
      label: "+1 657 452 654",
      status: "purchased",
    },
  ];
  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID </Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Address </Table.Th>
            <Table.Th>Label </Table.Th>
            <Table.Th>Shipping label status </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((element, index) => (
            <Table.Tr key={index}>
              <Table.Td>{element.orderId}</Table.Td>
              <Table.Td>{element.name}</Table.Td>
              <Table.Td>{element.email}</Table.Td>
              <Table.Td>{element.address}</Table.Td>
              <Table.Td>{element.label}</Table.Td>
              <Table.Td>
                <button className="p-2 rounded-2xl">{element.status}</button>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default CustomerTable;
