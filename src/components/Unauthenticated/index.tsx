import { Route, Routes } from "react-router-dom";
import About from "../../pages/Unautheticated/About";
import Privacy from "../../pages/Unautheticated/Privacy";
import Terms from "../../pages/Unautheticated/Cookie";
import Cookie from "../../pages/Unautheticated/Terms";
import Login from "../../pages/Unautheticated/Auth/Login";
import Register from "../../pages/Unautheticated/Auth/Register";
import Otp from "../../pages/Unautheticated/Auth/Otp";
import Link from "../../pages/Unautheticated/Auth/Link";
import Progress from "../../pages/Unautheticated/Auth/Progress";
import PaymentOption from "../../pages/Unautheticated/Auth/PaymentOption";
import BusinessInfo from "../../pages/Unautheticated/Auth/BusinessInfo";
import Success from "../../pages/Unautheticated/Auth/Success";

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/verify-account" element={<Otp />} />
      <Route path="/link" element={<Link />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/payment-option" element={<PaymentOption />} />
      <Route path="/business-info" element={<BusinessInfo />} />
      <Route path="/success" element={<Success />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-of-use" element={<Terms />} />
      <Route path="/cookie-privacy" element={<Cookie />} />
    </Routes>
  );
};

export default Unauthenticated;
