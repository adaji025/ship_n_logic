import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa6";
import Logo from "../../../assets/svg/logo.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[528px] h-min w-full rounded-[20px] mt-10 bg-white px-10 pt-5 pb-16 flex flex-col justify-center items-center">
        <img src={Logo} alt="Welcome to Ship N' Logic" />
        <div className="-mt-2 text-center font-medium text-lg">
          Forgot Password
        </div>
        <div className="text-center text-sm font-medium">
          Kindly enter your email
        </div>
        <div className="grid gap-1 mt-10 w-full">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
          />
        </div>
        <Button
          size="lg"
          radius="md"
          className="bg-primary font-light w-full mt-10"
          onClick={() => navigate("/verify-otp")}
        >
          Reset password
        </Button>
        <div className="mt-10 flex gap-3 items-center text-black text-xs font-medium cursor-pointer">
          <FaArrowLeft />
          <div>Back to log in</div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
