import { Button, Modal } from "@mantine/core";
import LabelImage from "../../../../../assets/png/Label.png";

interface IProps {
  opened: boolean;
  close: () => void;
}

const DownloadLabels = ({ close, opened }: IProps) => {
  return (
    <Modal
      onClose={close}
      opened={opened}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <img src={LabelImage} alt="" />
      <Button
        size="lg"
        radius="md"
        className="bg-primary mt-10 mb-5 font-light w-full"
        onClick={() => {}}
      >
        Download
      </Button>
    </Modal>
  );
};

export default DownloadLabels;
