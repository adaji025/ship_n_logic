import { Button, Modal, Select } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const UpdatePermission = ({ close, opened }: IProps) => {
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
          <h2 className="text-xl font-medium">Employment Type</h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            Update Admin Employment Type
          </div>
        </div>
      }
    >
      <Select
        size="md"
        mt={4}
        label="Contract Type"
        placeholder="Select Contract Type"
        data={[
          { label: "Admin", value: "Admin" },
          { label: "Super Admin", value: "Super Admin" },
        ]}
      />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-primary">
        Update
      </Button>
    </Modal>
  );
};

export default UpdatePermission;
