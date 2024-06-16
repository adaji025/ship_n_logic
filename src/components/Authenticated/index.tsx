import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/svg/logo.svg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import SideNav from "./SideNav";
import { Fragment } from "react";
import { Drawer } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Authenticated/CustomerApp/Dashboard";
import CustomerData from "../../pages/Authenticated/CustomerApp/Customer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { closeModal } from "../../redux/features/modalSlice";
import ShippingLabels from "../../pages/Authenticated/CustomerApp/ShippingLabels";
import Purchase from "../../pages/Authenticated/CustomerApp/ShippingLabels/Purchase";
import OrderTracking from "../../pages/Authenticated/CustomerApp/OrderTracking";
import Profile from "../../pages/Authenticated/CustomerApp/Profile";
import Invoice from "../../pages/Authenticated/CustomerApp/Invoice";
import PaymentHistory from "../../pages/Authenticated/CustomerApp/PaymentHistory";
import { USER_TYPE } from "../../constant";
import AdminDashboard from "../../pages/Authenticated/SuperAdminApp/Dashboard";
import UserManagement from "../../pages/Authenticated/SuperAdminApp/UserManagemnet";
import UserDetails from "../../pages/Authenticated/SuperAdminApp/UserManagemnet/UserDetails";
import BusinessInfo from "../../pages/Authenticated/SuperAdminApp/UserManagemnet/BusinessInfo";
import AdminManagement from "../../pages/Authenticated/SuperAdminApp/AdminManagement";
import AdminDetails from "../../pages/Authenticated/SuperAdminApp/AdminManagement/AdminDetails";
import MarkUp from "../../pages/Authenticated/SuperAdminApp/MarkUp";
import AdminShippingLabel from "../../pages/Authenticated/SuperAdminApp/AdminShippingLabel";

const Authenticated = () => {
  const [opened, { toggle }] = useDisclosure();
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.user.modal.isOpen);
  const close = () => dispatch(closeModal());

  return (
    <Fragment>
      <Drawer opened={isOpen} onClose={close} title="Authentication">
        <SideNav opened={opened} close={close} />
      </Drawer>
      <div className="flex items-start bg-[#F8F9FD]">
        <div
          className={`hidden lg:flex flex-col sticky pb-7 top-0 min-h-screen bg-white w-full px-5 duration-300 ${
            !opened ? "max-w-[270px]" : "max-w-[100px] pt-5"
          }`}
        >
          <div
            className={`flex justify-between items-center gap-2 border-b ${
              opened ? "flex-col" : "flow-row"
            }`}
          >
            <img
              src={Logo}
              alt=""
              className={`${opened ? "order-2" : "order-1"}`}
            />
            <>
              {opened && (
                <MdKeyboardDoubleArrowRight
                  className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
                  onClick={toggle}
                />
              )}
              {!opened && (
                <MdKeyboardDoubleArrowLeft
                  className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
                  onClick={toggle}
                />
              )}
            </>
          </div>
          <div className="hidden lg:grid gap-4 mt-5 flex-1 h-full">
            <SideNav opened={opened} close={close} />
          </div>
        </div>

        <div className="w-full min-h-screen px-5 lg:px-10 pb-10 overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                USER_TYPE === "customer" ? <Dashboard /> : <AdminDashboard />
              }
            />

            <Route
              path="/shipping-labels"
              element={
                USER_TYPE === "customer" ? (
                  <ShippingLabels />
                ) : (
                  <AdminShippingLabel />
                )
              }
            />
            {/* Customer App */}
            <Route path="/customer-data" element={<CustomerData />} />
            <Route path="/shipping-labels/purchase" element={<Purchase />} />
            <Route path="/orders-&-tracking" element={<OrderTracking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/payment-history" element={<PaymentHistory />} />

            {/* Super Admin App */}
            <Route path="/admin-management" element={<AdminManagement />} />
            <Route path="/admin-details" element={<AdminDetails />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/user-information" element={<UserDetails />} />
            <Route path="/business-information" element={<BusinessInfo />} />
            <Route path="/mark-up" element={<MarkUp />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default Authenticated;
