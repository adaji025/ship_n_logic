import { Button, Select, TextInput } from "@mantine/core";
import Header from "./components/Header";
import UpsIcon from "../../../../assets/svg/labels/ups.svg";

const MarkUp = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full">
          <div className="max-w-[536px] w-full p-5 rounded-md bg-white shadow">
            <div className="text-sm font-medium">Mark-up value</div>
            <div className="grid gap-3 mt-5">
              <Select
                size="md"
                label="Shipping Company"
                placeholder="Select Shipping Company"
                data={[
                  { label: "Ups Ground", value: "Ups Ground" },
                  { label: "GIG", value: "GIG" },
                ]}
              />
              <Select
                size="md"
                label="Parameters"
                placeholder="Select Parameters"
                data={[
                  { label: "Percentage", value: "Percentage" },
                  { label: "Meters", value: "Meters" },
                ]}
              />
              <TextInput
                size="md"
                label="Amount"
                placeholder="Enter Amount"
                right="%"
              />
            </div>
          </div>

          <Button
            size="md"
            className="bg-primary px-8 mt-5 max-w-[227px] w-full"
          >
            Update
          </Button>
        </div>

        <div className="md:max-w-[280px] w-full">
          <div className="text-lg font-medium">Mark-up Infomation</div>
          <div className="grid gap-5 mt-5">
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-2">
                <img src={UpsIcon} alt="" />
                <div className="font-medium">UPS Ground</div>
              </div>
              <div className="text-sm font-medium">20%</div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-2">
                <img src={UpsIcon} alt="" />
                <div className="font-medium">UPS Ground</div>
              </div>
              <div className="text-sm font-medium">20%</div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-2">
                <img src={UpsIcon} alt="" />
                <div className="font-medium">UPS Ground</div>
              </div>
              <div className="text-sm font-medium">20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkUp;
