import { Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  opened: boolean;
  close: () => void;
}

const DeleteAdmin = ({ close, opened }: IProps) => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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
            {success ? "" : "Delete Admin Account"}
          </h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            {success ? "" : "This action is permanent and cannot be undone."}
          </div>
        </div>
      }
    >
      {!success && (
        <>
          <TextInput size="md" mt={4} label="Duration" placeholder="Forever" />

          <Button
            mt={32}
            mb={24}
            size="md"
            className="w-full mx-auto bg-[#AA2615] hover:bg-[#AA2615]/90"
            onClick={() => setSuccess(true)}
          >
            Update
          </Button>
        </>
      )}
      
      {success && (
        <>
          <div className="mt-10 text-center font-medium">
            This Admin Account has been deactivated.
          </div>
          <div className="mt-3 text-center max-w-[278px] mx-auto">
            This account is permanently deactivated and deleted.
          </div>

          <div className="flex justify-center">
            <Button
              mt={32}
              mb={40}
              size="md"
              className="w-full mx-auto max-w-[278px] bg-primary"
              onClick={() => navigate("/admin-management")}
            >
              Back To Home
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default DeleteAdmin;
