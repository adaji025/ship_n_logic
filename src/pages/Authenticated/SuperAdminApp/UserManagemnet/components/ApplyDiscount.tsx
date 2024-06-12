import { Button, Modal, Select, TextInput } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const ApplyDiscount = ({ close, opened }: IProps) => {
  return (
    <Modal
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
      onClose={close}
      opened={opened}
      title={
        <div>
          <h2 className="text-xl font-medium">Add Discount</h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            Add a spending limit for user
          </div>
        </div>
      }
    >
      <Select
        size="md"
        mt={4}
        label="Parameter"
        placeholder="Select Parameters"
        leftSection="$"
        data={[
          { label: "Percentage", value: "Percentage" },
          { label: "Fraction", value: "Fraction" },
        ]}
      />
      <TextInput
        size="md"
        mt={14}
        label="Value"
        placeholder="Enter Value"
        rightSection="$"
      />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-primary">
        openDiscountModal
      </Button>
    </Modal>
  );
};

export default ApplyDiscount;
