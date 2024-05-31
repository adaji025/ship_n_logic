import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import PaymentIcons from "../../../assets/svg/pay-icons.svg";
import Logo from "../../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
const PaymentOption = () => {
  const [checked, setChecked] = useState("now");
  const navigate = useNavigate()

  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[1000px] w-full h-min mt-10 rounded-[10px] bg-white px-10 pt-5 pb-20 flex flex-col justify-center">
        <div className="mt-5 font-medium text-lg">
          Choose payment preference
        </div>
        <div className="text-xs mt-2">
          Click to select the most preferred payment method
        </div>

        <div className="mt-10 flex justify-between gap-10 w-[80%] mx-auto">
          <div
            className="border rounded-xl p-5 flex-1 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setChecked("now")}
          >
            <img src={PaymentIcons} alt="" />
            <div className="mt-5 text-sm">Immediate Payment on purchase</div>
            {checked === "now" && (
              <div className="flex gap-2 items-center mt-3">
                <div className="flex justify-center text-xs items-center bg-[#4CAF50] p-1 rounded-full">
                  <IoCheckmarkOutline size={10} color="white" />
                </div>
                <div className="text-[10px] font-medium">Selected</div>
              </div>
            )}
          </div>
          <div
            className="border rounded-xl p-5 flex-1 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setChecked("monthly")}
          >
            <img src={Logo} alt="" />
            <div className="mt-5 text-sm">Monthly Invoice</div>
            {checked === "monthly" && (
              <div className="flex gap-2 items-center mt-3">
                <div className="flex justify-center text-xs items-center bg-[#4CAF50] p-1 rounded-full">
                  <IoCheckmarkOutline size={10} color="white" />
                </div>
                <div className="text-[10px] font-medium">Selected</div>
              </div>
            )}
          </div>
        </div>

        <Button
          disabled
          size="lg"
          radius="md"
          className="bg-primary font-light w-1/2 mx-auto mt-10"
          onClick={() => navigate("/link")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PaymentOption;
