import { Divider, Popover, ScrollArea } from "@mantine/core";
import NotificationIcon from "../../assets/svg/notification.svg";
import {
  getAdminNotification,
  getNotification,
} from "../../services/notification";
import { useEffect, useState } from "react";
import useNotification from "../../hooks/useNotification";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NotificationTypes } from "../../types/notification";

const Notification = () => {
  const { userData } = useSelector((state: RootState) => state.user.user);
  const [notification, setNotification] = useState<NotificationTypes[]>([]);

  useEffect(() => {
    handleGetNotification();
    handleGetAdminNotification();
  }, []);

  const { handleError } = useNotification();

  const handleGetNotification = () => {
    userData?.permission === "USER" &&
      getNotification()
        .then((res: any) => setNotification(res.data.data.notifications))
        .catch((err: any) => {
          handleError(err);
        });
  };

  const handleGetAdminNotification = () => {
    userData?.permission !== "USER" &&
      getAdminNotification()
        .then((res: any) => setNotification(res.data.data.notifications))
        .catch((err: any) => {
          handleError(err);
        });
  };

  return (
    <Popover width={400} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <button>
          <img src={NotificationIcon} alt="" />
        </button>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea h={notification.length > 3 ? 400 : 200} pr={16}>
          <div className="flex justify-between gap-5 mb-3 mt-2">
            <div className="font-semibold text-sm">Notifications</div>
            <div className="text-sm font-medium text-primary">
              Mark all as read !!!!!
            </div>
          </div>
          <Divider />
          {notification.length < 1 && (
            <div className="flex capitalize font-medium justify-center items-center mt-5 text-sm">
              You have no notification
            </div>
          )}
          {notification.map((_, index) => (
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
