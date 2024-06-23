import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLock, CiUnlock } from "react-icons/ci";
import { Button, LoadingOverlay } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import Logo from "../../../assets/svg/logo.svg";
import { useForm } from "@mantine/form";
import { userSignUp } from "../../../services/auth";
import { showNotification } from "@mantine/notifications";
import useNotification from "../../../hooks/useNotification";

interface RegisterProps {
  full_name: string;
  email: string;
  exception_alert_email: string;
  password: string;
}

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [seePw, setSeePw] = useState(false);
  const [seeCpw, setSeeCpw] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { handleError } = useNotification();

  const form = useForm({
    initialValues: {
      full_name: "",
      email: "",
      exception_alert_email: "",
      password: "",
      confirm_password: "",
    },
    validate: {
      confirm_password: (value, values) => values.password !== value,
    },
  });

  const handleSubmit = (values: RegisterProps) => {
    setLoading(true);

    userSignUp(values)
      .then(() => {
        showNotification({
          title: "Success",
          color: "green",
          message: "User registration successful",
        });
        navigate("/sign-in");
      })
      .catch((err) => {
        handleError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validatePw = useCallback(() => {
    if (form.values.password !== form.values.confirm_password) {
      setError("Passwords does not match");
    } else {
      setError("");
    }
  }, [form.values.confirm_password]);

  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <div className="auth-bg min-h-screen flex justify-center items-center w-full py-10">
        <div className="max-w-[528px] w-full rounded-[20px] bg-white px-10 py-5 flex flex-col justify-center items-center">
          <img src={Logo} alt="Welcome to Ship N' Logic" />
          <div className="-mt-2 text-center font-medium text-lg">
            Welcome to Ship N' Logic
          </div>
          <div className="text-center text-sm font-medium">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </span>
          </div>
          <form
            className="grid gap-4 w-full mt-10"
            onSubmit={form.onSubmit(handleSubmit)}
          >
            <div className="grid gap-1">
              <label className="text-sm text-[#545454]" htmlFor="name">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter Name"
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
                {...form.getInputProps("full_name")}
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-[#545454]" htmlFor="email">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Enter Email"
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
                {...form.getInputProps("email")}
              />
            </div>
            <div className="grid gap-1">
              <div className="flex justify-between">
                <label className="text-sm text-[#545454]" htmlFor="email">
                  Exception Alert Email
                </label>
                <RiErrorWarningLine />
              </div>
              <input
                type="email"
                placeholder="Enter Email"
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
                {...form.getInputProps("exception_alert_email")}
              />
            </div>

            <div>
              <div className="grid gap-1 relative">
                <label className="text-sm text-[#545454]" htmlFor="password">
                  Confirm password
                </label>
                <input
                  required
                  type={seePw ? "text" : "password"}
                  placeholder="********"
                  className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
                  {...form.getInputProps("password")}
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
                  required
                  type={seeCpw ? "text" : "password"}
                  placeholder="********"
                  className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
                  {...form.getInputProps("confirm_password")}
                  onKeyUp={validatePw}
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
              <div className="text-sm mt-1 text-red-500">{error}</div>
            </div>

            <Button
              type="submit"
              size="lg"
              radius="md"
              className="bg-primary mt-3 font-light"
              // onClick={() => navigate("/verify-account")}
            >
              Create new account
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
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
