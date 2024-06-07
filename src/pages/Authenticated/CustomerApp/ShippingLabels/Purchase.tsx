import Header from "./components/HeaderTwo";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import {
  Button,
  Checkbox,
  CloseIcon,
  Menu,
  Radio,
  Select,
  Switch,
  TextInput,
} from "@mantine/core";
import { CgChevronRight } from "react-icons/cg";
import { IoChevronDownSharp } from "react-icons/io5";
import UpsIcon from "../../../../assets/svg/labels/ups.svg";
import { DateInput } from "@mantine/dates";
// import DownloadLabels from "./components/DownloadLabels";
import { useDisclosure } from "@mantine/hooks";
import Payment from "./components/Payement";

const Purchase = () => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <div>
      <Payment close={close} opened={opened} />
      <Header />
      <div className="flex flex-col items-start md:flex-row gap-10">
        <div className="md:w-[62%]">
          <div className="bg-white rounded-[5px] p-5">
            <h3 className="font-medium">Customer Information</h3>
            <div className="mt-5 flex flex-col sm:flex-row justify-between">
              <div className="text-sm sm:w-[60%]">
                <div className="text-dark-gray">Name</div>
                <div className="mt-3 font-medium">Gretchen Mango</div>
              </div>
              <div className="text-sm flex-1">
                <div className="flex justify-between items-start">
                  <div className="text-dark-gray">Email</div>
                  <div className="cursor-pointer text-primary">Add email</div>
                </div>
                <div className="mt-3 font-medium">gretchenmango@gmail.com</div>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-between">
              <div className="text-sm sm:w-[60%]">
                <div className="text-dark-gray">Address</div>
                <div className="mt-3 font-medium">
                  1234 Main Street, Los Angeles, CA 90001{" "}
                </div>
              </div>
              <div className="text-sm flex-1">
                <div className="text-dark-gray">Phone Number</div>
                <div className="mt-3 font-medium">+1 657 452 654</div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 bg-white rounded-[5px] p-5 text-sm">
            <div className="flex justify-between">
              <div className="text-base">
                Exception Alert Email <RiErrorWarningLine className="inline" />
              </div>
              <div className="cursor-pointer text-primary whitespace-nowrap">
                Add email
              </div>
            </div>
            <div className="text-dark-gray font-medium text-sm mt-2 sm:ml-3">
              clairebenny24@gmail.com
            </div>
            <div className="inline mt-3 sm:ml-3">
              gretchenmango@gmail.com{" "}
              <IoIosClose color="red" className="inline" />
            </div>
          </div>

          <div className="mt-5 sm:mt-10 bg-white rounded-[5px] p-5 font-medium flex items-center gap-2">
            <div>Shipment Outside USA</div>
            <Switch size="xs" />
          </div>

          <div className="mt-5 sm:mt-10 bg-white rounded-[5px] p-5 font-medium">
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Package Information</h3>
                <div className="cursor-pointer text-primary whitespace-nowrap text-sm">
                  Add package
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Length</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Width</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Height</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Weight</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-10">
                <h3 className="font-medium">Package 2 Information</h3>
                <div className="h-6 w-6">
                  <CloseIcon color="red" />
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Length</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Width</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Height</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
                <div className="sm:max-w-[262px] w-full text-sm">
                  <div className="text-[#8A8A8A] ">Weight</div>
                  <div className="mt-3 border rounded-md w-full flex">
                    <div className="w-5/6 py-2 px-3 border-r">12</div>
                    <div className="flex-1 p-2 flex items-center gap-5">
                      <div>IN</div>
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-medium">Billing Information</h3>
              <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
                <div className="sm:max-w-[262px] w-full text-sm">
                  <Select
                    label="Bill to"
                    data={[{ value: "receiver", label: "Receiver" }]}
                  />
                </div>
                <div className="sm:max-w-[262px] w-full text-sm">
                  <TextInput label="Receiver Account Number" />
                </div>
              </div>
              <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
                <div className="sm:max-w-[262px] w-full text-sm">
                  <TextInput label="Receiver Account Name" />
                </div>
                <div className="sm:max-w-[262px] w-full text-sm">
                  <TextInput label="Bank Name" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 bg-white rounded-[5px] p-5">
            <div className="flex items-center gap-2">
              <RiErrorWarningLine />
              <div className="font-medium">Freight Information</div>
              <Switch size="xs" />
            </div>
            <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
              <div className="sm:max-w-[262px] w-full text-sm">
                <Select
                  label="Shipping Services"
                  placeholder="Select a shipping service"
                  data={[{ value: "receiver", label: "Receiver" }]}
                />
              </div>
              <div className="sm:max-w-[262px] w-full text-sm">
                <Select
                  placeholder="Select class of Shipment"
                  label="Class of Shipment"
                  data={[{ value: "receiver", label: "Receiver" }]}
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-10">
              <div className="sm:max-w-[262px] w-full text-sm">
                <div className="text-[#8A8A8A] ">Pieces shipped as</div>
                <div className="mt-3 border rounded-md w-full flex">
                  <div className="w-5/6 py-2 px-3 border-r">12</div>
                  <div className="flex-1 p-2 flex items-center gap-5">
                    <div>Pallets</div>
                    <CgChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10">
            <div className="flex justify-between">
              <h2 className="font-medium">Shipping Services</h2>
              <Menu shadow="xs">
                <Menu.Target>
                  <button className="border py-2 px-2 rounded-md flex items-center justify-between gap-3 sm:gap-5">
                    <div>Sort by</div>
                    <IoChevronDownSharp />
                  </button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Immediate payment purchase</Menu.Item>
                  <Menu.Item>Monthly Invoicing</Menu.Item>
                  <Menu.Item>Bill to receiver account</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div className="mt-5 bg-white rounded-[5px] p-5 border">
              <div className="flex gap-5 justify-between">
                <div className="flex items-start gap-4">
                  <Radio defaultChecked />
                  <img src={UpsIcon} alt="" />
                  <div>
                    <h3 className="font-medium">UPS Ground</h3>
                    <Checkbox
                      defaultChecked
                      radius="xs"
                      label="Insurance (Up to $100)"
                      mt={12}
                    />
                    <Checkbox
                      defaultChecked
                      radius="xs"
                      label="Tracking"
                      mt={6}
                    />
                  </div>
                </div>

                <div>
                  <div className="font-medium">$320.00 USD</div>
                  <div className="mt-3 text-[#4F4F4F]">2 Business Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[5px] p-5 h-min sticky top-0">
          <div className="font-medium">Shipping Information</div>
          <div className="mt-5 text-sm flex gap-5 justify-between">
            <div className="font-medium">Sub-total</div>
            <div>
              <div className="flex gap-2">
                <div className="text-base font-semibold">$288.00</div>
                <div className="bg-[#27AE600D]/5 p-1 rounded-md text-xs">
                  -10%
                </div>
              </div>
              <div className="line-through text-xs text-[#828282]">$320.00</div>
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-5">
            <div>Total</div>
            <div className="text-base font-semibold">$288.00</div>
          </div>

          <div className="mt-5">
            <DateInput
              valueFormat="DD/MM/YYYY HH:mm:ss"
              label="Shipping Date"
              placeholder="Today’s Date"
            />
          </div>

          <div className="pb-5">
            <Button
              size="lg"
              radius="md"
              className="bg-primary mt-10 font-light w-full"
              onClick={open}
            >
              Buy label
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
