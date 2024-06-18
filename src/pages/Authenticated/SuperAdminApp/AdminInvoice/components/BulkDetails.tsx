import { Button, Divider, Drawer } from "@mantine/core";
import Logo from "../../../../../assets/svg/logo-2.svg";

interface IProps {
  opened: boolean;
  close: () => void;
  openModal: () => void;
}

const BulkPayment = ({ close, opened, openModal }: IProps) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Invoice Details"
        position="right"
        size="lg"
      >
        <Divider />

        <div className="mt-10 grid gap-5">
          <div className="flex gap-5 justify-between text-sm">
            <div className="w-[60%] grid gap-3">
              <img src={Logo} alt="" />
              <div className="font-medium">Ship N’ Logic</div>
              <div className="w-[60%]">4567 Main Street, New York</div>
              <div>+1 685 522 368</div>
              <div>shipnlogic@gmail.com</div>
            </div>
            <div className="flex-1 grid gap-3">
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

        <div className="mt-10 w-[70%] mx-auto">
          <Button
            size="md"
            className="w-full px-10 bg-primary "
            onClick={() => {
              close();
              openModal();
            }}
          >
            Proceed To Payment
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default BulkPayment;
