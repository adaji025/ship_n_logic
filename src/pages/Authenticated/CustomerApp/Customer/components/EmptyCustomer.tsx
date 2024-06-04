import { useDisclosure } from "@mantine/hooks";
import EmptyIcon from "../../../../../assets/svg/customer/empty-customer.svg";
import { Fragment } from "react";
import LinkModal from "./LinkModal";
const EmptyCustomer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <LinkModal close={close} opened={opened} />
      <div className="max-w-[1000px] mx-auto rounded-[16px] bg-white px-10 py-20 mt-20 flex justify-center">
        <div>
          <img src={EmptyIcon} alt="" className="mx-auto" />
          <div className="mt-2 font-semibold text-center">
            You do not have any customer data.
          </div>
          <div className="text-center text-sm mt-1">
            {" "}
            <span className="text-primary cursor-pointer">
              Create customer
            </span>{" "}
            or Kindly link with Sage 300 to import customer data.{" "}
            <span className="text-primary cursor-pointer" onClick={open}>
              Link Sage 300
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmptyCustomer;
