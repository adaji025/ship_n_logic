import { Button, Menu, TextInput } from "@mantine/core";
import Header from "./components/Header";
import { IoChevronDownSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { DeliveryIcon } from "../../../../components/Authenticated/Svg";
import MoneyIcon from "../../../../assets/svg/invoice/money.svg";
import PaidIcon from "../../../../assets/svg/invoice/paid.svg";
import UpaidIcon from "../../../../assets/svg/invoice/unpaid.svg";
import InvoiceTable from "./components/InvoiceTable";
import BulkPayment from "./components/BulkDetails";
import { useDisclosure } from "@mantine/hooks";
import Payment from "../../CustomerApp/ShippingLabels/components/Payement";

const AdminInvoice = () => {
  const [opened, { open, close }] = useDisclosure();
  const [showModal, { close: closeModal, open: openModal }] = useDisclosure();

  const data = [
    {
      name: "Anna Miller",
      email: "annamiller@gmail.com",
      company_name: "VistaPeak",
      label_purchased: "150",
      paid: "$1,080",
      outstanding: "$1,080",
      status: "Unpaid",
    },
    {
      name: "Anna Miller",
      email: "annamiller@gmail.com",
      company_name: "VistaPeak",
      label_purchased: "150",
      paid: "$1,080",
      outstanding: "$1,080",
      status: "Unpaid",
    },
    {
      name: "Anna Miller",
      email: "annamiller@gmail.com",
      company_name: "VistaPeak",
      label_purchased: "150",
      paid: "$1,080",
      outstanding: "$1,080",
      status: "paid",
    },
    {
      name: "Anna Miller",
      email: "annamiller@gmail.com",
      company_name: "VistaPeak",
      label_purchased: "150",
      paid: "$1,080",
      outstanding: "$1,080",
      status: "paid",
    },
  ];
  
  return (
    <div>
      <BulkPayment close={close} opened={opened} openModal={openModal} />
      <Payment opened={showModal} close={closeModal} />
      <Header openbulkPaymentModal={open} />
      <div className="flex gap-5 justify-end mb-4">
        <Button className="md:hidden px-10 bg-primary " onClick={open}>
          Make bulk Payment
        </Button>
        <button className="md:hidden border text-primary border-primary/40 py-2 px-5 rounded-xl text-sm font-medium">
          Export as CSV
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 justify-between mt-5 md:mt-[unset]">
        <div className="flex items-center gap-5">
          <TextInput
            leftSection={<CiSearch />}
            placeholder="Search"
            radius="xl"
            className="bg-transparent w-full sm:w-[unset]"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-5">
          <button className="flex justify-between items-center gap-5 border px-3 py-2 rounded-md">
            <div>May, 2024</div>
            <SlCalender />
          </button>
          <div className="flex gap-2 sm:gap-5">
            <Menu shadow="xs">
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-3 sm:gap-5">
                  <div>Status: All</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Immediate payment purchase</Menu.Item>
                <Menu.Item>Monthly Invoicing</Menu.Item>
                <Menu.Item>Bill to receiver account</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="xs" width={150}>
              <Menu.Target>
                <button className="border py-2 px-2 text-xs rounded-md flex items-center justify-between gap-3 sm:gap-5">
                  <div>Newest to Oldest</div>
                  <IoChevronDownSharp />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Newest</Menu.Item>
                <Menu.Item>Oldest </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 w-full gap-5">
        <div className="p-5 w-full bg-white">
          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center rounded-full bg-[#F0F5FBCC]/80 h-[56px] w-[56px] text-primary">
              <DeliveryIcon />
            </div>
            <div>
              <div className="text-xl font-medium">30</div>
              <div className="text-sm text-[#828282] mt-2">Total Shipping Label purchased</div>
            </div>
          </div>
        </div>

        <div className="p-5 w-full bg-white">
          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center rounded-full bg-[#F0F5FBCC]/80 h-[56px] w-[56px] text-primary">
              <img src={MoneyIcon} alt="Total Expenditure" />
            </div>
            <div>
              <div className="text-xl font-medium">$20,000</div>
              <div className="text-sm text-[#828282] mt-2">
                Total Revenue
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 w-full bg-white">
          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center rounded-full bg-[#F0F5FBCC]/80 h-[56px] w-[56px] text-primary">
              <img src={PaidIcon} alt="Total Paid" />
            </div>
            <div>
              <div className="text-xl font-medium">$20,000</div>
              <div className="text-sm text-[#828282] mt-2">Total Profit </div>
            </div>
          </div>
        </div>

        <div className="p-5 w-full bg-white">
          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center rounded-full bg-[#F0F5FBCC]/80 h-[56px] w-[56px] text-primary">
              <img src={UpaidIcon} alt="Total Unpaid" />
            </div>
            <div>
              <div className="text-xl font-medium">$800</div>
              <div className="text-sm text-[#828282] mt-2">Total Unpaid</div>
            </div>
          </div>
        </div>
      </div>

      <InvoiceTable data={data} />
    </div>
  );
};

export default AdminInvoice;
