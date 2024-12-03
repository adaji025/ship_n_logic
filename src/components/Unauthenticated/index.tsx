import { Route, Routes } from "react-router-dom";
import Privacy from "../../pages/Unautheticated/Privacy";
import Terms from "../../pages/Unautheticated/Cookie";
import Cookie from "../../pages/Unautheticated/Terms";
import Register from "../../pages/Unautheticated/Auth/Register";
import Otp from "../../pages/Unautheticated/Auth/Otp";
import Success from "../../pages/Unautheticated/Auth/Success";
import ForgotPassword from "../../pages/Unautheticated/Auth/ForgotPassword";
import VerifyOtp from "../../pages/Unautheticated/Auth/VerifyOtp";
import ResetPassword from "../../pages/Unautheticated/Auth/ResetPassword";
import AdminLogin from "../../pages/Unautheticated/Auth/Admin/AdminLogin";

const Unauthenticated = () => {
  return (
    <Routes>
      {/* Customer App */}
      {/* <Route path="/sign-in" element={<Login />} /> */}
      <Route path="/sign-up" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-account" element={<Otp />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* <Route path="/link" element={<Link />} /> */}
      {/* <Route path="/progress" element={<Progress />} /> */}
      {/* <Route path="/payment-option" element={<PaymentOption />} /> */}
      {/* <Route path="/business-info" element={<BusinessInfo />} /> */}
      <Route path="/success" element={<Success />} />

      {/* Admin app */}
      <Route path="/" element={<AdminLogin />} />

      {/* Landing pages */}
      {/* <Route path="/" element={<About />} /> */}
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-of-use" element={<Terms />} />
      <Route path="/cookie-privacy" element={<Cookie />} />
    </Routes>
  );
};

export default Unauthenticated;
