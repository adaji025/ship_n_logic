import { Button, Modal, Select } from "@mantine/core";
import { useState } from "react";

interface IProps {
  opened: boolean;
  close: () => void;
}

const SuspendAdmin = ({ close, opened }: IProps) => {
  const [success, setSuccess] = useState(1);

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
        success === 1 && (
          <div>
            <h2 className="text-xl font-medium">Suspend Admin</h2>
            <div className="text-sm mt-1 font-medium text-[#333333]">
              Admin will be unable to access their account for a while.
            </div>
          </div>
        )
      }
    >
      {success === 1 && (
        <>
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

          <Button
            mt={32}
            mb={24}
            size="md"
            className="w-full mx-auto bg-primary"
            onClick={() => setSuccess(2)}
          >
            Update
          </Button>
        </>
      )}

      {success === 2 && (
        <>
          <div className="w-[90%] mx-auto">
            <div className="mt-10 text-center font-medium">
              Admin permission has been updated successfully!
            </div>
            <div className="mt-3 text-center max-w-[278px] mx-auto">
              This Admin will be unable to access their account for 3 weeks.
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-8 mb-10 justify-center">
            <Button
              size="md"
              className="w-full mx-auto max-w-[315px] bg-primary"
              onClick={close}
            >
              No, cancel action
            </Button>
            <Button
              size="md"
              variant="outline"
              className="max-w-[315px] w-full mx-auto"
              onClick={() => setSuccess(3)}
            >
              Yes, suspend user
            </Button>
          </div>
        </>
      )}

      {success === 3 && (
        <>
          <div className="w-[90%] mx-auto">
            <div className="mt-10 text-center font-medium">
              This Admin has been suspended.
            </div>
            <div className="mt-3 text-center max-w-[278px] mx-auto">
              Suspension will last for 3 weeks except it is lifted by an admin
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              mt={32}
              mb={40}
              size="md"
              className="w-full mx-auto max-w-[278px] bg-primary"
              onClick={close}
            >
              Back To Home
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default SuspendAdmin;
