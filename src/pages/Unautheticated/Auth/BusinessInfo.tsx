import { useRef, useState } from "react";
import Logo from "../../../assets/svg/logo.svg";

import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";

const BusinessInfo = () => {
  const [licence, setLicence] = useState<FileList | null>(null);
  const [permit, setPermit] = useState<FileList | null>(null);

  const licenceRef = useRef<HTMLInputElement>(null);
  const permitRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleOpenLicense = () => {
    if (licenceRef.current) {
      licenceRef.current.click();
    }
  };
  const handleOpenPermit = () => {
    if (permitRef.current) {
      permitRef.current.click();
    }
  };

  return (
    <div className="auth-bg min-h-screen flex justify-center items-center w-full py-10">
      <div className="max-w-[528px] w-full rounded-[20px] bg-white px-10 py-5 flex flex-col justify-center items-center">
        <img src={Logo} alt="Welcome to Ship N' Logic" />
        <div className="-mt-3 text-center font-medium text-lg">
          Verify your business
        </div>
        <div className="text-center text-sm font-medium">
          Complete the fields to verify your business.
        </div>
        <div className="grid gap-3 w-full mt-10">
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Registration Number
            </label>
            <input
              type="text"
              placeholder="Enter Registration Number"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Company Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Company Phone number
            </label>
            <input
              type="text"
              placeholder="Enter Phone number"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Company Address
            </label>
            <input
              type="text"
              placeholder="Enter Company Address"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Tax Identification Number
            </label>
            <input
              type="text"
              placeholder="Enter Tax ID Number"
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="grid gap-1 relative">
            <label className="text-sm text-[#545454]" htmlFor="password">
              Upload Business License
            </label>
            <input
              type={"file"}
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
              hidden
              ref={licenceRef}
              onChange={(e) => setLicence(e.target.files)}
              accept="image/*,.pdf"
            />
            <div
              className="py-3.5 px-4 bg-[#F8F9FD] rounded-md outline-none"
              onClick={handleOpenLicense}
            >
              {!licence ? "Business Licence" : licence[0].name}
            </div>
            <LuUpload className="absolute right-2  top-[60%] cursor-pointer" />
          </div>

          <div className="grid gap-1 relative">
            <label className="text-sm text-[#545454]" htmlFor="password">
              Upload Business Permit
            </label>
            <input
              type={"file"}
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
              hidden
              ref={permitRef}
              onChange={(e) => setPermit(e.target.files)}
              accept="image/*,.pdf"
            />
            <div
              className="py-3.5 px-4 bg-[#F8F9FD] rounded-md outline-none"
              onClick={handleOpenPermit}
            >
              {!permit ? "Business Permit" : permit[0].name}
            </div>
            <LuUpload className="absolute right-2  top-[60%] cursor-pointer" />
          </div>

          <Button
            size="lg"
            radius="md"
            className="bg-primary mt-3 font-light"
            onClick={() =>
              navigate("/success", {
                state: {
                  title: "Your information has been submitted.",
                  text: "Yo will receive an email once your business has been verified.",
                  btnText: "Proceed to Dashboard",
                  route: "/",
                },
              })
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
