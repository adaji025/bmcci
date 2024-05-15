import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { Button } from "@mantine/core";
import Logo from "../assets/svg/logo.svg";
import AboutDropdown from "./AboutDropdown";

const navMenuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "WCA",
    url: "#subsidiaries",
  },
  {
    title: "Get Involved",
    url: "#board",
  },
  {
    title: "Contact Us",
    url: "#learn_more",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="z-[999] bg-white text-black  w-full fixed top-0 shadow">
      <nav
        className={`px-5 lg:px-12 max-w-[1440px] flex justify-between ${styles.navbarItems}`}
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
            <div
              key={idx}
              className={`flex gap-2 items-center relative font-semibold border-b-4 border-transparent text-base md:text-lg cursor-pointer hover:border-pink hover:lg:text-primary-green-50 hover:lg:border-primary-green-50   transition- duration-200 ${
                router.pathname === menu.url
                  ? "lg:border-pink lg:text-primary-green-50"
                  : ""
              } `}
              onClick={() => {
                menu.title !== "About us" && navigate(menu.url);
                menu.title !== "About us" && setMenu(false);
              }}
            >
              {menu.title !== "About us" && menu.title}
              {menu.title === "About us" && <AboutDropdown />}
            </div>
          ))}
        </div>
        <Button
          size="md"
          className="bg-primary hover:bg-primary/80 hidden lg:block"
        >
          Donate
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
