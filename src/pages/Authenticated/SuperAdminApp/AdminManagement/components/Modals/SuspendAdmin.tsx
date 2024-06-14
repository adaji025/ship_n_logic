import { Button, Modal, Select } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const SuspendAdmin = ({ close, opened }: IProps) => {
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
          <h2 className="text-xl font-medium">Suspend Admin</h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            Admin will be unable to access their account for a while.
          </div>
        </div>
      }
    >
      <Select
        size="md"
        mt={4}
        label="Duration "
        placeholder="Select Duration"
        data={[
          { label: "3 Weeks", value: "3 Weeks" },
          { label: "4 Weeks", value: "4 Weeks" },
        ]}
      />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-primary">
        Update
      </Button>
    </Modal>
  );
};

export default SuspendAdmin;
