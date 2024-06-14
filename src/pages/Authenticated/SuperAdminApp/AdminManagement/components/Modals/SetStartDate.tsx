import { Button, Modal } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

interface IProps {
  opened: boolean;
  close: () => void;
}

const SetStartDate = ({ close, opened }: IProps) => {
  const [value, setValue] = useState<Date | null>(null);

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
          <h2 className="text-xl font-medium">Update Profile</h2>
          <div className="text-sm mt-1 font-medium text-[#333333]">
            Update Admin Profile
          </div>
        </div>
      }
    >
      <DateInput
        value={value}
        onChange={setValue}
        label="Date input"
        placeholder="Date input"
      />

      <Button mt={32} mb={24} size="md" className="w-full mx-auto bg-primary">
        Update
      </Button>
    </Modal>
  );
};

export default SetStartDate;
