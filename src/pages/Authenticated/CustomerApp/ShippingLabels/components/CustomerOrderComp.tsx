import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const CustomerOrderComp = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2 className="font-medium">Details</h2>
      <div className="grid gap-5 mt-5">
        <div className="grid gap-1">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Customer name
          </label>
          <input
            type="text"
            placeholder="Enter customer name"
            className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Phone number
          </label>
          <input
            type="text"
            placeholder="Enter Phone number "
            className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Country
          </label>
          <select
            // placeholder="Enter Email"
            className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none"
          >
            <option>one</option>
            <option>one</option>
            <option>one</option>
            <option>one</option>
          </select>
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
          <div className="grid gap-1 w-1/2">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="Enter Postal Code"
              className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none w-full"
            />
          </div>
          <div className="grid gap-1 w-1/2">
            <label className="text-sm text-[#545454]" htmlFor="email">
              City
            </label>
            <select className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none w-full">
              <option>one</option>
              <option>one</option>
              <option>one</option>
              <option>one</option>
            </select>
          </div>
        </div>

        <Button
          size="lg"
          radius="md"
          className="bg-primary mt-10 font-light w-full"
          onClick={() => navigate("/shipping-labels/purchase")}
        >
          Buy label
        </Button>
      </div>
    </div>
  );
};

export default CustomerOrderComp;
