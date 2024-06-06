import Header from "./components/HeaderTwo";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { CloseIcon, Select, Switch, TextInput } from "@mantine/core";
import { CgChevronRight } from "react-icons/cg";

const Purchase = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[65%]">
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

          <div className="mt-5 sm:mt-10 bg-white rounded-[5px] p-5 font-medium flex gap-2">
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
                  <div className="text-[#8A8A8A] "></div>
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
        </div>
        <div className="flex-1 bg-white rounded-[5px] p-5"></div>
      </div>
    </div>
  );
};

export default Purchase;
