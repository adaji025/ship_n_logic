import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import Logo from "../../../assets/svg/logo.svg";
import { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";

const ResetPassword = () => {
  const [seePw, setSeePw] = useState(false);
  const [seeCpw, setSeeCpw] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[528px] h-min w-full rounded-[20px] mt-10 bg-white px-10 pt-5 pb-16 flex flex-col justify-center items-center">
        <img src={Logo} alt="Welcome to Ship N' Logic" />
        <div className="-mt-2 text-center font-medium text-lg">
          Set a new password
        </div>
        <div className="text-center text-sm font-medium">
          Password must be at least 8 characters
        </div>
        <div className="grid gap-4 w-full mt-10">
          <div>
            <div className="grid gap-1 relative">
              <label className="text-sm text-[#545454]" htmlFor="password">
                Confirm password
              </label>
              <input
                type={seePw ? "text" : "password"}
                placeholder="********"
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
              />
              {seeCpw && (
                <CiLock
                  className="absolute right-2  top-[60%] cursor-pointer"
                  onClick={() => setSeePw(!seePw)}
                />
              )}
              {!seeCpw && (
                <CiUnlock
                  className="absolute right-2  top-[60%] cursor-pointer"
                  onClick={() => setSeePw(!seePw)}
                />
              )}
            </div>
          </div>

          <div>
            <div className="grid gap-1 relative">
              <label className="text-sm text-[#545454]" htmlFor="password">
                Password
              </label>
              <input
                type={seeCpw ? "text" : "password"}
                placeholder="********"
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
              />
              {seeCpw && (
                <CiLock
                  className="absolute right-2  top-[60%] cursor-pointer"
                  onClick={() => setSeeCpw(!seeCpw)}
                />
              )}
              {!seeCpw && (
                <CiUnlock
                  className="absolute right-2  top-[60%] cursor-pointer"
                  onClick={() => setSeeCpw(!seeCpw)}
                />
              )}
            </div>
          </div>
        </div>
        <Button
          size="lg"
          radius="md"
          className="bg-primary font-light w-full mt-10"
          onClick={() =>
            navigate("/success", {
              state: {
                title: "Password changed successfully!",
                text: "Your password has been successfully changed",
                btnText: "Continue to log in",
                route: "/sign-in",
              },
            })
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
