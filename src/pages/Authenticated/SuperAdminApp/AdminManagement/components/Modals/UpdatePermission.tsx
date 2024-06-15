import { Button, Modal, Select } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  opened: boolean;
  close: () => void;
}

const UpdatePermission = ({ close, opened }: IProps) => {
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
          <h2 className="text-xl font-medium">
            {success ? "" : "Employment Type"}
          </h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            {success ? "" : "Update Admin Employment Type"}
          </div>
        </div>
      }
    >
      {!success && (
        <>
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

          <Button
            mt={32}
            mb={24}
            size="md"
            className="w-full mx-auto bg-primary"
            onClick={() => setSuccess(true)}
          >
            Update
          </Button>
        </>
      )}

      {success && (
        <>
          <div className="mt-10 text-center font-medium">
            Admin permission has been updated successfully!
          </div>
          <div className="mt-3 text-center max-w-[278px] mx-auto">
            This admin now has Super Admin rights.
          </div>

          <div className="flex justify-center">
            <Button
              mt={32}
              mb={40}
              size="md"
              className="w-full mx-auto max-w-[278px] bg-primary"
              onClick={() => navigate("/admin-details")}
            >
              Back To Home
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default UpdatePermission;
