import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";

const GetStarted = () => {
  return (
    <div className="app-width mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-medium">Getting Started</h2>
        <div className="mt-3">
          Enjoy Ship N' Logic for your shipping label purchases.
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-5 place-items-center gap-y-10">
        <div className="bg-primary/10 p-5 text-center rounded-full flex flex-col items-center justify-center max-w-[250px] min-h-[250px]">
          <div className="text-primary text-lg font-medium">Sign up</div>
          <div className="mt-3 text-sm">
            Create an account with Ship N’ Logic.
          </div>
        </div>
        <HiOutlineArrowNarrowRight
          size={24}
          color="#1964AF"
          className="hidden lg:inline"
        />
        <HiOutlineArrowNarrowDown
          size={24}
          color="#1964AF"
          className="lg:hidden"
        />
        <div className="bg-primary/10 p-5 text-center rounded-full flex flex-col items-center justify-center max-w-[250px] min-h-[250px]">
          <div className="text-primary text-lg font-medium">
            Sync Ship N' Logic with your software.
          </div>
          <div className="mt-3 text-sm">
            Sync your sales software in just one click.
          </div>
        </div>
        <HiOutlineArrowNarrowRight
          size={24}
          color="#1964AF"
          className="hidden lg:inline"
        />
        <HiOutlineArrowNarrowDown
          size={24}
          color="#1964AF"
          className="lg:hidden"
        />
        <div className="bg-primary/10 p-5 text-center rounded-full flex flex-col items-center justify-center max-w-[250px] min-h-[250px]">
          <div className="text-primary text-lg font-medium">
            Purchase Shipping label
          </div>
          <div className="mt-3 text-sm">
            Enter order number, enter weights and dimensions, and buy the
            shipping label.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
