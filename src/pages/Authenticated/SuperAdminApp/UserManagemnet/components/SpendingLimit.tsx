import { Button, Modal, Select } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const SpendingLimit = ({ close, opened }: IProps) => {
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
          <h2 className="text-xl font-medium">Add Spending Limit</h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            Add a spending limit
          </div>
        </div>
      }
    >
      <Select
        size="md"
        mt={4}
        label="Status"
        placeholder="Select Limit"
        leftSection="$"
        data={[
          { label: "500", value: "500" },
          { label: "5,000", value: "5000" },
          { label: "10,000", value: "10000" },
        ]}
      />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-primary">
        Update
      </Button>
    </Modal>
  );
};

export default SpendingLimit;
