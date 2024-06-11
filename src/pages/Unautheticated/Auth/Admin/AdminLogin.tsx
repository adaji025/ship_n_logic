import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLock, CiUnlock } from "react-icons/ci";
import { Button, Checkbox } from "@mantine/core";
import { BiLogoApple } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../../assets/svg/logo.svg";

const AdminLogin = () => {
  const [seePw, setSeePw] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="auth-bg min-h-screen flex justify-center items-center w-full py-10">
      <div className="max-w-[528px] w-full rounded-[20px] bg-white px-10 py-5 flex flex-col justify-center items-center">
        <img src={Logo} alt="Welcome to Ship N' Logic" />
        <div className="-mt-2 text-center font-medium text-lg">
          Welcome to Ship N' Logic
        </div>

        <div className="grid gap-3 w-full mt-10">
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div>
            <div className="grid gap-1 relative">
              <label className="text-sm text-[#545454]" htmlFor="password">
                Password
              </label>
              <input
                type={seePw ? "text" : "password"}
                placeholder="********"
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
              />
              {seePw && (
                <CiLock
                  className="absolute right-2  top-[60%] cursor-pointer"
                  onClick={() => setSeePw(!seePw)}
                />
              )}
              {!seePw && (
                <CiUnlock
                  className="absolute right-2  top-[60%] cursor-pointer"
                  onClick={() => setSeePw(!seePw)}
                />
              )}
            </div>
            <div className="flex items-center justify-between mt-2">
              <Checkbox label="Remember me" className="text-[#545454]" />
              <div className="text-sm text-[#545454] cursor-pointer"
              onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </div>
            </div>
          </div>

          <Button size="lg" radius="md" className="bg-primary mt-3 font-light">
            Log in
          </Button>

          <div className="mt-5 text-center">OR</div>

          <div className="mt-5 grid gap-5 pb-10">
            <div className="border w-full p-4 rounded-md flex gap-3 text-sm font-medium justify-center items-center">
              <div>Continue with Google</div>
              <FcGoogle size={20} />
            </div>
            <div className="border w-full p-4 rounded-md flex gap-3 text-sm font-medium justify-center items-center">
              <div>Continue with Apple</div>
              <BiLogoApple size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
