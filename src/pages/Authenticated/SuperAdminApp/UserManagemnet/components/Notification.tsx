import { Divider, Popover, ScrollArea } from "@mantine/core";
import NotificationIcon from "../../../../../assets/svg/notification.svg";

const Notification = () => {
  return (
    <Popover width={400} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <button>
          <img src={NotificationIcon} alt="" />
        </button>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea h={400} pr={16}>
          <div className="flex justify-between gap-5 mb-3 mt-2">
            <div className="font-semibold text-sm">Notifications</div>
            <div className="text-sm font-medium text-primary">
              {/* Mark all as read */}
            </div>
          </div>
          <Divider />
          {[...Array(1)].map((_, index) => (
            <div key={index}>
              <div className="flex justify-between items-end my-3">
                <div>
                  <div className="font-medium text-sm">
                    You have a shipment update
                  </div>
                  <div className="mt-2 text-xs">3 min ago</div>
                </div>
                <button className="text-xs font-medium">View</button>
              </div>
              <Divider />
            </div>
          ))}
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Notification;
