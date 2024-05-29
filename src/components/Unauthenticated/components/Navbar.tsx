import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { Button } from "@mantine/core";
import Logo from "../../../assets/svg/logo.svg";

const navMenuItems = [
  {
    title: "About",
    url: "/",
  },
  {
    title: "FAQ",
    url: "#faq",
  },
  {
    title: "Benefits",
    url: "#benefits",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="z-[999] bg-white text-black  w-full fixed top-0 shadow">
      <nav
        className={`px-5 lg:px-12 max-w-[1440px] grid grid-cols-3 justify-between ${styles.navbarItems}`}
      >
        <div>
          <img src={Logo} alt="" />
        </div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose size={25} color="black" />
          ) : (
            <AiOutlineMenu size={25} color="black" />
          )}
        </div>
        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu, idx) => (
            <HashLink smooth to={menu.url}>
              <div
                key={idx}
                className={`flex gap-2 items-center relative font-semibold border-b border-transparent text-base md:text-lg cursor-pointer hover:border-pink hover:lg:text-primary-green-50 hover:lg:border-primary-green-50   transition- duration-200 ${
                  router.pathname === menu.url
                    ? "lg:border-primary lg:text-primary-green-50"
                    : ""
                } `}
              >
                {menu.title}
              </div>
            </HashLink>
          ))}

          <div
            className="lg:hidden text-start font-semibold pb-4 cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </div>
          <div
            className="lg:hidden text-start font-semibold pb-4 cursor-pointer"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <Button
            size="md"
            className="bg-transparent hover:bg-primary/80 hidden lg:block text-black rounded-full duration-300"
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </Button>
          <Button
            size="md"
            className="bg-primary hover:bg-primary/80 hidden lg:block rounded-full duration-300 px-10"
            onClick={() => navigate("/sign-up")}
          >
            Sign up
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
