import { Button, Modal, TextInput } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const DeleteAdmin = ({ close, opened }: IProps) => {
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
          <h2 className="text-xl font-medium text-[#AA2615]">
            Delete Admin Account
          </h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            This action is permanent and cannot be undone.
          </div>
        </div>
      }
    >
      <TextInput size="md" mt={4} label="Duration" placeholder="Forever" />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-[#AA2615] hover:bg-[#AA2615]/90">
        Update
      </Button>
    </Modal>
  );
};

export default DeleteAdmin;
