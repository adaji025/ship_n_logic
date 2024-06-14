import { Avatar, Menu } from "@mantine/core";
import Header from "./components/AdminHeader";
import EmptyCustomer from "../../../../assets/svg/customer/empty-customer.svg";
import { SlOptionsVertical } from "react-icons/sl";
import { LuUserCog } from "react-icons/lu";
import { TbUserOff } from "react-icons/tb";
import { TbUserX } from "react-icons/tb";
import { useDisclosure } from "@mantine/hooks";
import EmploymentType from "./components/Modals/EmploymentType";
import SetStartDate from "./components/Modals/SetStartDate";
import UpdatePermission from "./components/Modals/UpdatePermission";
import SuspendAdmin from "./components/Modals/SuspendAdmin";
import DeleteAdmin from "./components/Modals/DeleteAdmin";

const AdminDetails = () => {
  const [opened, { close, open }] = useDisclosure();
  const [showDeleteModal, { close: closeDeleteModal, open: openDeleteModal }] =
    useDisclosure();
  const [
    ShowSuspendModal,
    { close: CloseSuspendModal, open: openSuspendModal },
  ] = useDisclosure();
  const [showUpdateModal, { close: closeUpdateModal, open: openUpdateModal }] =
    useDisclosure();
  const [showDateModal, { close: closeDateModal, open: openDateModal }] =
    useDisclosure();
  return (
    <div>
      <Header />

      <EmploymentType close={close} opened={opened} />
      <SetStartDate close={closeDateModal} opened={showDateModal} />
      <UpdatePermission close={closeUpdateModal} opened={showUpdateModal} />
      <SuspendAdmin close={CloseSuspendModal} opened={ShowSuspendModal} />
      <DeleteAdmin close={closeDeleteModal} opened={showDeleteModal} />
      <div className="flex flex-col md:flex-row gap-6 xl:gap-20">
        <div className="flex-1">
          <div className="flex justify-between relative">
            <div className="font-medium">User Details</div>
            <div className="md:hidden">
              <Menu>
                <Menu.Target>
                  <button>
                    <SlOptionsVertical />
                  </button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<LuUserCog size={16} />}
                    onClick={openUpdateModal}
                  >
                    Update Permissions
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<TbUserOff size={16} />}
                    onClick={openSuspendModal}
                  >
                    Suspend User
                  </Menu.Item>
                  <Menu.Item
                    color="#AA2615"
                    leftSection={<TbUserX size={16} />}
                    onClick={openDeleteModal}
                  >
                    Delete User
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
          <div className="mt-5 bg-white text-[#4F4F4F] p-5 rounded-md flex flex-col items-center  sm:flex-row gap-5">
            <Avatar size="lg" />
            <div className="w-full">
              <div className="flex w-full justify-between gap-5">
                <div>
                  <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                    Employee Name
                  </div>
                  <div className="text-xs font-semibold mt-1">Anna Stone</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                    Phone Number
                  </div>
                  <div className="text-xs font-semibold mt-1">
                    +1 575 539 7358
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-between gap-5 mt-10">
                <div>
                  <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                    Employee Name
                  </div>
                  <div className="text-xs font-semibold mt-1">Anna Stone</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                    Phone Number
                  </div>
                  <div className="text-xs font-semibold mt-1">
                    +1 575 539 7358
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-between gap-5 mt-10">
                <div>
                  <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                    Added by
                  </div>
                  <div className="text-xs font-semibold mt-1">Corey Asbury</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                    Date Added
                  </div>
                  <div className="text-xs font-semibold mt-1">10/01/2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="font-medium rounded-md">Job Details</div>
            <div className="hidden md:block">
              <Menu>
                <Menu.Target>
                  <button>
                    <SlOptionsVertical />
                  </button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<LuUserCog size={16} />}
                    onClick={openUpdateModal}
                  >
                    Update Permissions
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<TbUserOff size={16} />}
                    onClick={openSuspendModal}
                  >
                    Suspend User
                  </Menu.Item>
                  <Menu.Item
                    color="#AA2615"
                    leftSection={<TbUserX size={16} />}
                    onClick={openDeleteModal}
                  >
                    Delete User
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>

          <div className="mt-5 bg-white p-5">
            <div className="flex justify-between">
              <div>
                <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                  Contract Type
                </div>
                <div className="text-xs font-semibold mt-1">
                  Full - Time Employment
                </div>
              </div>
              <button className="text-primary font-semibold" onClick={open}>
                Edit
              </button>
            </div>

            <div className="flex justify-between mt-10">
              <div>
                <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                  Start Date
                </div>
                <div className="text-xs font-semibold mt-1">10/01/2024</div>
              </div>
              <button
                className="text-primary font-semibold"
                onClick={openDateModal}
              >
                Edit
              </button>
            </div>

            <div className="flex justify-between mt-10">
              <div>
                <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                  Permission
                </div>
                <div className="text-xs font-semibold mt-1">Admin</div>
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#4F4F4F]/60">
                  Status
                </div>
                <div className="text-xs font-semibold mt-1 text-[#0A9310]">
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-medium">Documents</div>
        <div className="p-5 rounded-md bg-white mt-5">
          <div className="min-h-[374px] flex flex-col justify-center items-center">
            <img src={EmptyCustomer} alt="" />
            <div className="font-medium mt-3">No Documents Available!!</div>
            <div className="mt-2 text-sm">
              All employee documents will be uploaded here.{" "}
              <span className="text-primary">Upload Document </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
