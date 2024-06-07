import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import MasterCardIcon from "../../../../../assets/svg/labels/master-card.svg";
import VerveIcon from "../../../../../assets/svg/labels/verve.svg";
import VisaIcon from "../../../../../assets/svg/labels/visa.svg";
import BankIcon from "../../../../../assets/svg/labels/bank.svg";
import PaypalIcon from "../../../../../assets/svg/labels/PayPal-Logo 1.svg";

interface IProps {
  opened: boolean;
  close: () => void;
}

const Payment = ({ close, opened }: IProps) => {
  const [checked, setChecked] = useState("now");
  return (
    <Modal
      onClose={close}
      opened={opened}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      size="xl"
      title="Choose payment method"
    >
      <div className="grid grid-cols-3 gap-5 max-w-[800px] w-full mt-5 p-5">
        <div
          className={`min-h-[170px] cursor-pointer border rounded-[20px] p-5 flex flex-col justify-center items-center ${
            checked === "card" ? "border-primary" : ""
          }`}
          onClick={() => setChecked("card")}
        >
          <div className="flex justify-center gap-3">
            <img src={MasterCardIcon} alt="" />
            <img src={VisaIcon} alt="" />
            <img src={VerveIcon} alt="" />
          </div>
          <div className="mt-5 text-center font-medium">Pay with card</div>
          <div className="mt-3 flex gap-2 jusetify-center items-center text-[10px]">
            <FaCheckCircle color="#4CAF50" />
            <div className="font-medium">Preferred</div>
          </div>
        </div>
        <div
          className={`min-h-[170px] cursor-pointer border rounded-[20px] p-5 flex flex-col items-center ${
            checked === "bank transfer" ? "border-primary" : ""
          }`}
          onClick={() => setChecked("bank transfer")}
        >
          <img src={BankIcon} alt="" className="mt-5" />
          <div className="mt-5 text-center font-medium">Bank Transfer</div>
        </div>
        <div
          className={`min-h-[170px] cursor-pointer border rounded-[20px] p-5 flex flex-col items-center ${
            checked === "paypal" ? "border-primary" : ""
          }`}
          onClick={() => setChecked("paypal")}
        >
          <img src={PaypalIcon} alt="" className="mt-5" />
          <div className="mt-5 text-center font-medium">Pay with Paypal</div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <Button
          size="lg"
          radius="md"
          className="bg-primary mt-10 mb-5 font-light w-2/3 mx-auto"
          onClick={() => {}}
        >
          Next
        </Button>
        <div className="mb-5 text-center font-medium">Powered by Stripe</div>
      </div>
    </Modal>
  );
};

export default Payment;
