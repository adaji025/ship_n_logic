import { Button } from '@mantine/core'

const OrderIDComp = () => {
  return (
    <div>
      <h2 className="font-medium">Enter Order ID</h2>
        <div className="grid gap-1 mt-5">
          <label className="text-sm text-[#545454]" htmlFor="email">
            Order ID
          </label>
          <input
            type="text"
            placeholder="Enter Order ID"
            className="py-3 px-4 bg-[#F8F9FD] rounded-xl outline-none"
          />
        </div>
        <Button
          size="lg"
          radius="md"
          className="bg-primary mt-10 font-light w-full"
          onClick={() => {}}
        >
          Buy label
        </Button>
    </div>
  )
}

export default OrderIDComp
