import { Avatar, Button, Switch, TextInput } from "@mantine/core";
import { PiWarningCircleThin } from "react-icons/pi";
import { HiMiniLink } from "react-icons/hi2";
import Header from "./components/Header";
import SuccessIcon from "../../../../assets/svg/success-rough.svg";
import ChangePassword from "./components/ChangePassword";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-end">
        <div className="flex gap-5 items-center">
          <Avatar size="xl" />
          <div>
            <div className="font-medium">Claire Benny</div>
            <div className="font-medium text-sm mt-2">
              clairebenny@gmail.com
            </div>
          </div>
        </div>
        <div className="font-medium text-sm text-primary">Upload image</div>
      </div>
      <div className="py-5 px-10 bg-white rounded-xl mt-10">
        <div className="font-medium">Personal Information</div>
        <div className="mt-5 grid gap-y-5 gap-x-20 sm:grid-cols-2">
          <TextInput
            size="md"
            label="First name"
            placeholder="Enter First Name"
          />
          <TextInput
            size="md"
            label="Last name"
            placeholder="Enter Last Name"
          />
          <TextInput size="md" label="Email" placeholder="Enter Email" />
          <TextInput
            size="md"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />
        </div>
      </div>

      <Button size="md" className="bg-primary px-10 my-5">
        Update profile
      </Button>

      <ChangePassword />

      <div className="py-5 px-10 bg-white rounded-xl mt-10">
        <div className="font-medium">Notification</div>

        <div className="mt-5 grid gap-y-5 gap-x-20 sm:grid-cols-2">
          <div className="flex-1 flex gap-5 justify-between">
            <div>In-app Notification</div>
            <Switch defaultChecked />
          </div>
          <div className="flex-1 flex gap-5 justify-between">
            <div>Email Notification</div>
            <Switch defaultChecked />
          </div>
        </div>

        <div className="mt-10 grid gap-y-5 gap-x-20 sm:grid-cols-2">
          <div>
            <div className="inline pr-3">
              Business verfication{" "}
              <PiWarningCircleThin size={20} className="inline" />
            </div>
            <div className="inline-flex gap-3 items-center mt-3 rounded-lg text-primary font-medium px-10 py-2 bg-[#2A76C31A]/10">
              <img src={SuccessIcon} alt="" />
              <div>Verify your Business</div>
            </div>
          </div>
          <div>
            <div className="inline">Link Status </div>
            <div className="flex justify-between sm:justify-start gap-5 items-center">
              <div className="text-[#828282] font-medium">Not Linked</div>
              <div className="inline-flex gap-3 items-center mt-3 rounded-lg text-primary font-medium px-10 py-2 bg-[#2A76C31A]/10">
                <HiMiniLink size={20} />
                <div>Link with Sage 300</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
