import { FaChevronRight } from "react-icons/fa";
import Header from "./components/Header";
import Terms from "./components/Terms";
import { useState } from "react";
import Privacy from "./components/Privacy";
import Cookies from "./components/Cookies";

const LegalDocument = () => {
  const [active, setActive] = useState("privacy");
  return (
    <div>
      <Header />
      <div className="mt-5 bg-white flex flex-col sm:flex-row shadow-sm border">
        <div className="border-r flex flex-col sm:max-w-[200px] md:max-w-[300px] w-full">
          <div
            className={`inline-flex justify-between g-3 border-b p-4 cursor-pointer ${
              active === "terms" ? "bg-primary/5 text-primary font-medium" : ""
            }`}
            onClick={() => setActive("terms")}
          >
            <div className="text-sm sm:text-sm">Terms and Conditions</div>
            <FaChevronRight color="#332F2F" />
          </div>
          <div
            className={`inline-flex justify-between g-3 border-b p-4 cursor-pointer ${
              active === "privacy" ? "bg-primary/5 text-primary font-medium" : ""
            }`}
            onClick={() => setActive("privacy")}
          >
            <div className="text-sm sm:text-sm">Privacy Policy</div>
            <FaChevronRight color="#332F2F" />
          </div>
          <div
            className={`inline-flex justify-between g-3 border-b p-4 cursor-pointer ${
              active === "cookies" ? "bg-primary/5 text-primary font-medium" : ""
            }`}
            onClick={() => setActive("cookies")}
          >
            <div className="text-sm sm:text-sm">Cookie Policy</div>
            <FaChevronRight color="#332F2F" />
          </div>
        </div>
        <div className="flex-1">
          {active === "terms" && <Terms />}
          {active === "privacy" && <Privacy />}
          {active === "cookies" && <Cookies />}
        </div>
      </div>
    </div>
  );
};

export default LegalDocument;
