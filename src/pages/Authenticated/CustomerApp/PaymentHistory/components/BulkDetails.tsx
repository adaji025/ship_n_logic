import { Button, Divider, Drawer } from "@mantine/core";
import Logo from "../../../../../assets/svg/logo-2.svg";

interface IProps {
  opened: boolean;
  close: () => void;
}

const BulkDetails = ({ close, opened }: IProps) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <div className="flex items-center">
            <img src={Logo} alt="" />
            <div>
              <div className="font-medium">Ship N’ Logic </div>
              <div className="mt-2">Transaction Receipt</div>
            </div>
          </div>
        }
        position="right"
        size="lg"
      >
        <Divider />

        <div className="mt-10 flex gap-5 justify-between text-sm">
          <div className="w-[60%] grid gap-3">
            <div>Receipt Number</div>
            <div>Receipt Number</div>
            <div>Transaction Status</div>
            <div>Transaction Type</div>
          </div>
          <div className="flex-1 grid gap-3">
            <div className="font-medium">1254585422186735</div>
            <div className="font-medium">11/05/2024</div>
            <div>
              <div className="font-medium py-2 px-3 rounded-xl bg-[#0A9310]/5 text-[#0A9310] inline">
                Successful
              </div>
            </div>
            <div className="font-medium">Bulk Payment</div>
          </div>
        </div>

        <div className="mt-10 grid gap-5">
          <div className="flex gap-5 justify-between text-sm">
            <div className="w-[60%] grid gap-3">
              <div>Bill From</div>
              <img src={Logo} alt="" />
              <div className="font-medium">Ship N’ Logic</div>
              <div className="w-[60%]">4567 Main Street, New York</div>
              <div>+1 685 522 368</div>
              <div>shipnlogic@gmail.com</div>
            </div>
            <div className="flex-1 grid gap-3">
              <div>Bill To</div>
              <img src={Logo} alt="" />
              <div className="font-medium">VistaPeak Technologies</div>
              <div className="flex-1">1234 Main Street, Los Angeles</div>
              <div>+1 685 522 368</div>
              <div>vistapeaklogistics@gmail.com</div>
            </div>
          </div>
        </div>

        <Divider mt={40} />

        <div className="mt-6 flex">
          <div className="w-1/2 grid gap-2">
            <div className="mb-3">Invoice Number</div>
            <div className="font-medium">#12546735</div>
            <div className="font-medium">#12546735</div>
            <div className="font-medium">#12546735</div>
            <div className="font-medium">#12546735</div>
          </div>
          <div className="w-1/2 grid gap-2">
            <div className="mb-3">Tracking Number</div>
            <div className="font-medium">TN628808752</div>
            <div className="font-medium">TN628808752</div>
            <div className="font-medium">TN628808752</div>
            <div className="font-medium">TN628808752</div>
          </div>
          <div className="w-1/2 grid gap-2">
            <div className="mb-3">Amount </div>
            <div className="font-medium">#$300</div>
            <div className="font-medium">#$300</div>
            <div className="font-medium">#$300</div>
            <div className="font-medium">#$300</div>
          </div>
        </div>

        <Divider mt={24} />
        <div className="mt-6 flex gap-5 justify-between text-sm">
          <div className="w-[70%] grid gap-3">
            <div className="">Total</div>
          </div>
          <div className="flex-1">
            <div className="font-medium">$1,080</div>
          </div>
        </div>

        <div className="mt-10 flex justify-between gap-5 mx-auto">
          <Button variant="outline" size="md" className="px-16 ">
            Print
          </Button>
          <Button size="md" className="px-10 bg-primary ">
            Download PDF
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default BulkDetails;
