import { Button, Modal } from "@mantine/core";
import LinkSVG from "../../../../../assets/svg/sage-300.svg";
import ProgressBar from "../../../../../components/Unauthenticated/components/ProgressBar";
import { useState } from "react";

interface IProps {
  opened: boolean;
  close: () => void;
}

const LinkModal = ({ close, opened }: IProps) => {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);

  const startLinking = () => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
      setStart(true);
    }, 100);

    return () => clearInterval(interval);
  };

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {!start && (
          <>
            <div className="text-center font-medium text-xl">
              Link your Sage 300 account
            </div>
            <img src={LinkSVG} alt="" className="mx-auto mt-10" />

            <div className="flex justify-center pb-5">
              <Button
                size="md"
                radius="md"
                className="bg-primary font-light w-[80%] mx-auto mt-10"
                onClick={startLinking}
              >
                Link
              </Button>
            </div>
          </>
        )}

        {start && (
          <div className="w-full pb-5 px-5">
            <div>
              <div className="font-medium text-lg">Ship N' Logicing Data</div>
            </div>
            <div className="text-sm mt-2 font-medium flex justify-between gap-5 mb-5">
              <div className="text-xs">
                Please hold on while this process is ongoing. Do not close this
                window.
              </div>
              <div>{progress}%</div>
            </div>
            <ProgressBar progress={progress} />
            {progress === 100 && (
              <div className="flex justify-center mt-5">
                <div
                  className="py-3 px-10 inline-flex justify-center border rounded-xl text-primary cursor-pointer"
                  onClick={close}
                >
                  Finish
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default LinkModal;
