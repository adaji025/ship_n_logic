import { Button, PinInput } from "@mantine/core";
import Logo from "../../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[450px] w-full h-min mt-10 rounded-[20px] bg-white px-10 pt-5 pb-20 flex flex-col justify-center items-center">
        <img src={Logo} alt="Welcome to Ship N' Logic" />
        <div className="-mt-2 text-center font-medium text-lg">
          Verify your account
        </div>
        <div className="text-center text-sm font-medium">
          We sent a code to clairebenny@gmail.com
        </div>
        <PinInput mt={20} size="xl" inputMode="numeric" />

        <div className="text-center text-sm font-medium mt-3">
          Didn’t receive an OTP?
          <span className="text-primary cursor-pointer"> Resend OTP</span>
        </div>

        <Button
          size="md"
          radius="md"
          className="bg-primary font-light w-[80%] mx-auto mt-10"
          onClick={() => navigate("/reset-password")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default VerifyOtp;
