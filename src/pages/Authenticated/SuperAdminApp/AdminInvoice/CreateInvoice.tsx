import { Button } from "@mantine/core";
import Header from "./components/HeaderTwo";

const CreateInvoice = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 max-w-[860px] mx-auto w-full bg-white p-5 rounded-md">
        <div className="font-medium">Details</div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5">
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Bills From
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Bills From
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Sender’s Address
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Reciever’s Address
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Sender’s Phone Number
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Receiver’s Phone Number
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Sender’s Email
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Receiver’s Email
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Issued On
            </label>
            <input
              type="date"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Due On
            </label>
            <input
              type="date"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>

          <div className="grid gap-1"></div>
        </div>

        <div className="font-medium mt-5">Details</div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5">
          <div className="grid gap-1">
            <label className="text-sm text-[#545454]" htmlFor="email">
              Bills From
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
            />
          </div>
          <div className="flex justify-end">
            <div className="grid gap-1">
              <label className="text-sm text-[#545454]" htmlFor="email">
                Price
              </label>
              <input
                type="text"
                placeholder="Type here..."
                className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none"
              />
            </div>
          </div>
        </div>

        <button className="font-medium block text-sm text-primary mt-3">
          + Add Item
        </button>

        <div className="grid gap-1 mt-5">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Bills From
          </label>
          <textarea className="py-3 px-4 bg-[#F8F9FD] rounded-md outline-none w-full"></textarea>
        </div>

        <Button size="md" className="w-full bg-primary mt-5">Generate Invoice</Button>
      </div>
    </div>
  );
};

export default CreateInvoice;
