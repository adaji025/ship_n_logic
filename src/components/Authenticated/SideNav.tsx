import { useLocation, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  DeliveryIcon,
  InvoiceIcon,
  OrderIcon,
  PaymentIcon,
  UserIcon,
} from "./Svg";

interface IProps {
  opened: boolean;
}

const SideNav = ({ opened }: IProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      url: "/",
    },
    {
      name: "Customer Data",
      icon: <UserIcon />,
      url: "/customer",
    },
    {
      name: "Shipping Labels",
      icon: <DeliveryIcon />,
      url: "/shipping",
    },
    {
      name: "Orders & Tracking",
      icon: <OrderIcon />,
      url: "/orders",
    },
    {
      name: "Invoice",
      icon: <InvoiceIcon />,
      url: "/invoice",
    },
    {
      name: "Payment History",
      icon: <PaymentIcon />,
      url: "/payment",
    },
  ];
  return (
    <div className="grid gap-5">
      {data.map((item, index) => (
        <div
          className={`flex items-center gap-5 cursor-pointer p-2 rounded-md text-sm ${
            location.pathname === item.url ? "bg-primary/5 text-primary font-medium" : "text-[#828282]"
          } ${opened ? "w-max" : ""}`}
          onClick={() => navigate(item.url)}
          key={index}
        >
          {item.icon}
          {opened ? null : item.name}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
