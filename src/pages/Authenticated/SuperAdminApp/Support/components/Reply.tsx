import { Button, Modal } from "@mantine/core";
import { useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import SuccessImg from "../../../../../assets/svg/done.svg";

interface IProps {
  opened: boolean;
  close: () => void;
}

const Reply = ({ close, opened }: IProps) => {
  const [success, setSuccess] = useState(false);

  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 3,
      }}
      title={<div className="font-medium">{success && "Reply"} </div>}
      size={success ? "lg" : "md"}
    >
      {success && (
        <div className="text-sm">
          <div className="font-medium">Description</div>
          <div className="grid gap-2 mt-5">
            <div className="font-medium">Reply to</div>
            <div className="bg-light p-3 rounded-md w-full">
              annamiller@gmail.com
            </div>
          </div>
          <div className="grid gap-2 mt-5">
            <div className="font-medium">Title</div>
            <div className="bg-light p-3 rounded-md w-full">
              Feedback from Support #6283973
            </div>
          </div>
          <div className="grid gap-2 mt-5">
            <div className="flex justify-between">
              <div className="font-medium">Type reply</div>
              <MdOutlineAttachFile color="#2A76C3" size={20} />
            </div>
            <textarea className="bg-light p-3 rounded-md w-full outline-none h-[120px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada et scelerisque
              ornare ullamcorper enim. Imperdiet tellus sapien accumsan nec nunc
              placerat. Sed varius integer neque scelerisque tellus augue eget
              semper. Vulputate sed semper urna volutpat lectus augue nunc.
            </textarea>
          </div>

          <div className="my-10 flex justify-center mx-auto max-w-[315px] ">
            <Button
              size="md"
              variant="outline"
              className="w-full"
              onClick={() => setSuccess(true)}
            >
              Send Reply
            </Button>
          </div>
        </div>
      )}

      <div className="my-20 flex flex-col justify-center items-center">
        <img src={SuccessImg} alt="" />
        <div className="font-semibold text-center mt-5">
          Your reply has been sent.
        </div>

        <button className="text-primary font-medium mt-10" onClick={close}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Reply;
