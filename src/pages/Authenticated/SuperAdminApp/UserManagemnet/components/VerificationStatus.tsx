import { Button, Modal, Select } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const VerificationStatus = ({ close, opened }: IProps) => {
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
          <h2 className="text-xl font-medium">Update Status</h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            Update user status
          </div>
        </div>
      }
    >
      <Select
        size="md"
        mt={4}
        label="Status"
        placeholder="Select Status"
        data={[
          { label: "Verified", value: "verified" },
          { label: "Pending", value: "pending" },
        ]}
      />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-primary">
        Update Status
      </Button>
    </Modal>
  );
};

export default VerificationStatus;
