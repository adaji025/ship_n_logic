import { Button } from "@mantine/core";
import Logo from "../../../assets/svg/sage-300.svg";
import { useNavigate } from "react-router-dom";

const Link = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[500px] w-full h-min mt-10 rounded-[20px] bg-white px-10 pt-5 pb-20 flex flex-col justify-center items-center">
        <div className="mt-5 text-center font-medium text-lg">
          Link your Sage 300 account
        </div>

        <img src={Logo} alt="Welcome to Ship N' Logic" className="mt-10" />

        <Button
          size="md"
          radius="md"
          className="bg-primary font-light w-[80%] mx-auto mt-10"
          onClick={() => navigate("/progress")}
        >
          Link
        </Button>
        <Button
          variant="outline"
          size="md"
          radius="md"
          className="font-light w-[80%] mx-auto mt-10 text-primary"
        >
          Skip
        </Button>
      </div>
    </div>
  );
};

export default Link;
