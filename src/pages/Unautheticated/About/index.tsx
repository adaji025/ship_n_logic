import Navbar from "../../../components/Unauthenticated/components/Navbar";
import ButtonComp from "../../../components/Button";
import { Fragment } from "react/jsx-runtime";
import AboutComp from "./components/AboutComp";
import GetStarted from "./components/GetStarted";
import Experience from "./components/Experience";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import Footer from "../../../components/Unauthenticated/components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="min-h-screen">
        <Navbar />
        <div className="hero-bg min-h-screen flex-1 flex flex-col justify-center items-center">
          <div className="app-width mt-28">
            <div className="font-medium text-[32px] max-w-[836px] mx-auto text-center">
              Unlock the Power of Data: Streamline Your Workflow with
              Ship N' Logic!
            </div>
            <div className="text-center text-lg mt-3">
              Harness data's potential with our automated Ship N' Logic for
              shipping labels purchase.
            </div>
            <div className="flex justify-center mt-7">
              <ButtonComp text="Get Started" />
            </div>
          </div>
        </div>
      </div>
      <AboutComp />
      <GetStarted />
      <Experience />
      <Benefits />
      <Faq />
      <Subscribe />
      <Footer />
    </Fragment>
  );
};

export default About;
