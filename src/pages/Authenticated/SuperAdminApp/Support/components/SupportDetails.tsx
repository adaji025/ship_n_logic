import { Button, Modal } from "@mantine/core";
import AttachmentImage from "../../../../../assets/png/attachment.png";

interface IProps {
  opened: boolean;
  close: () => void;
  openShowReply: () => void;
}
const SupportDetails = ({ close, opened, openShowReply }: IProps) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 3,
      }}
      title={<div className="font-medium">Support Details</div>}
      size="lg"
    >
      <div className="text-sm">
        <div className="font-medium">Description</div>
        <div className="mt-2 p-3 bg-light rounded">
          <div className="w-[90%]">
            Lorem ipsum dolor sit amet consectetur. Malesuada et scelerisque
            ornare ullamcorper enim. Imperdiet tellus sapien accumsan nec nunc
            placerat. Sed varius integer neque scelerisque tellus augue eget
            semper. Vulputate sed semper urna volutpat lectus augue nunc.
          </div>
        </div>
        <div className="my-5 font-medium">Attachment</div>
        <img src={AttachmentImage} alt="" />

        <div className="my-10 flex justify-center mx-auto max-w-[315px] ">
          <Button
            size="md"
            variant="outline"
            className="w-full"
            onClick={() => {
              close();
              openShowReply();
            }}
          >
            Reply
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SupportDetails;
