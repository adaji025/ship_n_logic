import { Drawer, Text, Timeline } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const Tracking = ({ close, opened }: IProps) => {
  return (
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={<Text fw={500}>Shipment Tracking</Text>}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <div className="flex justify-between items-center text-sm">
          <div>Tracking Number</div>
          <div>12GTD35</div>
        </div>
        <div className="flex justify-between items-center text-sm mt-3">
          <div>Package Status</div>
          <div className="bg-light  px-3 py-2 rounded-full text-primary font-medium">
            In Transit
          </div>
        </div>

        <div className="mt-5 font-medium">Progress report</div>

        <div className="mt-5 text-sm">
          <Timeline active={2} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="The package has been picked up.">
              <div className="min-h-[100px] mt-2 flex flex-col justify-between text-xs">
                <div className="flex gap-5">
                  <div>30/04/2024</div>
                  <div> 03:52pm</div>
                </div>
                <div className="flex gap-5">
                  <div className="border rounded-full py-1 px-2">Completed</div>
                  <div> 30/04/24</div>
                </div>
              </div>
            </Timeline.Item>

            <Timeline.Item title="The package is in transit.">
              <div className="min-h-[100px] mt-2 flex flex-col justify-between text-xs">
                <div className="flex gap-5">
                  <div>30/04/2024</div>
                  <div> 03:52pm</div>
                </div>
                <div className="flex gap-5">
                  <div className="border rounded-full py-1 px-2">Completed</div>
                  <div> 30/04/24</div>
                </div>
              </div>
            </Timeline.Item>

            <Timeline.Item title="The package is in transit.">
              <div className="min-h-[100px] mt-2 flex flex-col justify-between text-xs">
                <div className="flex gap-5">
                  <div>30/04/2024</div>
                  <div> 03:52pm</div>
                </div>
                <div className="flex gap-5">
                  <div className="border rounded-full py-1 px-2">Completed</div>
                  <div> 30/04/24</div>
                </div>
              </div>
            </Timeline.Item>

            <Timeline.Item title="The package is in transit to it’s final destination.">
              <div className="min-h-[100px] mt-2 flex flex-col justify-between text-xs">
                <div className="flex gap-5">
                  <div>30/04/2024</div>
                  <div> 03:52pm</div>
                </div>
                <div className="flex gap-5">
                  <div className="border rounded-full py-1 px-2">
                    In progress
                  </div>
                  <div> 30/04/24</div>
                </div>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </Drawer>
    </>
  );
};

export default Tracking;
