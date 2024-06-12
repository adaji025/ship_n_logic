import { Button, Modal, Text } from "@mantine/core";

export type IProps = {
  opened: boolean;
  close: () => void;
  btnText: string;
  handleClick: () => void;
  callback?: () => void;
};

const Confirmation = ({ close, handleClick, opened, btnText }: IProps) => {
  return (
    <Modal
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
      opened={opened}
      onClose={close}
      title={
        <Text className="text-black font-semibold text-xl">{btnText}</Text>
      }
    >
      <div className="text-lg font-medium">
        Are you sure you want to{" "}
        <span className="font-semibold">{btnText}</span> ?
      </div>
      <div className="flex justify-end mt-10">
        <Button className="text-primary font-bold" onClick={close}>
          Cancel
        </Button>
        <Button
          className="bg-primary font-bold"
          onClick={handleClick}
        >
          {btnText}
        </Button>
      </div>
    </Modal>
  );
};

export default Confirmation;
