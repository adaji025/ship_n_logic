import { useEffect } from "react";
import Footer from "../../../components/Unauthenticated/components/Footer";
import Navbar from "../../../components/Unauthenticated/components/Navbar";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mt-44 app-width">
        <div className="border p-10 rounded-[20px] text-dark-100">
          <div className="text-center font-semibold text-primary text-2xl">
            Privacy Policy
          </div>
          <div className="mt-10 text-dark-100 leading-[28px]">
            Welcome to Ship N’ Logic! We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy
            outlines the types of information we collect and how we use it.
          </div>
          <div className="mt-5 font-semibold text-black">
            Information We Collect
          </div>

          <div className="mt-5 text-black font-medium">
            Personal Information
          </div>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Name & Email Address: Used for account creation, personalized
              communication, and newsletters.
            </li>
          </ul>

          <div className="mt-5 text-black font-medium">Usage Information</div>
          <ul className="list-disc ml-6 grid gap-3 mt-2">
            <li>
              Interactions with Posts, Ads, and Affiliates: Collected to improve
              site content and layout, as well as for personalized
              recommendations.
            </li>
            <li>
              Frequency & Duration of Visits: Analyzed to gauge user engagement
              and potentially for A/B testing to improve the site.
            </li>
            <li>
              Geographical Location: Used for region-specific content and
              advertising.
            </li>
            <li>
              Device/Browser Info: Collected to optimize site performance and
              appearance across different platforms
            </li>
            <li>
              Social Media Handles: If applicable, used for promotional purposes
              or personalized content.
            </li>
            <li>User Preferences: To provide a tailored user experience</li>
          </ul>

          <div className="mt-5 text-black font-medium">
            How We Use Your Information
          </div>
          <div className="mt-2">We use the information we collect to:</div>
          <ul className="list-disc ml-6 grid gap-3 mt-2">
            <li>Enhance and personalize your user experience</li>
            <li>Improve our website</li>
            <li>Understand user behavior</li>
            <li>Communicate with you about updates, promotions, and more</li>
          </ul>

          <div className="mt-5 text-black font-medium">Security</div>
          <div className="mt-2">
            We implement a variety of security measures to maintain the safety
            of your personal information.
          </div>

          <div className="mt-5 text-black font-medium">
            Third-Party Disclosure
          </div>
          <div className="mt-2">
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties unless we provide you
            with advance notice.
          </div>

          <div className="mt-5 text-black font-medium">
            Changes to This Policy
          </div>
          <div className="mt-2">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by updating the "Last Updated" date on this page.
          </div>

          <div className="mt-5 text-black font-medium">Contact Us</div>
          <div className="mt-2">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <span className="text-black font-medium">shipnlogic@gmail.org</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
