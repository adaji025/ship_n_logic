import { SlOptionsVertical } from "react-icons/sl";
import { FiEdit3 } from "react-icons/fi";
import Header from "./components/UserHeader";
import Logo from "../../../../assets/svg/logo.svg";
import SuccessIcon from "../../../../assets/svg/success-rough.svg";
import BusinessLicense from "../../../../assets/png/business-license.png";
import BusinessPermit from "../../../../assets/png/business-permit.png";
import { Divider, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  DiscountIcon,
  DollarIcon,
} from "../../../../components/Authenticated/Svg";
import { useDisclosure } from "@mantine/hooks";
import VerificationStatus from "./components/VerificationStatus";
import SpendingLimit from "./components/SpendingLimit";
import ApplyDiscount from "./components/ApplyDiscount";

const UserDetails = () => {
  const [opened, { close, open }] = useDisclosure();
  const [
    discountModal,
    { close: closeDiscountModal, open: openDiscountModal },
  ] = useDisclosure();

  const [limitModal, { close: closeLimitModal, open: openLimitModal }] =
    useDisclosure();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <VerificationStatus close={close} opened={opened} />
      <SpendingLimit close={closeLimitModal} opened={limitModal} />
      <ApplyDiscount close={closeDiscountModal} opened={discountModal} />
      <div className="mt-10">
        <div className="flex justify-between gap-5">
          <div className="font-medium">Business Information</div>
          <Menu shadow="xs">
            <Menu.Target>
              <button className="">
                <SlOptionsVertical />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Menu</Menu.Label>
              <Divider />
              <Menu.Item
                leftSection={<FiEdit3 size={20} color="#2A76C3" />}
                onClick={() => navigate("/business-information")}
              >
                Edit Business Information
              </Menu.Item>
              <Menu.Item
                leftSection={<FiEdit3 size={20} color="#2A76C3" />}
                onClick={open}
              >
                Update Verification Status
              </Menu.Item>
              <Menu.Item leftSection={<DollarIcon />} onClick={openLimitModal}>
                Set Up Spending Limit
              </Menu.Item>
              <Menu.Item
                leftSection={<DiscountIcon />}
                onClick={openDiscountModal}
              >
                Apply Discount
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="mt-5 p-5 bg-white rounded-md">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <img src={Logo} alt="" />
            <div className="flex flex-wrap flex-1 justify-between gap-10">
              <div>
                <div className="font-semibold">
                  <div className="text-[8px]">Company Name</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">
                    VistaPeak Tecnologies
                    <img src={SuccessIcon} alt="" className="inline pl-2" />
                  </div>
                </div>
                <div className="font-semibold mt-10">
                  <div className="text-[8px]">Email</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">
                    vistapeaktech@gmail.com
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold">
                  <div className="text-[8px]">Registration Number</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">
                    RN - 245275629629
                  </div>
                </div>
                <div className="font-semibold mt-10">
                  <div className="text-[8px]">Address</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">
                    1234 Main Street, Los Angeles
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold">
                  <div className="text-[8px]">Tax Identification Number</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">
                    VistaPeak Tecnologies
                  </div>
                </div>
                <div className="font-semibold mt-10">
                  <div className="text-[8px]">Status </div>
                  <div className="text-xs mt-1 text-[#27AE60]">Verified</div>
                </div>
              </div>

              <div>
                <div className="font-semibold">
                  <div className="text-[8px]">Phone Number</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">
                    +1 575 539 7358
                  </div>
                </div>
                <div className="font-semibold mt-10">
                  <div className="text-[8px]">Limit</div>
                  <div className="text-xs mt-1 text-[#4F4F4F]">$5,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 px-6 pb-10 bg-white rounded-md">
          <div className="flex flex-col gap-10 sm:flex-row justify-between xl:w-[90%]">
            <div>
              <div className="font-medium mb-5">Business License</div>
              <img src={BusinessLicense} alt="" />
            </div>
            <div>
              <div className="font-medium mb-5">Business License</div>
              <img src={BusinessPermit} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-5 border text-primary px-5 py-2 w-max font-medium rounded-md">
          Update Business Information
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
