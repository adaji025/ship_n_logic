import Logo from "../../../assets/svg/logo-2.svg";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10 md:py-20 text-white">
      <div className="app-width">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="font-extralight">
            <img src={Logo} alt="" />
            <div className="mt-5">Address</div>
            <div className="mt-5">shipnlogic@gmail.org</div>
          </div>
          <div>
            <h2 className="font-semibold">Ship N’ Logic</h2>
            <div className="grid gap-3 mt-3 font-extralight">
              <div>About Us</div>
              <div>Benefits</div>
              <div>FAQ</div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Privacy and Security</h2>
            <div className="grid gap-3 mt-3 font-extralight">
              <div>Privacy policy</div>
              <div>Terms of Use</div>
              <div>Cookie Policy</div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Cookie Policy</h2>
            <div className="flex gap-5 mt-7">
              <CiYoutube size={20} color="white" />
              <FaXTwitter size={20} color="white" />
              <FaInstagram size={20} color="white" />
              <FaFacebookF size={20} color="white" />
            </div>
          </div>
        </div>
        <div className="mt-16 border-b border-white/20 pb-16">
          <div className="font-extralight">Subscribe to our newsletter</div>
          <div className="mt-1 flex">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="py-3 px-5 outline-none max-w-[500px] w-full rounded-l-full bg-white/15 placeholder:text-white"
            />
            <button className="bg-white rounded-r-full p-3 text-primary">
              Subscribe
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 flex flex-col sm:flex-row justify-between gap-5 mt-10">
          <div className="font-extralight">Terms and Conditions</div>
          <div className="font-extralight">
            &copy; {currentYear} Ship N’ Logic
          </div>
          <div className="font-extralight">Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
